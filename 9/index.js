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
  
  