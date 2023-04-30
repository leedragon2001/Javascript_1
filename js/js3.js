function tinhTienThue() {
  var name = document.getElementById("name").value;
  var totalSalary = parseFloat(document.getElementById("totalSalary").value);
  var dependentPerson = parseInt(
    document.getElementById("dependentPerson").value
  );
  var currentFormat = new Intl.NumberFormat("vn-VN");
  if (totalSalary < 4000000 + dependentPerson * 1600000) {
    alert("Số tiền thu nhập năm của bạn không đủ để tính thuế");
  }

  var salaryVat = totalSalary - 4000000 - dependentPerson * 1600000;
  var thueSuat = 0;
  if (salaryVat > 960000000) {
    thueSuat = 0.35;
  } else if (salaryVat > 624000000) {
    thueSuat = 0.3;
  } else if (salaryVat > 384000000) {
    thueSuat = 0.25;
  } else if (salaryVat > 210000000) {
    thueSuat = 0.2;
  } else if (salaryVat > 120000000) {
    thueSuat = 0.15;
  } else if (salaryVat > 60000000) {
    thueSuat = 0.1;
  } else {
    thueSuat = 0.05;
  }
  var vat = salaryVat * thueSuat;
  var result =
    "Họ tên: " +
    name +
    "; Tiền thuế thu nhập cá nhân: " +
    currentFormat.format(vat) +
    "VND";
  document.querySelector(".showKetQua").innerHTML = result;
}
