function loaiKhachHang() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  if (loaiKhachHang == "doanhnghiep") {
    document.getElementById("inputKetNoi").style.display = "block";
  } else {
    document.getElementById("inputKetNoi").style.display = "none";
  }
}

function tinhTienCap() {
  var maKH = Number(document.getElementById("maKH").value);
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKetNoi = Number(document.getElementById("soKetNoi").value);
  var soKenh = Number(document.getElementById("soKenh").value);

  var phiXuLy = 0;
  var phiDichVuCoBan = 0;
  var thuKenhCaoCap = 0;

  if (loaiKhachHang == "nhadan") {
    phiXuLy = 4.5;
    phiDichVuCoBan = 20.5;
    thuKenhCaoCap = 7.5 * soKenh;
  } else if (loaiKhachHang == "doanhnghiep") {
    phiXuLy = 15;
    if (soKetNoi > 10) {
      phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    } else {
      phiDichVuCoBan = 75;
    }
    thuKenhCaoCap = 50 * soKenh;
  }

  var tongTien = phiXuLy + phiDichVuCoBan + thuKenhCaoCap;

  document.querySelector(".showKetQua").innerHTML =
    "Mã khách hàng: " + maKH + "<br/>Tổng tiền: $" + tongTien.toFixed(2);
}
