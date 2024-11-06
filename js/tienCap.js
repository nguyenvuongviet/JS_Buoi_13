/**
 * ** Bài 4: Tính tiền cáp
 * ** Đầu vào:
 *  - Biến maKH: mã khách hàng
 *  - Biến loaiKhachHang: loại khách hàng
 *  - Biến soKetNoi: số kết nối
 *  - Biến soKenhCaoCap: số kênh cấp
 *
 * ** Xử lý:
 *  - Kiểm tra tính hợp lệ của các biến đầu vào
 *  - Tính tiền cáp
 *      + tienCap = 0.01 * soKetNoi + 0.02 * soKenhCaoCap
 *
 * ** Đầu ra:
 *  - Tiền cáp: tienCap
 */

document
  .getElementById("loaiKhachHang")
  .addEventListener("change", function () {
    let loaiKhachHang = document.getElementById("loaiKhachHang").value;
    if (loaiKhachHang === "doanhNghiep") {
      document.getElementById("groupSo").style.display = "block";
    } else {
      document.getElementById("groupSo").style.display = "none";
    }
  });

function cableBill() {
  const maKH = document.getElementById("maKH").value;
  const loaiKhachHang = document.getElementById("loaiKhachHang").value;
  const soKetNoi = parseFloat(document.getElementById("soKetNoi").value);
  const soKenhCaoCap = parseFloat(
    document.getElementById("soKenhCaoCap").value
  );

  if (
    !maKH ||
    !loaiKhachHang ||
    (loaiKhachHang === "doanhNghiep" && !soKetNoi) ||
    (loaiKhachHang === "doanhNghiep" && !soKenhCaoCap)
  ) {
    document.getElementById("tienCap").innerHTML =
      "Vui lòng nhập thông tin hợp lệ.";
    return;
  }

  let tienCap = 0;
  if (loaiKhachHang === "nhaDan") {
    tienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang === "doanhNghiep") {
    if (soKetNoi <= 10) {
      tienCap = 15 + 75 + 50 * soKenhCaoCap;
    } else {
      tienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCaoCap;
    }
  }
  let ketQua = `Tiền cáp: ${tienCap} $`;
  document.getElementById("tienCap").innerHTML = ketQua;
}
