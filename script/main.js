//задание 3
let a = +prompt("введите целочисленные значение");
let b = +prompt("введите второе целочисленные значение");
console.log("задание 3 ответ:");
if (a > 0 && b > 0) {
  console.log(a - b);
} else if (a < 0 && b < 0) {
  console.log(a * b);
} else {
  console.log(a + b);
}
//задание 4
let c = +prompt("введите целочисленные значение от 0 до 15 включительно");
console.log("задание 4 ответ:");
switch (c) {
  case 0:
    console.log(
      "первое число которое вы ввели: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 1:
    console.log(
      "первое число которое вы ввели: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 2:
    console.log(
      "первое число которое вы ввели: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 3:
    console.log(
      "первое число которое вы ввели: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 4:
    console.log(
      "первое число которое вы ввели: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 5:
    console.log(
      "первое число которое вы ввели: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 6:
    console.log(
      "первое число которое вы ввели: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 7:
    console.log(
      "первое число которое вы ввели: 7, 8, 9, 10, 11, 12, 13, 14, 15"
    );
    break;
  case 8:
    console.log("первое число которое вы ввели: 8, 9, 10, 11, 12, 13, 14, 15");
    break;
  case 9:
    console.log("первое число которое вы ввели: 9, 10, 11, 12, 13, 14, 15");
    break;
  case 10:
    console.log("первое число которое вы ввели: 10, 11, 12, 13, 14, 15");
    break;
  case 11:
    console.log("первое число которое вы ввели: 11, 12, 13, 14, 15");
    break;
  case 12:
    console.log("первое число которое вы ввели: 12, 13, 14, 15");
    break;
  case 13:
    console.log("первое число которое вы ввели: 13, 14, 15");
    break;
  case 14:
    console.log("первое число которое вы ввели: 14, 15");
    break;
  case 15:
    console.log("ви велли число 15");
    break;
}
//задание 5
console.log("задание 5 ответ:");
var w = 74;
var e = 32;

function plus(w, e) {
  return w + e;
}
function minus(w, e) {
  return w - e;
}
function mult(w, e) {
  return w * e;
}
function divide(w, e) {
  return w / e;
}

console.log(plus(w, e));
console.log(minus(w, e));
console.log(mult(w, e));
console.log(divide(w, e));
//задание 6
console.log("задание 6 ответ:");
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "сложение":
      return arg1 + arg2;
      break;
    case "вычитание":
      return arg1 - arg2;
      break;
    case "деление":
      return arg1 / arg2;
      break;
    case "умножение":
      return arg1 * arg2;
      break;
  }
}
console.log(mathOperation(4, 5, "сложение"));
console.log(mathOperation(4, 5, "вычитание"));
console.log(mathOperation(4, 5, "деление"));
console.log(mathOperation(4, 5, "умножение"));
