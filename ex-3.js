// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let resultTable = "";
  for (i = 1; i <= n; i++) {
    let multiplyResult = "";
    for (j = 1; j <= n; j++) {
      multiplyResult += i * j + "\t";
    }
    resultTable += multiplyResult + "\n";
  }
  return resultTable;
}

console.log(multiplicationTable(5));
