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
// let correctAnswer = 0;
// let incorrectAnswer = 0;

// let q1 = +prompt("Сколько будет 2 + 2?");
// let ans1 = 4;

// if (q1 === ans1 && !isNaN(q1)) {
//   alert("Верный ответ!");
//   correctAnswer++;
// } else {
//   alert("Нверный ответ! Или ответ не число");
//   incorrectAnswer++;
// }

// let q2 = +prompt("Сколько будет 2 * 2?");
// let ans2 = 4;

// if (q2 === ans2 && !isNaN(q2)) {
//   alert("Верный ответ!");
//   correctAnswer++;
// } else {
//   alert("Нверный ответ! Или ответ не число");
//   incorrectAnswer++;
// }

// let q3 = +prompt(
//   "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
// );
// let ans3 = 1;

// if (q3 === ans3 && !isNaN(q3)) {
//   alert("Верный ответ!");
//   correctAnswer++;
// } else {
//   alert("Нверный ответ! Или ответ не число");
//   incorrectAnswer++;
// }

// let q4 = +prompt(
//   "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
// );
// let ans4 = 12;

// if (q4 === ans4 && !isNaN(q4)) {
//   alert("Верный ответ!");
//   correctAnswer++;
// } else {
//   alert("Нверный ответ! Или ответ не число");
//   incorrectAnswer++;
// }

// let q5 = +prompt("Сколько будет 2 + 2 * 2?");
// let ans5 = 6;

// if (q5 === ans5 && !isNaN(q5)) {
//   alert("Верный ответ!");
//   correctAnswer++;
// } else {
//   alert("Нверный ответ! Или ответ не число");
//   incorrectAnswer++;
// }

// alert(
//   `Конец теста! Правильные ответы: ${correctAnswer}, неправильные ответы: ${incorrectAnswer}`
// );

//задание 4
// while:
// let i = 0;
// while (i < 3) {
//   let newStudent = prompt("Bведите имя нового стyдента!");
//   newStudent = newStudent.trim();
//   if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
//   i += 1;
// }

// // do-while:
// let j = 0;
// do {
//   let newStudent = prompt("Bведите имя нового стyдента!");
//   newStudent = newStudent.trim();
//   if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
//   j += 1;
// } while (j < 3);

// // задание 5
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

//задание 6
let clientName = prompt ('Введите имя клиента');
let clientSpentForAllTime =prompt('Сколько клиент потратил за все время?');

let clientSpentToday =prompt('Сколько клиент потратил за сегодня?');
let discount = 0;
if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
  discount = 10;
  alert(`Вам предоставляется скидка в ${discount}%`);
} else if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) {
  discount = 20;
  alert(`Вам предоставляется скидка в ${discount}%`);
} else if (clientSpentForAllTime > 500) {
  discount = 30;
  alert(`Вам предоставляется скидка в ${discount}%`);
}
clientSpentForAllTime += clientSpentToday;
alert(
  `Спасибо, ${clientName}! К оплате ${
    clientSpentToday - (clientSpentToday * discount) / 100
  }$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);
