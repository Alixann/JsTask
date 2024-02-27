const peopleWaiting = [
  "Кристина",
  "Светлана",
  "Артем",
  "Глеб",
  "Олег",
  "Кирилл",
  "Мария",
];

// Функция выдачи посылки и удаления клиента из начала массива
function giveParcel() {
  const firstPerson = peopleWaiting.shift(); // Удаляем из начала массива первого человека
  if (firstPerson) {
    alert(
      `${firstPerson} получил посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  }
}

// Функция удаления клиента, который не получил посылку из конца списка
function leaveQueueWithoutParcel() {
  const lastPerson = peopleWaiting.pop(); // Удаляем из конца массива последнего человека
  if (lastPerson) {
    alert(`${lastPerson} не получил посылку и ушел из очереди.`);
  }
}

// Получили посылки и ушли из очереди
giveParcel();
giveParcel();

// Очередь подошла к Кириллу, остальные уходят
const indexOfKirill = peopleWaiting.indexOf("Кирилл");
if (indexOfKirill !== -1) {
  peopleWaiting.splice(indexOfKirill, 1); // Удаляем Кирилла из массива
  while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel(); // Удаляем оставшихся людей, которые не получили посылку
  }
}

//2 задание
function getSumOfSequence(number) {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr[0] + arr[arr.length - 1];
}

console.log(getSumOfSequence(5)); // Вернет 6

//задание 3
const coffees = ["Latte", "Cappuccino", "Americano"];
function searchCoffee() {
  const coffeeName = prompt("Поиск кофе по названию:");
  const index = coffees.findIndex(
    (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase()
  );

  if (index !== -1) {
    alert(
      `Держите ваш любимый кофе ${coffees[index]}. Он ${
        index + 1
      }-й по популярности в нашей кофейне.`
    );
  } else {
    alert("К сожалению, такого вида кофе нет в наличии");
  }
}

searchCoffee();

//задание4
const prices = [1.5, 1, 2];
const updatedPrices = prices.map((price) => price + 0.5);
coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});

//задание 5
let clientsEstimations = [];
function askClientToGiveEstimation() {
  let estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  estimation = Number(estimation);
  if (!isNaN(estimation) && estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}
