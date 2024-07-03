// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let result = "";
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    result += "*" + "\t";
    finalResult += result + "\n";
  }
  return finalResult;
}

console.log(printStar(10));
