/* ==========================================================================
   ÔN TẬP CNXH KHOA HỌC — app.js
   JavaScript thuần, không cần cài đặt. Dữ liệu câu hỏi nằm trong js/questions.js
   --------------------------------------------------------------------------
   1. Tiện ích            2. Lưu trữ            3. Ngân hàng câu hỏi
   4. Điều hướng          5. Trang chủ          6. Thiết lập bài làm
   7. Làm bài             8. Kết quả & xem lại  9. Tra cứu
   10. Thêm câu hỏi       11. Modal, thông báo, giao diện
   12. Sự kiện & khởi động
   ========================================================================== */
(function () {
  'use strict';

  /* ======================= 1. TIỆN ÍCH ======================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pad2 = (n) => String(n).padStart(2, '0');

  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return h ? `${h}:${pad2(m)}:${pad2(s)}` : `${pad2(m)}:${pad2(s)}`;
  }

  function fmtScore(n) {
    const v = Math.round(n * 100) / 100;
    try { return v.toLocaleString('vi-VN', { maximumFractionDigits: 2 }); } catch (e) { return String(v).replace('.', ','); }
  }

  function fmtDate(ts) {
    try {
      return new Date(ts).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (e) { return new Date(ts).toISOString().slice(0, 16).replace('T', ' '); }
  }

  /* Bỏ dấu tiếng Việt + chữ thường để tìm kiếm "có dấu hay không dấu đều được" */
  function fold(s) {
    return String(s == null ? '' : s).normalize('NFD')
      .replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  }

  /* Tô sáng từ khóa trong văn bản gốc (so khớp trên bản đã bỏ dấu) */
  function highlight(text, terms) {
    text = String(text == null ? '' : text).normalize('NFC');
    if (!terms || !terms.length) return esc(text);
    let folded = '';
    const map = [];
    for (let i = 0; i < text.length; i++) {
      const f = fold(text[i]);
      for (let k = 0; k < f.length; k++) { folded += f[k]; map.push(i); }
    }
    const ranges = [];
    terms.forEach((t) => {
      if (!t) return;
      let i = 0;
      while ((i = folded.indexOf(t, i)) !== -1) {
        ranges.push([map[i], map[i + t.length - 1] + 1]);
        i += t.length;
      }
    });
    if (!ranges.length) return esc(text);
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [];
    ranges.forEach((r) => {
      const last = merged[merged.length - 1];
      if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
      else merged.push(r.slice());
    });
    let html = '', pos = 0;
    merged.forEach(([s, e]) => {
      html += esc(text.slice(pos, s)) + '<mark>' + esc(text.slice(s, e)) + '</mark>';
      pos = e;
    });
    return html + esc(text.slice(pos));
  }

  /* Băm chuỗi (cyrb53) — tạo mã định danh ổn định cho mỗi câu hỏi */
  function hashStr(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  }

  const reducedMotion = () => !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const isNarrow = () => !!(window.matchMedia && matchMedia('(max-width: 1000px)').matches);

  /* Bộ icon nét (phong cách Lucide) */
  const ICONS = {
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    minus: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>',
    chevL: '<path d="m15 18-6-6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
    file: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2"/>',
    alert: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>'
  };
  const icon = (name, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;

  /* ======================= 2. LƯU TRỮ ======================= */
  const KEYS = {
    custom: 'cnxhkh_custom_v1',   // câu hỏi người dùng tự thêm
    history: 'cnxhkh_history_v1', // lịch sử làm bài
    stats: 'cnxhkh_stats_v1',     // tỉ lệ đúng theo bài
    wrong: 'cnxhkh_wrong_v1',     // sổ câu sai
    session: 'cnxhkh_session_v1', // bài đang làm dở
    last: 'cnxhkh_last_v1',       // kết quả gần nhất
    prefs: 'cnxhkh_prefs_v1',     // tùy chọn thiết lập
    theme: 'cnxhkh_theme'         // sáng/tối (chuỗi thường)
  };

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch (e) { return false; }
    },
    remove(key) {
      try { localStorage.removeItem(key); } catch (e) { /* bỏ qua */ }
    }
  };

  /* Chuyển dữ liệu đã lưu từ cách chia 7 chương cũ sang 6 bài:
     chương 1 và 2 gộp thành Bài 1, chương n (n ≥ 3) thành Bài n − 1 */
  (function migrateToSixLessons() {
    const FLAG = 'cnxhkh_lessons6';
    if (store.get(FLAG, false)) return;
    const toLesson = (id) => { const n = Number(id) || 0; return n >= 2 ? n - 1 : n; };
    const custom = store.get(KEYS.custom, null);
    if (Array.isArray(custom)) {
      store.set(KEYS.custom, custom.map((q) => (q && q.chapter != null ? Object.assign({}, q, { chapter: toLesson(q.chapter) }) : q)));
    }
    const stats = store.get(KEYS.stats, null);
    if (stats && typeof stats === 'object') {
      const next = {};
      Object.keys(stats).forEach((k) => {
        const s = next[toLesson(k)] || (next[toLesson(k)] = { c: 0, t: 0 });
        s.c += Number(stats[k] && stats[k].c) || 0;
        s.t += Number(stats[k] && stats[k].t) || 0;
      });
      store.set(KEYS.stats, next);
    }
    const last = store.get(KEYS.last, null);
    if (last && Array.isArray(last.items)) {
      last.items.forEach((x) => { if (x) x.chapter = toLesson(x.chapter); });
      store.set(KEYS.last, last);
    }
    const prefs = store.get(KEYS.prefs, null);
    if (prefs && Array.isArray(prefs.chapters)) {
      prefs.chapters = Array.from(new Set(prefs.chapters.map(toLesson)));
      store.set(KEYS.prefs, prefs);
    }
    store.set(FLAG, true);
  })();

  /* ======================= 3. NGÂN HÀNG CÂU HỎI ======================= */
  const CHAPTERS = (Array.isArray(window.CHAPTERS) ? window.CHAPTERS : [])
    .map((c) => ({ id: Number(c.id) || 0, title: String(c.title || '') }));

  let BANK = [];            // danh sách câu hỏi đã chuẩn hóa
  let BY_UID = new Map();   // tra cứu nhanh theo mã
  let BANK_WARNINGS = 0;    // số câu lỗi trong questions.js

  function letterIndex(a) {
    if (typeof a === 'number' && Number.isInteger(a)) return a;
    const s = String(a == null ? '' : a).trim().toUpperCase();
    return s ? LETTERS.indexOf(s[0]) : -1;
  }

  /* Chuẩn hóa một câu hỏi thô; trả về null nếu sai định dạng.
     Dạng câu (type): 'single' một đáp án · 'multi' nhiều đáp án ·
     'parts' nhiều ý (Đúng/Sai, kéo thả, ghép nối) — mỗi ý chọn một trong `choices` */
  function normalizeQuestion(raw) {
    if (!raw || typeof raw !== 'object') return null;
    const question = String(raw.question || '').trim();
    if (!question) return null;
    const base = { chapter: Number(raw.chapter) || 0, question, explanation: String(raw.explanation || '').trim() };

    if (Array.isArray(raw.parts)) {
      const choices = (Array.isArray(raw.choices) && raw.choices.length ? raw.choices : ['Đúng', 'Sai'])
        .map((c) => String(c == null ? '' : c).trim());
      if (choices.length < 2 || choices.some((c) => !c)) return null;
      const parts = raw.parts.map((p) => {
        const text = String((p && p.text) || '').trim();
        const answer = choices.indexOf(String(p && p.answer != null ? p.answer : '').trim());
        return text && answer >= 0 ? { text, answer } : null;
      });
      if (!parts.length || parts.some((p) => !p)) return null;
      return Object.assign(base, {
        uid: 'q' + hashStr(question + '\u0002' + parts.map((p) => p.text).join('\u0001') + '\u0002' + choices.join('\u0001')),
        type: 'parts',
        options: choices,
        parts,
        answer: parts.map((p) => p.answer)
      });
    }

    let opts = raw.options;
    if (opts && !Array.isArray(opts) && typeof opts === 'object') {
      opts = LETTERS.map((l) => (opts[l] != null ? opts[l] : opts[l.toLowerCase()])).filter((v) => v != null);
    }
    if (!Array.isArray(opts)) return null;
    const options = opts.map((o) => String(o == null ? '' : o).trim());
    if (options.length < 2 || options.length > LETTERS.length || options.some((o) => !o)) return null;
    const keys = Array.from(new Set([].concat(raw.answer).map(letterIndex))).sort((a, b) => a - b);
    if (!keys.length || keys.some((k) => k < 0 || k >= options.length)) return null;
    return Object.assign(base, {
      uid: 'q' + hashStr(question + '\u0001' + options.join('\u0001')),
      type: keys.length > 1 ? 'multi' : 'single',
      options,
      answer: keys.length > 1 ? keys : keys[0]
    });
  }

  function loadBank() {
    BANK = [];
    BY_UID = new Map();
    BANK_WARNINGS = 0;
    const add = (raw, source, idx) => {
      const q = normalizeQuestion(raw);
      if (!q) {
        if (source === 'file') {
          BANK_WARNINGS++;
          console.warn(`[questions.js] Câu thứ ${idx + 1} sai định dạng nên đã bị bỏ qua:`, raw);
        }
        return;
      }
      if (BY_UID.has(q.uid)) return; // bỏ câu trùng lặp
      q.custom = source === 'custom';
      q.no = BANK.length + 1;
      q.search = fold([q.question].concat(q.options, q.parts ? q.parts.map((p) => p.text) : []).join(' \u0001 '));
      BANK.push(q);
      BY_UID.set(q.uid, q);
    };
    (Array.isArray(window.QUESTION_BANK) ? window.QUESTION_BANK : []).forEach((r, i) => add(r, 'file', i));
    const custom = store.get(KEYS.custom, []);
    (Array.isArray(custom) ? custom : []).forEach((r, i) => add(r, 'custom', i));
  }

  function chapterList() {
    const counts = new Map();
    BANK.forEach((q) => counts.set(q.chapter, (counts.get(q.chapter) || 0) + 1));
    const list = CHAPTERS.map((c) => ({ id: c.id, title: c.title, count: counts.get(c.id) || 0 }));
    counts.forEach((n, id) => {
      if (!list.some((c) => c.id === id)) {
        list.push({ id, title: id ? `Bài ${id}` : 'Câu hỏi chưa phân bài', count: n });
      }
    });
    return list;
  }

  const chapterLabel = (id) => (id ? `Bài ${id}` : 'Khác');
  const chapterTitle = (id) => {
    const c = CHAPTERS.find((x) => x.id === id);
    return c ? c.title : (id ? `Bài ${id}` : 'Câu hỏi chưa phân bài');
  };

  /* Không xáo trộn đáp án nếu phương án tham chiếu tới phương án khác ("Cả A và B"...) */
  function canShuffleOptions(q) {
    return q.type !== 'parts' && !q.options.some((o) => /(tất cả|cả\s+(hai|ba|bốn)|cả\s+[A-F]\b|\b[A-F]\s*(và|,|&)\s*[A-F]\b|đều\s+(đúng|sai)|các\s+(phương án|đáp án)|không\s+có\s+(phương án|đáp án))/i.test(o));
  }

  /* ---------- Chấm câu trả lời ----------
     Câu trả lời lưu theo dạng câu: single → chỉ số phương án; multi → mảng các
     phương án đã chọn; parts → mảng lựa chọn của từng ý (null = ý chưa chọn) */
  const isTrueFalse = (q) => q.type === 'parts' && q.options.length === 2 && q.options[0] === 'Đúng' && q.options[1] === 'Sai';

  function hasInput(q, a) {
    if (a == null) return false;
    return q.type === 'single' || (Array.isArray(a) && a.some((v) => v != null));
  }

  /* Đã trả lời xong: câu nhiều đáp án chọn đủ số đáp án, câu nhiều ý chọn đủ mọi ý */
  function isComplete(q, a) {
    if (!hasInput(q, a)) return false;
    if (q.type === 'multi') return a.length >= q.answer.length;
    if (q.type === 'parts') return a.length === q.parts.length && a.every((v) => v != null);
    return true;
  }

  function isCorrect(q, a) {
    if (!isComplete(q, a)) return false;
    if (q.type === 'single') return a === q.answer;
    if (q.type === 'multi') return a.length === q.answer.length && q.answer.every((k) => a.includes(k));
    return q.answer.every((k, j) => a[j] === k);
  }

  /* Kiểm tra câu trả lời đọc lại từ bộ nhớ trình duyệt */
  function sanitizeAnswer(q, a) {
    const ok = (v) => Number.isInteger(v) && v >= 0 && v < q.options.length;
    if (q.type === 'single') return ok(a) ? a : null;
    if (!Array.isArray(a)) return null;
    if (q.type === 'multi') {
      const v = Array.from(new Set(a.filter(ok)));
      return v.length ? v : null;
    }
    return a.length === q.parts.length ? a.map((v) => (ok(v) ? v : null)) : null;
  }

  /* Chữ cái của (các) đáp án đúng theo thứ tự đang hiển thị, ví dụ "B, D" */
  const answerLetters = (q, order) => [].concat(q.answer).map((k) => LETTERS[order.indexOf(k)]).sort().join(', ');

  function typeHint(q) {
    if (q.type === 'multi') return `Chọn ${q.answer.length} đáp án đúng`;
    if (q.type === 'parts') return isTrueFalse(q) ? 'Chọn Đúng hoặc Sai cho từng ý' : 'Chọn đáp án phù hợp cho từng ý';
    return '';
  }

  const typeChip = (q) => (q.type === 'single' ? ''
    : `<span class="chip">${q.type === 'multi' ? `${q.answer.length} đáp án` : isTrueFalse(q) ? 'Đúng/Sai' : 'Ghép nối'}</span>`);

  /* ---------- Trạng thái ---------- */
  const DEFAULT_PREFS = { chapters: null, count: 20, mode: 'practice', timer: true, minutes: null, shuffleQ: true, shuffleOpt: false };
  let PREFS = Object.assign({}, DEFAULT_PREFS, store.get(KEYS.prefs, {}));
  if (!(PREFS.count === 'all' || (Number.isInteger(PREFS.count) && PREFS.count > 0))) PREFS.count = 20;
  if (PREFS.chapters != null && !Array.isArray(PREFS.chapters)) PREFS.chapters = null;
  const savePrefs = () => store.set(KEYS.prefs, PREFS);

  let S = null;     // bài đang làm
  let LAST = null;  // kết quả gần nhất
  let REVIEW_FILTER = 'all';

  function saveSession() { if (S) store.set(KEYS.session, S); }
  function clearSession() { S = null; store.remove(KEYS.session); }
  const answeredCount = () => S.items.filter((it, i) => isComplete(BY_UID.get(it.uid), S.answers[i])).length;

  function loadSession() {
    const s = store.get(KEYS.session, null);
    if (!s || !Array.isArray(s.items) || !Array.isArray(s.answers)) return null;
    const items = [], answers = [], flags = [];
    s.items.forEach((it, i) => {
      const q = it && BY_UID.get(it.uid);
      if (!q) return;
      const ids = q.options.map((_, k) => k);
      const validOrder = Array.isArray(it.order) && it.order.length === ids.length &&
        it.order.slice().sort((a, b) => a - b).every((v, k) => v === k);
      if (Array.isArray(s.flags) && s.flags.includes(i)) flags.push(items.length);
      items.push({ uid: q.uid, order: validOrder ? it.order : ids });
      answers.push(sanitizeAnswer(q, s.answers[i]));
    });
    if (!items.length) return null;
    return {
      mode: s.mode === 'exam' ? 'exam' : 'practice',
      label: String(s.label || ''),
      items, answers, flags,
      current: Math.min(Math.max(0, s.current | 0), items.length - 1),
      startedAt: Number(s.startedAt) || Date.now(),
      endsAt: Number(s.endsAt) || null,
      timeLimit: Number(s.timeLimit) || 0,
      warned: s.warned || {}
    };
  }

  function loadLast() {
    const r = store.get(KEYS.last, null);
    return r && Array.isArray(r.items) && r.total ? r : null;
  }

  function wrongBookUids() {
    const wb = store.get(KEYS.wrong, {});
    return Object.keys(wb || {}).filter((uid) => BY_UID.has(uid));
  }

  /* ======================= 4. ĐIỀU HƯỚNG ======================= */
  const VIEWS = ['home', 'setup', 'quiz', 'result', 'review', 'search', 'import'];
  const TITLES = {
    home: 'Ôn tập CNXH Khoa học', setup: 'Thiết lập bài làm', quiz: 'Đang làm bài',
    result: 'Kết quả', review: 'Xem lại bài làm', search: 'Tra cứu câu hỏi', import: 'Thêm câu hỏi'
  };
  let currentView = null;

  function routeName() {
    const v = (location.hash || '').replace(/^#\/?/, '').split(/[?/]/)[0];
    return VIEWS.includes(v) ? v : 'home';
  }

  function go(name, replace) {
    const target = '#/' + name;
    if (location.hash === target) { render(); return; }
    if (replace) {
      try { history.replaceState(null, '', target); } catch (e) { location.hash = target; return; }
      render();
    } else {
      location.hash = target; // sự kiện hashchange sẽ gọi render()
    }
  }

  function render() {
    const name = routeName();
    if (name === 'quiz' && !S) { go('home', true); return; }
    if ((name === 'result' || name === 'review') && !LAST) { go('home', true); return; }
    if (name !== 'quiz') { stopTimer(); closePalette(); }

    const changed = currentView !== name;
    currentView = name;
    $$('.view').forEach((v) => v.classList.toggle('active', v.dataset.view === name));
    const navName = (name === 'quiz' || name === 'result' || name === 'review') ? 'setup' : name;
    $$('[data-nav]').forEach((a) => {
      const on = a.dataset.nav === navName;
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.body.classList.toggle('in-quiz', name === 'quiz');
    document.title = name === 'home' ? TITLES.home : `${TITLES[name]} · CNXH Khoa học`;
    if (changed) window.scrollTo(0, 0);
    RENDERERS[name]();
  }

  /* ======================= 5. TRANG CHỦ ======================= */
  /* Góc mèo — ảnh nằm trong thư mục images/.
     pos: phần ảnh được giữ lại khi cắt vào khung (giống object-position) */
  const CATS = [
    { src: 'images/meo-1.jpg', caption: 'Âm dương ngủ trưa', pos: '50% 50%' },
    { src: 'images/meo-2.jpg', caption: 'Hôm nay học bài chưa?', pos: '60% 62%' },
    { src: 'images/meo-3.jpg', caption: 'Ôn xong rồi ngủ', pos: '50% 50%' },
    { src: 'images/meo-4.jpg', caption: 'Đang giám sát bạn học', pos: '62% 50%' },
    { src: 'images/meo-5.jpg', caption: 'Xin một lần xoa bụng', pos: '50% 22%' }
  ];

  function viewCat(i) {
    const n = CATS.length;
    const k = ((i % n) + n) % n;
    const c = CATS[k];
    openModal({
      cls: 'modal-photo',
      title: esc(c.caption),
      body: `<img src="${c.src}" alt="${esc(c.caption)}">`,
      actions: [
        { label: `${icon('chevL')} Ảnh trước`, cls: 'btn-ghost', onClick: () => viewCat(k - 1) },
        { label: `Ảnh sau ${icon('chevR')}`, cls: 'btn-ghost', onClick: () => viewCat(k + 1) },
        { label: 'Đóng', cls: 'btn-primary' }
      ]
    });
  }

  const HERO_ART = `
    <svg viewBox="0 0 240 240">
      <g class="spin"><circle class="orbit" cx="120" cy="120" r="106"/><circle class="dot" cx="226" cy="120" r="5"/></g>
      <g class="spin s2"><circle class="orbit" cx="120" cy="120" r="82"/><circle class="dot" cx="38" cy="120" r="3.5"/></g>
      <path class="star" d="M120 52 L135.9 98.2 L184.7 99 L145.7 128.3 L160 175 L120 147 L80 175 L94.3 128.3 L55.3 99 L104.1 98.2 Z"/>
    </svg>`;

  function statTile(label, value, ic) {
    return `<div class="stat"><span class="stat-icon">${icon(ic)}</span><div><b>${value}</b><span>${label}</span></div></div>`;
  }

  function scoreTone(score) { return score >= 8 ? 'good' : score >= 5 ? 'mid' : 'low'; }

  function resumeCard() {
    if (!S) return '';
    const n = S.items.length, answered = answeredCount();
    let time = '';
    if (S.endsAt) {
      const left = Math.ceil((S.endsAt - Date.now()) / 1000);
      time = left > 0 ? ` · còn ${fmtTime(left)}` : ' · đã hết giờ (sẽ tự nộp khi mở lại)';
    }
    return `
      <div class="card resume">
        <div class="resume-icon">${icon('clock')}</div>
        <div class="resume-body">
          <b>Bạn đang có bài làm dở</b>
          <p>${S.mode === 'exam' ? 'Thi thử' : 'Luyện tập'}${S.label ? ' · ' + esc(S.label) : ''} · đã trả lời ${answered}/${n} câu${time}</p>
        </div>
        <div class="resume-actions">
          <button type="button" class="btn btn-primary" data-action="resume">${icon('play')} Tiếp tục</button>
          <button type="button" class="btn btn-ghost" data-action="discard">Hủy bài</button>
        </div>
      </div>`;
  }

  function renderHome() {
    const chapters = chapterList();
    const hist = store.get(KEYS.history, []);
    const best = hist.length ? Math.max.apply(null, hist.map((h) => h.score10 || 0)) : null;
    const stats = store.get(KEYS.stats, {}) || {};
    const wrong = wrongBookUids().length;

    const chapterCards = chapters.map((c, i) => {
      const s = stats[c.id];
      const pct = s && s.t ? Math.round((s.c / s.t) * 100) : 0;
      return `
        <article class="chapter-card" style="--i:${i}">
          <div class="chapter-top">
            <span class="chapter-no">${c.id ? pad2(c.id) : '—'}</span>
            <span class="chip">${c.count} câu</span>
          </div>
          <h3>${esc(c.title)}</h3>
          <div class="mastery">
            <div class="progress"><span style="width:${pct}%"></span></div>
            <small>${s && s.t ? `Tỉ lệ đúng ${pct}% (${s.c}/${s.t} lượt trả lời)` : 'Chưa luyện tập'}</small>
          </div>
          <div class="chapter-actions">
            <button type="button" class="btn btn-sm btn-ghost" data-action="chapter-setup" data-ch="${c.id}" ${c.count ? '' : 'disabled'}>Tùy chỉnh</button>
            <button type="button" class="btn btn-sm btn-soft" data-action="chapter-quick" data-ch="${c.id}" ${c.count ? '' : 'disabled'}>${icon('play')} Luyện 10 câu</button>
          </div>
        </article>`;
    }).join('');

    const historyHtml = hist.length
      ? `<ul class="history-list">${hist.slice(0, 5).map((h) => `
          <li>
            <span class="h-score ${scoreTone(h.score10)}">${fmtScore(h.score10)}</span>
            <div>
              <b>${h.mode === 'exam' ? 'Thi thử' : 'Luyện tập'} · đúng ${h.correct}/${h.total} câu</b>
              <small>${fmtDate(h.t)} · ${fmtTime(h.duration)}${h.label ? ' · ' + esc(h.label) : ''}</small>
            </div>
          </li>`).join('')}</ul>`
      : `<p class="muted">Chưa có lượt làm bài nào. Hãy bắt đầu bài đầu tiên!</p>`;

    $('#view-home').innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">${icon('book')} Học phần Lý luận chính trị</span>
          <h1 class="hero-title">Chủ nghĩa xã hội <span>khoa học</span></h1>
          <p class="hero-lead">Ôn tập trắc nghiệm theo ${CHAPTERS.length || chapters.length} bài học: luyện tập có giải thích ngay, thi thử có đồng hồ đếm ngược, xem lại đáp án chi tiết và tra cứu nhanh mọi câu hỏi.</p>
          <div class="hero-actions">
            <button type="button" class="btn btn-primary btn-lg" data-action="open-setup">${icon('play')} Bắt đầu làm bài</button>
            <button type="button" class="btn btn-ghost btn-lg" data-action="scroll-chapters">${icon('list')} Ôn tập theo bài</button>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">${HERO_ART}</div>
      </section>

      ${resumeCard()}
      ${BANK.length ? '' : `<div class="card resume"><div class="resume-icon">${icon('alert')}</div><div class="resume-body"><b>Chưa có câu hỏi nào</b><p>Kiểm tra lại file <code>js/questions.js</code> hoặc vào mục “Thêm câu hỏi”.</p></div></div>`}

      <section class="stat-grid" aria-label="Thống kê">
        ${statTile('Câu hỏi', BANK.length, 'file')}
        ${statTile('Bài học', chapters.length, 'book')}
        ${statTile('Lượt làm bài', hist.length, 'history')}
        ${statTile('Điểm cao nhất', best == null ? '—' : fmtScore(best), 'award')}
      </section>

      <section class="section" id="chapters">
        <div class="section-head">
          <h2>Ôn tập theo bài</h2>
          <p>Luyện nhanh 10 câu ngẫu nhiên, hoặc tùy chỉnh số câu và chế độ.</p>
        </div>
        <div class="chapter-grid">${chapterCards}</div>
      </section>

      <section class="section" id="cats">
        <div class="section-head">
          <h2>Góc mèo</h2>
          <p>Những người bạn nhỏ ôn bài cùng bạn — bấm vào ảnh để xem lớn.</p>
        </div>
        <div class="cat-strip">
          ${CATS.map((c, i) => `
            <button type="button" class="polaroid" style="--i:${i}" data-action="cat-view" data-i="${i}">
              <img src="${c.src}" alt="" loading="lazy" style="object-position:${c.pos}">
              <span>${esc(c.caption)}</span>
            </button>`).join('')}
        </div>
      </section>

      <section class="section two-col">
        <div class="card wrongbook">
          <div class="card-head">${icon('target')}<h2 class="card-title">Sổ câu sai</h2></div>
          <div class="wrongbook-count">${wrong}</div>
          <p>${wrong
            ? 'câu bạn từng trả lời sai. Làm đúng câu nào, câu đó sẽ tự động được gạch khỏi sổ.'
            : 'Chưa có câu sai nào được ghi nhận. Sau mỗi bài làm, các câu bạn hay nhầm sẽ được lưu vào đây.'}</p>
          <button type="button" class="btn btn-soft" data-action="practice-wrongbook" ${wrong ? '' : 'disabled'}>${icon('rotate')} Ôn lại câu sai</button>
        </div>
        <div class="card">
          <div class="card-head">${icon('history')}<h2 class="card-title">Lịch sử làm bài</h2><span class="spacer"></span>
            ${hist.length ? `<button type="button" class="link-btn" data-action="clear-history">Xóa lịch sử</button>` : ''}
          </div>
          ${historyHtml}
        </div>
      </section>

      <section class="section card tips">
        <strong>${icon('info')}</strong>
        <span><strong>Phím tắt khi làm bài:</strong> <kbd>1</kbd>–<kbd>4</kbd> hoặc <kbd>A</kbd>–<kbd>D</kbd> chọn đáp án ·
        <kbd>←</kbd> <kbd>→</kbd> chuyển câu · <kbd>F</kbd> đánh dấu câu cần xem lại · <kbd>Enter</kbd> câu tiếp theo.</span>
      </section>`;
  }

  /* ======================= 6. THIẾT LẬP BÀI LÀM ======================= */
  const allChapterIds = () => chapterList().map((c) => c.id);

  function selectedChapters() {
    const all = allChapterIds();
    return PREFS.chapters == null ? all : PREFS.chapters.filter((id) => all.includes(id));
  }

  function setupPool() {
    const sel = new Set(selectedChapters());
    return BANK.filter((q) => sel.has(q.chapter));
  }

  function effectiveCount(poolSize) {
    return PREFS.count === 'all' ? poolSize : Math.min(Number(PREFS.count) || 0, poolSize);
  }

  const autoMinutes = (n) => Math.max(5, Math.ceil(n)); // mặc định 1 phút/câu, tối thiểu 5 phút
  const effectiveMinutes = (n) => PREFS.minutes || autoMinutes(n);

  function setupLabel() {
    const sel = selectedChapters();
    if (sel.length === allChapterIds().length) return 'Tất cả các bài';
    if (sel.length === 1) return chapterLabel(sel[0]);
    return sel.map((id) => (id ? 'B' + id : 'Khác')).join(', ');
  }

  function renderSetup() {
    const chapters = chapterList();
    $('#view-setup').innerHTML = `
      <div class="page-head">
        <h1>Thiết lập bài làm</h1>
        <p>Chọn phạm vi ôn tập, số lượng câu hỏi và chế độ làm bài phù hợp với bạn.</p>
      </div>
      ${S ? resumeCard() + '<div style="height:16px"></div>' : ''}
      <div class="setup-grid">
        <div class="card">
          <div class="step-head">
            <span class="step-num">1</span><h2>Phạm vi ôn tập</h2>
            <button type="button" class="link-btn" data-action="toggle-all-chapters" id="toggle-all"></button>
          </div>
          <div class="chapter-pick">
            ${chapters.map((c) => `
              <label class="pick" data-ch="${c.id}">
                <input type="checkbox" name="setup-ch" value="${c.id}">
                <span class="pick-box">${icon('check')}</span>
                <span class="pick-body"><b>${esc(chapterLabel(c.id))}</b><span>${esc(c.title)}</span></span>
                <span class="pick-count">${c.count} câu</span>
              </label>`).join('')}
          </div>
        </div>

        <div class="setup-col">
          <div class="card">
            <div class="step-head"><span class="step-num">2</span><h2>Số lượng câu hỏi</h2></div>
            <div class="segmented" role="radiogroup" aria-label="Số lượng câu hỏi">
              ${[10, 20, 50, 'all'].map((v) => `
                <label class="seg" data-count="${v}"><input type="radio" name="setup-count" value="${v}">${v === 'all' ? 'Toàn bộ' : v + ' câu'}</label>`).join('')}
            </div>
            <label class="custom-count">Hoặc nhập số câu:
              <input class="input" type="number" min="1" step="1" inputmode="numeric" id="setup-custom" placeholder="VD: 30">
            </label>
            <p class="setup-note" id="setup-note"></p>
          </div>

          <div class="card">
            <div class="step-head"><span class="step-num">3</span><h2>Chế độ làm bài</h2></div>
            <div class="mode-grid" role="radiogroup" aria-label="Chế độ làm bài">
              <label class="mode-card" data-mode="practice">
                <input type="radio" name="setup-mode" value="practice">
                <span class="mode-icon">${icon('bulb')}</span>
                <b>Luyện tập</b>
                <span>Biết ngay đúng/sai và xem giải thích sau mỗi câu.</span>
              </label>
              <label class="mode-card" data-mode="exam">
                <input type="radio" name="setup-mode" value="exam">
                <span class="mode-icon">${icon('clock')}</span>
                <b>Thi thử</b>
                <span>Ẩn đáp án đến khi nộp bài, có đồng hồ đếm ngược.</span>
              </label>
            </div>
            <div class="option-rows">
              <div class="option-row timer-row" id="timer-row">
                <label class="switch"><input type="checkbox" id="setup-timer"><span class="switch-ui"></span>
                  <span>Đồng hồ đếm ngược<small>Hết giờ hệ thống tự động nộp bài</small></span></label>
                <div class="timer-input">
                  <input class="input" type="number" min="1" max="600" inputmode="numeric" id="setup-minutes" aria-label="Thời gian làm bài (phút)">
                  <span>phút</span>
                </div>
              </div>
              <div class="option-row">
                <label class="switch"><input type="checkbox" id="setup-shuffleQ"><span class="switch-ui"></span>
                  <span>Xáo trộn thứ tự câu hỏi</span></label>
              </div>
              <div class="option-row">
                <label class="switch"><input type="checkbox" id="setup-shuffleOpt"><span class="switch-ui"></span>
                  <span>Xáo trộn thứ tự đáp án<small>Tránh học thuộc vị trí A/B/C/D</small></span></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="setup-cta">
        <div class="setup-summary" id="setup-summary"></div>
        <button type="button" class="btn btn-primary btn-lg" data-action="start" id="setup-start">${icon('play')} Bắt đầu làm bài</button>
      </div>`;
    syncSetup();
  }

  /* Cập nhật giao diện thiết lập theo PREFS (không vẽ lại toàn bộ để giữ con trỏ nhập) */
  function syncSetup() {
    const root = $('#view-setup');
    if (!$('#setup-summary', root)) return;
    const all = allChapterIds();
    const sel = new Set(selectedChapters());

    $$('.pick', root).forEach((p) => {
      const on = sel.has(Number(p.dataset.ch));
      p.classList.toggle('on', on);
      p.querySelector('input').checked = on;
    });
    $('#toggle-all').textContent = sel.size === all.length ? 'Bỏ chọn tất cả' : 'Chọn tất cả';

    const preset = ['10', '20', '50', 'all'].includes(String(PREFS.count));
    $$('.seg', root).forEach((s) => {
      const on = String(PREFS.count) === s.dataset.count;
      s.classList.toggle('on', on);
      s.querySelector('input').checked = on;
    });
    const custom = $('#setup-custom');
    if (document.activeElement !== custom) custom.value = preset ? '' : PREFS.count;

    $$('.mode-card', root).forEach((m) => {
      const on = PREFS.mode === m.dataset.mode;
      m.classList.toggle('on', on);
      m.querySelector('input').checked = on;
    });

    const pool = setupPool();
    const n = effectiveCount(pool.length);
    const exam = PREFS.mode === 'exam';
    $('#timer-row').hidden = !exam;
    $('#setup-timer').checked = !!PREFS.timer;
    const minutes = $('#setup-minutes');
    minutes.disabled = !PREFS.timer;
    if (document.activeElement !== minutes) minutes.value = effectiveMinutes(n);
    $('#setup-shuffleQ').checked = !!PREFS.shuffleQ;
    $('#setup-shuffleOpt').checked = !!PREFS.shuffleOpt;

    const note = $('#setup-note');
    if (!sel.size) {
      note.textContent = 'Hãy chọn ít nhất một bài.';
      note.className = 'setup-note warn';
    } else if (PREFS.count !== 'all' && Number(PREFS.count) > pool.length) {
      note.textContent = `Phạm vi đã chọn chỉ có ${pool.length} câu — bài làm sẽ gồm toàn bộ ${pool.length} câu.`;
      note.className = 'setup-note warn';
    } else {
      note.textContent = `Phạm vi đã chọn có ${pool.length} câu hỏi.`;
      note.className = 'setup-note';
    }

    const timeText = exam
      ? (PREFS.timer ? `Thời gian ${effectiveMinutes(n)} phút` : 'Không giới hạn thời gian')
      : 'Xem đáp án ngay sau mỗi câu';
    $('#setup-summary').innerHTML = n
      ? `<b>${n} câu · ${exam ? 'Thi thử' : 'Luyện tập'}</b><span>${timeText} · ${esc(setupLabel())}</span>`
      : `<b>Chưa có câu hỏi</b><span>Hãy chọn phạm vi ôn tập</span>`;
    $('#setup-start').disabled = !n;
  }

  function onSetupInput(e) {
    const t = e.target;
    if (t.name === 'setup-ch') {
      const all = allChapterIds();
      const sel = new Set(selectedChapters());
      const id = Number(t.value);
      if (t.checked) sel.add(id); else sel.delete(id);
      PREFS.chapters = sel.size === all.length ? null : all.filter((x) => sel.has(x));
    } else if (t.name === 'setup-count') {
      PREFS.count = t.value === 'all' ? 'all' : Number(t.value);
    } else if (t.id === 'setup-custom') {
      const v = parseInt(t.value, 10);
      if (v > 0) PREFS.count = Math.min(v, 9999); else return;
    } else if (t.name === 'setup-mode') {
      PREFS.mode = t.value === 'exam' ? 'exam' : 'practice';
    } else if (t.id === 'setup-timer') {
      PREFS.timer = t.checked;
    } else if (t.id === 'setup-minutes') {
      const v = parseInt(t.value, 10);
      PREFS.minutes = v > 0 ? Math.min(v, 600) : null;
    } else if (t.id === 'setup-shuffleQ') {
      PREFS.shuffleQ = t.checked;
    } else if (t.id === 'setup-shuffleOpt') {
      PREFS.shuffleOpt = t.checked;
    } else {
      return;
    }
    savePrefs();
    syncSetup();
  }

  function startFromSetup() {
    const pool = setupPool();
    const n = effectiveCount(pool.length);
    if (!n) return;
    const chosen = shuffle(pool).slice(0, n);
    const timed = PREFS.mode === 'exam' && PREFS.timer;
    startQuiz(chosen.map((q) => q.uid), {
      mode: PREFS.mode,
      minutes: timed ? effectiveMinutes(n) : 0,
      shuffleQ: PREFS.shuffleQ,
      shuffleOpt: PREFS.shuffleOpt,
      label: setupLabel()
    });
  }

  /* Nếu đang có bài làm dở thì hỏi trước khi bắt đầu bài mới */
  function guardSession(start) {
    if (!S) { start(); return; }
    const answered = answeredCount();
    openModal({
      icon: 'alert',
      title: 'Bạn đang có bài làm dở',
      body: `Bài ${S.mode === 'exam' ? 'thi thử' : 'luyện tập'} hiện tại đã trả lời <b>${answered}/${S.items.length}</b> câu. Bắt đầu bài mới sẽ hủy bài này.`,
      actions: [
        { label: 'Tiếp tục bài cũ', cls: 'btn-ghost', onClick: () => go('quiz') },
        { label: 'Bắt đầu bài mới', cls: 'btn-primary', onClick: () => { clearSession(); start(); } }
      ]
    });
  }

  function startQuiz(uids, opt) {
    let list = uids.map((u) => BY_UID.get(u)).filter(Boolean);
    if (!list.length) { toast('Không có câu hỏi phù hợp.', 'warn'); return; }
    list = opt.shuffleQ ? shuffle(list) : list.slice().sort((a, b) => a.no - b.no);
    const now = Date.now();
    const minutes = Number(opt.minutes) || 0;
    S = {
      mode: opt.mode === 'exam' ? 'exam' : 'practice',
      label: opt.label || '',
      items: list.map((q) => {
        const ids = q.options.map((_, i) => i);
        return { uid: q.uid, order: opt.shuffleOpt && canShuffleOptions(q) ? shuffle(ids) : ids };
      }),
      answers: list.map(() => null),
      flags: [],
      current: 0,
      startedAt: now,
      endsAt: minutes > 0 ? now + minutes * 60000 : null,
      timeLimit: minutes > 0 ? minutes * 60 : 0,
      warned: {}
    };
    saveSession();
    go('quiz');
  }

  /* ======================= 7. LÀM BÀI ======================= */
  const PRAISE = ['Chính xác!', 'Đúng rồi!', 'Tuyệt vời!', 'Rất tốt!', 'Xuất sắc!'];
  const currentQ = () => BY_UID.get(S.items[S.current].uid);

  function renderQuiz() {
    const exam = S.mode === 'exam';
    $('#view-quiz').innerHTML = `
      <div class="quiz-layout">
        <div class="quiz-main">
          <div class="card quiz-bar">
            <div class="quiz-bar-row">
              <div class="quiz-meta">
                <span class="mode-pill ${S.mode}">${exam ? 'Thi thử' : 'Luyện tập'}</span>
                <span class="q-counter" id="q-counter"></span>
              </div>
              <div class="quiz-bar-right">
                ${exam ? '' : '<span class="live-score" id="live-score" aria-label="Số câu đúng và sai"></span>'}
                <span class="timer" id="quiz-timer" title="${S.endsAt ? 'Thời gian còn lại' : 'Thời gian đã làm'}">${icon('clock')}<span>--:--</span></span>
              </div>
            </div>
            <div class="progress" aria-hidden="true"><span id="q-progress"></span></div>
          </div>

          <article class="card question-card" id="q-card"></article>

          <div class="quiz-actions">
            <button type="button" class="btn btn-ghost" data-action="prev" id="btn-prev">${icon('chevL')}<span>Câu trước</span></button>
            <button type="button" class="btn btn-soft only-mobile" data-action="toggle-palette" aria-label="Mở danh sách câu hỏi">${icon('grid')}<span id="pal-btn-label"></span></button>
            <button type="button" class="btn btn-primary" data-action="next" id="btn-next"></button>
          </div>
        </div>

        <aside class="quiz-side" id="quiz-side" aria-label="Danh sách câu hỏi">
          <div class="card side-inner">
            <div class="side-head">
              <h3>Danh sách câu hỏi</h3>
              <button type="button" class="icon-btn only-mobile" data-action="toggle-palette" aria-label="Đóng danh sách">${icon('x')}</button>
            </div>
            <div class="side-stats" id="side-stats"></div>
            <div class="palette" id="palette"></div>
            <div class="legend">
              ${exam ? '<span><i class="l-ans"></i>Đã trả lời</span>' : '<span><i class="l-ok"></i>Đúng</span><span><i class="l-bad"></i>Sai</span>'}
              <span><i class="l-flag"></i>Đánh dấu</span>
            </div>
            <div class="side-actions">
              <button type="button" class="btn btn-primary btn-block" data-action="submit">${icon('checkCircle')} Nộp bài</button>
              <button type="button" class="btn btn-ghost btn-block" data-action="quit-quiz">${icon('logout')} Tạm dừng &amp; thoát</button>
            </div>
          </div>
        </aside>
        <div class="side-backdrop" data-action="toggle-palette"></div>
      </div>`;
    renderQuestion(0);
    renderPalette();
    startTimer();
  }

  function renderQuestion(dir) {
    const card = $('#q-card');
    if (!card) return;
    const it = S.items[S.current];
    const q = currentQ();
    const flagged = S.flags.includes(S.current);
    card.innerHTML = `
      <div class="q-head">
        <span class="q-num">Câu ${S.current + 1}</span>
        <span class="chip" title="${esc(chapterTitle(q.chapter))}">${esc(chapterLabel(q.chapter))}</span>
        <button type="button" class="flag-btn ${flagged ? 'on' : ''}" data-action="flag" aria-pressed="${flagged}" title="Đánh dấu để xem lại (phím F)">
          ${icon('flag')}<span>${flagged ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
        </button>
      </div>
      <h2 class="q-text">${esc(q.question)}</h2>
      ${q.type === 'single' ? '' : `<p class="q-type">${icon(q.type === 'multi' ? 'list' : 'grid')}<span>${typeHint(q)}${q.type === 'multi' ? ` · đã chọn <b id="q-pick-count">0</b>/${q.answer.length}` : ''}</span></p>`}
      ${q.type === 'parts' ? `
      <ol class="parts">
        ${q.parts.map((p, j) => `
          <li class="part" data-part="${j}">
            <span class="part-no">${j + 1}</span>
            <div class="part-body">
              <p class="part-text">${esc(p.text)}</p>
              <div class="part-choices" role="group" aria-label="Lựa chọn cho ý ${j + 1}">
                ${it.order.map((c) => `<button type="button" class="part-choice" data-action="choose-part" data-part="${j}" data-orig="${c}">${esc(q.options[c])}</button>`).join('')}
              </div>
              <p class="part-key"></p>
            </div>
          </li>`).join('')}
      </ol>` : `
      <div class="options" role="group" aria-label="Các phương án trả lời">
        ${it.order.map((orig, pos) => `
          <button type="button" class="option" data-action="choose" data-orig="${orig}">
            <span class="opt-key">${LETTERS[pos]}</span>
            <span class="opt-text">${esc(q.options[orig])}</span>
            <span class="opt-mark"></span>
          </button>`).join('')}
      </div>`}
      <div class="feedback" id="q-feedback"><div class="feedback-inner"></div></div>
      ${S.mode === 'exam' ? `<p class="q-hint">${icon('info')} Bạn có thể đổi đáp án bất cứ lúc nào trước khi nộp bài.</p>` : ''}`;
    paintOptions(false);
    if (S.mode === 'practice' && isComplete(q, S.answers[S.current])) showFeedback();
    card.classList.remove('slide-next', 'slide-prev', 'fade-in');
    void card.offsetWidth; // khởi động lại hiệu ứng
    card.classList.add(dir > 0 ? 'slide-next' : dir < 0 ? 'slide-prev' : 'fade-in');
    updateQuizBar();
  }

  /* only: phương án (hoặc ý) vừa thay đổi — chỉ chạy hiệu ứng cho nó khi chưa chấm */
  function paintOptions(animate, only) {
    const q = currentQ();
    if (q.type === 'parts') { paintParts(animate, only); return; }
    const ans = S.answers[S.current];
    const graded = S.mode === 'practice' && isComplete(q, ans);
    const picks = q.type === 'multi' ? (ans || []) : ans == null ? [] : [ans];
    const keys = [].concat(q.answer);
    $$('#q-card .option').forEach((btn) => {
      const orig = Number(btn.dataset.orig);
      const isAns = keys.includes(orig);
      const isPick = picks.includes(orig);
      btn.classList.toggle('is-selected', isPick && !graded);
      btn.classList.toggle('is-correct', graded && isAns);
      btn.classList.toggle('is-wrong', graded && isPick && !isAns);
      btn.classList.toggle('is-dim', graded && !isAns && !isPick);
      btn.disabled = graded;
      btn.setAttribute('aria-pressed', String(isPick));
      btn.querySelector('.opt-mark').innerHTML = graded && isAns ? icon('check') : graded && isPick ? icon('x') : '';
      if (animate && (graded ? (isAns || isPick) : isPick && (only == null || only === orig)) && !reducedMotion()) {
        btn.classList.remove('pop');
        void btn.offsetWidth;
        btn.classList.add('pop');
      }
    });
    const count = $('#q-pick-count');
    if (count) count.textContent = picks.length;
  }

  /* Câu nhiều ý: luyện tập chấm ngay từng ý khi chọn, thi thử chỉ đánh dấu lựa chọn */
  function paintParts(animate, only) {
    const q = currentQ();
    const ans = S.answers[S.current] || [];
    const practice = S.mode === 'practice';
    $$('#q-card .part').forEach((row) => {
      const j = Number(row.dataset.part);
      const pick = ans[j] == null ? null : ans[j];
      const right = q.parts[j].answer;
      const graded = practice && pick != null;
      row.classList.toggle('is-correct', graded && pick === right);
      row.classList.toggle('is-wrong', graded && pick !== right);
      $$('.part-choice', row).forEach((btn) => {
        const c = Number(btn.dataset.orig);
        btn.classList.toggle('is-selected', c === pick && !graded);
        btn.classList.toggle('is-correct', graded && c === right);
        btn.classList.toggle('is-wrong', graded && c === pick && c !== right);
        btn.classList.toggle('is-dim', graded && c !== right && c !== pick);
        btn.disabled = graded;
        btn.setAttribute('aria-pressed', String(c === pick));
      });
      row.querySelector('.part-key').innerHTML = graded && pick !== right
        ? `${icon('check')}<span>Đáp án đúng: <b>${esc(q.options[right])}</b></span>` : '';
      if (animate && j === only && !reducedMotion()) {
        row.classList.remove('pop');
        void row.offsetWidth;
        row.classList.add('pop');
      }
    });
  }

  function showFeedback() {
    const fb = $('#q-feedback');
    if (!fb) return;
    const it = S.items[S.current];
    const q = currentQ();
    const a = S.answers[S.current];
    const ok = isCorrect(q, a);
    let msg = pick(PRAISE);
    if (!ok) {
      msg = q.type === 'parts'
        ? `Chưa đúng hết — bạn làm đúng ${q.parts.filter((p, j) => a[j] === p.answer).length}/${q.parts.length} ý`
        : `Chưa đúng — đáp án đúng là ${answerLetters(q, it.order)}`;
    }
    fb.querySelector('.feedback-inner').innerHTML = `
      <div class="fb-box">
        <div class="fb-title">${icon(ok ? 'checkCircle' : 'alert')}<span>${msg}</span></div>
        ${q.explanation ? `<p class="fb-exp"><b>Giải thích:</b> ${esc(q.explanation)}</p>` : ''}
      </div>`;
    fb.classList.remove('ok', 'bad');
    fb.classList.add(ok ? 'ok' : 'bad');
    requestAnimationFrame(() => fb.classList.add('open'));
  }

  function renderPalette() {
    const pal = $('#palette');
    if (!pal) return;
    const practice = S.mode === 'practice';
    pal.innerHTML = S.items.map((it, i) => {
      const q = BY_UID.get(it.uid);
      const a = S.answers[i];
      const done = isComplete(q, a);
      const cls = ['pal'];
      if (done) cls.push(practice ? (isCorrect(q, a) ? 'correct' : 'wrong') : 'answered');
      else if (hasInput(q, a)) cls.push('partial');
      if (i === S.current) cls.push('current');
      const flagged = S.flags.includes(i);
      if (flagged) cls.push('flagged');
      const label = `Câu ${i + 1}${done ? ', đã trả lời' : hasInput(q, a) ? ', đang làm dở' : ', chưa trả lời'}${flagged ? ', đã đánh dấu' : ''}`;
      return `<button type="button" class="${cls.join(' ')}" data-action="goto" data-i="${i}" aria-label="${label}"${i === S.current ? ' aria-current="step"' : ''}>${i + 1}</button>`;
    }).join('');
  }

  function updateQuizBar() {
    if (!$('#q-counter')) return;
    const n = S.items.length;
    const answered = answeredCount();
    $('#q-counter').innerHTML = `Câu <b>${S.current + 1}</b>/${n}`;
    $('#q-progress').style.width = ((answered / n) * 100).toFixed(2) + '%';
    $('#btn-prev').disabled = S.current === 0;
    const last = S.current === n - 1;
    const next = $('#btn-next');
    next.dataset.action = last ? 'submit' : 'next';
    next.innerHTML = last ? `${icon('checkCircle')}<span>Nộp bài</span>` : `<span>Câu tiếp</span>${icon('chevR')}`;
    $('#pal-btn-label').textContent = `${answered}/${n}`;

    let side = `<span>Đã làm <b>${answered}</b>/${n}</span>`;
    if (S.mode === 'practice') {
      let ok = 0, bad = 0;
      S.items.forEach((it, i) => {
        const q = BY_UID.get(it.uid);
        if (!isComplete(q, S.answers[i])) return;
        if (isCorrect(q, S.answers[i])) ok++; else bad++;
      });
      $('#live-score').innerHTML = `<span class="ok">${icon('check')}${ok}</span><span class="bad">${icon('x')}${bad}</span>`;
    }
    if (S.flags.length) side += `<span>· Đánh dấu <b>${S.flags.length}</b></span>`;
    $('#side-stats').innerHTML = side;
  }

  function choose(orig) {
    if (!S) return;
    const i = S.current;
    const q = currentQ();
    const prev = S.answers[i];
    if (q.type === 'parts') return;
    if (S.mode === 'practice' && isComplete(q, prev)) return; // luyện tập: đã chấm thì không đổi
    if (q.type === 'multi') {
      // bấm lần nữa để bỏ chọn
      const sel = Array.isArray(prev) ? prev.filter((k) => k !== orig) : [];
      if (sel.length === (Array.isArray(prev) ? prev.length : 0)) sel.push(orig);
      S.answers[i] = sel.length ? sel : null;
    } else {
      if (prev === orig) return;
      S.answers[i] = orig;
    }
    afterAnswer(orig);
  }

  /* Câu nhiều ý: chọn lựa chọn c cho ý thứ j */
  function choosePart(j, c) {
    if (!S) return;
    const i = S.current;
    const q = currentQ();
    if (q.type !== 'parts' || !(j >= 0 && j < q.parts.length) || !(c >= 0 && c < q.options.length)) return;
    const a = Array.isArray(S.answers[i]) ? S.answers[i].slice() : q.parts.map(() => null);
    if (S.mode === 'practice' && a[j] != null) return; // luyện tập: mỗi ý chỉ chọn 1 lần
    if (a[j] === c) return;
    a[j] = c;
    S.answers[i] = a;
    afterAnswer(j);
  }

  function afterAnswer(changed) {
    saveSession();
    paintOptions(true, changed);
    if (S.mode === 'practice' && isComplete(currentQ(), S.answers[S.current])) {
      showFeedback();
      if (window.innerWidth <= 760) {
        setTimeout(() => {
          const fb = $('#q-feedback');
          if (fb) fb.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'nearest' });
        }, 280);
      }
    }
    renderPalette();
    updateQuizBar();
  }

  function goTo(i) {
    if (!S || i < 0 || i >= S.items.length || i === S.current) return;
    const dir = i > S.current ? 1 : -1;
    S.current = i;
    saveSession();
    renderQuestion(dir);
    renderPalette();
    closePalette();
    const card = $('#q-card');
    if (card && card.getBoundingClientRect().top < 70) {
      window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
  }

  function toggleFlag() {
    const i = S.current;
    const k = S.flags.indexOf(i);
    if (k >= 0) S.flags.splice(k, 1); else S.flags.push(i);
    saveSession();
    const on = k < 0;
    const btn = $('#q-card .flag-btn');
    if (btn) {
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', String(on));
      btn.querySelector('span').textContent = on ? 'Đã đánh dấu' : 'Đánh dấu';
    }
    renderPalette();
    updateQuizBar();
  }

  function togglePalette(force) {
    const side = $('#quiz-side');
    if (!side) return;
    const open = force != null ? force : !side.classList.contains('open');
    side.classList.toggle('open', open);
    if (open) {
      const cur = side.querySelector('.pal.current');
      if (cur) cur.scrollIntoView({ block: 'nearest' });
    }
  }
  const closePalette = () => togglePalette(false);

  /* Đồng hồ: đếm ngược (thi thử) hoặc đếm thời gian đã làm (luyện tập) */
  let timerId = null;
  function startTimer() { stopTimer(); tick(); timerId = setInterval(tick, 500); }
  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }

  function tick() {
    if (!S) { stopTimer(); return; }
    const el = $('#quiz-timer');
    if (S.endsAt) {
      const left = Math.ceil((S.endsAt - Date.now()) / 1000);
      if (el) {
        el.lastElementChild.textContent = fmtTime(left);
        el.classList.toggle('danger', left <= 60);
        el.classList.toggle('warn', left > 60 && left <= Math.max(120, S.timeLimit * 0.2));
      }
      S.warned = S.warned || {};
      if (S.timeLimit > 600 && left <= 300 && left > 290 && !S.warned.five) {
        S.warned.five = true; saveSession(); toast('Còn 5 phút làm bài!', 'warn');
      }
      if (S.timeLimit > 120 && left <= 60 && left > 50 && !S.warned.one) {
        S.warned.one = true; saveSession(); toast('Còn 1 phút — hãy kiểm tra lại bài!', 'warn');
      }
      if (left <= 0) { stopTimer(); submitQuiz(true); }
    } else if (el) {
      el.lastElementChild.textContent = fmtTime((Date.now() - S.startedAt) / 1000);
    }
  }

  function confirmSubmit() {
    if (!S) return;
    const n = S.items.length;
    const unanswered = n - answeredCount();
    const flagged = S.flags.length;
    let body = unanswered
      ? `Bạn còn <b>${unanswered}/${n}</b> câu chưa trả lời xong. Câu bỏ trống hoặc làm dở sẽ không được tính điểm.`
      : `Bạn đã trả lời đủ <b>${n}/${n}</b> câu.`;
    if (flagged) body += `<br>Có <b>${flagged}</b> câu đang được đánh dấu để xem lại.`;
    const actions = [{ label: 'Làm tiếp', cls: 'btn-ghost' }];
    if (unanswered) {
      actions.push({ label: 'Tới câu chưa làm', cls: 'btn-soft', onClick: () => goTo(S.items.findIndex((it, i) => !isComplete(BY_UID.get(it.uid), S.answers[i]))) });
    }
    actions.push({ label: 'Nộp bài', cls: 'btn-primary', onClick: () => submitQuiz(false) });
    openModal({ icon: 'checkCircle', title: 'Nộp bài?', body, actions });
  }

  function submitQuiz(auto) {
    if (!S) return;
    stopTimer();
    closeModal(true);
    closePalette();
    const now = Date.now();
    const items = S.items.map((it, i) => {
      const q = BY_UID.get(it.uid);
      const chosen = S.answers[i];
      return { uid: it.uid, order: it.order, chosen, chapter: q.chapter, correct: isCorrect(q, chosen), skipped: !hasInput(q, chosen) };
    });
    const total = items.length;
    const correct = items.filter((x) => x.correct).length;
    const skipped = items.filter((x) => x.skipped).length;
    const end = S.endsAt ? Math.min(now, S.endsAt) : now;
    LAST = {
      mode: S.mode, label: S.label, total, correct, skipped,
      wrong: total - correct - skipped,
      score10: total ? (correct / total) * 10 : 0,
      duration: Math.max(0, Math.round((end - S.startedAt) / 1000)),
      timeLimit: S.timeLimit, finishedAt: now, auto: !!auto, items
    };
    store.set(KEYS.last, LAST);

    const hist = store.get(KEYS.history, []);
    hist.unshift({ t: now, mode: LAST.mode, label: LAST.label, total, correct, score10: LAST.score10, duration: LAST.duration });
    store.set(KEYS.history, hist.slice(0, 50));

    const stats = store.get(KEYS.stats, {}) || {};
    const wb = store.get(KEYS.wrong, {}) || {};
    items.forEach((x) => {
      const s = stats[x.chapter] || (stats[x.chapter] = { c: 0, t: 0 });
      s.t++;
      if (x.correct) { s.c++; delete wb[x.uid]; } else if (!x.skipped) wb[x.uid] = (wb[x.uid] || 0) + 1;
    });
    store.set(KEYS.stats, stats);
    store.set(KEYS.wrong, wb);

    clearSession();
    REVIEW_FILTER = 'all';
    if (auto) toast('Hết giờ! Bài làm đã được tự động nộp.', 'warn');
    go('result', true);
  }

  /* ======================= 8. KẾT QUẢ & XEM LẠI ======================= */
  function verdictFor(score) {
    if (score >= 9) return { tone: 'good', title: 'Xuất sắc!', text: 'Bạn nắm kiến thức rất vững.' };
    if (score >= 8) return { tone: 'good', title: 'Giỏi lắm!', text: 'Kết quả rất tốt, tiếp tục phát huy nhé.' };
    if (score >= 6.5) return { tone: 'mid', title: 'Khá tốt!', text: 'Ôn lại các câu sai để bứt phá điểm số.' };
    if (score >= 5) return { tone: 'mid', title: 'Đạt yêu cầu', text: 'Bạn cần củng cố thêm một số bài.' };
    return { tone: 'low', title: 'Cần cố gắng thêm', text: 'Đừng nản — xem lại giải thích rồi luyện tập lại nhé.' };
  }

  function countUp(el, to, ms) {
    if (reducedMotion()) { el.textContent = fmtScore(to); return; }
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = p < 1 ? fmtScore(Math.round(to * eased * 10) / 10) : fmtScore(to);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderResult() {
    const R = LAST;
    const pct = Math.round((R.correct / R.total) * 100);
    const v = verdictFor(R.score10);
    const byCh = new Map();
    R.items.forEach((x) => {
      const s = byCh.get(x.chapter) || { c: 0, t: 0 };
      s.t++;
      if (x.correct) s.c++;
      byCh.set(x.chapter, s);
    });
    const rows = Array.from(byCh.entries()).sort((a, b) => (a[0] || 99) - (b[0] || 99)).map(([id, s]) => {
      const p = Math.round((s.c / s.t) * 100);
      const tone = p >= 80 ? '' : p >= 50 ? 'mid' : 'low';
      return `
        <div class="ch-bar-row ${tone}">
          <div class="name" title="${esc(chapterTitle(id))}">${esc(chapterLabel(id))} <small>· ${esc(chapterTitle(id))}</small></div>
          <div class="progress"><span data-w="${p}"></span></div>
          <div class="val">${s.c}/${s.t}</div>
        </div>`;
    }).join('');
    const redo = R.wrong + R.skipped;

    $('#view-result').innerHTML = `
      <section class="card result-hero">
        <div class="ring" id="score-ring" style="--pct:${pct}">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle class="ring-track" cx="60" cy="60" r="52"/>
            <circle class="ring-value ${v.tone}" cx="60" cy="60" r="52" pathLength="100"/>
          </svg>
          <div class="ring-center"><strong id="score-count">0</strong><span>/ 10 điểm</span></div>
        </div>
        <div class="result-copy">
          <span class="eyebrow">${R.mode === 'exam' ? 'Kết quả thi thử' : 'Kết quả luyện tập'}${R.auto ? ' · tự nộp khi hết giờ' : ''}</span>
          <h1>${v.title}</h1>
          <p>${v.text} Bạn trả lời đúng <b>${R.correct}/${R.total}</b> câu (${pct}%).</p>
          <div class="tile-row">
            <div class="mini-tile ok">${icon('check')}<b>${R.correct}</b><span>Câu đúng</span></div>
            <div class="mini-tile bad">${icon('x')}<b>${R.wrong}</b><span>Câu sai</span></div>
            <div class="mini-tile">${icon('minus')}<b>${R.skipped}</b><span>Bỏ trống</span></div>
            <div class="mini-tile">${icon('clock')}<b>${fmtTime(R.duration)}</b><span>Thời gian</span></div>
          </div>
          <div class="result-actions">
            <button type="button" class="btn btn-primary" data-action="go-review">${icon('eye')} Xem lại bài làm</button>
            ${redo ? `<button type="button" class="btn btn-soft" data-action="retry-wrong">${icon('rotate')} Làm lại ${redo} câu chưa đúng</button>` : ''}
            <button type="button" class="btn btn-ghost" data-action="open-setup">${icon('play')} Làm bài mới</button>
          </div>
        </div>
      </section>

      <section class="card section">
        <div class="card-head">${icon('book')}<h2 class="card-title">Kết quả theo bài</h2></div>
        <div class="ch-bars">${rows}</div>
      </section>`;

    requestAnimationFrame(() => requestAnimationFrame(() => {
      const ring = $('#score-ring');
      if (ring) ring.classList.add('go');
      $$('#view-result .ch-bars [data-w]').forEach((s) => { s.style.width = s.dataset.w + '%'; });
    }));
    countUp($('#score-count'), R.score10, 1300);
    if (R.score10 >= 8 && R.finishedAt > Date.now() - 4000) confetti();
  }

  /* Danh sách phương án / các ý kèm đáp án — dùng chung cho xem lại bài và tra cứu.
     order: thứ tự phương án đã hiển thị · mine: có hiện lựa chọn của người làm
     chosen: câu trả lời của người làm · show: hiện đáp án đúng · fmt: định dạng chữ */
  function answerList(q, { order, mine = false, chosen = null, show = true, fmt = esc } = {}) {
    if (q.type === 'parts') {
      const bank = isTrueFalse(q) ? '' : `<p class="r-bank"><b>Lựa chọn:</b>${q.options.map((o) => `<span>${fmt(o)}</span>`).join('')}</p>`;
      const rows = q.parts.map((p, j) => {
        const pick = mine && Array.isArray(chosen) ? chosen[j] : null;
        const ok = pick === p.answer;
        const cls = mine ? (pick == null ? 'is-skipped' : ok ? 'is-correct' : 'is-wrong') : show ? 'is-correct' : '';
        const notes = [];
        if (mine) notes.push(pick == null ? 'Bạn chưa chọn' : `Bạn chọn: <b>${fmt(q.options[pick])}</b>${ok ? ' · Đúng' : ''}`);
        if (show && !(mine && ok)) notes.push(`Đáp án: <b>${fmt(q.options[p.answer])}</b>`);
        return `<li class="r-part ${cls}"><span class="part-no">${j + 1}</span><div><p>${fmt(p.text)}</p>${notes.length ? `<small>${notes.join(' · ')}</small>` : ''}</div></li>`;
      }).join('');
      return `${bank}<ol class="r-parts">${rows}</ol>`;
    }
    const keys = [].concat(q.answer);
    const picks = mine && chosen != null ? [].concat(chosen) : [];
    const opts = (order || q.options.map((_, k) => k)).map((orig, pos) => {
      const isAns = show && keys.includes(orig);
      const isPick = picks.includes(orig);
      const cls = isAns ? 'is-correct' : isPick ? 'is-wrong' : '';
      const tag = isAns && isPick ? 'Bạn chọn · Đúng' : isAns ? 'Đáp án đúng' : isPick ? 'Bạn chọn' : '';
      return `<li class="r-opt ${cls}"><span class="opt-key">${LETTERS[pos]}</span><span class="opt-text">${fmt(q.options[orig])}</span>${tag ? `<span class="r-tag">${tag}</span>` : ''}</li>`;
    }).join('');
    return `<ul class="r-options">${opts}</ul>`;
  }

  function renderReview() {
    const R = LAST;
    const rows = R.items.map((x, i) => ({ x, i, q: BY_UID.get(x.uid) })).filter((r) => r.q);
    const statusOf = (x) => (x.skipped ? 'skipped' : x.correct ? 'correct' : 'wrong');
    const counts = { all: rows.length, correct: 0, wrong: 0, skipped: 0 };
    rows.forEach((r) => { counts[statusOf(r.x)]++; });
    const labels = { all: 'Tất cả', correct: 'Đúng', wrong: 'Sai', skipped: 'Bỏ trống' };
    const shown = rows.filter((r) => REVIEW_FILTER === 'all' || statusOf(r.x) === REVIEW_FILTER);
    const badge = {
      correct: `${icon('check')} Đúng`,
      wrong: `${icon('x')} Sai`,
      skipped: `${icon('minus')} Bỏ trống`
    };

    const cards = shown.map(({ x, i, q }, k) => {
      const st = statusOf(x);
      const order = Array.isArray(x.order) && x.order.length === q.options.length ? x.order : null;
      return `
        <article class="card review-card ${st}" style="animation-delay:${Math.min(k, 8) * 40}ms">
          <div class="q-head">
            <span class="q-num">Câu ${i + 1}</span>
            <span class="chip" title="${esc(chapterTitle(q.chapter))}">${esc(chapterLabel(q.chapter))}</span>
            ${typeChip(q)}
            <span class="status-badge ${st}">${badge[st]}</span>
          </div>
          <h3 class="q-text sm">${esc(q.question)}</h3>
          ${answerList(q, { order, mine: true, chosen: sanitizeAnswer(q, x.chosen) })}
          ${q.explanation ? `<div class="r-exp">${icon('bulb')}<p><b>Giải thích:</b> ${esc(q.explanation)}</p></div>` : ''}
        </article>`;
    }).join('');

    $('#view-review').innerHTML = `
      <div class="page-head">
        <button type="button" class="link-back" data-action="go-result">${icon('chevL')} Kết quả</button>
        <h1>Xem lại bài làm</h1>
        <p>Đúng ${R.correct}/${R.total} câu · ${fmtScore(R.score10)} điểm · ${R.mode === 'exam' ? 'Thi thử' : 'Luyện tập'}</p>
      </div>
      <div class="filter-bar" role="tablist" aria-label="Lọc câu hỏi">
        ${['all', 'correct', 'wrong', 'skipped'].map((f) => `
          <button type="button" role="tab" aria-selected="${f === REVIEW_FILTER}" class="filter-chip ${f === REVIEW_FILTER ? 'on' : ''}" data-action="review-filter" data-f="${f}">${labels[f]} <span>${counts[f]}</span></button>`).join('')}
      </div>
      <div class="review-list">
        ${cards || `<div class="card empty">${icon('checkCircle')}<p>Không có câu nào trong mục này.</p></div>`}
      </div>
      ${counts.wrong + counts.skipped ? `<div style="margin-top:18px"><button type="button" class="btn btn-soft btn-block" data-action="retry-wrong">${icon('rotate')} Làm lại ${counts.wrong + counts.skipped} câu sai/bỏ trống</button></div>` : ''}`;
  }

  /* ======================= 9. TRA CỨU ======================= */
  const SEARCH = { q: '', ch: 'all', show: true, limit: 30, list: [] };
  let searchTimer = null;

  function renderSearch() {
    const chapters = chapterList();
    $('#view-search').innerHTML = `
      <div class="page-head">
        <h1>Tra cứu câu hỏi</h1>
        <p>Gõ từ khóa có dấu hoặc không dấu để tìm nhanh trong ${BANK.length} câu hỏi.</p>
      </div>
      <div class="card search-box" role="search">
        <label class="search-input">
          <span class="sr-only">Từ khóa</span>
          ${icon('search')}
          <input id="search-q" type="search" autocomplete="off" placeholder="Ví dụ: sứ mệnh lịch sử, lien minh, tôn giáo…" value="${esc(SEARCH.q)}">
        </label>
        <div class="search-filters">
          <select class="input" id="search-ch" aria-label="Lọc theo bài">
            <option value="all">Tất cả các bài</option>
            ${chapters.map((c) => `<option value="${c.id}" ${String(c.id) === String(SEARCH.ch) ? 'selected' : ''}>${esc(chapterLabel(c.id))} · ${esc(c.title)}</option>`).join('')}
          </select>
          <label class="switch"><input type="checkbox" id="search-show" ${SEARCH.show ? 'checked' : ''}><span class="switch-ui"></span><span>Hiện đáp án &amp; giải thích</span></label>
        </div>
      </div>
      <div id="search-results"></div>`;
    updateSearch();
    if (!isNarrow()) {
      const input = $('#search-q');
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }

  function updateSearch() {
    const box = $('#search-results');
    if (!box) return;
    const terms = fold(SEARCH.q).split(/\s+/).filter(Boolean);
    const phrase = terms.join(' ');
    const multi = terms.length > 1;
    const list = BANK.filter((q) =>
      (SEARCH.ch === 'all' || q.chapter === Number(SEARCH.ch)) && terms.every((t) => q.search.includes(t)));
    // Câu chứa nguyên cụm từ khóa được xếp lên trước
    if (multi) list.sort((a, b) => (b.search.includes(phrase) - a.search.includes(phrase)) || (a.no - b.no));
    SEARCH.list = list;

    if (!list.length) {
      box.innerHTML = `
        <div class="card empty" style="margin-top:20px">${icon('search')}
          <p>Không tìm thấy câu hỏi phù hợp${SEARCH.q ? ` với “<b>${esc(SEARCH.q)}</b>”` : ''}.</p>
          <p class="small">Thử từ khóa ngắn hơn, ví dụ: <i>lien minh</i>, <i>ton giao</i>.</p>
        </div>`;
      return;
    }

    const looseTerms = terms.filter((t) => t.length >= 2 || !multi);

    const items = list.slice(0, SEARCH.limit).map((q, k) => {
      // Nếu câu có chứa nguyên cụm thì chỉ tô cụm đó, tránh tô lẻ tẻ từng từ
      const marks = multi && q.search.includes(phrase) ? [phrase] : looseTerms;
      const hl = (text) => (terms.length ? highlight(text, marks) : esc(text));
      return `
      <article class="card result-item" style="animation-delay:${Math.min(k, 10) * 25}ms">
        <div class="q-head">
          <span class="q-num">#${q.no}</span>
          <span class="chip" title="${esc(chapterTitle(q.chapter))}">${esc(chapterLabel(q.chapter))}</span>
          ${typeChip(q)}
          ${q.custom ? '<span class="chip gold">Tự thêm</span>' : ''}
        </div>
        <h3 class="q-text">${hl(q.question)}</h3>
        ${answerList(q, { show: SEARCH.show, fmt: hl })}
        ${SEARCH.show && q.explanation ? `<div class="r-exp">${icon('bulb')}<p>${esc(q.explanation)}</p></div>` : ''}
      </article>`;
    }).join('');

    const rest = list.length - SEARCH.limit;
    box.innerHTML = `
      <div class="results-head">
        <span><b>${list.length}</b> câu hỏi${SEARCH.q ? ` khớp với “${esc(SEARCH.q)}”` : ''}</span>
        <button type="button" class="btn btn-sm btn-soft" data-action="practice-search">${icon('play')} Luyện tập ${list.length} câu này</button>
      </div>
      <div class="result-list">${items}</div>
      ${rest > 0 ? `<button type="button" class="btn btn-ghost btn-block" style="margin-top:14px" data-action="search-more">Xem thêm (còn ${rest} câu)</button>` : ''}`;
  }

  function onSearchInput(e) {
    const t = e.target;
    if (t.id === 'search-q') {
      SEARCH.q = t.value;
      SEARCH.limit = 30;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(updateSearch, 120);
    } else if (t.id === 'search-ch') {
      SEARCH.ch = t.value;
      SEARCH.limit = 30;
      updateSearch();
    } else if (t.id === 'search-show') {
      SEARCH.show = t.checked;
      updateSearch();
    }
  }

  /* ======================= 10. THÊM CÂU HỎI ======================= */
  const SAMPLE = [
    'Câu 1: Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?',
    'A. Hệ tư tưởng Đức',
    'B. Tuyên ngôn của Đảng Cộng sản',
    'C. Chống Đuyrinh',
    'D. Bộ Tư bản',
    'Đáp án: B',
    'Giải thích: Tuyên ngôn được công bố tháng 2/1848.',
    'Bài: 1',
    '',
    'Câu 2: Tôn giáo có những nguồn gốc nào?',
    'A. Tự nhiên, chính trị, pháp lý',
    '*B. Kinh tế – xã hội, nhận thức, tâm lý',
    'C. Thần thánh, siêu nhiên',
    'D. Văn hóa, ngôn ngữ'
  ].join('\n');

  let PENDING = null; // kết quả phân tích chờ lưu

  /* Phân tích văn bản dạng "Câu 1: ... A. ... B. ... Đáp án: B" */
  function parseQuestionText(text, defaultChapter) {
    const lines = String(text || '').normalize('NFC').replace(/\r\n?/g, '\n').split('\n');
    const RE_Q = /^(?:câu|cau|question)\s*(\d+)\s*[:.)\-–—]?\s*(.*)$/i;
    const RE_QNUM = /^(\d{1,4})\s*[.):]\s+(.+)$/;
    const RE_OPT = /^(\*?)\s*([A-Fa-f])\s*[.)\]:/]\s*(.*?)\s*(\*?)$/;
    const RE_ANS = /^(?:đáp\s*án|dap\s*an|đ\/a|answer|key)(?:\s*(?:đúng|dung))?(?:\s*(?:là|la))?\s*[:\-–=]?\s*\(?([A-Fa-f](?:\s*(?:,|;|&|\/|và)\s*[A-Fa-f])*)(?=$|[\s.,;:)\]])/i;
    const RE_EXP = /^(?:giải\s*thích|giai\s*thich|lời\s*giải|loi\s*giai|explanation)\s*[:\-–]\s*(.*)$/i;
    const RE_CH = /^(?:bài|bai|chương|chuong|chapter|lesson)\s*[:\-–]?\s*(\d+)\s*\.?$/i;
    const RE_KEY_HEADING = /^(?:bảng\s*)?(?:đáp\s*án|dap\s*an)\s*:?$/i;
    const RE_KEY_LINE = /^(?:\s*(?:câu\s*)?\d+\s*[-.:)]?\s*[A-F](?![A-Za-zÀ-ỹ])[\s,;|]*){2,}$/i;

    const blocks = [];
    const keyMap = {};
    let cur = null, mode = null;
    const finish = () => { if (cur) blocks.push(cur); cur = null; mode = null; };
    const begin = (txt, lineNo, num) => {
      finish();
      cur = { line: lineNo, num: num != null ? Number(num) : null, question: String(txt || '').trim(), options: [], answers: [], explanation: '', chapter: null };
      mode = 'q';
    };

    lines.forEach((rawLine, idx) => {
      const line = rawLine.replace(/ /g, ' ').trim();
      const n = idx + 1;
      if (!line) return;
      let m;

      if ((m = line.match(RE_Q))) { begin(m[2], n, m[1]); return; }

      if (cur && (mode === 'q' || mode === 'opt') && (m = line.match(RE_OPT))) {
        const k = LETTERS.indexOf(m[2].toUpperCase());
        if (k === cur.options.length) { // phương án phải theo đúng thứ tự A, B, C…
          cur.options.push(m[3].trim());
          if ((m[1] === '*' || m[4] === '*') && !cur.answers.includes(k)) cur.answers.push(k); // có thể nhiều đáp án
          mode = 'opt';
          return;
        }
      }
      if (cur && (m = line.match(RE_ANS))) {
        cur.answers = Array.from(new Set(m[1].toUpperCase().match(/[A-F]/g).map((l) => LETTERS.indexOf(l))));
        mode = 'ans';
        return;
      }
      if (cur && (m = line.match(RE_EXP))) { cur.explanation = m[1].trim(); mode = 'exp'; return; }
      if (cur && (m = line.match(RE_CH))) { cur.chapter = Number(m[1]); return; }
      if (RE_KEY_HEADING.test(line)) { finish(); return; }
      if (RE_KEY_LINE.test(line)) {
        const re = /(\d+)\s*[-.:)]?\s*([A-F])(?![A-Za-zÀ-ỹ])/gi;
        let k;
        while ((k = re.exec(line))) keyMap[Number(k[1])] = LETTERS.indexOf(k[2].toUpperCase());
        finish();
        return;
      }
      if ((m = line.match(RE_QNUM)) && (!cur || mode !== 'q')) { begin(m[2], n, m[1]); return; }

      // Dòng tự do: nối tiếp nội dung đang đọc, hoặc mở câu mới
      if (!cur || mode === 'ans') { begin(line, n, null); return; }
      if (mode === 'q') cur.question += (cur.question ? ' ' : '') + line;
      else if (mode === 'opt') cur.options[cur.options.length - 1] += ' ' + line;
      else if (mode === 'exp') cur.explanation += ' ' + line;
    });
    finish();

    const questions = [], errors = [];
    blocks.forEach((b) => {
      if (!b.answers.length && b.num != null && keyMap[b.num] != null) b.answers = [keyMap[b.num]];
      const snippet = b.question.slice(0, 70) + (b.question.length > 70 ? '…' : '');
      const stray = b.answers.filter((k) => k >= b.options.length);
      let msg = '';
      if (!b.question) msg = 'thiếu nội dung câu hỏi';
      else if (b.options.length < 2) msg = 'cần ít nhất 2 phương án (A., B., …)';
      else if (!b.answers.length) msg = 'chưa có đáp án — thêm dòng “Đáp án: B” hoặc dấu * trước phương án đúng';
      else if (stray.length) msg = `đáp án ${stray.map((k) => LETTERS[k]).join(', ')} không khớp phương án nào`;
      if (msg) { errors.push({ line: b.line, msg, snippet }); return; }
      questions.push({
        chapter: b.chapter != null ? b.chapter : defaultChapter,
        question: b.question,
        options: b.options,
        answer: b.answers.length > 1 ? b.answers.slice().sort((x, y) => x - y).map((k) => LETTERS[k]) : LETTERS[b.answers[0]],
        explanation: b.explanation
      });
    });
    return { questions, errors };
  }

  function parseJsonQuestions(text, defaultChapter) {
    let data = JSON.parse(text);
    if (data && !Array.isArray(data)) data = data.questions || data.QUESTION_BANK || data.data;
    if (!Array.isArray(data)) throw new Error('Không tìm thấy mảng câu hỏi trong JSON');
    const questions = [], errors = [];
    data.forEach((r, i) => {
      const n = normalizeQuestion(r);
      if (!n) {
        errors.push({ line: i + 1, msg: 'sai định dạng (cần question + options + answer, hoặc question + parts)', snippet: String((r && r.question) || '').slice(0, 70) });
        return;
      }
      questions.push(toRaw(n, r.chapter != null && r.chapter !== '' ? n.chapter : defaultChapter));
    });
    return { questions, errors };
  }

  /* Đưa câu hỏi đã chuẩn hóa về dạng viết trong questions.js */
  function toRaw(n, chapter) {
    const raw = { chapter, question: n.question };
    if (n.type === 'parts') {
      raw.choices = n.options;
      raw.parts = n.parts.map((p) => ({ text: p.text, answer: n.options[p.answer] }));
    } else {
      raw.options = n.options;
      raw.answer = n.type === 'multi' ? n.answer.map((k) => LETTERS[k]) : LETTERS[n.answer];
    }
    raw.explanation = n.explanation || '';
    return raw;
  }

  function toQuestionsJs(list) {
    return list.map((q) => {
      const n = normalizeQuestion(q);
      return '  ' + JSON.stringify(n ? toRaw(n, q.chapter) : q, null, 2).replace(/\n/g, '\n  ');
    }).join(',\n');
  }

  function renderImport() {
    const custom = store.get(KEYS.custom, []);
    const chapters = chapterList();
    $('#view-import').innerHTML = `
      <div class="page-head">
        <h1>Thêm câu hỏi</h1>
        <p>Dán bộ câu hỏi của bạn (copy từ Word, PDF, Google Docs…) — hệ thống tự nhận diện câu hỏi, phương án và đáp án.</p>
      </div>
      <div class="import-grid">
        <div class="card">
          <div class="card-head">
            ${icon('edit')}<h2 class="card-title">Dán nội dung câu hỏi</h2><span class="spacer"></span>
            <label class="btn btn-sm btn-ghost file-btn">${icon('upload')} Mở file .txt/.json
              <input type="file" id="import-file" accept=".txt,.json,text/plain,application/json">
            </label>
          </div>
          <textarea id="import-text" spellcheck="false" aria-label="Nội dung câu hỏi" placeholder="${esc(SAMPLE)}"></textarea>
          <div class="import-row">
            <label>Bài cho câu không ghi “Bài:”
              <select class="input" id="import-ch">
                ${chapters.map((c) => `<option value="${c.id}">${esc(chapterLabel(c.id))} · ${esc(c.title)}</option>`).join('')}
                ${chapters.some((c) => c.id === 0) ? '' : '<option value="0">Không phân bài</option>'}
              </select>
            </label>
            <button type="button" class="btn btn-ghost" data-action="import-sample">Dùng ví dụ mẫu</button>
            <button type="button" class="btn btn-primary" data-action="import-parse">${icon('eye')} Kiểm tra</button>
          </div>
          <div id="import-preview"></div>
        </div>

        <aside class="card">
          <div class="card-head">${icon('file')}<h2 class="card-title">Mẫu định dạng</h2></div>
          <pre class="code">${esc(SAMPLE)}</pre>
          <ul class="format-notes">
            <li>Mỗi câu bắt đầu bằng <code>Câu 1:</code> hoặc <code>1.</code></li>
            <li>Phương án bắt đầu bằng <code>A.</code> <code>B.</code> <code>C.</code> <code>D.</code> (hoặc <code>a)</code>)</li>
            <li>Đáp án: dòng <code>Đáp án: B</code>, dấu <code>*</code> trước phương án đúng, hoặc bảng đáp án cuối file kiểu <code>1-B 2-C 3-A</code></li>
            <li>Nhiều đáp án đúng: <code>Đáp án: A, C</code> hoặc dấu <code>*</code> trước mỗi phương án đúng</li>
            <li><code>Giải thích:</code> và <code>Bài:</code> (số bài từ 1 đến 6) là tùy chọn</li>
            <li>Cũng nhận file <code>.json</code> dạng mảng <code>[{question, options, answer}]</code></li>
          </ul>
          <div class="custom-info">
            <h3>Câu hỏi bạn đã thêm: <b>${custom.length}</b></h3>
            <div class="btn-col">
              <button type="button" class="btn btn-sm btn-soft" data-action="copy-custom" ${custom.length ? '' : 'disabled'}>${icon('copy')} Sao chép mã cho questions.js</button>
              <button type="button" class="btn btn-sm btn-ghost" data-action="export-custom" ${custom.length ? '' : 'disabled'}>${icon('download')} Tải file .json</button>
              <button type="button" class="btn btn-sm btn-danger" data-action="clear-custom" ${custom.length ? '' : 'disabled'}>${icon('trash')} Xóa tất cả</button>
            </div>
            <p class="muted small">Câu hỏi thêm ở đây chỉ lưu trong trình duyệt này. Để dùng lâu dài hoặc chia sẻ cho bạn bè, hãy “Sao chép mã” rồi dán vào cuối mảng trong <code>js/questions.js</code>.</p>
          </div>
        </aside>
      </div>`;
  }

  function importParse() {
    const text = ($('#import-text').value || '').trim();
    const defCh = Number($('#import-ch').value) || 0;
    const box = $('#import-preview');
    if (!text) { toast('Hãy dán nội dung câu hỏi trước.', 'warn'); return; }
    let res;
    try {
      res = /^[[{]/.test(text) ? parseJsonQuestions(text, defCh) : parseQuestionText(text, defCh);
    } catch (e) {
      box.innerHTML = `<div class="preview"><div class="preview-summary bad">${icon('alert')} JSON không hợp lệ: ${esc(e.message)}</div></div>`;
      PENDING = null;
      return;
    }
    PENDING = res;
    const ok = res.questions.length, bad = res.errors.length;
    const tone = ok && !bad ? 'ok' : ok ? 'warn' : 'bad';
    const preview = res.questions.slice(0, 3).map((q) => `
      <div class="preview-item">
        <b>${esc(q.question)}</b>
        ${q.parts
          ? `<ol class="dec">${q.parts.map((p) => `<li>${esc(p.text)} → <span class="ans">${esc(p.answer)}</span></li>`).join('')}</ol>`
          : `<ol>${q.options.map((o, i) => `<li class="${[].concat(q.answer).includes(LETTERS[i]) ? 'ans' : ''}">${esc(o)}</li>`).join('')}</ol>`}
        <small class="muted">${esc(chapterLabel(q.chapter))}${q.explanation ? ' · có giải thích' : ''}</small>
      </div>`).join('');
    box.innerHTML = `
      <div class="preview">
        <div class="preview-summary ${tone}">${icon(ok ? 'checkCircle' : 'alert')}
          <span>Nhận diện được <b>${ok}</b> câu hợp lệ${bad ? ` · <b>${bad}</b> câu cần sửa` : ''}</span>
        </div>
        ${bad ? `<ul class="error-list">${res.errors.slice(0, 50).map((er) => `<li>Dòng ${er.line}${er.snippet ? ` (“${esc(er.snippet)}”)` : ''}: ${esc(er.msg)}</li>`).join('')}</ul>` : ''}
        ${preview}
        ${ok > 3 ? `<p class="muted small">… và ${ok - 3} câu khác.</p>` : ''}
        ${ok ? `<div class="preview-actions">
          <button type="button" class="btn btn-primary" data-action="import-save">${icon('plus')} Lưu ${ok} câu vào ngân hàng</button>
          <button type="button" class="btn btn-soft" data-action="import-copy">${icon('copy')} Sao chép mã cho questions.js</button>
        </div>` : ''}
      </div>`;
  }

  function refreshAfterBankChange() {
    loadBank();
    S = loadSession();
  }

  function importSave() {
    if (!PENDING || !PENDING.questions.length) return;
    const custom = store.get(KEYS.custom, []);
    const seen = new Set(BY_UID.keys());
    let added = 0, dup = 0;
    PENDING.questions.forEach((q) => {
      const n = normalizeQuestion(q);
      if (!n) return;
      if (seen.has(n.uid)) { dup++; return; }
      seen.add(n.uid);
      custom.push(q);
      added++;
    });
    if (added && !store.set(KEYS.custom, custom)) {
      toast('Không lưu được: bộ nhớ trình duyệt bị chặn hoặc đã đầy.', 'bad');
      return;
    }
    refreshAfterBankChange();
    PENDING = null;
    toast(added ? `Đã thêm ${added} câu hỏi${dup ? ` (bỏ qua ${dup} câu trùng)` : ''}.` : 'Tất cả câu hỏi đều đã có trong ngân hàng.', added ? 'ok' : 'warn');
    renderImport();
  }

  function download(filename, text) {
    const blob = new Blob([text], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e2) { ok = false; }
      ta.remove();
      return ok;
    }
  }

  async function copyForQuestionsJs(list) {
    const ok = await copyText(toQuestionsJs(list));
    toast(ok ? `Đã sao chép ${list.length} câu. Dán vào cuối mảng QUESTION_BANK trong js/questions.js.` : 'Trình duyệt chặn sao chép — hãy dùng “Tải file .json”.', ok ? 'ok' : 'bad');
  }

  function onImportFile(file) {
    if (!file) return;
    if (/\.(docx?|pdf|xlsx?)$/i.test(file.name)) {
      toast('Hãy mở file, bấm Ctrl+A để chọn hết, Ctrl+C rồi dán vào ô nhập.', 'warn');
      return;
    }
    if (file.size > 5 * 1024 * 1024) { toast('File quá lớn (tối đa 5 MB).', 'bad'); return; }
    const reader = new FileReader();
    reader.onload = () => {
      $('#import-text').value = String(reader.result || '');
      importParse();
    };
    reader.onerror = () => toast('Không đọc được file.', 'bad');
    reader.readAsText(file, 'utf-8');
  }

  /* ======================= 11. MODAL, THÔNG BÁO, GIAO DIỆN ======================= */
  let MODAL_ACTIONS = [];
  let modalToken = 0;
  let modalReturnFocus = null;

  function openModal({ icon: ic, title, body, actions, cls }) {
    const root = $('#modal');
    const token = ++modalToken;
    MODAL_ACTIONS = actions && actions.length ? actions : [{ label: 'Đóng', cls: 'btn-primary' }];
    if (root.hidden) modalReturnFocus = document.activeElement;
    root.innerHTML = `
      <div class="modal-backdrop" data-modal-close></div>
      <div class="modal${cls ? ' ' + cls : ''}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        ${ic ? `<div class="modal-icon">${icon(ic)}</div>` : ''}
        <h2 id="modal-title">${title}</h2>
        <div class="modal-body">${body}</div>
        <div class="modal-actions">
          ${MODAL_ACTIONS.map((a, i) => `<button type="button" class="btn ${a.cls || 'btn-ghost'}" data-modal-act="${i}">${a.label}</button>`).join('')}
        </div>
      </div>`;
    root.hidden = false;
    requestAnimationFrame(() => {
      if (token !== modalToken) return;
      root.classList.add('open');
      const btns = $$('[data-modal-act]', root);
      if (btns.length) btns[btns.length - 1].focus();
    });
  }

  function closeModal(instant) {
    const root = $('#modal');
    if (root.hidden) return;
    const token = ++modalToken;
    root.classList.remove('open');
    const done = () => {
      if (token !== modalToken) return; // đã mở modal khác
      root.hidden = true;
      root.innerHTML = '';
    };
    if (instant) done(); else setTimeout(done, 220);
    if (!instant && modalReturnFocus && document.contains(modalReturnFocus)) {
      try { modalReturnFocus.focus({ preventScroll: true }); } catch (e) { /* bỏ qua */ }
    }
  }

  function toast(msg, type = 'info') {
    const root = $('#toasts');
    const el = document.createElement('div');
    el.className = 'toast ' + type;
    el.setAttribute('role', 'status');
    el.innerHTML = `${icon(type === 'ok' ? 'checkCircle' : type === 'info' ? 'info' : 'alert')}<span>${esc(msg)}</span>`;
    root.appendChild(el);
    while (root.children.length > 3) root.firstElementChild.remove();
    setTimeout(() => el.classList.add('out'), 3200);
    setTimeout(() => el.remove(), 3550);
  }

  function confetti() {
    if (reducedMotion()) return;
    const box = document.createElement('div');
    box.className = 'confetti';
    box.setAttribute('aria-hidden', 'true');
    const colors = ['#c0281f', '#f0b429', '#16a34a', '#2563eb', '#f97316', '#db2777', '#ffd77a'];
    for (let i = 0; i < 110; i++) {
      const p = document.createElement('i');
      p.style.setProperty('--x', (Math.random() * 100).toFixed(2) + 'vw');
      p.style.setProperty('--dx', (Math.random() * 30 - 15).toFixed(2) + 'vw');
      p.style.setProperty('--r', Math.round(Math.random() * 900 - 450) + 'deg');
      p.style.setProperty('--d', (2.4 + Math.random() * 1.8).toFixed(2) + 's');
      p.style.setProperty('--delay', (Math.random() * 0.5).toFixed(2) + 's');
      p.style.background = colors[i % colors.length];
      if (i % 3 === 0) { p.style.width = '10px'; p.style.height = '10px'; p.style.borderRadius = '50%'; }
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 5000);
  }

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const btn = $('#theme-toggle');
    btn.innerHTML = icon(t === 'dark' ? 'sun' : 'moon');
    const label = t === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối';
    btn.setAttribute('aria-label', label);
    btn.title = label;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#14100e' : '#f7f3ec');
  }

  function toggleTheme() {
    const t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t);
    try { localStorage.setItem(KEYS.theme, t); } catch (e) { /* bỏ qua */ }
  }

  /* ======================= 12. SỰ KIỆN & KHỞI ĐỘNG ======================= */
  const RENDERERS = {
    home: renderHome,
    setup: renderSetup,
    quiz: renderQuiz,
    result: renderResult,
    review: renderReview,
    search: renderSearch,
    import: renderImport
  };

  const ACTIONS = {
    'skip': () => $('#main').focus(),
    'open-setup': () => go('setup'),
    'scroll-chapters': () => {
      const el = $('#chapters');
      if (el) el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    },
    'chapter-setup': (el) => { PREFS.chapters = [Number(el.dataset.ch)]; savePrefs(); go('setup'); },
    'chapter-quick': (el) => {
      const ch = Number(el.dataset.ch);
      const pool = BANK.filter((q) => q.chapter === ch);
      guardSession(() => startQuiz(shuffle(pool).slice(0, 10).map((q) => q.uid), {
        mode: 'practice', shuffleQ: true, shuffleOpt: PREFS.shuffleOpt, label: 'Luyện nhanh ' + chapterLabel(ch)
      }));
    },
    'practice-wrongbook': () => {
      const uids = wrongBookUids();
      if (!uids.length) return;
      guardSession(() => startQuiz(uids, { mode: 'practice', shuffleQ: true, shuffleOpt: PREFS.shuffleOpt, label: 'Ôn câu sai' }));
    },
    'clear-history': () => openModal({
      icon: 'trash',
      title: 'Xóa lịch sử làm bài?',
      body: 'Lịch sử, điểm cao nhất và tỉ lệ đúng theo bài sẽ bị xóa. Sổ câu sai vẫn được giữ lại.',
      actions: [
        { label: 'Hủy', cls: 'btn-ghost' },
        { label: 'Xóa lịch sử', cls: 'btn-primary', onClick: () => { store.remove(KEYS.history); store.remove(KEYS.stats); toast('Đã xóa lịch sử.', 'ok'); render(); } }
      ]
    }),
    'resume': () => go('quiz'),
    'discard': () => openModal({
      icon: 'trash',
      title: 'Hủy bài làm dở?',
      body: 'Các câu trả lời của bài đang làm sẽ bị xóa và không được tính điểm.',
      actions: [
        { label: 'Giữ lại', cls: 'btn-ghost' },
        { label: 'Hủy bài', cls: 'btn-primary', onClick: () => { clearSession(); toast('Đã hủy bài làm dở.'); render(); } }
      ]
    }),
    'toggle-all-chapters': () => {
      PREFS.chapters = selectedChapters().length === allChapterIds().length ? [] : null;
      savePrefs();
      syncSetup();
    },
    'start': () => guardSession(startFromSetup),
    'choose': (el) => choose(Number(el.dataset.orig)),
    'choose-part': (el) => choosePart(Number(el.dataset.part), Number(el.dataset.orig)),
    'prev': () => S && goTo(S.current - 1),
    'next': () => S && goTo(S.current + 1),
    'goto': (el) => goTo(Number(el.dataset.i)),
    'flag': () => S && toggleFlag(),
    'submit': () => confirmSubmit(),
    'toggle-palette': () => togglePalette(),
    'quit-quiz': () => {
      toast(S && S.endsAt ? 'Đã lưu bài làm. Lưu ý: đồng hồ thi thử vẫn tiếp tục chạy.' : 'Đã lưu bài làm, bạn có thể tiếp tục bất cứ lúc nào.', 'ok');
      go('home');
    },
    'go-review': () => go('review'),
    'go-result': () => go('result'),
    'retry-wrong': () => {
      if (!LAST) return;
      const uids = LAST.items.filter((x) => !x.correct).map((x) => x.uid).filter((u) => BY_UID.has(u));
      if (!uids.length) return;
      const timed = LAST.mode === 'exam' && LAST.timeLimit > 0;
      guardSession(() => startQuiz(uids, {
        mode: LAST.mode, minutes: timed ? autoMinutes(uids.length) : 0,
        shuffleQ: true, shuffleOpt: PREFS.shuffleOpt, label: 'Làm lại câu sai'
      }));
    },
    'review-filter': (el) => { REVIEW_FILTER = el.dataset.f; renderReview(); },
    'search-more': () => { SEARCH.limit += 30; updateSearch(); },
    'practice-search': () => {
      const uids = SEARCH.list.map((q) => q.uid);
      if (!uids.length) return;
      guardSession(() => startQuiz(uids, { mode: 'practice', shuffleQ: true, shuffleOpt: PREFS.shuffleOpt, label: 'Từ kết quả tra cứu' }));
    },
    'import-sample': () => { $('#import-text').value = SAMPLE; importParse(); },
    'import-parse': () => importParse(),
    'import-save': () => importSave(),
    'import-copy': () => { if (PENDING && PENDING.questions.length) copyForQuestionsJs(PENDING.questions); },
    'copy-custom': () => {
      const list = store.get(KEYS.custom, []);
      if (list.length) copyForQuestionsJs(list);
    },
    'export-custom': () => {
      const list = store.get(KEYS.custom, []);
      if (!list.length) return;
      download('cau-hoi-cnxhkh.json', JSON.stringify(list, null, 2));
      toast(`Đã tải về ${list.length} câu hỏi.`, 'ok');
    },
    'cat-view': (el) => viewCat(Number(el.dataset.i)),
    'clear-custom': () => openModal({
      icon: 'trash',
      title: 'Xóa các câu hỏi đã thêm?',
      body: 'Toàn bộ câu hỏi bạn tự thêm trên trình duyệt này sẽ bị xóa. Câu hỏi trong file <code>js/questions.js</code> không bị ảnh hưởng.',
      actions: [
        { label: 'Hủy', cls: 'btn-ghost' },
        { label: 'Xóa tất cả', cls: 'btn-primary', onClick: () => { store.remove(KEYS.custom); refreshAfterBankChange(); toast('Đã xóa các câu hỏi đã thêm.', 'ok'); renderImport(); } }
      ]
    })
  };

  function onClick(e) {
    const modalAct = e.target.closest('[data-modal-act]');
    if (modalAct) {
      const action = MODAL_ACTIONS[Number(modalAct.dataset.modalAct)];
      closeModal();
      if (action && action.onClick) action.onClick();
      return;
    }
    if (e.target.closest('[data-modal-close]')) { closeModal(); return; }
    const el = e.target.closest('[data-action]');
    if (!el || el.disabled) return;
    const fn = ACTIONS[el.dataset.action];
    if (fn) { e.preventDefault(); fn(el, e); }
  }

  function onKeydown(e) {
    const modalOpen = !$('#modal').hidden;
    if (e.key === 'Escape') {
      if (modalOpen) closeModal(); else closePalette();
      return;
    }
    if (modalOpen) {
      if (e.key === 'Tab') { // giữ tiêu điểm trong hộp thoại
        const btns = $$('#modal button');
        if (!btns.length) return;
        const first = btns[0], last = btns[btns.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
      return;
    }
    if (currentView !== 'quiz' || !S) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest && e.target.closest('input, textarea, select')) return;

    const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    const order = S.items[S.current].order;
    const q = currentQ();
    let pos = -1;
    if (/^[1-6]$/.test(key)) pos = Number(key) - 1;
    else if (q.type !== 'parts' && /^[A-F]$/.test(key) && !(key === 'F' && order.length < 6)) pos = LETTERS.indexOf(key);

    if (pos >= 0 && pos < order.length) {
      e.preventDefault();
      if (q.type === 'parts') {
        // câu nhiều ý: phím số chọn đáp án cho ý đầu tiên còn trống
        const a = S.answers[S.current] || [];
        const j = q.parts.findIndex((_, k) => a[k] == null);
        if (j >= 0) choosePart(j, order[pos]);
      } else {
        choose(order[pos]);
      }
      return;
    }
    if (key === 'F') { e.preventDefault(); toggleFlag(); return; }
    if (key === 'ArrowRight') { e.preventDefault(); goTo(S.current + 1); return; }
    if (key === 'ArrowLeft') { e.preventDefault(); goTo(S.current - 1); return; }
    if (key === 'Enter' && !(e.target.closest && e.target.closest('button, a'))) {
      e.preventDefault();
      if (S.current < S.items.length - 1) goTo(S.current + 1); else confirmSubmit();
    }
  }

  function init() {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    loadBank();
    S = loadSession();
    LAST = loadLast();

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeydown);
    $('#theme-toggle').addEventListener('click', toggleTheme);
    window.addEventListener('hashchange', render);

    const setupView = $('#view-setup');
    setupView.addEventListener('change', onSetupInput);
    setupView.addEventListener('input', onSetupInput);

    const searchView = $('#view-search');
    searchView.addEventListener('input', onSearchInput);
    searchView.addEventListener('change', (e) => { if (e.target.id !== 'search-q') onSearchInput(e); });

    $('#view-import').addEventListener('change', (e) => {
      if (e.target.id === 'import-file') {
        onImportFile(e.target.files && e.target.files[0]);
        e.target.value = '';
      }
    });

    // Lưu bài làm khi rời trang (phòng trường hợp đóng tab)
    window.addEventListener('pagehide', saveSession);

    if (!/^#\//.test(location.hash)) {
      try { history.replaceState(null, '', '#/home'); } catch (e) { /* bỏ qua */ }
    }
    render();

    if (BANK_WARNINGS) {
      toast(`${BANK_WARNINGS} câu trong questions.js sai định dạng nên bị bỏ qua (xem Console – F12).`, 'warn');
    }
  }

  init();
})();
