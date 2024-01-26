const MyName='Алиса'
const programmingLanguage = 'javaScript'
const courseCreatorName= 'Nikita'
const reasonText='Так надо'
const numberOfMonth= 2
let myInfoText=`Всем привет! Меня зовут, ${MyName}.Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разботчиком, потому что ${reasonText}. До этого я изучала ${programmingLanguage}
${numberOfMonth} месяцев.
Я уверена, что пройду данный курс до конца!`

myInfoText=myInfoText.replaceAll('javaScript', 'JAVASCRIPT');
console.log(myInfoText)
console.log (myInfoText.length);
console.log()
