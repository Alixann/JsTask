// //1
// function getName1(name) {
//     return "Имя равно " + name;
//   }
  
//   const getName2 = function(name) {
//     return "Имя равно " + name;
//   };
  
//   const getName3 = (name) => {
//     return "Имя равно " + name;
//   };
  
//   console.log(getName1("John"));
//   console.log(getName2("Jane"));
//   console.log(getName3("Jake"));

// //2
// const getSumOfNumbers = (number, type = "odd") => {
//     let sum = 0;
    
//     for (let i = 0; i <= number; i++) {
//       if (type === "odd" && i % 2 !== 0) { // если type = "odd", добавляем только нечетные числа в сумму
//         sum += i;
//       } else if (type === "even" && i % 2 === 0) { // если type = "even", добавляем только четные числа в сумму
//         sum += i;
//       } else if (type === "") { // если type = "", добавляем все числа в сумму
//         sum += i;
//       }
//     }
    
//     return sum;
//   }

//3
  function getDivisorsCount(number = 1) {
    if (number < 0 || !Number.isInteger(number)) {
      alert("number должен быть целым числом и больше нуля!");
      return;
    }
    
    let count = 0;
    
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    
    return count;
  }