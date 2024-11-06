/**
 * ** Bài 3: Tính thuế thu nhập cá nhân
 * ** Đầu vào:
 *  - Biến hoTen: tên cá nhân
 *  - Biến thuNhap: tổng thu nhập năm
 *  - Biến soNguoiPhuThuoc: số người phụ thuộc
 *
 * ** Xử lý:
 *  - Kiểm tra tính hợp lệ của các biến đầu vào
 *  - Tính thu nhập chịu thuế
 *      + thuNhapChiuThue = thuNhap - 4 - soNguoiPhuThuoc * 1.6
 *  - Tính thuế suất dựa trên thu nhập chịu thuế
 *      + thueSuat
 *  - Tính thuế thu nhập cá nhân
 *      + thueThuNhap = thuNhapChiuThue * thueSuat
 *
 * ** Đầu ra:
 *  - Tên cá nhân: hoTen
 *  - Số người phụ thuộc: soNguoiPhuThuoc
 *  - Thuế thu nhập cá nhân phải trả: thueThuNhap
 */
function incomeTax() {
  const hoTen = document.getElementById("hoTen").value;
  const thuNhap = parseFloat(document.getElementById("thuNhap").value);
  const soNguoiPhuThuoc = parseInt(
    document.getElementById("soNguoiPhuThuoc").value
  );

  if (
    !hoTen ||
    isNaN(thuNhap) ||
    isNaN(soNguoiPhuThuoc) ||
    thuNhap < 0 ||
    soNguoiPhuThuoc < 0
  ) {
    document.getElementById("thueThuNhap").innerHTML =
      "Vui lòng nhập thông tin hợp lệ.";
    return;
  }

  const thuNhapChiuThue = thuNhap - 4 - soNguoiPhuThuoc * 1.6;

  let thueSuat = 0;

  if (thuNhapChiuThue <= 60) {
    thueSuat = 0.05;
  } else if (thuNhapChiuThue <= 120) {
    thueSuat = 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thueSuat = 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thueSuat = 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thueSuat = 0.25;
  } else if (thuNhapChiuThue <= 960) {
    thueSuat = 0.3;
  } else {
    thueSuat = 0.35;
  }
  const thueThuNhap = thuNhapChiuThue * thueSuat;
  let ketQua = `Thuế thu nhập cá nhân phải nộp: ${thueThuNhap.toLocaleString()} triệu VND`;
  document.getElementById("thueThuNhap").innerHTML = ketQua;
}
