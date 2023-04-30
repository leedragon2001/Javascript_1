function ketQua() {
  var diemChuan = Number(document.getElementById("diemChuan").value);
  var area = document.getElementById("area").value;
  var object = document.getElementById("object").value;
  var diemMon1 = Number(document.getElementById("diemMon1").value);
  var diemMon2 = Number(document.getElementById("diemMon2").value);
  var diemMon3 = Number(document.getElementById("diemMon3").value);
  var tongDiemDT = 0;
  var tongDiemKV = 0;

  if (diemChuan <= 30 && diemChuan >= 10) {
    if (area === "A") {
      tongDiemKV += 2;
    } else if (area === "B") {
      tongDiemKV += 1;
    } else if (area === "C") {
      tongDiemKV += 0.5;
    }

    if (object === "1") {
      tongDiemDT += 2.5;
    } else if (object === "2") {
      tongDiemDT += 1.5;
    } else if (object === "3") {
      tongDiemDT += 1;
    }

    var tongDiem = diemMon1 + diemMon2 + diemMon3 + tongDiemKV + tongDiemDT;

    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
      result = document.querySelector(".showKetQua").innerHTML =
        "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    } else if (tongDiem >= diemChuan) {
      result = document.querySelector(".showKetQua").innerHTML =
        "Bạn đã đậu. Tổng điểm: " + tongDiem;
    } else {
      result = document.querySelector(".showKetQua").innerHTML =
        "Bạn đã rớt. Tổng điểm: " + tongDiem;
    }
  } else {
    alert("Điểm chuẩn không đúng");
  }
}
