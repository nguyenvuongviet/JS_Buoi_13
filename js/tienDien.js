/**
 ** Biá 2: Tính tiền điện
 ** Đầu vào:
 *  - Biến tenKH: tên khách hàng
 *  - Biến soKw: số KW tiêu thụ
 *
 ** Xử lý:
 *  - Kiểm tra tính hợp lệ của các biến đầu vào
 *  - Kiểm tra và tính tiền điện theo từng mức tiêu thụ kW
 *      + tongTien = (soKw <= 50) ? soKw * 500
 *      + tongTien = (soKw <= 100) ? 50 * 500 + (soKw - 50) * 650
 *      + tongTien = (soKw <= 200) ? 50 * 500 + 50 * 650 + (soKw - 100) * 850
 *      + tongTien = (soKw <= 350) ? 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
 *      + tongTien = (soKw <= 500) ? 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300
 *      + tongTien = (soKw <= 500) ? 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + 200 * 1300 + (soKw - 500) * 1500
 *
 ** Đầu ra:
 *  - Tên khách hàng: tenKH
 *  - Số KW tiêu thụ: soKw
 *  - Tổng tiền điện: tongTien
 */
function electricityBill() {
  const tenKH = document.getElementById("tenKH").value;
  const soKw = parseFloat(document.getElementById("soKw").value);

  if (!tenKH || isNaN(soKw) || soKw < 0) {
    document.getElementById("tienDien").innerHTML =
      "Vui lòng nhập thông tin hợp lệ.";
    return;
  }

  let tongTien = 0;

  if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  let ketQua = `Tiền điện: ${tongTien.toLocaleString()} VND`;
  document.getElementById("tienDien").innerHTML = ketQua;
}
