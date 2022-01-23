function calc() {
  let a = +document.querySelector('#value1').value;
  let b = +document.querySelector('#value2').value;
  let op = document.querySelector('#operator').value;
  let ans;
  switch (op) {
    case 'add':
      ans = a + b;
      break;
    case 'sub':
      ans = a - b;
      break;
    case 'mul':
      ans = a * b;
      break;
    case 'div':
      ans = a / b;
      break;
    default:
      ans = "Wrong Input";

  }
  console.log(ans);
  document.querySelector('#result').innerHTML = ans;
}
