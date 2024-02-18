// Исходный массив
const peopleWaiting = ['Кристина', 'Светлана', 'Артем', 'Глеб', 'Олег', 'Кирилл', 'Мария'];

// Функция выдачи посылки и удаления клиента из начала массива
function giveParcel() {
  const firstPerson = peopleWaiting.shift(); // Удаляем из начала массива первого человека
  if (firstPerson) {
    alert(`${firstPerson} получил посылку. В очереди осталось ${peopleWaiting.length} человек.`);
  }
}

// Функция удаления клиента, который не получил посылку из конца списка
function leaveQueueWithoutParcel() {
  const lastPerson = peopleWaiting.pop(); // Удаляем из конца массива последнего человека
  if (lastPerson) {
    alert(`${lastPerson} не получил посылку и ушел из очереди.`);
  }
}

// Шаг 1: Кристина и Олег получили посылки и ушли из очереди
giveParcel();
giveParcel();

// Шаг 2: Теперь очередь подошла к Кириллу, остальные уходят
const indexOfKirill = peopleWaiting.indexOf('Кирилл');
if (indexOfKirill !== -1) {
  peopleWaiting.splice(indexOfKirill, 1); // Удаляем Кирилла из массива
  while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel(); // Удаляем оставшихся людей, которые не получили посылку
  }
}
