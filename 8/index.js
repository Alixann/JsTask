// 1
// const users = [ 
//     {username:'David',
//     status:'online',
//     lastActivity:10,
//     },
//     {
//     username:'Lucy',
//     status:'offline',
//     lastActivity:22,
//     },
//     {
//     username:'Bob',
//     status:'online',
//     lastActivity:104,
//     }
// ]
// const onlineUsers = users.filter(user => user.status === 'online');
// const usersOnlineNames = onlineUsers.map(user => user.username).join(', ');

// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


//2
// function giveTalonsInOrder(patients, orders) {
//     let sortedPatients = [];
//     for (let orderId of orders) {
//       let patient = patients.find(p => p.id === orderId);
//       if (patient) {
//         sortedPatients.push(patient);
//       }
//     }
//     return sortedPatients;
//   }


//3 функция
// function handleObject(obj, key, action) {
//     if (action === 'get') {
//       return obj[key];
//     } else if (action === 'add') {
//       obj[key] = "";
//       return obj;
//     } else if (action === 'delete') {
//       delete obj[key];
//       return obj;
//     } else {
//       return obj;
//     }
//   }
  
//тестируем 3 
// const student = {
//     name: "Maxim",
//     programmingLanguage: 'JavaScript'
//   };
//   const result = handleObject(student, 'programmingLanguage', 'delete');
//   console.log('result', result);
  

// 4
function giveJobToStudent(student, jobName) {
    let updatedStudent = {...student, job: jobName};
    let fullName = updatedStudent.fullName;
    alert(`Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`);
    return updatedStudent;
  }

 //тест
  const student = {
    fullName: "Максим",
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React']
  };
  
  const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
  console.log(updatedStudent);