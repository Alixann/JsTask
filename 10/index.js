//1

// const student = {
//     stack: ['HTML'], // значение по умолчанию
//     level: 1, // значение по умолчанию
//     improveLevel: function() {
//       // Увеличиваем уровень
//       this.level++;

//       // Добавляем технологии в зависимости от уровня
//       switch(this.level) {
//         case 2:
//           this.stack.push('CSS');
//           break;
//         case 3:
//           this.stack.push('JavaScript');
//           break;
//         case 4:
//           this.stack.push('React');
//           break;
//         case 5:
//           this.stack.push('NodeJS');
//           break;
//         default:
//           if (this.level > 5) {
//             alert("Студент выучил все технологии!");
//           }
//       }

//       return this; //
//     }
//   };

//   // Пример использования метода improveLevel
//   student.improveLevel().improveLevel().improveLevel().improveLevel().improveLevel();

//   console.log(student.stack); // Результат: ["HTML", "CSS", "JavaScript", "React", "NodeJS"]

//2 задание
// const dog = {
//   name: "Чарли",
//   type: "Собака",
//   makeSound() {
//     return "гав-гав";
//   },
// };
// const bird = {
//   name: "Петя",
//   type: "Воробей",
//   makeSound() {
//     return "чик-чирик";
//   },
// };

//bind==============
// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic,
//   };
// }

// const boundMakeDomestic = makeDomestic.bind(dog);
// const domesticDog = boundMakeDomestic(true);
// console.log(domesticDog);

//call==============
// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic,
//   };
// }

// const domesticBird = makeDomestic.call(bird, false);
// console.log(domesticBird);

//apply ==========
// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic,
//   };
// }

// const domesticBird = makeDomestic.apply(bird, [false]);
// console.log(domesticBird);

//3
const footballer = {
  fullName: "Cristiano Ronaldo",
  attack: function () {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal: function (sound) {
    console.log(`${this.fullName} забил гол! Вот это да! ${sound}`);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  },
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack();
score.call(footballer, "Сиииии");
substitute.apply(footballer, ["Paulo Dibala"]);
