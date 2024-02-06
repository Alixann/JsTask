// const MyName='Алиса'
// const programmingLanguage = 'javaScript'
// const courseCreatorName= 'Nikita'
// const reasonText='Так надо'
// const numberOfMonth= 2
// let myInfoText=`Всем привет! Меня зовут, ${MyName}.Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
// Я хочу стать веб-разботчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage}
// ${numberOfMonth} месяцев.
// Я уверена, что пройду данный курс до конца!`

// //задание2
// myInfoText=myInfoText.replaceAll('javaScript', 'JAVASCRIPT');
// console.log(myInfoText)
// console.log (myInfoText.length)
// console.log(myInfoText.charAt(0))
// console.log(myInfoText.charAt(myInfoText.length -1))

//задание 3,4
// let userName = prompt("Как вас зовут?");
// const userAge = +prompt("Сколько вам лет?");
// userName = userName.toLowerCase();
// alert(userName.toLowerCase(userName), userName.replaceAll(" ", ""));
// alert(`Вас зовут ${userName} и вам ${userAge} лет`);

//задание 5
// let userString = prompt('Введите текст для обрезки')
// userString= userString.trim()
// const startSliceIndex =+ prompt('ВВедите индекс с которого нужно начать обрезку строки')
// const endSliceIndex =+ prompt('ВВедите индекс, которым нужно закончить обрезку строки')
// alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`);

//задание 6
// let userText = prompt("Введите текст").trim();
// const userwordFromText = prompt("Введите слово из текста").trim();
// let indexOfWord = userText.indexOf(userwordFromText);
// let result = userText.slice(0, indexOfWord);
// alert("Результат: " + result);

//7 задание
let javaScriptDescription = 'Вам дан следующий текст, взятый из Википедии: "JavaScript - мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."'
let middleSymbol = Math.floor(javaScriptDescription.length/2)
let trimString = javaScriptDescription.slice(0, middleSymbol).trim()
trimString=trimString.replaceAll('а', 'А')
let tripleString = trimString.repeat(3);
let middleSymbolString = tripleString.charAt(Math.floor(tripleString.length/2))
console.log(tripleString)
console.log(middleSymbolString)


