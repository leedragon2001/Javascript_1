function tinhTienKW1(soKw, tienKw) {
  return soKw * tienKw;
}
function tinhTienKW2(soKw, tienKw) {
  return (soKw - 50) * tienKw;
}
function tinhTienKW3(soKw, tienKw) {
  return (soKw - 100) * tienKw;
}
function tinhTienKW4(soKw, tienKw) {
  return (soKw - 200) * tienKw;
}
function tinhTienKW5(soKw, tienKw) {
  return (soKw - 350) * tienKw;
}
function ketQua() {
  var name = document.getElementById("name").value;
  var soKw = Number(document.getElementById("soKw").value);
  var tongTien = 0;
  var currentFormat = new Intl.NumberFormat("vn-VN");
  if (soKw <= 50 && soKw > 0) {
    tongTien = tinhTienKW1(soKw, 500);
  } else if (soKw > 50 && soKw <= 100) {
    tienKw1 = tinhTienKW1(50, 500);
    tienKw2 = tinhTienKW2(soKw, 650);
    tongTien = tienKw1 + tienKw2;
  } else if (soKw > 100 && soKw <= 200) {
    tienKw1 = tinhTienKW1(50, 500);
    tienKw2 = tinhTienKW2(100, 650);
    tienKw3 = tinhTienKW3(soKw, 850);
    tongTien = tienKw1 + tienKw2 + tienKw3;
  } else if (soKw > 200 && soKw <= 350) {
    tienKw1 = tinhTienKW1(50, 500);
    tienKw2 = tinhTienKW2(100, 650);
    tienKw3 = tinhTienKW3(200, 850);
    tienKw4 = tinhTienKW4(soKw, 1100);
    tongTien = tienKw1 + tienKw2 + tienKw3 + tienKw4;
  } else if (soKw > 350) {
    tienKw1 = tinhTienKW1(50, 500);
    tienKw2 = tinhTienKW2(100, 650);
    tienKw3 = tinhTienKW3(200, 850);
    tienKw4 = tinhTienKW4(350, 1100);
    tienKw5 = tinhTienKW5(soKw, 1300);
    tongTien = tienKw1 + tienKw2 + tienKw3 + tienKw4 + tienKw5;
  } else {
    ("Số kw không hợp lệ! Vui lòng nhập lại");
  }
  var result =
    "Họ tên: " + name + "; Tiền điện: " + currentFormat.format(tongTien);
  document.querySelector(".showKetQua").innerHTML = result;
}
