//задание 1
// exictedUserLogin = "the_best_user";
// exictedUserPassword = "12345678";
// let userLogin = prompt("Введите логин").trim();
// let userPassword = prompt("Введите пароль").trim();
// if (exictedUserLogin === userLogin && exictedUserPassword === userPassword) {
//   alert(`Добро пожаловать ${userLogin}!`);
// } else {
//   alert("Логин и (или) пароль введены неверно!");
// }
//задание 2
let correctAnswer = 0;
let incorrectAnswer = 0;

let q1 = +prompt("Сколько будет 2 + 2?");
let ans1 = 4;

if (q1 === ans1 && !isNaN(q1)) {
  alert("Верный ответ!");
  correctAnswer++;
} else {
 alert("Нверный ответ! Или ответ не число");
  incorrectAnswer++;
}

let q2 = +prompt("Сколько будет 2 * 2?");
let ans2 = 4;

if (q2 === ans2 && !isNaN(q2)) {
  alert("Верный ответ!");
  correctAnswer++;
} else {
 alert("Нверный ответ! Или ответ не число");
  incorrectAnswer++;
}

let q3 = +prompt(
  "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
);
let ans3 = 1;

if (q3 === ans3 && !isNaN(q3)) {
  alert("Верный ответ!");
  correctAnswer++;
} else {
 alert("Нверный ответ! Или ответ не число");
  incorrectAnswer++;
}

let q4 = +prompt(
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
);
let ans4 = 12;

if (q4 === ans4 && !isNaN(q4)) {
  alert("Верный ответ!");
  correctAnswer++;
} else {
 alert("Нверный ответ! Или ответ не число");
  incorrectAnswer++;
}

let q5 = +prompt("Сколько будет 2 + 2 * 2?");
let ans5 = 6;

if (q5 === ans5 && !isNaN(q5)) {
  alert("Верный ответ!");
  correctAnswer++;
} else {
  alert("Нверный ответ! Или ответ не число");
  incorrectAnswer++;
}

alert(
  `Конец теста! Правильные ответы: ${correctAnswer}, неправильные ответы: ${incorrectAnswer}`
);
