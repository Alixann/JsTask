//1 задание
// function getDateFormat(date, separator = ".") {
//     let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
//     let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
//     let year = date.getFullYear();
  
//     if (separator === "-") {
//       return `${day}-${month}-${year}`;
//     } else {
//       return `${day}.${month}.${year}`;
//     }
//   }

//   const today = new Date();
// const formattedDate = getDateFormat(today);
// console.log(formattedDate); // день.месяц.год

// const formattedDateWithDash = getDateFormat(today, "-");
// console.log(formattedDateWithDash); // день-месяц-год


//2 задание
function getDaysBeforeBirthday(nextBirthdayDate) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(currentYear, nextBirthdayDate.getMonth(), nextBirthdayDate.getDate());
    if (today > nextBirthday) {
      nextBirthday.setFullYear(currentYear + 1);
    }
    const timeDiff = nextBirthday.getTime() - today.getTime();
    const daysBeforeBirthday = Math.round(timeDiff / (1000 * 60 * 60 * 24));
    return daysBeforeBirthday;
  }
  
  
  //3
  function addDays(date, days = 1) {
    const timestamp = date.getTime(); // получаем timestamp для переданной даты
    const millisecondsInADay = 86400000; // количество миллисекунд в одном дне (24 часа * 60 минут * 60 секунд * 1000 миллисекунд)
  
    // суммируем timestamp с учетом количества дней и переводим результат обратно в объект Date
    return new Date(timestamp + days * millisecondsInADay);
  }
  
  // Пример использования функции
  const currentDate = new Date(); // текущая дата
  const updatedDate = addDays(currentDate, 7); // добавляем 7 дней к текущей дате
  console.log(updatedDate);
  