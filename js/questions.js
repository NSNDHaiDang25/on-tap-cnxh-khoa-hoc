/* ==========================================================================
   NGÂN HÀNG CÂU HỎI — Chủ nghĩa xã hội khoa học
   Nội dung lấy từ 6 file "CHỦ NGHĨA XÃ HỘI KHOA HỌC - BÀI 1…6.docx"
   --------------------------------------------------------------------------
   CÁC DẠNG CÂU HỎI (sao chép một khối { ... } để thêm câu mới):

   1) Một đáp án đúng
     { chapter: 1, question: "Nội dung câu hỏi?",
       options: ["Phương án A", "Phương án B", "Phương án C", "Phương án D"],
       answer: "B" },

   2) Nhiều đáp án đúng — answer là danh sách chữ cái
     { chapter: 1, question: "Nội dung câu hỏi?",
       options: ["…", "…", "…", "…"],
       answer: ["A", "C"] },

   3) Đúng/Sai từng ý, kéo thả, ghép nối, phân loại — mỗi ý chọn một
      trong các lựa chọn của "choices"; answer của từng ý ghi đúng chữ
      của lựa chọn đó
     { chapter: 1, question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
       choices: ["Đúng", "Sai"],
       parts: [
         { text: "Phát biểu thứ nhất", answer: "Đúng" },
         { text: "Phát biểu thứ hai", answer: "Sai" }
       ] },

   chapter là số bài (1–6, khớp với CHAPTERS). Có thể thêm
   explanation: "Giải thích…" vào bất kỳ câu nào.
   ========================================================================== */

window.CHAPTERS = [
  { id: 1, title: "Nhập môn CNXH khoa học và sứ mệnh lịch sử của giai cấp công nhân" },
  { id: 2, title: "Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội" },
  { id: 3, title: "Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa" },
  { id: 4, title: "Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ" },
  { id: 5, title: "Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên CNXH" },
  { id: 6, title: "Vấn đề gia đình trong thời kỳ quá độ lên CNXH" }
];

window.QUESTION_BANK = [
  /* -------------------------------------------------------------------- */
  /* BÀI 1 — NHẬP MÔN CNXH KHOA HỌC VÀ SỨ MỆNH LỊCH SỬ CỦA GIAI CẤP CÔNG NHÂN */
  /* -------------------------------------------------------------------- */
  {
    chapter: 1,
    question: "Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX là ai?",
    options: [
      "Xanh Ximông, Giăng Mêliê, Rôbớt Ôoen",
      "Xanh Ximông, Sắclơ Phuriê, Rôbớt Ôoen",
      "Grắccơ Babớp, Xanh Ximông, Sắclơ Phuriê",
      "Xanh Ximông, Sắclơ Phuriê, G. Mably"
    ],
    answer: "B"
  },
  {
    chapter: 1,
    question: "Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
    options: [
      "Tuyên ngôn của Đảng Cộng sản",
      "Tình cảnh nước Anh",
      "Góp phần phê phản triết học pháp quyền của Hêghen – Lời nói đầu",
      "Bộ tư bản"
    ],
    answer: "A"
  },
  {
    chapter: 1,
    question: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
    options: [
      "Là những quy luật văn hoá - xã hội.",
      "Là những quy luật và tính quy luật chính trị – xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa",
      "Là những quy luật kinh tế",
      "Là những quy luật hình thành, phát triển và hoàn thiện của các hình thái kinh tế - xã hội."
    ],
    answer: "B"
  },
  {
    chapter: 1,
    question: "Phát kiến nào của C.Mác và Ph.Ăngghen chỉ ra sự diệt vong về kinh tế của chủ nghĩa tư bản?",
    options: [
      "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân",
      "Học thuyết về giá trị thặng dư",
      "Chủ nghĩa duy vật biện chứng",
      "Chủ nghĩa duy vật lịch sử"
    ],
    answer: "B"
  },
  {
    chapter: 1,
    question: "Ph.Ăngghen đã đánh giá: \"Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học\". Hai phát kiến đó là gì?",
    options: [
      "Sứ mệnh lịch sử của giai cấp công nhân – Học thuyết giá trị thặng dư",
      "Sứ mệnh lịch sử của giai cấp công nhân – Chủ nghĩa duy vật lịch sử",
      "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử",
      "Học thuyết giá trị thặng dư – Chủ nghĩa duy vật lịch sử"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Phạm trù nào được coi là cơ bản nhất và là xuất phát điểm của chủ nghĩa xã hội khoa học?",
    options: [
      "Giai cấp công nhân",
      "Cách mạng xã hội chủ nghĩa",
      "Chuyên chính vô sản",
      "Sứ mệnh lịch sử của giai cấp công nhân"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Điền từ còn thiếu vào chỗ trống: Giai cấp công nhân và nhân dân lao động là cơ sở..., cơ sở... của Đảng cộng sản, là nguồn bổ sung lực lượng phong phú cho Đảng.",
    options: [
      "Chính trị - xã hội",
      "Giai cấp – xã hội",
      "Kinh tế - xã hội",
      "Văn hoá - xã hội"
    ],
    answer: "A"
  },
  {
    chapter: 1,
    question: "Giai cấp công nhân Việt Nam ra đời vào thời gian nào?",
    options: [
      "Trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp",
      "Những năm đầu thế kỷ 19.",
      "Trong cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp",
      "Trước khi thực dân Pháp xâm lược Việt Nam."
    ],
    answer: "A"
  },
  {
    chapter: 1,
    question: "Điền từ còn thiếu vào chỗ trống “Giai cấp công nhân Việt Nam thực hiện lãnh đạo cách mạng thông qua đội tiên phong của nó là (...)”",
    options: [
      "Mặt trận tổ quốc Việt Nam",
      "Tổ chức công đoàn",
      "Tổng liên đoàn lao động Việt Nam",
      "Đảng Cộng sản Việt Nam"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Hạn chế cơ bản lớn nhất mà giai cấp công nhân Việt Nam hiện nay cần khắc phục là gì?",
    options: [
      "Hiệu quả lao động thấp",
      "Tâm lý tiểu nông",
      "Số lượng còn ít",
      "Trình độ khoa học kỹ thuật chưa cao"
    ],
    answer: "B"
  },
  {
    chapter: 1,
    question: "Điểm then chốt để giúp giai cấp công nhân Việt Nam hiện nay thực hiện thành công sứ mệnh lịch sử của mình là:",
    options: [
      "Coi trọng công tác xây dựng, chỉnh đốn Đảng",
      "Phát triển giai cấp công nhân cả về số lượng và chất lượng",
      "Trí thức hoá giai cấp công nhân",
      "Xây dựng khối liên minh công – nông"
    ],
    answer: "A"
  },
  {
    chapter: 1,
    question: "Theo Ph. Ắngghen: “Thực hiện nhiệm vụ giải phóng thế giới ấy, đó là sứ mệnh lịch sử của........” Hãy chọn đáp án đúng điền vào chỗ trống?",
    options: [
      "Giai cấp tư sản",
      "Giai cấp tiểu tư sản",
      "Giai cấp nông dân",
      "Giai cấp vô sản"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử của mình là:",
    options: [
      "Không cần liên minh với các giai cấp, tầng lớp khác",
      "Đảng Cộng sản",
      "Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng",
      "Sở hữu toàn bộ tư liệu sản xuất trong xã hội"
    ],
    answer: ["B", "C"]
  },
  {
    chapter: 1,
    question: "Đặc điểm nào sau đây thể hiện đúng bản chất của giai cấp công nhân?",
    options: [
      "Không sở hữu tư liệu sản xuất, sống bằng lao động làm thuê",
      "Có trình độ học vấn thấp, chủ yếu làm việc tay chân",
      "Luôn gắn bó với giai cấp địa chủ và tiểu thương",
      "Có tính tổ chức và kỷ luật cao trong lao động sản xuất"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 1,
    question: "Giai cấp công nhân Việt Nam có đặc điểm gì khác với giai cấp công nhân ở các nước tư bản?",
    options: [
      "Không có sự gắn kết với các giai cấp, tầng lớp khác",
      "Xuất thân từ nông dân là chủ yếu",
      "Chịu sự bóc lót của thực dân và phong kiến",
      "Sở hữu tư liệu sản xuất trong xã hội"
    ],
    answer: ["B", "C"]
  },
  {
    chapter: 1,
    question: "Phát kiến nào của C.Mác và Ph.Ăngghen chỉ ra những hạn chế có tính lịch sử của chủ nghĩa xã hội không tưởng?",
    options: [
      "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân",
      "Học thuyết về giá trị thặng dư",
      "Chủ nghĩa duy vật biện chứng",
      "Chủ nghĩa duy vật lịch sử"
    ],
    answer: "A"
  },
  {
    chapter: 1,
    question: "Đâu là nhân tố chủ quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình?",
    options: [
      "Liên minh giai cấp công nhân với giai cấp nông dân",
      "Sự phát triển của giai cấp công nhân về số lượng",
      "Sự phát triển của giai cấp công nhân về chất lượng",
      "Đảng Cộng sản"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Tìm ý đúng để hoàn thiện luận điểm sau: Cùng với sự phát triển của khoa học và công nghệ ngày càng hiện đại, giai cấp công nhân:",
    options: [
      "Tăng về số lượng và giảm về chất lượng",
      "Giảm về số lượng và có trình độ sản xuất ngày càng cao",
      "Tăng về số lượng và nâng cao về chất lượng",
      "Giảm về số lượng và nâng cao về chất lượng."
    ],
    answer: "C"
  },
  {
    chapter: 1,
    question: "Dấu hiệu đánh dấu sự trưởng thành vượt bậc của giai cấp công nhân với tư cách là giai cấp cách mạng là:",
    options: [
      "Sự trưởng thành về trình độ kỹ thuật",
      "Sự trưởng thành về ý thức chính trị",
      "Sự trưởng thành về trình độ nhận thức",
      "Sự ra đời của Đảng Cộng sản"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Trong các nội dung sau đây thì nội dung nào thuộc về giải pháp xây dựng giai cấp công nhân Việt Nam hiện nay?",
    options: [
      "Xây dựng giai cấp công nhân tăng về số lượng và chất lượng",
      "Coi trọng và giữ vững bản chất giai cấp công nhân và nguyên tắc sinh hoạt Đảng",
      "Xây dựng giai cấp công nhân lớn mạnh, có giác ngộ giai cấp và chính trị vững vàng",
      "Nâng cao nhận thức, kiên định quan điểm giai cấp công nhân là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Vấn đề nổi bật nhất đối với việc thực hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay là gì?",
    options: [
      "Tham gia xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Lực lượng chủ đạo trong lao động",
      "Phát huy vai trò và trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hoá, hiện đại hoá đất nước",
      "Nắm vững khoa học và công nghệ"
    ],
    answer: "C"
  },
  {
    chapter: 1,
    question: "Theo C.Mác và Ph.Ăngghen thì đặc điểm nổi bật của giai cấp công nhân là:",
    options: [
      "Giai cấp cách mạng và có tinh thần cách mạng triệt để",
      "Lao động bằng phương thức công nghiệp",
      "Có quyền sở hữu toàn bộ tư liệu sản xuất",
      "Làm việc trong nông nghiệp, sử dụng công cụ thủ công"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 1,
    question: "Xét về phương thức lao động, phương thức sản xuất, giai cấp công nhân mang thuộc tính cơ bản nào?",
    options: [
      "Là giai cấp trực tiếp hay gián tiếp vận hành máy móc có tính chất công nghiệp ngày càng hiện đại",
      "Là giai cấp tạo ra của cải vật chất làm giàu cho xã hội",
      "Có số lượng đông nhất trong dân cư.",
      "Giai cấp có tư liệu sản xuất nhiều nhất"
    ],
    answer: "A"
  },
  {
    chapter: 1,
    question: "Đặc điểm sứ mệnh lịch sử của giai cấp công nhân là:",
    options: [
      "Thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác",
      "Thay thế chế độ công hữu này bằng một chế độ công hữu khác",
      "Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất",
      "Thay thế chế độ chiếm hữu nô lệ bằng chế độ xã hội chủ nghĩa"
    ],
    answer: "C"
  },
  {
    chapter: 1,
    question: "Nội dung trực tiếp về văn hoá tư tưởng thể hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam là:",
    options: [
      "Xây dựng hệ giá trị và con người Việt Nam",
      "Xây dựng con người mới xã hội chủ nghĩa",
      "Xây dựng nền giáo dục hiện đại",
      "Xây dựng nền văn hoá Việt Nam tiên tiến, đậm đà bản sắc dân tộc"
    ],
    answer: "D"
  },
  {
    chapter: 1,
    question: "Trong các nội dung sau đây thì nội dung nào thuộc về giải pháp xây dựng giai cấp công nhân Việt Nam hiện nay?",
    options: [
      "Thực hiện tốt chính sách và pháp luật đối với công nhân và người lao động.",
      "Xây dựng giai cấp công nhân lớn mạnh, có giác ngộ giai cấp và chính trị vững vàng",
      "Thực hiện chiến lược xây dựng giai cấp công nhân lớn mạnh, gắn kết chặt chẽ với chiến lược phát triển kinh tế - xã hội, công nghiệp hoá, hiện đại hoá đất nước, hội nhập quốc tế",
      "Coi trọng và giữ vững bản chất giai cấp công nhân và nguyên tắc sinh hoạt Đảng"
    ],
    answer: "C"
  },
  {
    chapter: 1,
    question: "Giai cấp công nhân Việt Nam chủ yếu xuất thân từ tầng lớp nào?",
    options: [
      "Giai cấp nông dân bị tước đoạt hết ruộng đất",
      "Tầng lớp địa chủ phong kiến",
      "Thợ thủ công bị phá sản",
      "Tầng lớp tư sản dân tộc"
    ],
    answer: ["A", "C"]
  },
  {
    chapter: 1,
    question: "Xét trong quan hệ sản xuất tư bản chủ nghĩa giai cấp công nhân là:",
    options: [
      "Giai cấp nghèo khổ nhất",
      "Giai cấp không có tư liệu sản xuất, đi làm thuê cho nhà tư bản, bị nhà tư bản bóc lột giá trị thặng dư",
      "Giai cấp tạo ra của cải cho xã hội",
      "Giai cấp có số lượng đông trong dân cư"
    ],
    answer: "B"
  },
  {
    chapter: 1,
    question: "Trong thời kỳ thuộc địa, giai cấp công nhân Việt Nam chủ yếu làm việc trong:",
    options: [
      "Xí nghiệp thủ công truyền thống",
      "Hợp tác xã nông nghiệp",
      "Đồn điền cao su",
      "Nhà máy, hầm mỏ do thực dân Pháp xây dựng"
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 1,
    question: "Chủ nghĩa xã hội khoa học ra đời dựa trên cơ sở của những tiền đề nào?",
    options: [
      "Tiền đề khoa học tự nhiên",
      "Tiền đề khoa học lịch sử",
      "Tiền đề tư tưởng lý luận",
      "Tiền đề khoa học xã hội"
    ],
    answer: ["A", "C"]
  },
  {
    chapter: 1,
    question: "Nội dung sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay bao gồm:",
    options: [
      "Nội dung chính trị - xã hội",
      "Nội dung lý luận",
      "Nội dung kinh tế",
      "Nội dung văn hóa, tư tưởng"
    ],
    answer: ["A", "C", "D"]
  },
  {
    chapter: 1,
    question: "Câu nói sau đây được viết trong tác phẩm nào: \"Giai cấp tư sản, trong quá trình thống trị giai cấp chưa đầy một thế kỷ, đã tạo ra những lực lượng sản xuất nhiều hơn và đồ sộ hơn lực lượng sản xuất của tất cả các thế hệ trước gộp lại\"?",
    options: [
      "Chống Đuyrinh",
      "Bộ Tư bản",
      "Tuyên ngôn của Đảng Cộng sản",
      "Ba nguồn gốc và ba bộ phận cấu thành của chủ nghĩa Mác"
    ],
    answer: "C"
  },
  {
    chapter: 1,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Giai cấp công nhân đại diện cho phương thức sản xuất tiên tiến và lực lượng sản xuất hiện đại.", answer: "Đúng" },
      { text: "Giai cấp công nhân Việt Nam hiện nay đã tăng cả về số lượng và chất lượng.", answer: "Đúng" },
      { text: "Đảng Cộng sản là nhân tố khách quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình.", answer: "Sai" },
      { text: "Sự trưởng thành của Đảng Cộng sản – Hạt nhân chính trị quan trọng của giai cấp công nhân.", answer: "Đúng" }
    ]
  },
  {
    chapter: 1,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Giai cấp công nhân Việt Nam không có sự liên kết với các lực lượng cách mạng khác", answer: "Sai" },
      { text: "Giai cấp công nhân Việt Nam hiện nay đa dạng về cơ cấu nghề nghiệp, có mặt trong mọi thành phần kinh tế", answer: "Đúng" },
      { text: "Giai cấp công nhân Việt Nam là tầng lớp giàu có, ít chịu áp bức bóc lột.", answer: "Sai" },
      { text: "Giai cấp công nhân Việt Nam hiện nay đã tăng nhanh về số lượng và chất lượng", answer: "Đúng" }
    ]
  },
  {
    chapter: 1,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Giai cấp công nhân Việt Nam hiện nay đã tăng nhanh về số lượng và giảm về chất lượng.", answer: "Sai" },
      { text: "Giai cấp công nhân Việt Nam gắn bó mật thiết với các tầng lớp nhân dân trong xã hội.", answer: "Đúng" },
      { text: "Giai cấp công nhân Việt Nam là lực lượng nòng cốt của Đảng Cộng sản Việt Nam.", answer: "Đúng" },
      { text: "Giai cấp công nhân phát huy vai trò và trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.", answer: "Đúng" }
    ]
  },
  {
    chapter: 1,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Sự trưởng thành của Đảng Cộng sản – Hạt nhân chính trị quan trọng của giai cấp công nhân.", answer: "Đúng" },
      { text: "Giai cấp công nhân Việt Nam hiện nay đã tăng cả về số lượng và chất lượng.", answer: "Đúng" },
      { text: "Đảng Cộng sản là nhân tố khách quan quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình.", answer: "Sai" },
      { text: "Giai cấp công nhân đại diện cho phương thức sản xuất tiên tiến và lực lượng sản xuất hiện đại.", answer: "Đúng" }
    ]
  },
  {
    chapter: 1,
    question: "Chọn Đúng hoặc Sai với từng phát biểu:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Giai cấp công nhân là chủ thể của quá trình sản xuất vật chất hiện đại.", answer: "Đúng" },
      { text: "Đặc điểm nổi bật của giai cấp công nhân là lao động bằng phương thức nông nghiệp.", answer: "Sai" },
      { text: "Giai cấp công nhân là giai cấp cách mạng và có tinh thần cách mạng triệt để.", answer: "Đúng" },
      { text: "Giai cấp công nhân là những người lao động trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại và xã hội hóa cao.", answer: "Đúng" }
    ]
  },
  {
    chapter: 1,
    question: "Kéo thả các yếu tố sau đây vào cột tương ứng:",
    choices: ["Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân", "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử"],
    parts: [
      { text: "Đảng Cộng sản", answer: "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử" },
      { text: "Địa vị chính trị - xã hội của giai cấp công nhân", answer: "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân" },
      { text: "Địa vị kinh tế của giai cấp công nhân", answer: "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân" },
      { text: "Sự phát triển của bản thân giai cấp công nhân cả về số lượng và chất lượng", answer: "Điều kiện chủ quan để giai cấp công nhân thực hiện được sứ mệnh lịch sử" }
    ]
  },
  {
    chapter: 1,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 3 về trái dưới đây:",
    choices: ["Đảng Cộng Sản", "giai cấp", "tầng lớp", "tầng lớp nhân dân", "tầng lớp tri thức"],
    parts: [
      { text: "Giai cấp công nhân Việt Nam là lực lượng nòng cốt của ____ Việt Nam", answer: "Đảng Cộng Sản" },
      { text: "Giai cấp công nhân Việt Nam gắn bó mật thiết với các ____ trong xã hội", answer: "tầng lớp nhân dân" },
      { text: "Giai cấp công nhân Việt Nam có mối quan hệ mật thiết với giai cấp nông dân và ____", answer: "tầng lớp tri thức" }
    ]
  },
  {
    chapter: 1,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 4 về trái dưới đây:",
    choices: ["chủ thể", "lực lượng sản xuất", "nhân tố chủ quan", "phương thức sản xuất"],
    parts: [
      { text: "Đảng Cộng sản là ____ quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử của mình.", answer: "nhân tố chủ quan" },
      { text: "Giai cấp công nhân là ____ của quá trình sản xuất vật chất hiện đại.", answer: "chủ thể" },
      { text: "Giai cấp công nhân đại diện cho ____ tiên tiến.", answer: "phương thức sản xuất" },
      { text: "Giai cấp công nhân đại diện cho ____ hiện đại.", answer: "lực lượng sản xuất" }
    ]
  },
  {
    chapter: 1,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 - 3 vế trái dưới đây:",
    choices: ["giai cấp cách mạng", "giai cấp công nhân", "giai cấp vô sản", "giải phóng con người"],
    parts: [
      { text: "Giai cấp công nhân là ____ và có tinh thần cách mạng triệt để", answer: "giai cấp cách mạng" },
      { text: "Sứ mệnh lịch sử của giai cấp công nhân là____ khỏi áp bức, bất công, bóc lột", answer: "giải phóng con người" },
      { text: "Thực hiện sự nghiệp giải phóng thế giới ấy, đó là sứ mệnh lịch sử của ____ hiện đại", answer: "giai cấp vô sản" }
    ]
  },
  /* -------------------------------------------------------------------- */
  /* BÀI 2 — CHỦ NGHĨA XÃ HỘI VÀ THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI */
  /* -------------------------------------------------------------------- */
  {
    chapter: 2,
    question: "Theo C. Mác và Ph. Ăngghen thì giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa là gì?",
    options: [
      "Chủ nghĩa cộng sản",
      "Thời kỳ quá độ",
      "Cộng sản chủ nghĩa",
      "Chủ nghĩa xã hội"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Chủ nghĩa xã hội có mấy đặc trưng cơ bản?",
    options: [
      "8",
      "5",
      "6",
      "7"
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Hình thái kinh tế – xã hội cộng sản chủ nghĩa bắt đầu và hoàn thiện khi nào?",
    options: [
      "Bắt đầu từ khi Đảng Cộng sản ra đời và xây dựng xong chủ nghĩa xã hội.",
      "Bắt đầu từ thời kỳ quá độ và hoàn thiện ở giai đoạn thấp của xã hội cộng sản.",
      "Bắt đầu từ thời kỳ quá độ cho đến khi xây dựng xong giai đoạn cao của xã hội cộng sản.",
      "Bắt đầu từ giai đoạn thấp của xã hội cộng sản và hoàn thiện ở giai đoạn cao của xã hội cộng sản."
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Đặc trưng về kinh tế của chủ nghĩa xã hội là gì?",
    options: [
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại.",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ tư hữu về tư liệu sản xuất.",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất.",
      "Có nền kinh tế phát triển cao."
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Nguyên nhân sâu xa dẫn đến sự thay thế hình thái kinh tế – xã hội tư bản chủ nghĩa bằng hình thái kinh tế – xã hội cộng sản chủ nghĩa là gì?",
    options: [
      "Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa ngày càng cao với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu.",
      "Mâu thuẫn giữa phương thức sản xuất tư bản chủ nghĩa và phương thức sản xuất xã hội chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu.",
      "Mâu thuẫn giữa lực lượng sản xuất và tư liệu sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa.",
      "Mâu thuẫn giữa các giai cấp, tầng lớp trong xã hội dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu."
    ],
    answer: "A"
  },
  {
    chapter: 2,
    question: "Chọn cụm từ còn thiếu điền vào dấu “…”: “Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ … từ xã hội nọ sang xã hội kia” (C. Mác).",
    options: [
      "Đột phá cách mạng",
      "Cách mạng",
      "Cải biến cách mạng",
      "Quá độ"
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Kiểu quá độ lên chủ nghĩa xã hội ở Việt Nam là kiểu quá độ nào?",
    options: [
      "Quá độ trực tiếp",
      "Quá độ chủ quan",
      "Quá độ khách quan",
      "Quá độ gián tiếp"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Bổ sung và phát triển năm 2011) được Đảng ta thông qua ở Đại hội lần thứ mấy?",
    options: [
      "Đại hội XI",
      "Đại hội X",
      "Đại hội IX",
      "Đại hội XII"
    ],
    answer: "A"
  },
  {
    chapter: 2,
    question: "Tìm đáp án sai. Đặc trưng bản chất của chủ nghĩa xã hội Việt Nam theo tinh thần của Đại hội XI:",
    options: [
      "Quyền lực thuộc về giai cấp công nhân",
      "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện",
      "Có nền văn hóa tiên tiến đậm đà bản sắc dân tộc",
      "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới"
    ],
    answer: "A"
  },
  {
    chapter: 2,
    question: "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là bước quá độ:",
    options: [
      "Trực tiếp, từ chế độ phong kiến tiến lên chế độ xã hội chủ nghĩa.",
      "Trực tiếp, từ chế độ tư bản chủ nghĩa lên chế độ xã hội chủ nghĩa.",
      "Gián tiếp, bỏ qua chế độ tư bản chủ nghĩa tiến lên chủ nghĩa xã hội.",
      "Gián tiếp, bỏ qua chế độ phong kiến tiến lên chế độ xã hội chủ nghĩa."
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Đặc điểm về chính trị trong thời kỳ quá độ được thể hiện ở điểm nào?",
    options: [
      "Thiết lập chuyên chính vô sản",
      "Đa nguyên chính trị, đa đảng đối lập",
      "Xây dựng nền dân chủ xã hội chủ nghĩa",
      "Hoàn toàn không còn vai trò của nhà nước"
    ],
    answer: ["A", "C"]
  },
  {
    chapter: 2,
    question: "Đặc điểm nổi bật của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
    options: [
      "Từ một nền sản xuất nhỏ tiến lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa",
      "Xây dựng nhà nước pháp quyền tư sản",
      "Phát triển chủ nghĩa tư bản trong thời gian ngắn để tích lũy",
      "Có sự lãnh đạo của Đảng Cộng sản Việt Nam"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 2,
    question: "Câu “Cần phải có thời kỳ quá độ khá lâu dài từ chủ nghĩa tư bản lên chủ nghĩa xã hội” là của ai?",
    options: [
      "Ăngghen",
      "Heghen",
      "C.Mác",
      "Lênin"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Đặc điểm nổi bật của thời kỳ quá độ đó là:",
    options: [
      "Những yếu tố của xã hội mới đã phát triển, xoá bỏ hoàn toàn yếu tố của xã hội cũ.",
      "Tàn dư của xã hội cũ còn tồn tại",
      "Toàn bộ các yếu tố của xã hội bị triệt tiêu.",
      "Những nhân tố của xã hội mới và những tàn tích của xã hội cũ tồn tại đan xen lẫn nhau, đấu tranh với nhau trên mọi lĩnh vực."
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Về nội dung, thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải tạo cách mạng sâu sắc, triệt để xã hội tư bản chủ nghĩa trên các lĩnh vực:",
    options: [
      "Chủ yếu về văn hóa",
      "Chủ yếu về chính trị",
      "Chủ yếu là chính trị.",
      "Kinh tế, chính trị, văn hóa, xã hội"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Phát triển bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam được hiểu như thế nào?",
    options: [
      "Bỏ qua sự phát triển của lực lượng sản xuất tư bản chủ nghĩa",
      "Bỏ qua các yếu tố gắn với phương thức sản xuất tư bản chủ nghĩa",
      "Không xây dựng quan hệ sản xuất tư bản chủ nghĩa",
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất va kiến trúc thượng tang tư bản chủ nghĩa"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Chọn từ đúng điền vào chỗ trống để hoàn thành mục tiêu của Đảng xác định trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta: Độc lập dân tộc gắn liền với chủ nghĩa xã hội; dân giàu, nước mạnh, dân chủ, .... , văn minh",
    options: [
      "Phát triển",
      "Công bằng",
      "Bình đắng",
      "Tiến bộ"
    ],
    answer: "B"
  },
  {
    chapter: 2,
    question: "Theo quan điểm của chủ nghĩa Mác - Lênin mốc bắt đầu của thời kỳ quá độ lên chủ nghĩa xã hội từ khi nào?",
    options: [
      "Khi giai cấp công nhân đấu tranh giành chính quyền",
      "Khi giai cấp công nhân tiến hành cải tạo xã hội cũ và xây dựng xã hội mới",
      "Khi giai cấp công nhân và nhân dân lao động tiến hành cải tạo xã hội cũ",
      "Khi giai cấp công nhân và nhân dân lao động giành được chính quyền"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Đặc điểm của thời kỳ quá độ lên chủ nghĩa trên lĩnh vực kinh tế là gì?",
    options: [
      "Tồn tại giai cấp đối kháng",
      "Tồn tại đấu tranh giai cấp",
      "Tồn tại nhiều thành phần kinh tế",
      "Tồn tại nhiểu tàn dư văn hóa của chế độ cũ"
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa ở nước ta, được hiểu là:",
    options: [
      "Bỏ qua việc xác lập vị trí thống trị của kiến trúc thượng tầng tư bản chủ nghĩa nhưng không kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa nhưng kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa nhưng không kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa",
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa"
    ],
    answer: "D"
  },
  {
    chapter: 2,
    question: "Trong cuốn sách “Một số vấn đề lý luận và thực tiễn về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội ở Việt Nam\", Tổng Bí thư Nguyễn Phú Trọng khẳng định: đường lối cơ bản, xuyên suốt của cách mạng Việt Nam và cũng là điểm cốt yếu trong di sản tư tưởng của Chủ tịch Hồ Chí Minh là:",
    options: [
      "Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Chủ nghĩa xã hội và giải phóng giai cấp vô sản",
      "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
      "Độc lập dân tộc gắn liền với hội nhập kinh tế quốc tế"
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Chọn phương án sai",
    options: [
      "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa nhưng có sự tiếp thu, kế thừa toàn bộ các lĩnh vực đã tạo ra dưới chế độ tư bản chủ nghĩa",
      "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa tức là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
      "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng tất yếu chủ quan, con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội",
      "Con đường đi lên chủ nghĩa xã hội của nước ta là sự phát triển quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa"
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Tại sao cho rằng con đường cách mạng Việt Nam là quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là một tất yếu?",
    options: [
      "Vì nó phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại",
      "Vì không cần tiếp thu thành tựu khoa học, kỹ thuật dưới chế độ tư bản chủ nghĩa",
      "Vì sự phát triển của lực lượng sản xuất ngày càng cao",
      "Vì không cần tạo ra sự biến đổi về chất trên tất cả các lĩnh vực"
    ],
    answer: "A"
  },
  {
    chapter: 2,
    question: "Căn cứ vào giáo trình Chủ nghĩa xã hội khoa học, hãy xác định khái niệm dùng để chỉ một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa",
    options: [
      "Thời kỳ quá độ lên chủ nghĩa xã hội",
      "Chủ nghĩa xã hội",
      "Chủ nghĩa cộng sản",
      "Thời kỳ quá độ"
    ],
    answer: "B"
  },
  {
    chapter: 2,
    question: "Theo chủ nghĩa Mác – Lênin có mấy hình thức quá độ lên chủ nghĩa xã hội?",
    options: [
      "3",
      "1",
      "2",
      "4"
    ],
    answer: "C"
  },
  {
    chapter: 2,
    question: "Thời kỳ quá độ lên chủ nghĩa xã hội có những mâu thuẫn nào cần giải quyết?",
    options: [
      "Mâu thuẫn giữa cái cũ và cái mới trong xã hội",
      "Mâu thuẫn giữa các tầng lớp lao động và tư sản hoàn toàn biến mất.",
      "Mâu thuẫn giữa năng suất lao động và nhu cầu phát triển xã hội.",
      "Mâu thuẫn giữa các thành phần kinh tế khác nhau trong xã hội"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 2,
    question: "Việc \"bỏ qua chế độ tư bản chủ nghĩa\" ở Việt Nam có nghĩa là:",
    options: [
      "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
      "Tiếp thu, kế thừa những thành tựu nhân loại đã đạt được dưới chủ nghĩa tư bản",
      "Tăng cường sở hữu tư nhân để phát triển lực lượng sản xuất",
      "Loại bỏ hoàn toàn tất cả yếu tố tư bản trong nền kinh tế"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 2,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại chủ yếu là tư tưởng vô sản.", answer: "Sai" },
      { text: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại nền kinh tế nhiều thành phần.", answer: "Đúng" },
      { text: "Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải tạo cách mạng sâu sắc, triệt để trên lĩnh vực kinh tế.", answer: "Đúng" },
      { text: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại nhiều giai cấp, tầng lớp.", answer: "Đúng" }
    ]
  },
  {
    chapter: 2,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội tồn tại nhiều thành phần kinh tế", answer: "Đúng" },
      { text: "Thời kỳ quá độ lên chủ nghĩa xã hội có sự tồn tại song song giữa các yếu tố cũ và yếu tố mới", answer: "Đúng" },
      { text: "Thời kỳ quá độ lên chủ nghĩa xã hội chỉ có kinh tế nhà nước tồn tại và phát triển", answer: "Sai" },
      { text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội kinh tế tư nhân bị xóa bỏ hoàn toàn", answer: "Sai" }
    ]
  },
  {
    chapter: 2,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Việt Nam quá độ lên chủ nghĩa xã hội từ một nền sản xuất nhỏ, bỏ qua chế độ tư bản chủ nghĩa", answer: "Đúng" },
      { text: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là nhà nước của nhân dân, do nhân dân, vì nhân dân", answer: "Đúng" },
      { text: "Chủ nghĩa xã hội ở Việt Nam không chấp nhận kinh tế tư nhân tồn tại song song với kinh tế nhà nước", answer: "Sai" },
      { text: "Việc “bỏ qua\" chế độ tư bản chủ nghĩa là không kế thừa bất kỳ yếu tố tích cực nào của chủ nghĩa tư bản", answer: "Sai" }
    ]
  },
  {
    chapter: 2,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải biến cách mạng từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa", answer: "Đúng" },
      { text: "Quá độ gián tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước chưa trải qua chủ nghĩa tư bản phát triển", answer: "Đúng" },
      { text: "Quá độ trực tiếp từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước đã trải qua chủ nghĩa tư bản phát triển", answer: "Đúng" },
      { text: "Học thuyết hình thái kinh tế - xã hội của chủ nghĩa Mác - Lênin đã chỉ rõ: Lịch sử xã hội đã trải qua 4 hình thái kinh tế - xã hội", answer: "Đúng" }
    ]
  },
  {
    chapter: 2,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Chủ nghĩa xã hội ở Việt Nam không bao gồm việc xây dựng nền kinh tế thị trường", answer: "Sai" },
      { text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là sự lựa chọn duy nhất đúng, khoa học, phản ánh đúng quy luật phát triển khách quan của cách mạng Việt Nam trong thời đại ngày nay", answer: "Đúng" },
      { text: "Việt Nam thực hiện quá độ trực tiếp đi lên chủ nghĩa xã hội", answer: "Sai" },
      { text: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là một trong những phương hướng xây dựng chủ nghĩa xã hội ở Việt Nam", answer: "Đúng" }
    ]
  },
  {
    chapter: 2,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1–3:",
    choices: ["Con đường", "Quá độ gián tiếp", "Quá độ trực tiếp", "Thời kỳ quá độ"],
    parts: [
      { text: "____ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước đã trải qua chủ nghĩa tư bản phát triển.", answer: "Quá độ trực tiếp" },
      { text: "____ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước chưa trải qua chủ nghĩa tư bản phát triển.", answer: "Quá độ gián tiếp" },
      { text: "Thực chất của ____ lên chủ nghĩa xã hội là thời kỳ cải biến cách mạng từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa.", answer: "Thời kỳ quá độ" }
    ]
  },
  {
    chapter: 2,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 3 về trái dưới đây:",
    choices: ["quá độ gián tiếp", "quá độ trực tiếp", "tất yếu khách quan", "vị trí thống trị"],
    parts: [
      { text: "Việt Nam thực hiện____ đi lên chủ nghĩa xã hội", answer: "quá độ gián tiếp" },
      { text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, tức là bỏ qua việc xác lập____ của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.", answer: "vị trí thống trị" },
      { text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng____", answer: "tất yếu khách quan" }
    ]
  },
  {
    chapter: 2,
    question: "Đặc điểm về kinh tế của thời kỳ quá độ lên chủ nghĩa xã hội gồm:",
    options: [
      "Có những thành phần kinh tế đổi lập nhau",
      "Hoàn toàn không còn kinh tế tư nhân.",
      "Chỉ có kinh tế nhà nước tổn tại và phát triển.",
      "Tồn tại nền kinh tế nhiều thành phần"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 2,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 3 về trái dưới đây:",
    choices: ["chế độ chính trị", "kinh tế thị trường", "nhà nước pháp quyền", "quyền con người"],
    parts: [
      { text: "Việt Nam xây dựng nền ____ có sự điều tiết của nhà nước.", answer: "kinh tế thị trường" },
      { text: "Một đặc trưng chính trị của chủ nghĩa xã hội là xây dựng ____ xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.", answer: "nhà nước pháp quyền" },
      { text: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam tôn trọng, bảo vệ và bảo đảm ____", answer: "quyền con người" }
    ]
  },
  {
    chapter: 2,
    question: "Cuộc cách mạng của giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng cộng sản chống lại giai cấp tư sản, là cuộc cách mạng:",
    options: [
      "Cách mạng vô sản",
      "Cách mạng tư sản",
      "Cách mạng xã hội",
      "Cách mạng dân chủ tư sản"
    ],
    answer: "A"
  },
  {
    chapter: 2,
    question: "Hai loại quá độ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đó là:",
    options: [
      "Quá độ gián tiếp",
      "Quá độ trực tiếp",
      "Quá độ cơ bản",
      "Quá độ không cơ bản."
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 2,
    question: "Những đặc điểm nổi bật trong thời kỳ quá độ lên chủ nghĩa xã hội gồm:",
    options: [
      "Tổn tại nhiều thành phần kinh tế khác nhau.",
      "Xã hội hoàn toàn không còn giai cấp.",
      "Không còn mâu thuẫn xã hội nào.",
      "Sự tồn tại song song của các yếu tổ củ và yếu tố mới"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 2,
    question: "Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
    options: [
      "Chuyển thẳng từ chế độ phong kiến lên chủ nghĩa xã hội",
      "Bò qua chế độ phong kiến",
      "Xây dựng nên kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Bò qua chế độ tư bản chủ nghĩa"
    ],
    answer: ["C", "D"]
  },
  /* -------------------------------------------------------------------- */
  /* BÀI 3 — DÂN CHỦ XÃ HỘI CHỦ NGHĨA VÀ NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA */
  /* -------------------------------------------------------------------- */
  {
    chapter: 3,
    question: "Theo nguyên nghĩa tiếng Hy Lạp thì \"Dân chủ\" là gì?",
    options: [
      "Là quyền tự do của mỗi người",
      "Là quyền lực thuộc về nhân dân",
      "Là quyền của con người",
      "Là trật tự xã hội"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa là:",
    options: [
      "Thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu",
      "Thực hiện chế độ phân phối \"Làm theo năng lực, hưởng theo nhu cầu\"",
      "Thực hiện chế độ tư hữu về tư liệu sản xuất",
      "Thực hiện chế độ tư hữu về công cụ sản xuất chủ yếu"
    ],
    answer: "A"
  },
  {
    chapter: 3,
    question: "Chọn ý không đúng về điểm khác biệt của nền dân chủ xã hội chủ nghĩa so với nền dân chủ tư sản:",
    options: [
      "Mang tính nhất nguyên về chính trị",
      "Dựa trên chế độ sở hữu xã hội về những tư liệu sản xuất chủ yếu của toàn xã hội",
      "Trước hết và chủ yếu được thực hiện bằng Nhà nước pháp quyền xã hội chủ nghĩa",
      "Không mang tính giai cấp"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "Lịch sử loài người đã từng xuất hiện các nền dân chủ nào?",
    options: [
      "Nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản.",
      "Nền dân chủ nguyên thủy, nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản, nền dân chủ vô sản",
      "Nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản, nền dân chủ vô sản",
      "Nền dân chủ chủ nô, nền dân chủ tư sản, nền dân chủ xã hội chủ nghĩa"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "So với các nền dân chủ trước đây, dân chủ xã hội chủ nghĩa có điểm khác biệt cơ bản nào?",
    options: [
      "Là nền dân chủ phi lịch sử",
      "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
      "Không còn mang tính giai cấp",
      "Là nền dân chủ thuần túy"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Nhà nước pháp quyền XHCN quản lý mọi mặt của đời sống xã hội chủ yếu bằng gì?",
    options: [
      "Tuyên truyền",
      "Giáo dục",
      "Đường lối, chính sách",
      "Hiến pháp, pháp luật"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "Kiểu nhà nước nào sau đây được V.I. Lênin gọi là nhà nước \"nửa nhà nước\"?",
    options: [
      "Nhà nước chủ nô",
      "Nhà nước phong kiến",
      "Nhà nước tư sản",
      "Nhà nước xã hội chủ nghĩa"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng của nhà nước được chia thành:",
    options: [
      "Chức năng đối nội và chức năng đối ngoại",
      "Chức năng chính trị, kinh tế, văn hóa, xã hội",
      "Chức năng giai cấp, xã hội",
      "Chức năng trấn áp và chức năng tổ chức, xây dựng"
    ],
    answer: "A"
  },
  {
    chapter: 3,
    question: "Chế độ dân chủ nhân dân ở Việt Nam được xác lập từ khi nào?",
    options: [
      "Sau kháng chiến chống đế quốc Mỹ năm 1975",
      "Sau khi Đảng Cộng sản ra đời",
      "Sau kháng chiến chống thực dân Pháp năm 1954",
      "Sau cách mạng tháng Tám năm 1945"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "Nền dân chủ xã hội chủ nghĩa ở Việt Nam có điểm khác biệt cơ bản nào so với các nền dân chủ trước đây?",
    options: [
      "Là nền dân chủ phi lịch sử",
      "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
      "Là nền dân chủ thuần túy",
      "Còn mang tính giai cấp"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Tại sao quyền lực nhà nước ở Việt Nam được tổ chức theo nguyên tắc thống nhất?",
    options: [
      "Để tăng cường sự kiểm soát của nhà nước",
      "Để đảm bảo sự phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp và tư pháp",
      "Để kiểm soát chặt chẽ các hoạt động kinh tế",
      "Để giảm thiểu vai trò của các tổ chức phi chính phủ"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Hãy xác định biện pháp để nâng cao hiệu quả hoạt động của Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.",
    options: [
      "Giảm thiểu sự phát triển của khu vực tư nhân",
      "Tăng cường sự kiểm soát của nhà nước",
      "Xây dựng và từng bước hoàn thiện hệ thống giám sát, phản biện xã hội",
      "Giảm thiểu sự can thiệp của các tổ chức xã hội"
    ],
    answer: "C"
  },
  {
    chapter: 3,
    question: "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam có đặc điểm như thế nào?",
    options: [
      "Nhà nước đặt dưới sự lãnh đạo của Đảng cộng sản",
      "Nhà nước hoạt động trên nền tảng của khối liên minh công – nông – trí thức",
      "Nhà nước được tổ chức và hoạt động trên cơ sở Hiến pháp và pháp luật",
      "Nhà nước hình thành là kết quả của cách mạng xã hội chủ nghĩa"
    ],
    answer: "C"
  },
  {
    chapter: 3,
    question: "Dân chủ trong xã hội nguyên thủy được thể hiện như thế nào?",
    options: [
      "Mọi người đều bình đẳng trong quyết định các vấn đề chung",
      "Không có sự phân chia giai cấp và quyền lực",
      "Quyền lực tập trung vào một số cá nhân",
      "Hình thành tổ chức chính trị phức tạp"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 3,
    question: "Đặc điểm nổi bật của nền dân chủ xã hội chủ nghĩa là gì?",
    options: [
      "Tôn trọng quyền sở hữu tư nhân tuyệt đối",
      "Phân biệt rõ ràng giữa các tầng lớp xã hội",
      "Thực hiện quyền làm chủ tập thể của nhân dân",
      "Đặt quyền lợi của nhân dân lao động lên hàng đầu"
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 3,
    question: "Đâu là định nghĩa đúng và đầy đủ về dân chủ?",
    options: [
      "Dân chủ là một giá trị phản ánh những quyền tối thiểu của con người, là một hình thức tổ chức nhà nước thừa nhận quyền làm chủ của nhân dân; là một giá trị xã hội phản ánh sự nghiệp đấu tranh của con người",
      "Dân chủ là giá trị phản ánh quyền cơ bản của con người, là kết quả của sự nghiệp đấu tranh của con người vì lợi ích của con người",
      "Dân chủ là một giá trị phản ánh những quyền cơ bản của con người, là một hình thức tổ chức nhà nước của giai cấp cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại",
      "Dân chủ là một giá trị xã hội phản ánh sự nghiệp đấu tranh của con người vì sự phát triển tiến bộ xã hội"
    ],
    answer: "A"
  },
  {
    chapter: 3,
    question: "Bản chất tư tưởng - văn hoá - xã hội của nền dân chủ xã hội chủ nghĩa được thể hiện ở nội dung nào?",
    options: [
      "Lấy hệ tư tưởng của giai cấp nông dân làm chủ đạo",
      "Lấy hệ tư tưởng của giai cấp tư sản làm chủ đạo",
      "Lấy hệ tư tưởng của giai cấp tiểu tư sản làm chủ đạo",
      "Lấy hệ tư tưởng Mác - Lênin - hệ tư tưởng của giai cấp công nhân làm chủ đạo"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "Đặc điểm của nhà nước pháp quyền xã hội chủ nghĩa là gì?",
    options: [
      "Quản lý xã hội bằng dư luận",
      "Quản lý xã hội bằng mệnh lệnh hành chính",
      "Quản lý xã hội bằng niềm tin",
      "Quản lý xã hội bằng pháp luật"
    ],
    answer: "D"
  },
  {
    chapter: 3,
    question: "So với các mô hình nhà nước khác trong lịch sử thì nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam có sự khác biệt về chất như thế nào?",
    options: [
      "Vừa mang bản chất của giai cấp công nhân và nhân dân lao động",
      "Mang bản chất của đa số nhân dân lao động",
      "Mang bản chất của giai cấp công nhân, tính nhân dân rộng rãi và tính dân tộc sâu sắc",
      "Mang bản chất của giai cấp công nhân"
    ],
    answer: "C"
  },
  {
    chapter: 3,
    question: "Sự ra đời của nhà nước xã hội chủ nghĩa gắn với sự kiện nào?",
    options: [
      "Giai cấp công nhân đấu tranh đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động",
      "Giai cấp công nhân lật đổ nhà nước của giai cấp bóc lột, giành được chính quyền",
      "Giai cấp công nhân xây dựng công nghiệp",
      "Giai cấp công nhân đấu tranh phản đối tình trạng áp bức bóc lột của giai cấp tư sản"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Dân chủ xã hội chủ nghĩa mang tính nhất nguyên về chính trị, được hiểu là:",
    options: [
      "Nền dân chủ xã hội chủ nghĩa đại biểu cho trí tuệ, lợi ích của riêng giai cấp công nhân và nhân dân lao động",
      "Nền dân chủ xã hội chủ nghĩa đại biểu cho trí tuệ, lợi ích của riêng giai cấp công nhân và tầng lớp trí thức",
      "Nền dân chủ xã hội chủ nghĩa do Đảng Cộng sản lãnh đạo – đại biểu cho trí tuệ, lợi ích của giai cấp công nhân, nhân dân lao động và toàn dân tộc",
      "Nền dân chủ xã hội chủ nghĩa đại biểu cho trí tuệ, lợi ích của riêng giai cấp công nhân và giai cấp nông dân"
    ],
    answer: "C"
  },
  {
    chapter: 3,
    question: "Hãy xác định mục tiêu chính của việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam.",
    options: [
      "Phát triển kinh tế thị trường tự do",
      "Phục vụ lợi ích của giai cấp công nhân và nhân dân lao động",
      "Giảm thiểu sự can thiệp của nhà nước",
      "Tăng cường sự kiểm soát của nhà nước"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Bản chất của nền dân chủ xã hội chủ nghĩa là:",
    options: [
      "Nền dân chủ mang tính cá nhân",
      "Nền dân chủ của số nhân dân lao động",
      "Nền dân chủ của giai cấp tư sản",
      "Nền dân chủ mang tính tập thể"
    ],
    answer: ["B", "D"]
  },
  {
    chapter: 3,
    question: "Dân chủ xã hội chủ nghĩa ở Việt Nam là:",
    options: [
      "Nền dân chủ gắn liền với sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Chế độ dân chủ tư sản mở rộng",
      "Chế độ dân chủ không phụ thuộc vào nhà nước",
      "Nền dân chủ bảo đảm quyền lực thuộc về nhân dân"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 3,
    question: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa thể hiện như thế nào?",
    options: [
      "Nền dân chủ tập trung vào phát triển kinh tế tư nhân và bảo vệ lợi ích của tầng lớp giàu có.",
      "Quyền lực thuộc về một cá nhân duy nhất, không có sự tham gia của quần chúng nhân dân.",
      "Quyền lực và lợi ích thuộc về toàn thể nhân dân lao động, trong đó có giai cấp công nhân, dưới sự lãnh đạo của Đảng Cộng sản.",
      "Nhà nước chủ yếu thực hiện các quyết định chính trị mà không cần sự đồng thuận hoặc tham gia của người dân."
    ],
    answer: "C"
  },
  {
    chapter: 3,
    question: "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua:",
    options: [
      "Các hình thức dân chủ tự nguyện.",
      "Các hình thức dân chủ gián tiếp và trực tiếp.",
      "Các hình thức dân chủ cơ bản và không cơ bản.",
      "Các hình thức dân chủ không tự nguyện."
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Bằng hiểu biết của bản thân, hãy cho biết đâu là hình thức dân chủ gián tiếp?",
    options: [
      "Người dân tự tổ chức các phong trào xã hội để yêu cầu các quyền lợi mà không thông qua bất kỳ đại diện nào.",
      "Người dân tham gia trực tiếp vào các cuộc trưng cầu ý dân về các chính sách hoặc luật pháp cụ thể.",
      "Người dân bầu ra đại diện của mình để thay mặt họ quyết định các vấn đề quan trọng trong quốc hội hoặc cơ quan lập pháp.",
      "Người dân trực tiếp tham gia bỏ phiếu để quyết định các vấn đề quan trọng của đất nước."
    ],
    answer: "C"
  },
  {
    chapter: 3,
    question: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam được xây dựng dựa trên những nguyên tắc nào sau đây?",
    options: [
      "Quyền lực nhà nước là tối cao, không cần kiểm soát.",
      "Đảng lãnh đạo nhà nước theo phương thức mệnh lệnh.",
      "Quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát.",
      "Nhà nước quản lý xã hội bằng hiến pháp, pháp luật."
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 3,
    question: "Căn cứ vào tính chất của quyền lực nhà nước, chức năng của nhà nước được chia thành:",
    options: [
      "Chức năng chính trị, kinh tế, văn hóa, xã hội",
      "Chức năng giai cấp (trấn áp) và chức năng xã hội (tổ chức và xây dựng)",
      "Chức năng giai cấp và chức năng đối ngoại"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Bản chất của dân chủ là gì?",
    options: [
      "Tôn trọng và đảm bảo quyền con người",
      "Quyền lực thuộc về toàn thể nhân dân",
      "Quyền lực thuộc về một nhóm nhỏ trong xã hội",
      "Phân biệt rõ ràng các tầng lớp xã hội"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 3,
    question: "Ở Việt Nam bản chất dân chủ xã hội chủ nghĩa là dựa vào:",
    options: [
      "Nhà nước xã hội chủ nghĩa và sự ủng hộ, giúp đỡ của nhân dân",
      "Sự quản lý của Nhà nước",
      "Nhân dân",
      "Giai cấp công nhân"
    ],
    answer: "A"
  },
  {
    chapter: 3,
    question: "Vận dụng những kiến thức đã học hãy chọn phương án đúng về mối quan hệ giữa dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa?",
    options: [
      "Dận chủ xã hội chủ nghĩa là mục tiêu cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là công cụ quan trọng cho việc thực thi quyền làm chủ của người dân",
      "Dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là công cụ quan trọng cho việc thực thi quyền làm chủ của người dân",
      "Dân chủ xã hội chủ nghĩa là mục đích cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa là diều kiện cho sự ra đời của dân chủ xã hội chủ nghĩa",
      "Dân chủ xã hội chủ nghĩa là mục đích cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa còn nhà nước xã hội chủ nghĩa quyết định bản chất của dân chủ"
    ],
    answer: "B"
  },
  {
    chapter: 3,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua các thức dân chủ gián tiếp và dân chủ trực tiếp", answer: "Đúng" },
      { text: "Đảng ta khẳng định một trong những đặc trưng của chủ nghĩa xã hội Việt Nam là do nhân dân làm chủ", answer: "Đúng" },
      { text: "Quốc hội là cơ quan quyền lực nhà nước cao nhất hoạt động theo nhiệm kỳ 3 năm", answer: "Sai" },
      { text: "Trong hoạt động của nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam, các cơ quan của nhà nước không được phân quyền rõ ràng", answer: "Sai" }
    ]
  },
  {
    chapter: 3,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Dân chủ tư sản là hình thức dân chủ gắn với quyền lực chính trị của giai cấp tư sản", answer: "Đúng" },
      { text: "Với tư cách là một hình thái nhà nước, một chế độ chính trị thì trong lịch sử nhân loại, cho đến nay có năm nền (chế độ) dân chủ", answer: "Sai" },
      { text: "Nền dân chủ chủ nô, gắn với chế độ chiếm hữu nô lệ", answer: "Đúng" },
      { text: "Dân chủ xã hội chủ nghĩa là công cụ để giai cấp công nhân thực hiện chuyên chính với các giai cấp khác", answer: "Sai" }
    ]
  },
  {
    chapter: 3,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với nền dân chủ tư sản", answer: "Đúng" },
      { text: "Trong xã hội tư bản, dân chủ thực chất thuộc về giai cấp tư sản", answer: "Đúng" },
      { text: "Dân chủ xã hội chủ nghĩa là sự phủ định sách tron những thành tựu dân chủ trước đó", answer: "Sai" },
      { text: "Dân chủ là một phạm trù mang tính lịch sử, gắn với sự xuất hiện và phát triển của nhà nước", answer: "Đúng" }
    ]
  },
  {
    chapter: 3,
    question: "Ghép các đáp án khớp với các phát biểu từ 1 - 4 vế trái dưới đây:",
    choices: ["bản chất giai cấp", "chiếm hữu nô lệ", "dân chủ tư sản", "dân chủ xã hội chủ nghĩa"],
    parts: [
      { text: "____ là hình thức dân chủ ra đời từ cách mạng tư sản", answer: "dân chủ tư sản" },
      { text: "Mỗi kiểu dân chủ trong lịch sử đều mang ____ nhất định.", answer: "bản chất giai cấp" },
      { text: "Nền dân chủ chủ nô, gắn với chế độ ____", answer: "chiếm hữu nô lệ" },
      { text: "____ là nền dân chủ cao hơn về chất so với nền dân chủ có trong lịch sử nhân loại", answer: "dân chủ xã hội chủ nghĩa" }
    ]
  },
  {
    chapter: 3,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 3 ở dưới đây:",
    choices: ["dân chủ trực tiếp", "giai cấp công nhân", "quyền làm chủ"],
    parts: [
      { text: "Nền dân chủ xã hội chủ nghĩa là nền dân chủ mang bản chất của ____", answer: "giai cấp công nhân" },
      { text: "Dân chủ xã hội chủ nghĩa là sự kết hợp giữa hình thức dân chủ đại diện và ____", answer: "dân chủ trực tiếp" },
      { text: "Dân chủ xã hội chủ nghĩa bảo đảm phát huy đầy đủ ____ của nhân dân trên tất cả các lĩnh vực", answer: "quyền làm chủ" }
    ]
  },
  {
    chapter: 3,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 4 ở dưới đây:",
    choices: ["Bầu cử Quốc hội", "Chủ thể quyền lực", "Dân chủ đại diện", "Thượng tôn pháp luật"],
    parts: [
      { text: "Dân chủ đại diện được thể hiện qua việc ____", answer: "Bầu cử Quốc hội" },
      { text: "Một nguyên tắc cốt lõi của nhà nước pháp quyền là ____", answer: "Thượng tôn pháp luật" },
      { text: "Nhân dân là ____ tối cao trong Nhà nước pháp quyền", answer: "Chủ thể quyền lực" },
      { text: "Hình thức dân chủ gián tiếp là hình thức ____", answer: "Dân chủ đại diện" }
    ]
  },
  {
    chapter: 3,
    question: "Kéo thả các đáp án khớp với các phát biểu từ 1 – 3 ở dưới đây:",
    choices: ["dân chủ gián tiếp", "dân chủ nhân dân", "dân chủ trực tiếp", "xã hội chủ nghĩa"],
    parts: [
      { text: "Hình thức ____ là hình thức dân chủ đại diện, được thực hiện do nhân dân “ủy quyền”, giao quyền lực của mình cho tổ chức mà nhân dân trực tiếp bầu ra.", answer: "dân chủ gián tiếp" },
      { text: "Hình thức ____ là hình thức thông qua đó, nhân dân bằng hành động trực tiếp của mình thực hiện quyền làm chủ nhà nước và xã hội.", answer: "dân chủ trực tiếp" },
      { text: "Chế độ ____ ở nước ta được xác lập sau Cách mạng Tháng Tám năm 1945.", answer: "dân chủ nhân dân" }
    ]
  },
  {
    chapter: 3,
    question: "Chọn đáp án Đúng hoặc Sai với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "“Phát triển dân chủ trực tiếp là hình thức dân chủ để đại diện, được thực hiện do nhân dân ủy quyền, trao quyền lực của mình cho nhà nước trực tiếp bầu ra.”", answer: "Sai" },
      { text: "“Cách mạng dân tộc dân chủ nhân dân ở nước ta được xác lập sau Cách mạng Tháng Tám năm 1945.”", answer: "Đúng" },
      { text: "“Hình thức dân chủ gián tiếp là hình thức thông qua đó, nhân dân bằng hành động trực tiếp của mình thực hiện quyền làm chủ nhà nước và xã hội.”", answer: "Sai" },
      { text: "“Năm 1976, tên nước được đổi thành Cộng hòa xã hội chủ nghĩa Việt Nam.”", answer: "Đúng" }
    ]
  },
  /* -------------------------------------------------------------------- */
  /* BÀI 4 — CƠ CẤU XÃ HỘI – GIAI CẤP VÀ LIÊN MINH GIAI CẤP, TẦNG LỚP TRONG THỜI KỲ QUÁ ĐỘ */
  /* -------------------------------------------------------------------- */
  {
    chapter: 4,
    question: "Trong cơ cấu xã hội – giai cấp của thời kỳ quá độ lên chủ nghĩa xã hội, lực lượng tiêu biểu cho phương thức sản xuất mới gọi vai trò chủ đạo, tiên phong trong quá trình công nghiệp hóa, hiện đại hóa đất nước là:",
    options: [
      "Giai cấp công nhân",
      "Tầng lớp trí thức",
      "Giai cấp nông dân",
      "Đội ngũ doanh nhân"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Xét về mặt kinh tế, trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội – giai cấp biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp mới là do:",
    options: [
      "Cơ cấu kinh tế đa dạng, phức tạp",
      "Tồn tại nhiều giai cấp, tầng lớp",
      "Các giai cấp có nhiều tư liệu sản xuất quyết định",
      "Kinh tế chậm phát triển"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Vì sao cơ cấu xã hội – giai cấp có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác?",
    options: [
      "Vì cơ cấu xã hội – giai cấp liên quan đến các đảng phái chính trị và nhà nước; đến quyền sở hữu tư liệu sản xuất",
      "Vì cơ cấu xã hội – giai cấp liên quan đến quan hệ đến quản lý tổ chức lao động, vấn đề phân phối thu nhập",
      "Vì cơ cấu xã hội – giai cấp liên quan đến các tổ chức tà đạo, các băng nhóm xã hội đen lớn trong xã hội",
      "Vì cơ cấu xã hội – giai cấp liên quan đến nhiều giai cấp giàu có trong xã hội"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 4,
    question: "Yếu tố quyết định sự liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức là:",
    options: [
      "Do có những lợi ích cơ bản thống nhất với nhau",
      "Do giai cấp công nhân muốn trở thành giai cấp thống trị",
      "Do có cùng một kẻ thù là giai cấp tư sản",
      "Do giai cấp công nhân mong muốn"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Trong cách mạng xã hội chủ nghĩa, dưới sự lãnh đạo của Đảng Cộng sản, giai cấp công nhân phải liên minh với giai cấp, tầng lớp nào?",
    options: [
      "Giai cấp nông dân và các tầng lớp nhân dân lao động",
      "Giai cấp vô sản đại công nghiệp",
      "Giai cấp vô sản",
      "Giai cấp tư sản"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Theo quan điểm của chủ nghĩa Mác – Lênin, trong thời kỳ quá độ lên chủ nghĩa xã hội, giai cấp công nhân, giai cấp nông dân và tầng lớp lao động khác được coi là:",
    options: [
      "Lực lượng sản xuất cơ bản, lực lượng chính trị – xã hội to lớn",
      "Lực lượng kém phát triển",
      "Lực lượng vũ trang cơ bản",
      "Lực lượng ngoại giao to lớn"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Chọn phương án trả lời đúng nhất để điền vào chỗ trống cho câu sau: “Trước sự liên minh của các đại biểu khoa học…, giới kỹ thuật không một thế lực đen tối nào đứng vững được”.",
    options: [
      "Giai cấp nông dân",
      "Giai cấp vô sản",
      "Giai cấp tư sản",
      "Giai cấp tiểu tư sản"
    ],
    answer: "B"
  },
  {
    chapter: 4,
    question: "Xét dưới góc độ chính trị, trong cuộc đấu tranh giai cấp của các giai cấp có lợi ích đối lập nhau đặt ra nhu cầu tất yếu khách quan mỗi giai cấp đứng ở vị trí trung tâm đều phải:",
    options: [
      "Liên minh với các giai cấp, tầng lớp xã hội khác có những lợi ích đối lập với mình",
      "Liên minh với các giai cấp, tầng lớp xã hội khác có tiềm lực kinh tế lớn hơn mình",
      "Liên minh với các giai cấp, tầng lớp xã hội khác có những lợi ích phù hợp với mình",
      "Liên minh với các giai cấp, tầng lớp xã hội khác mà giai cấp đứng ở vị trí trung tâm được lợi nhiều hơn"
    ],
    answer: "C"
  },
  {
    chapter: 4,
    question: "Vì sao giai cấp công nhân, nông dân và đội ngũ trí thức cần liên minh với nhau trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Vì các giai cấp, tầng lớp muốn có đông lực lượng để tổ chức các hoạt động văn hóa, xã hội",
      "Vì giai cấp công nhân bắt buộc các giai cấp nông dân, tầng lớp trí thức liên minh với mình",
      "Vì giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức có sự thống nhất chung về lợi ích",
      "Vì xuất phát từ yêu cầu khách quan của quá trình đẩy mạnh công nghiệp hóa, hiện đại hóa và chuyển dịch cơ cấu kinh tế từ một nền sản xuất nhỏ, nông nghiệp là chủ yếu sang nền sản xuất hàng hóa lớn"
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 4,
    question: "Hiện nay ở Việt Nam, lực lượng xã hội đặc biệt được Đảng ta chú trọng xây dựng thành một đội ngũ vững mạnh là:",
    options: [
      "Trí thức",
      "Công nhân",
      "Thanh niên",
      "Doanh nhân"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, sự biến đổi của cơ cấu xã hội – giai cấp bị chi phối bởi biến đổi của cơ cấu nào?",
    options: [
      "Cơ cấu xã hội – dân tộc",
      "Cơ cấu xã hội – dân cư",
      "Cơ cấu xã hội – tôn giáo",
      "Cơ cấu kinh tế"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Lực lượng nào là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế, xây dựng kinh tế tri thức, phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc?",
    options: [
      "Nông dân",
      "Trí thức",
      "Thanh niên",
      "Công nhân"
    ],
    answer: "B"
  },
  {
    chapter: 4,
    question: "Nội dung chính trị của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam thể hiện việc giữ vững lập trường chính trị - tư tưởng của giai cấp, tầng lớp nào?",
    options: [
      "Giai cấp tư sản",
      "Giai cấp nông dân",
      "Tầng lớp trí thức",
      "Giai cấp công nhân"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Nội dung kinh tế của liên minh giai cấp, tầng lớp trong thời kỳ quả độ lên chủ nghĩa xã hội ở Việt Nam là gì?",
    options: [
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước gắn với phát triển kinh tế tri thức, phát triển bền vững",
      "Tăng cường phát triển kinh tế kết hợp với phát triển quân sự gắn với phát triển ngoại giao",
      "Xây dựng nền văn hóa tiên tiến, đậm đà bán sắc dân tộc, đồng thời tiếp thu những tinh hoa, giá trị văn hóa của nhân loại và thời đại",
      "Giữ vững lập trường tư tưởng của giai cấp công nhân, giữ vững vai trò lãnh đạo của Đáng"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Vận dụng kiến thức về vai trò của thể hệ trẻ, hãy xác định mục tiêu chính của việc giáo dục chính trị, tư tưởng cho thanh niên trong giai đoạn hiện nay ở Việt Nam là gi?",
    options: [
      "Để kiểm soát các hoạt động kinh tế của thanh niện",
      "Để tăng cường quyền lực của nhà nước",
      "Để hình thành thế hệ thanh niên có phẩm chất tốt đẹp, có khí phách và quyết tâm hành động",
      "Để giảm thiếu sự tham gia của thanh niên vào các hoạt động xã hội"
    ],
    answer: "C"
  },
  {
    chapter: 4,
    question: "Theo C.Mác và Ph.Ăngghen, nhiều cuộc đấu tranh của giai cấp công nhân ở châu Âu, nhất là ở nước Anh và Pháp từ giữa thế ký XIX thất bại là do:",
    options: [
      "Không tổ chức liên minh với tầng lớp tiểu chủ",
      "Không tổ chức liên minh với giai cấp nông dân",
      "Không tổ chức liên minh với giai cấp tư sản",
      "Không tổ chức liên minh với tầng lớp trí thức"
    ],
    answer: "B"
  },
  {
    chapter: 4,
    question: "V.I. Lênin đã xem liên minh giữa giai cấp, tầng lớp nào là một hình thức \"liên minh đặc biệt” trong giai đoạn giành chính quyền và xây dựng chủ nghĩa xã hội?",
    options: [
      "Giai cấp công nhân với giai cấp nông dân và các tầng lớp xã hội khác",
      "Giai cấp công nhân với giai cấp nông dân và tăng lớp tiểu tư sản",
      "Giai cấp công nhân với tầng lớp trí thức và doanh nhân",
      "Giai cấp công nhân với giai cấp nông dân và tầng lớp trí thức"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội bao gồm mấy giai cấp, tầng lớp?",
    options: [
      "5",
      "6",
      "3",
      "4"
    ],
    answer: "B"
  },
  {
    chapter: 4,
    question: "Trong thời kỳ quả độ lên chủ nghĩa xã hội ở Việt Nam, giai cấp nào là lực lượng đi đầu thực hiện nhiệm vụ trung tâm phát triển kinh tế, tiến hành công nghiệp hóa, hiện đại hóa đất nước?",
    options: [
      "Giai cấp công nhân",
      "Đội ngũ trí thức",
      "Giai cấp nông dân",
      "Đội ngũ doanh nhân"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Nội dung cơ bản quyết định nhất, là cơ sở vật chất - kỹ thuật của liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là nội dung nào?",
    options: [
      "Nội dung chính trị của liên minh",
      "Nội dung văn hóa của liên minh",
      "Nội dung xã hội của liên minh",
      "Nội dung kinh tế của liên mình"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Chọn cụm từ thích hợp điền vào chỗ trống của câu sau: \"Cơ cấu xã hội là những ..... cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên\"",
    options: [
      "Cộng đồng dân tộc",
      "Cộng đồng dân cư",
      "Cộng đồng nghề nghiệp",
      "Cộng đồng người"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội - giai cấp thường xuyên biến đổi theo mấy quy luật cơ bản?",
    options: [
      "3",
      "5",
      "4",
      "2"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Theo C. Mác - Ph. Ăngnghen, “người bạn đồng minh tự nhiên\" của giai cấp công nhân là ai?",
    options: [
      "Đội ngũ doanh nhân",
      "Nhân dân lao động",
      "Tầng lớp trí thức",
      "Giai cấp nông dân"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội - giai cấp gồm mấy giai cấp, tầng lớp cơ bản?",
    options: [
      "3",
      "5",
      "4",
      "6"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Chọn ý sai về nội dung kinh tế của liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong trong cách mạng xã hội chủ nghĩa:",
    options: [
      "Xây dựng hệ thống chính sách an sinh xã hội",
      "Xây dựng hệ thống chính sách phát triển nông nghiệp, nông dân, nông thôn",
      "Ứng dụng khoa học kỹ thuật vào sản xuất nông nghiệp",
      "Thực hiện hợp đồng kinh tế giữa doanh nghiệp nhà nước và nông dân."
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Theo V.I.Lênin, đâu là vấn đề mang tính nguyên tắc để đảm bảo cho thắng lợi của cuộc cách mạng xã hội chủ nghĩa tháng Mười Nga năm 1917?",
    options: [
      "Liên minh giữa giai cấp công nhân, tầng lớp tiểu tư sản",
      "Liên minh giữa giai cấp vô sản và nông dân",
      "Liên minh công, nông và trí thức",
      "Liên minh giữa giai cấp công nhân, tầng lớp tư sản tiến bộ"
    ],
    answer: "B"
  },
  {
    chapter: 4,
    question: "Chọn đáp án đúng điền vào chỗ trống cho câu sau: \"Cơ cấu xã hội - giai cấp là hệ thống các .. , ...tồn tại khách quan trong một chế độ xã hội nhất định,..'",
    options: [
      "Giai cấp/ tầng lớp",
      "Cá nhân / tập thể",
      "Đội ngũ/ tầng lớp",
      "Tập đoàn/ lực lượng sản xuất"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Dưới góc độ chính trị - xã hội, môn Chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội nào?",
    options: [
      "Cơ cấu xã hội - dân tộc",
      "Cơ cấu xã hội - nghề nghiệp",
      "Cơ cấu xã hội - dân cư",
      "Cơ cấu xã hội - giai cấp"
    ],
    answer: "D"
  },
  {
    chapter: 4,
    question: "Trong cơ cấu xã hội của thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội nào giữ vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác?",
    options: [
      "Cơ cấu xã hội - giai cấp",
      "Cơ cấu xã hội - dân tộc",
      "Cơ cấu xã hội - nghề nghiệp",
      "Cơ cấu xã hội - tôn giáo"
    ],
    answer: "A"
  },
  {
    chapter: 4,
    question: "Những tầng lớp nào sau đây tham gia cơ cấu xã hội - giai cấp ở Việt Nam?",
    options: [
      "Phụ nữ",
      "Thanh niên",
      "Tín đồ tôn giáo",
      "Nhóm học sinh"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 4,
    question: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, cơ cấu xã hội - giai cấp biến đổi trong mối quan hệ nào?",
    options: [
      "Vừa đấu tranh, vừa bài xích lẫn nhau",
      "Vừa đấu tranh, vừa liên minh, từng bước xóa bỏ bất bình đẳng xã hội dẫn đến sự xích lại gần nhau",
      "Vừa thống nhất, vừa bình đẳng với nhau",
      "Vừa liên minh, cấu kết các giai cấp, tầng lớp quy mô để đàn áp các lớn giai cấp, tầng lớp quy mô nhỏ"
    ],
    answer: "B"
  },
  {
    chapter: 4,
    question: "Những phương hướng nào sau đây nhằm phát triển cơ cấu xã hội – giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Tăng dân số ở khu công nghiệp",
      "Xây dựng và hoàn thiện chính sách xã hội tổng thể",
      "Giảm giáo dục ở những vùng không có điều kiện kinh tế",
      "Đẩy mạnh công nghiệp hóa, hiện đại hóa"
    ],
    answer: ["B", "D"]
  },
  {
    chapter: 4,
    question: "Những nội dung nào sau đây là nội dung cơ bản của liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Nội dung giáo dục",
      "Nội dung tôn giáo",
      "Nội dung kinh tế",
      "Nội dung chính trị"
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 4,
    question: "Những phương hướng nào sau đây củng cố liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Giảm vai trò kinh tế trong xã hội",
      "Tạo sự đồng thuận giữa các lực lượng",
      "Tăng vai trò tôn giáo đối với các giai cấp, tầng lớp",
      "Phát huy tinh thần đoàn kết"
    ],
    answer: ["B", "D"]
  },
  {
    chapter: 4,
    question: "Những chính sách nào sau đây hỗ trợ xây dựng cơ cấu xã hội - giai cấp ở Việt Nam?",
    options: [
      "Phát huy sự thống nhất trong các giai cấp, tầng lớp, tạo sự đồng thuận xã hội",
      "Ưu tiên phát triển những giai cấp lớn trong xã hội",
      "Thúc đẩy phát triển các tổ chức tín ngưỡng, tôn giáo",
      "Giải quyết tốt các mâu thuẫn, các khác biệt trong cácgiai cấp, tầng lớp"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 4,
    question: "Những lực lượng nào sau đây là trung tâm trong cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Nhóm tín đồ tôn giáo",
      "Giai cấp công nhân",
      "Giai cấp nông dân",
      "Nhóm người cao tuổi"
    ],
    answer: ["B", "C"]
  },
  {
    chapter: 4,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Đội ngũ trí thức đóng vai trò quan trọng trong cơ cấu xã hội – giai cấp.", answer: "Đúng" },
      { text: "Tầng lớp phụ nữ không tham gia cơ cấu xã hội – giai cấp.", answer: "Sai" },
      { text: "Chính sách tôn giáo là chính sách chính hỗ trợ cơ cấu xã hội – giai cấp.", answer: "Sai" },
      { text: "Giai cấp công nhân là trung tâm trong cơ cấu xã hội – giai cấp ở Việt Nam.", answer: "Đúng" }
    ]
  },
  {
    chapter: 4,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Nội dung tôn giáo là nội dung chính của liên minh giai cấp, tầng lớp.", answer: "Sai" },
      { text: "Đội ngũ doanh nhân không tham gia liên minh giai cấp, tầng lớp.", answer: "Sai" },
      { text: "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân là nội dung vận hành của liên minh giai cấp, tầng lớp ở Việt Nam.", answer: "Đúng" },
      { text: "Đồng thuận xã hội là mục tiêu của liên minh giai cấp, tầng lớp ở Việt Nam.", answer: "Đúng" }
    ]
  },
  {
    chapter: 4,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Đổi mới hoạt động của Đảng, nhà nước, mặt trận Tổ quốc Việt Nam nhằm tăng cường khối liên minh giai cấp, tầng lớp ở Việt Nam", answer: "Đúng" },
      { text: "Tạo sức mạnh tổng hợp là mục tiêu của liên minh giai cấp, tầng lớp ở Việt Nam", answer: "Đúng" },
      { text: "Nội dung văn hóa không liên quan đến nội dung của liên minh giai cấp, tầng lớp", answer: "Sai" },
      { text: "Nội dung kinh tế là nội dung cơ bản quyết định nhất, là cơ sở vật chất kỹ thuật của liên minh", answer: "Đúng" }
    ]
  },
  {
    chapter: 4,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Đội ngũ doanh nhân là tầng lớp mới trong cơ cấu xã hội - giai cấp", answer: "Đúng" },
      { text: "Nâng cao dân trí là chính sách hỗ trợ cơ cấu xã hội - giai cấp", answer: "Đúng" },
      { text: "Chính sách việc làm không hỗ trợ cơ cấu xã hội - giai cấp", answer: "Sai" },
      { text: "Cơ cấu xã hội - giai cấp ở Việt Nam không biến đổi", answer: "Sai" }
    ]
  },
  {
    chapter: 4,
    question: "Kéo thả các yếu tố liên quan đến liên minh giai cấp, tầng lớp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội vào các cột tương ứng.",
    choices: ["Thành phần/yếu tố của liên minh", "Nội dung/phương hướng của liên minh"],
    parts: [
      { text: "Đảng Cộng sản", answer: "Thành phần/yếu tố của liên minh" },
      { text: "Giai cấp công nhân", answer: "Thành phần/yếu tố của liên minh" },
      { text: "Giai cấp nông dân", answer: "Thành phần/yếu tố của liên minh" },
      { text: "Nội dung chính trị", answer: "Nội dung/phương hướng của liên minh" },
      { text: "Nội dung kinh tế", answer: "Nội dung/phương hướng của liên minh" },
      { text: "Tăng cường liên minh", answer: "Nội dung/phương hướng của liên minh" },
      { text: "Tầng lớp phụ nữ", answer: "Thành phần/yếu tố của liên minh" },
      { text: "Xóa đói giảm nghèo", answer: "Nội dung/phương hướng của liên minh" }
    ]
  },
  {
    chapter: 4,
    question: "Kéo thả các khái niệm khớp với các phát biểu về cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội dưới đây:",
    choices: ["Chính sách an sinh xã hội", "Đội ngũ doanh nhân", "Đội ngũ trí thức", "Giai cấp công nhân"],
    parts: [
      { text: "Giai cấp trung tâm trong cơ cấu xã hội – giai cấp", answer: "Giai cấp công nhân" },
      { text: "Chính sách hỗ trợ cơ cấu xã hội - giai cấp", answer: "Chính sách an sinh xã hội" },
      { text: "Lực lượng quan trọng trong cơ cấu xã hội - giai cấp", answer: "Đội ngũ trí thức" },
      { text: "Lực lượng mới trong cơ cấu xã hội – giai cấp", answer: "Đội ngũ doanh nhân" }
    ]
  },
  {
    chapter: 4,
    question: "Kéo thả các đáp án đúng ứng với từng phát biểu sau đây về vị trí, vai trò của các giai cấp, tầng lớp trong cơ cấu xã hội – giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội:",
    choices: ["chiến lược quan trọng", "đặc biệt quan trọng", "đội ngũ vững mạnh", "sáng tạo đặc biệt"],
    parts: [
      { text: "Giai cấp nông dân cùng với nông nghiệp, nông thôn có vị trí ____", answer: "chiến lược quan trọng" },
      { text: "Đội ngũ doanh nhân được Đảng ta chủ trương xây dựng thành một ____", answer: "đội ngũ vững mạnh" },
      { text: "Giai cấp công nhân Việt Nam có vai trò ____", answer: "đặc biệt quan trọng" },
      { text: "Đội ngũ trí thức là lực lượng ____", answer: "sáng tạo đặc biệt" }
    ]
  },
  {
    chapter: 4,
    question: "Kéo thả các yếu tố liên quan đến cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội vào các cột tương ứng:",
    choices: ["Giai cấp/tầng lớp trong cơ cấu xã hội", "Chính sách hỗ trợ"],
    parts: [
      { text: "Bảo vệ quyền lợi", answer: "Chính sách hỗ trợ" },
      { text: "Chính sách an sinh xã hội", answer: "Chính sách hỗ trợ" },
      { text: "Đội ngũ trí thức", answer: "Giai cấp/tầng lớp trong cơ cấu xã hội" },
      { text: "Giai cấp công nhân", answer: "Giai cấp/tầng lớp trong cơ cấu xã hội" },
      { text: "Giai cấp nông dân", answer: "Giai cấp/tầng lớp trong cơ cấu xã hội" },
      { text: "Nâng cao dân trí", answer: "Chính sách hỗ trợ" },
      { text: "Phát triển nông thôn mới", answer: "Chính sách hỗ trợ" }
    ]
  },
  {
    chapter: 4,
    question: "Kéo thả các đáp án khớp với các phát biểu sau:",
    choices: ["Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa", "Liên minh công - nông", "Nội dung kinh tế", "Tầng lớp phụ nữ"],
    parts: [
      { text: "Phương hướng cơ bản để xây dựng liên minh giai cấp, tầng lớp", answer: "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa" },
      { text: "Nội dung cơ bản quyết định của liên minh", answer: "Nội dung kinh tế" },
      { text: "Tầng lớp tham gia liên minh", answer: "Tầng lớp phụ nữ" },
      { text: "Yếu tố cốt lõi của liên minh giai cấp", answer: "Liên minh công - nông" }
    ]
  },
  /* -------------------------------------------------------------------- */
  /* BÀI 5 — VẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO TRONG THỜI KỲ QUÁ ĐỘ LÊN CNXH */
  /* -------------------------------------------------------------------- */
  {
    chapter: 5,
    question: "Quan điểm: Không phân biệt dân tộc lớn hay nhỏ, ở trình độ phát triển cao hay thấp, các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội - thuộc nội dung nào trong Cương lĩnh dân tộc của V.I. Lênin?",
    options: [
      "Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa sô vanh",
      "Các dân tộc hoàn toàn bình đẳng",
      "Liên hiệp công nhân tất cả các dân tộc",
      "Đoàn kết các dân tộc"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Theo quan điểm của chủ nghĩa Mác – Lênin, để thực hiện được bình đẳng dân tộc cần phải làm gì?",
    options: [
      "Phải đấu tranh chống chủ nghĩa phân biệt chủng tộc, chủ nghĩa sô vanh",
      "Thủ tiêu tình trạng áp bức giai cấp, trên cơ sở đó xoá bỏ tình trạng áp bức dân tộc",
      "Phải liên kết với các nước đế quốc lớn",
      "Phải duy trì chế độ tư hữu về tư liệu sản xuất"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 5,
    question: "Thứ tự quá trình phát triển của dân tộc lần lượt trải qua các hình thức nào?",
    options: [
      "Thị tộc, bộ tộc, bộ lạc, dân tộc",
      "Bộ lạc, bộ tộc, thị tộc, dân tộc",
      "Bộ tộc, thị tộc, bộ lạc, dân tộc",
      "Thị tộc, bộ lạc, bộ tộc, dân tộc"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Theo chủ nghĩa Mác – Lênin, nguyên nhân nào dẫn đến các cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập?",
    options: [
      "Do chủ nghĩa tư bản đã phát triển thành chủ nghĩa đế quốc",
      "Do các cộng đồng dân cư muốn độc lập để có thể đi xâm chiếm các dân tộc khác",
      "Do sự thức tỉnh, sự trưởng thành về ý thức dân tộc, ý thức về quyền sống của mình",
      "Do các cộng đồng dân cư muốn phân chia lại thị trường thế giới"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Trong những nội dung của quyền dân tộc tự quyết, nội dung nào được coi là cơ bản, trước hết?",
    options: [
      "Quyền tự quyết về các mối quan hệ quốc tế",
      "Quyền tự quyết về văn hoá",
      "Quyền tự quyết về kinh tế",
      "Quyền tự quyết về chính trị"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Hiểu theo nghĩa rộng, dân tộc là:",
    options: [
      "Tộc người",
      "Quốc gia",
      "Thị tộc",
      "Bộ tộc"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Đâu là đặc trưng quan trọng nhất, là cơ sở để liên kết các thành viên của dân tộc tạo thành nền tảng vững chắc của cộng đồng dân tộc?",
    options: [
      "Có chung một phương thức sinh hoạt kinh tế",
      "Có ngôn ngữ riêng và có thể có chữ viết riêng làm công cụ giao tiếp",
      "Có thể cư trú tập trung trên một vùng lãnh thổ của một quốc gia, hoặc nơi cư trú đan xen với nhiều dân tộc anh em",
      "Có nét tâm lý riêng (nét tâm lý dân tộc) biểu hiện kết tinh trong nền văn hóa dân tộc và tạo bản sắc văn hóa của dân tộc."
    ],
    answer: "A"
  },
  {
    chapter: 5,
    question: "Ở Việt Nam hiện nay có khoảng bao nhiêu dân tộc?",
    options: [
      "45",
      "54",
      "50",
      "63"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Tìm đáp án sai về đặc điểm dân tộc ở Việt Nam:",
    options: [
      "Có sự chênh lệch về số dân giữa các tộc người",
      "Các dân tộc cư trú tập trung tại các trung tâm lớn",
      "Các dân tộc ở Việt Nam có trình độ phát triển không đều",
      "Các dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở địa bàn có vị trí chiến lược quan trọng"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Vận dụng kiến thức về vấn đề dân tộc, hãy chỉ ra điểm khác biệt cơ bản trong quá trình hình thành nên dân tộc Việt Nam so với các dân tộc khác là gì?",
    options: [
      "Do yêu cầu đoàn kết của quá trình đấu tranh chống thiên tai và xâm lược",
      "Do quá trình đồng hóa của các bộ tộc phong kiến",
      "Do sự phát triển tiến bộ của các bộ lạc",
      "Do dân tộc Việt Nam có diện tích nhỏ"
    ],
    answer: "A"
  },
  {
    chapter: 5,
    question: "Đối với quốc gia và từng thành viên của dân tộc, yếu tố nào là thiêng liêng nhất mà nếu không có thì không có khái niệm Tổ quốc, quốc gia?",
    options: [
      "Lãnh thổ",
      "Kinh tế",
      "Ngôn ngữ",
      "Truyền thống văn hoá"
    ],
    answer: "A"
  },
  {
    chapter: 5,
    question: "Tôn giáo là một phạm trù thuộc:",
    options: [
      "Thế giới quan duy vật",
      "Thế giới quan siêu hình",
      "Kiến trúc thượng tầng",
      "Cơ sở hạ tầng"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Tôn giáo là sản phẩm của ai?",
    options: [
      "Các thần linh",
      "Thượng đế",
      "Lực lượng siêu nhiên",
      "Con người"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Tôn giáo khác với tín ngưỡng ở điểm nào?",
    options: [
      "Tín ngưỡng tôn giáo có hệ thống giáo lý, giáo luật, có tổ chức và các nghi lễ chặt chẽ",
      "Tín ngưỡng tôn giáo có số lượng tín đồ đông",
      "Tín ngưỡng tôn giáo ra đời từ rất sớm",
      "Tín ngưỡng tôn giáo tồn tại ở tất cả các quốc gia trên thế giới"
    ],
    answer: "A"
  },
  {
    chapter: 5,
    question: "Về phương diện thế giới quan, tôn giáo mang bản chất:",
    options: [
      "Thế giới quan duy vật",
      "Thế giới quan siêu hình",
      "Thế giới quan duy tâm",
      "Thế giới quan biện chứng"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Niềm tin của con người vào các lực lượng siêu nhiên, thần thánh đến mức độ mê muội, cuồng tín, dẫn đến những hành vi cực đoan, sai lệch quá mức, trái với các giá trị văn hoá, đạo đức, pháp luật – gọi là:",
    options: [
      "Ý thức thẩm mỹ",
      "Ý thức chính trị",
      "Mê tín dị đoan",
      "Thờ anh hùng dân tộc"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Sự sợ hãi trước những hiện tượng tự nhiên, xã hội, hay lúc ốm đau, những may rủi, bất ngờ, tâm lý muốn bình yên khi làm việc lớn… khiến con người dễ tìm đến với hình thái ý thức xã hội nào?",
    options: [
      "Ý thức thẩm mỹ",
      "Ý thức chính trị",
      "Ý thức pháp quyền",
      "Ý thức tôn giáo"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Tại sao ngày nay khoa học đã phát triển rất mạnh mẽ mà tôn giáo vẫn có xu hướng phát triển?",
    options: [
      "Do xã hội có xu hướng phát triển ngày càng tụt lùi",
      "Do lực lượng siêu nhiên thúc đẩy",
      "Do thế giới mà con người đang sống vẫn còn muôn vàn điều bí ẩn mà khoa học chưa hiểu rõ bản chất của nó",
      "Do nhận thức của con người về tự nhiên, về xã hội và về chính bản thân mình còn có giới hạn"
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 5,
    question: "Vận dụng kiến thức về đặc điểm tôn giáo ở Việt Nam, hãy xác định số lượng tôn giáo đã được công nhận và cấp đăng ký hoạt động ở Việt Nam:",
    options: [
      "5",
      "13",
      "16",
      "43"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Vì sao Đảng, Nhà nước Việt Nam chủ trương luôn tôn trọng, bảo đảm quyền tự do tín ngưỡng tôn giáo và không tín ngưỡng tôn giáo của nhân dân?",
    options: [
      "Vì tín ngưỡng, tôn giáo có số lượng tín đồ đông",
      "Vì tín ngưỡng, tôn giáo là nhu cầu tinh thần của nhân dân",
      "Vì tín ngưỡng tôn giáo được du nhập từ nước ngoài vào",
      "Vì lực lượng chức sắc trong các tôn giáo có tiềm lực kinh tế lớn mạnh"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Tìm đáp án sai về nguồn gốc hình thành của tôn giáo:",
    options: [
      "Nguồn gốc kinh tế - xã hội",
      "Nguồn gốc nhân tạo",
      "Nguồn gốc nhận thức",
      "Nguồn gốc tâm lý"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Luận điểm nổi tiếng: “Tôn giáo là tiếng thở dài của chúng sinh bị áp bức, là trái tim của thế giới không có trái tim… Tôn giáo là thuốc phiện của nhân dân” là của ai?",
    options: [
      "Ph. Ăngghen",
      "C. Mác",
      "V.I. Lênin",
      "Hồ Chí Minh"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Theo chủ nghĩa Mác – Lênin, xét đến cùng nhân tố quyết định sự tồn tại và phát triển của các hình thái ý thức xã hội, trong đó có tôn giáo là gì?",
    options: [
      "Các hoạt động văn hoá",
      "Các hoạt động chính trị và quan hệ chính trị",
      "Sản xuất vật chất và các quan hệ kinh tế",
      "Các cuộc cách mạng"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Tôn giáo ra đời từ những nguồn gốc cơ bản nào?",
    options: [
      "Có nguồn gốc tự nhiên, kinh tế - xã hội, tâm lý, nhận thức",
      "Có nguồn gốc do Thượng đế tạo ra",
      "Có nguồn gốc do lực lượng siêu nhiên tạo ra",
      "Có nguồn gốc do chủ nghĩa tư bản tạo ra"
    ],
    answer: "A"
  },
  {
    chapter: 5,
    question: "Đâu là sự giống nhau giữa tôn giáo và tín ngưỡng?",
    options: [
      "Đều có các giáo sĩ",
      "Đều có hệ thống kinh điển",
      "Đều có niềm tin vào đấng siêu nhiên",
      "Đều có giáo chủ"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Tại sao các tôn giáo ở Việt Nam luôn đồng hành cùng dân tộc và có nhiều đóng góp quan trọng trong quá trình xây dựng và bảo vệ đất nước?",
    options: [
      "Vì các tôn giáo có vai trò quyết định đến những vấn đề quan trọng của xã hội",
      "Vì các tôn giáo có quan hệ với các tổ chức nước ngoài",
      "Vì đa số các tín đồ là nhân dân lao động có lòng yêu nước, chống giặc ngoại xâm",
      "Vì các tôn giáo thường bị lợi dụng bởi các thế lực phản động"
    ],
    answer: "C"
  },
  {
    chapter: 5,
    question: "Dân tộc hiểu theo nghĩa hẹp là:",
    options: [
      "Quốc gia dân tộc",
      "Bộ tộc",
      "Bộ lạc",
      "Tộc người"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Nội dung nào vừa là nội dung chủ yếu vừa là giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể?",
    options: [
      "Các dân tộc có nền phát triển kinh tế ngang nhau",
      "Các dân tộc được quyền tự quyết",
      "Các dân tộc hoàn toàn bình đẳng",
      "Liên hiệp công nhân tất cả các dân tộc"
    ],
    answer: "D"
  },
  {
    chapter: 5,
    question: "Hãy chỉ ra đâu là nguyên tắc, tôn trọng của Tôn giáo?",
    options: [
      "Do giai cấp của nhà nước",
      "Do các lực lượng siêu nhiên thúc đẩy",
      "Do vấn đề tại xã hội cung cấp",
      "Do khoa học chưa giải thích hết được các hiện tượng tự nhiên và xã hội"
    ],
    answer: ["B", "D"]
  },
  {
    chapter: 5,
    question: "Nội dung quyền bình đẳng dân tộc của Chủ nghĩa Mác – Lênin bao gồm:",
    options: [
      "Các dân tộc bị áp bức có quyền tự quyết và có quyền đứng lên tách khỏi dân tộc mình",
      "Xóa bỏ tình trạng áp bức dân tộc",
      "Không phân biệt dân tộc lớn hay nhỏ, trình độ cao hay thấp",
      "Các dân tộc đều có nghĩa vụ và quyền lợi ngang nhau trên tất cả các lĩnh vực của đời sống xã hội"
    ],
    answer: ["B", "C", "D"]
  },
  {
    chapter: 5,
    question: "Quá trình phát triển của dân tộc trải qua mấy hình thức cộng đồng người?",
    options: [
      "3",
      "4",
      "5",
      "2"
    ],
    answer: "B"
  },
  {
    chapter: 5,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Đấu tranh chống chủ nghĩa Sô - vanh là giải pháp thực hiện bình đẳng dân tộc", answer: "Đúng" },
      { text: "Tôn giáo là đặc trưng chính của dân tộc quốc gia", answer: "Sai" },
      { text: "Tâm lý dân tộc tạo nên bản sắc văn hóa dân tộc", answer: "Đúng" },
      { text: "Dân tộc (tộc người) có ý thức tự giác tộc người", answer: "Đúng" }
    ]
  },
  {
    chapter: 5,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Nguồn gốc kinh tế - xã hội dẫn đến sự ra đời của tôn giáo", answer: "Đúng" },
      { text: "Tôn giáo phản ánh hoang đường, hư ảo hiện thực khách quan", answer: "Đúng" },
      { text: "Tín ngưỡng có hệ thống giáo lý chặt chẽ", answer: "Sai" },
      { text: "Mê tín dị đoan là niềm tin mù quáng cần loại bỏ", answer: "Đúng" }
    ]
  },
  {
    chapter: 5,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Tín ngưỡng là niềm tín vào lực lượng siêu nhiên", answer: "Đúng" },
      { text: "Nguồn gốc nhận thức của tôn giáo là sự hạn chế hiểu biết của con người", answer: "Đúng" },
      { text: "Tôn giáo phản ánh chân thực hiện thực khách quan", answer: "Sai" },
      { text: "Khoa học chưa giải thích hết được các hiện tượng là lý do tôn giáo phát triển .", answer: "Đúng" }
    ]
  },
  {
    chapter: 5,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Quyền tự quyết dân tộc bao gồm quyền phân lập thành quốc gia độc lập", answer: "Đúng" },
      { text: "Dân tộc (quốc gia) không cần lãnh thổ chung", answer: "Sai" },
      { text: "Dân tộc là cộng đồng người có ngôn ngữ riêng và văn hóa đặc thù", answer: "Đúng" },
      { text: "Bình đẳng dân tộc là nội dung cương lĩnh dân tộc của Mác-Lênin", answer: "Đúng" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các yếu tố liên quan vào các cột tương ứng:",
    choices: ["Đặc trưng của dân tộc", "Nội dung cương lĩnh dân tộc của Mác-Lênin"],
    parts: [
      { text: "Bản sắc văn hóa dân tộc", answer: "Đặc trưng của dân tộc" },
      { text: "Các dân tộc được quyền tự quyết", answer: "Nội dung cương lĩnh dân tộc của Mác-Lênin" },
      { text: "Các dân tộc hoàn toàn bình đẳng", answer: "Nội dung cương lĩnh dân tộc của Mác-Lênin" },
      { text: "Lãnh thổ chung", answer: "Đặc trưng của dân tộc" },
      { text: "Liên hiệp công nhân tất cả các dân tộc", answer: "Nội dung cương lĩnh dân tộc của Mác-Lênin" },
      { text: "Ngôn ngữ riêng", answer: "Đặc trưng của dân tộc" },
      { text: "Tâm lý dân tộc riêng", answer: "Đặc trưng của dân tộc" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các đáp án đúng tương ứng với các phát biểu về dân tộc dưới đây:",
    choices: ["Bình đẳng dân tộc", "Dân tộc tộc người", "Lãnh thổ", "Phương thức sinh hoạt kinh tế chung"],
    parts: [
      { text: "Nội dung cơ bản của cương lĩnh dân tộc Mác-Lênin là gì?", answer: "Bình đẳng dân tộc" },
      { text: "Khái niệm dân tộc theo nghĩa hẹp được gọi là gì?", answer: "Dân tộc tộc người" },
      { text: "Yếu tố thiêng liêng đối với dân tộc (quốc gia) và từng thành viên dân tộc là gì?", answer: "Lãnh thổ" },
      { text: "Đặc trưng quan trọng nhất của dân tộc là gì?", answer: "Phương thức sinh hoạt kinh tế chung" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các đáp án đúng khớp với các phát biểu dưới đây:",
    choices: ["Mê muội", "Mê tín dị đoan", "Tín ngưỡng", "Tôn giáo"],
    parts: [
      { text: "Là sự phản ánh niềm tin mù quáng của một số người vào các lực lượng siêu nhiên", answer: "Mê tín dị đoan" },
      { text: "Là niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí", answer: "Tín ngưỡng" },
      { text: "Là sự phản ánh một cách hoang đường, hư ảo hiện thực khách quan", answer: "Tôn giáo" },
      { text: "Mê tín dị đoan dẫn con người đến điều gì?", answer: "Mê muội" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các yếu tố liên quan vào các cột tương ứng:",
    choices: ["Đặc trưng của dân tộc (tộc người)", "Đặc trưng của dân tộc (quốc gia)"],
    parts: [
      { text: "Lãnh thổ chung", answer: "Đặc trưng của dân tộc (quốc gia)" },
      { text: "Ngôn ngữ chung", answer: "Đặc trưng của dân tộc (quốc gia)" },
      { text: "Ngôn ngữ tộc người", answer: "Đặc trưng của dân tộc (tộc người)" },
      { text: "Tâm lý dân tộc", answer: "Đặc trưng của dân tộc (quốc gia)" },
      { text: "Văn hóa đặc thù", answer: "Đặc trưng của dân tộc (tộc người)" },
      { text: "Ý thức tự giác tộc người", answer: "Đặc trưng của dân tộc (tộc người)" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các yếu tố liên quan đến tôn giáo vào các cột tương ứng:",
    choices: ["Yếu tố liên quan đến tôn giáo", "Nguồn gốc của tôn giáo"],
    parts: [
      { text: "Cơ sở thờ tự", answer: "Yếu tố liên quan đến tôn giáo" },
      { text: "Hệ thống tín đồ", answer: "Yếu tố liên quan đến tôn giáo" },
      { text: "Kinh tế", answer: "Nguồn gốc của tôn giáo" },
      { text: "Nhận thức", answer: "Nguồn gốc của tôn giáo" },
      { text: "Niềm tin", answer: "Yếu tố liên quan đến tôn giáo" },
      { text: "Tâm lý", answer: "Nguồn gốc của tôn giáo" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các đáp án khớp với các phát biểu sau đây:",
    choices: ["Cơ sở pháp lý", "Giai cấp công nhân", "Liên hiệp công nhân các dân tộc lại", "Quyền bình đẳng dân tộc"],
    parts: [
      { text: "Yếu tố thúc đẩy bình đẳng dân tộc là gì?", answer: "Cơ sở pháp lý" },
      { text: "Giải pháp quan trọng để liên kết các nội dung của Cương lĩnh dân tộc thành một chỉnh thể", answer: "Liên hiệp công nhân các dân tộc lại" },
      { text: "Đây là quyền thiêng liêng của các dân tộc, không phân biệt dân tộc lớn hay nhỏ", answer: "Quyền bình đẳng dân tộc" },
      { text: "Thực hiện quyền tự quyết dân tộc phải đứng vững trên lập trường của giai cấp nào?", answer: "Giai cấp công nhân" }
    ]
  },
  {
    chapter: 5,
    question: "Kéo thả các đáp án khớp với các phát biểu về tôn giáo, tín ngưỡng dưới đây:",
    choices: ["Hình thái ý thức xã hội", "Phản ánh hư ảo hiện thực khách quan", "Tín ngưỡng", "Tôn trọng tự do tôn giáo"],
    parts: [
      { text: "Quan điểm của chủ nghĩa Mác - Lênin về tôn giáo là gì?", answer: "Tôn trọng tự do tôn giáo" },
      { text: "Niềm tin và sự ngưỡng mộ của con người vào một lực lượng siêu nhiên, thần bí được gọi là gì?", answer: "Tín ngưỡng" },
      { text: "Chủ nghĩa Mác-Lênin coi tín ngưỡng, tôn giáo là một phạm trù thuộc lĩnh nào của xã hội?", answer: "Hình thái ý thức xã hội" },
      { text: "Bản chất của tôn giáo theo chủ nghĩa Mác - Lênin là gì?", answer: "Phản ánh hư ảo hiện thực khách quan" }
    ]
  },
  /* -------------------------------------------------------------------- */
  /* BÀI 6 — VẤN ĐỀ GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ LÊN CNXH */
  /* -------------------------------------------------------------------- */
  {
    chapter: 6,
    question: "Hai mối quan hệ cơ bản hình thành gia đình là:",
    options: [
      "Quan hệ hôn nhân",
      "Quan hệ kinh tế",
      "Quan hệ huyết thống",
      "Quan hệ quần tụ trong một không gian sinh tồn"
    ],
    answer: ["A", "C"]
  },
  {
    chapter: 6,
    question: "Vị trí của gia đình trong xã hội là:",
    options: [
      "Mạch máu",
      "Bộ não",
      "Xương sống",
      "Tế bào"
    ],
    answer: "D"
  },
  {
    chapter: 6,
    question: "Tình yêu giữa nam và nữ trở thành quan hệ hôn nhân được thể hiện bằng:",
    options: [
      "Lời hứa giữa nam và nữ",
      "Thủ tục pháp lý",
      "Lễ cưới",
      "Lễ đính hôn"
    ],
    answer: "B"
  },
  {
    chapter: 6,
    question: "Chọn đáp án đúng điền vào chỗ trống trong luận điểm sau: \"Hằng ngày tái tạo ra đời sống của bản thân mình, con người bắt đầu tạo ra những người khác, sinh sôi nẩy nở - đó là quan hệ giữa chồng và vợ, cha mẹ và con cái, đó là....\"",
    options: [
      "Gia đình",
      "Làng xóm",
      "Tập thể",
      "Xã hội"
    ],
    answer: "A"
  },
  {
    chapter: 6,
    question: "Quan hệ nào được coi là cơ sở, nền tảng hình thành nên các mối quan hệ khác trong gia đình?",
    options: [
      "Quan hệ quần tụ trong một không gian sinh tồn",
      "Quan hệ hôn nhân",
      "Quan hệ nuôi dưỡng",
      "Quan hệ hôn nhân và huyết thống"
    ],
    answer: "B"
  },
  {
    chapter: 6,
    question: "Gia đình phải thực hiện chức năng nào để đảm bảo nguồn sinh sống, đáp ứng nhu cầu vật chất, tinh thần của các thành viên trong gia đình?",
    options: [
      "Chức năng kinh tế, tổ chức tiêu dùng",
      "Chức năng tái sản xuất ra con người",
      "Chức năng thoả mãn các nhu cầu tâm sinh lý, duy trì tình cảm",
      "Chức năng nuôi dưỡng, giáo dục"
    ],
    answer: "A"
  },
  {
    chapter: 6,
    question: "Chỉ ra chức năng đảm bảo tái sản xuất nguồn lao động và sức lao động cho xã hội của gia đình:",
    options: [
      "Chức năng tái sản xuất ra con người",
      "Chức năng kinh tế",
      "Chức năng thoả mãn các nhu cầu tâm sinh lý, duy trì tình cảm",
      "Chức năng nuôi dưỡng, giáo dục"
    ],
    answer: "A"
  },
  {
    chapter: 6,
    question: "Thực hiện chức năng nào của gia đình nhằm góp phần to lớn vào việc đào tạo thế hệ trẻ, thế hệ tương lai của xã hội?",
    options: [
      "Chức năng tái sản xuất ra con người",
      "Chức năng nuôi dưỡng, giáo dục",
      "Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình",
      "Chắc năng kinh tế và tổ chức tiêu dùng"
    ],
    answer: "B"
  },
  {
    chapter: 6,
    question: "Với chức năng chính trị, gia đình là:",
    options: [
      "Có trách nhiệm nuôi dưỡng, dạy dỗ con cái trở thành người có ích cho gia đình, cộng đồng và xã hội",
      "Là nơi đáp ứng nhu cầu tâm, sinh lý tự nhiên của con người, đáp ứng nhu cầu duy trì nòi giống",
      "Là cầu nối của mối quan hệ giữa nhà nước với công dân",
      "Nơi lưu giữ truyền thống văn hoá của dân tộc cũng như tộc người"
    ],
    answer: "C"
  },
  {
    chapter: 6,
    question: "Gia đình Việt Nam ngày nay có thể được coi là:",
    options: [
      "Gia đình lạc hậu",
      "Gia đình hiện đại",
      "Gia đình truyền thống",
      "Gia đình quá độ"
    ],
    answer: "D"
  },
  {
    chapter: 6,
    question: "Sự thay đổi quy mô của gia đình hiện nay ở Việt Nam có tác động như thế nào đối với xã hội?",
    options: [
      "Làm cho xã hội trở nên thích nghi và phù hợp hơn với tình hình mới, thời đại mới",
      "Sự bình đẳng nam nữ được đề cao hơn, cuộc sống riêng tư của con người được tôn trọng hơn",
      "Làm cho kinh tế của đất nước chậm phát triển",
      "Không có tác động gì đối với sự phát triển của xã hội"
    ],
    answer: ["A", "B"]
  },
  {
    chapter: 6,
    question: "Quan điểm sau đây của ai: \"Nhiều gia đình cộng lại mới thành xã hội, xã hội tốt thì gia đình càng tốt, gia đình tốt thì xã hội mới tốt. Hạt nhân của xã hội chính là gia đình\"?",
    options: [
      "C. Mác",
      "V.I. Lênin",
      "Ph. Ăngghen",
      "Hồ Chí Minh"
    ],
    answer: "D"
  },
  {
    chapter: 6,
    question: "Chức năng của gia đình là:",
    options: [
      "Chức năng lãnh đạo cách mạng",
      "Chức năng kinh tế và tổ chức tiêu dùng",
      "Chức năng làm các hoạt động từ thiện",
      "Chức năng tổ chức các sự kiện"
    ],
    answer: "B"
  },
  {
    chapter: 6,
    question: "So với các chế độ xã hội trước thì quan hệ gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội có đặc điểm khác biệt gì về chất?",
    options: [
      "Quan hệ bình đẳng trong gia đình, giải phóng phụ nữ",
      "Phụ nữ chỉ lo việc nội trợ",
      "Đàn ông là người quyết định mọi việc trong gia đình",
      "Duy trì quan hệ gia trưởng, độc đoán"
    ],
    answer: "A"
  },
  {
    chapter: 6,
    question: "Chọn đáp án sai về mô hình gia đình Việt Nam hiện đại ngày nay?",
    options: [
      "Ông bà là người làm chủ gia đình",
      "Người phụ nữ - người vợ làm chủ gia đình",
      "Cả hai vợ chồng cùng làm chủ gia đình",
      "Người đàn ông - người chồng làm chủ gia đình"
    ],
    answer: "A"
  },
  {
    chapter: 6,
    question: "Chức năng tái sản xuất của gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội có những biến đổi như thế nào?",
    options: [
      "Tăng nhu cầu có con trai",
      "Tăng sản xuất hàng hóa",
      "Chủ động trong việc sinh con",
      "Giảm số con mong muốn"
    ],
    answer: ["C", "D"]
  },
  {
    chapter: 6,
    question: "Gia đình là:",
    options: [
      "Tập đoàn xã hội ổn định",
      "Một tộc người",
      "Hình thức cộng đồng xã hội đặc biệt",
      "Một nhóm người"
    ],
    answer: "C"
  },
  {
    chapter: 6,
    question: "Trong gia đình Việt Nam hiện đại ngày nay, nhu cầu về con cái đã có những thay đổi căn bản như thế nào?",
    options: [
      "Phải có con, càng đông con càng tốt và nhất thiết phải có con trai nối dõi",
      "Tỷ lệ sinh thấp, nhu cầu phải có con trai tăng",
      "Các gia đình không muốn có con để không bị gánh nặng kinh tế",
      "Giảm mức sinh của phụ nữ, giảm số con mong muốn và giảm nhu cầu nhất thiết phải có con trai của các cặp vợ chồng"
    ],
    answer: "D"
  },
  {
    chapter: 6,
    question: "Sự biến đổi quan hệ giữa các thế hệ, các giá trị, chuẩn mực văn hóa của gia đình hạt nhân ngày nay có tác động tiêu cực như thế nào đối với người cao tuổi?",
    options: [
      "Người cao tuổi được đáp ứng đầy đủ nhu cầu về tâm lý, tình cảm",
      "Người cao tuổi được sống trong gia đình có nhiều thế hệ",
      "Người cao tuổi phải đối mặt với sự cô đơn thiếu thốn về tình cảm",
      "Người cao tuổi được con cái dành nhiều thời gian quan tâm, chăm sóc"
    ],
    answer: "C"
  },
  {
    chapter: 6,
    question: "Sự biến đổi trong việc thực hiện chức năng giáo dục của gia đình Việt Nam hiện nay là gì?",
    options: [
      "Sự đầu tư tài chính của gia đình cho giáo dục con cái tăng lên",
      "Chi giáo dục đạo đức mà không hướng tới giáo dục kiến thức khoa học hiện đại",
      "Không hướng tới giáo dục đạo đức, lối sống.",
      "Giảm chi tiêu cho giáo dục"
    ],
    answer: "A"
  },
  {
    chapter: 6,
    question: "Quy mô của gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội có những biến đổi như thế nào?",
    options: [
      "Ngày càng thu nhỏ",
      "Kinh tế tự cấp",
      "Quy mô lớn",
      "Gia đình hạt nhân tăng lên"
    ],
    answer: ["A", "D"]
  },
  {
    chapter: 6,
    question: "Xu hướng phát triển của quy mô gia đình Việt Nam ngày nay như thế nào?",
    options: [
      "Có xu hướng vừa tăng lên vừa thu nhỏ lại",
      "Có xu hướng ổn định không thay đổi so với trước đây",
      "Ngày càng được thu nhỏ lại",
      "Ngày càng được mở rộng ra"
    ],
    answer: "C"
  },
  {
    chapter: 6,
    question: "Những vấn đề xã hội nào có dấu hiệu gia tăng đối với gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
    options: [
      "Sản xuất hàng hóa",
      "Ly hôn",
      "Giáo dục đạo đức",
      "Bạo lực gia đình"
    ],
    answer: ["B", "D"]
  },
  {
    chapter: 6,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Tăng số con mong muốn và tăng nhu cầu nhất thiết phải có con trai của các cặp vợ chồng", answer: "Sai" },
      { text: "Trong gia đình hiện đại, sự bền vững của hôn nhân không phụ thuộc vào các yếu tố tâm lý, tình cảm, kinh tế", answer: "Sai" },
      { text: "Gia đình từ đơn vị kinh tế tự cung tự cấp sang đơn vị kinh tế hàng hoá", answer: "Đúng" },
      { text: "Hiện nay việc sinh đẻ được các gia đình tiến hành một cách chủ động, tự giác", answer: "Đúng" }
    ]
  },
  {
    chapter: 6,
    question: "Chọn đáp án (Đúng hoặc Sai) với từng phát biểu sau:",
    choices: ["Đúng", "Sai"],
    parts: [
      { text: "Nội dung giáo dục trong gia đình hiện nay chỉ tập trung giáo dục đạo đức", answer: "Sai" },
      { text: "Hiện nay, độ bền vững của gia đình không bị chi phối bởi các mối quan hệ hòa hợp tình cảm giữa chồng và vợ, cha mẹ và con cái", answer: "Sai" },
      { text: "Giáo dục gia đình tiếp tục nhấn mạnh sự hy sinh của cá nhân cho cộng đồng", answer: "Sai" },
      { text: "Hiện nay, kinh tế gia đình đang trở thành một bộ phận quan trọng trong nền kinh tế quốc dân", answer: "Đúng" }
    ]
  },
  {
    chapter: 6,
    question: "Kéo thả các yếu tố liên quan đến biến đổi gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội vào các cột tương ứng:",
    choices: ["Biến đổi về chức năng gia đình", "Biến đổi về quy mô gia đình"],
    parts: [
      { text: "Đầu tư tài chính của gia đình cho giáo dục con cái tăng lên", answer: "Biến đổi về chức năng gia đình" },
      { text: "Gia đình đơn thân", answer: "Biến đổi về quy mô gia đình" },
      { text: "Gia đình hạt nhân", answer: "Biến đổi về quy mô gia đình" },
      { text: "Hướng đến giáo dục kiến thức khoa học hiện đại", answer: "Biến đổi về chức năng gia đình" },
      { text: "Vai trò giáo dục của các chủ thể trong gia đình có xu hướng giảm", answer: "Biến đổi về chức năng gia đình" },
      { text: "Xu hướng thu nhỏ", answer: "Biến đổi về quy mô gia đình" }
    ]
  },
  {
    chapter: 6,
    question: "Kéo thả các khái niệm khớp với các phát biểu về biến đổi gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội dưới đây:",
    choices: ["Gia đình hạt nhân", "Giảm số con", "Kinh tế hàng hóa", "Mâu thuẫn giữa các thế hệ"],
    parts: [
      { text: "Biến đổi về quy mô gia đình", answer: "Gia đình hạt nhân" },
      { text: "Biến đổi về chức năng tái sản xuất", answer: "Giảm số con" },
      { text: "Biến đổi về quan hệ gia đình", answer: "Mâu thuẫn giữa các thế hệ" },
      { text: "Biến đổi về chức năng kinh tế", answer: "Kinh tế hàng hóa" }
    ]
  }
];
