/**
 ** Bài 1: Quản lý tuyến sinh
 ** Đầu vào:
 *  - Biến diemChuan: điểm chuẩn của hội đồng
 *  - Biến diemThi1: điểm thi môn thứ nhất
 *  - Biến diemThi2: điểm thi môn thứ hai
 *  - Biến diemThi3: điểm thi môn thứ ba
 *  - Biến khuVuc: khu vực ưu tiên (A:2 B:1 C:0.5 X:0)
 *  - Biến doiTuong: đối tượng ưu tiên (1:2.5 2:1.5 3:1 0:0)
 *
 ** Xử lý:
 *  - Kiểm tra tính hợp lệ của các biến đầu vào
 *  - Kiểm tra điều kiện điểm thi với 0
 *      + diemThi1 == 0 && diemThi2 == 0 && diemThi3 == 0
 *
 *  - Kiểm tra khu vực và tính điểm ưu tiên
 *      + diemKhuVuc = (khuVuc == "A") ? 2 : (khuVuc == "B") ? 1 : (khuVuc == "C") ? 0.5 : 0
 *  - Kiểm tra đối tượng và tính điểm ưu tiên
 *      + diemDoiTuong = (doiTuong == 1) ? 2.5 : (doiTuong == 2) ? 1.5 : (doiTuong == 3) ? 1 : 0
 *
 * - Tính tổng điểm
 *      + tongDiem = diemThi1 + diemThi2 + diemThi3 + diemKhuVuc + diemDoiTuong
 *
 *  - So sánh tổng điểm với điểm chuẩn: ketQua = (tongDiem >= diemChuan) ?
 *
 ** Đầu ra:
 *  - Kết quả thí sinh đậu hay rớt và tổng số điểm đạt được
 *      + Kết quả Đậu hay Rớt, Tổng số điểm đạt được
 */

function checkResult() {
  const diemChuan = parseFloat(document.getElementById("diemChuan").value);
  const diemThi1 = parseFloat(document.getElementById("diemThi1").value);
  const diemThi2 = parseFloat(document.getElementById("diemThi2").value);
  const diemThi3 = parseFloat(document.getElementById("diemThi3").value);
  const khuVuc = document.getElementById("khuVuc").value.toUpperCase();
  const doiTuong = parseInt(document.getElementById("doiTuong").value);

  if (
    isNaN(diemChuan) ||
    diemChuan < 0 ||
    isNaN(diemThi1) ||
    diemThi1 < 0 ||
    isNaN(diemThi2) ||
    diemThi2 < 0 ||
    isNaN(diemThi3) ||
    diemThi3 < 0
  ) {
    document.getElementById("ketQuaTuyenSinh").innerHTML =
      "Vui lòng nhập thông tin hợp lệ.";
    return;
  }

  if (diemThi1 === 0 || diemThi2 === 0 || diemThi3 === 0) {
    document.getElementById("ketQuaTuyenSinh").innerHTML =
      "Thí sinh rớt vì có môn thi có điểm bằng 0.";
    return;
  }

  let diemKhuVuc =
    khuVuc === "A" ? 2 : khuVuc === "B" ? 1 : khuVuc === "C" ? 0.5 : 0;
  let diemDoiTuong =
    doiTuong === 1 ? 2.5 : doiTuong === 2 ? 1.5 : doiTuong === 3 ? 1 : 0;

  const tongDiem = diemThi1 + diemThi2 + diemThi3 + diemKhuVuc + diemDoiTuong;

  let ketQua = tongDiem >= diemChuan ? "Thí sinh đậu." : "Thí sinh rớt.";
  ketQua += ` Tổng số điểm đạt được: ${tongDiem}`;

  document.getElementById("ketQuaTuyenSinh").innerHTML = ketQua;
}
