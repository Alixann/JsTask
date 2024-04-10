document.body.innerHTML = `
<form class="create-user-form">
<label>
Имя
<input type="text" name="userName" placeholder="Введите ваше имя">
</label>
<label>
Пароль
<input type="password" name="password" placeholder="Придумайте Пароль">
</label>
<button type="submit">
Подтвердить
</button>
</form>`;

// Создание формы
const form = document.createElement("form");
form.className = "create-user-form";

// Создание и добавление поля "Имя" в форму
const nameLabel = document.createElement("label");
nameLabel.textContent = "Имя";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "userName";
nameInput.placeholder = "Введите ваше имя";
nameLabel.appendChild(nameInput);
form.appendChild(nameLabel);

// Создание и добавление поля "Пароль" в форму
const passLabel = document.createElement("label");
passLabel.textContent = "Пароль";
const passInput = document.createElement("input");
passInput.type = "password";
passInput.name = "password";
passInput.placeholder = "Придумайте Пароль";
passLabel.appendChild(passInput);
form.appendChild(passLabel);

// Создание и добавление кнопки "Подтвердить" в форму
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Подтвердить";
form.appendChild(submitBtn);

// Добавление сформированной формы
document.body.appendChild(form);

//2 задание
// поиск тега tasks-list
// const tasksList = document.querySelector('.tasks-list');

// // Функция, которая создает HTML-элемент задачи на основе объекта задачи
// function createTaskElement(task) {
//   const taskElement = document.createElement('div');
//   taskElement.classList.add('task-item');
//   taskElement.setAttribute('data-task-id', task.id);

//   taskElement.innerHTML = `
//     <div class="task-item__main-container">
//       <div class="task-item__main-content">
//         <form class="checkbox-form">
//           <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
//           <label for="task-${task.id}"></label>
//         </form>
//         <span class="task-item__text">${task.text}</span>
//       </div>
//       <button class="task-item__delete-button default-button delete-button" data-delete-task-id="${task.id}">Удалить</button>
//     </div>
//   `;

//   return taskElement;
// }

// // Функция для добавления задач в список
// function renderTasks() {
//   tasks.forEach(task => {
//     const taskElement = createTaskElement(task);
//     tasksList.appendChild(taskElement);
//   });
// }

// // Вызываем функцию для добавления задач в список
// renderTasks();

//3
document
  .querySelector(".create-task-block")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const inputText = document.querySelector(".create-task-block__input").value;
    const tasksList = document.querySelector(".tasks-list");

    if (inputText) {
      const newTask = {
        id: Date.now(),
        text: inputText,
      };

      tasks.push(newTask); // Добавляем новую задачу в массив

      const taskElement = document.createElement("li");
      taskElement.textContent = newTask.text;
      tasksList.appendChild(taskElement); // Добавляем новую задачу в DOM-дерево
    }
  });

//4
document
  .querySelector(".create-task-block")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const inputText = document.querySelector(".create-task-block__input").value;
    const tasksList = document.querySelector(".tasks-list");

    const errorMessageBlock = document.querySelector(".error-message-block");
    if (errorMessageBlock) {
      errorMessageBlock.remove(); // Удаляем блок с ошибкой, если он существует
    }

    if (!inputText) {
      const errorMessage = document.createElement("span");
      errorMessage.classList.add("error-message-block");
      errorMessage.textContent = "Название задачи не должно быть пустым";
      document.querySelector(".create-task-block").appendChild(errorMessage);
    } else if (tasks.some((task) => task.text === inputText)) {
      const errorMessage = document.createElement("span");
      errorMessage.classList.add("error-message-block");
      errorMessage.textContent = "Задача с таким названием уже существует";
      document.querySelector(".create-task-block").appendChild(errorMessage);
    } else {
      const newTask = {
        id: Date.now(),
        text: inputText,
      };

      tasks.push(newTask);

      const taskElement = document.createElement("li");
      taskElement.textContent = newTask.text;
      tasksList.appendChild(taskElement);
    }
  });

//5

const modalElement = document.createElement("div");
modalElement.innerHTML = modalTemplate.trim();
document.body.appendChild(modalElement);

// Обработчик события для открытия модального окна после клика на кнопку "Удалить"
document
  .querySelector(".tasks-list")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const taskId = event.target.dataset.taskId;
      const modalOverlay = document.querySelector(".modal-overlay");
      const confirmButton = document.querySelector(
        ".delete-modal.confirm-button"
      );

      modalOverlay.classList.remove("hidden");

      // Обработчик события для удаления задачи и закрытия модального окна при клике на кнопку "Удалить"
      confirmButton.addEventListener("click", function () {
        tasks = tasks.filter((task) => task.id != taskId);
        updateTasksList(); // Функция для обновления задач в DOM
        modalOverlay.classList.add("hidden");
      });
    }
  });

// Обработчик события для закрытия модального окна при клике на кнопку "Отмена"
document
  .querySelector(".delete-modal.cancel-button")
  .addEventListener("click", function () {
    document.querySelector(".modal-overlay").classList.add("hidden");
  });

//6
let darkTheme = false;

function toggleTheme() {
  const body = document.querySelector("body");
  const taskItems = document.querySelectorAll(".task-item");
  const buttons = document.querySelectorAll("button");

  if (darkTheme) {
    body.style.background = "initial";
    taskItems.forEach((item) => {
      item.style.color = "initial";
    });
    buttons.forEach((button) => {
      button.style.border = "none";
    });
  } else {
    body.style.background = "#24292E";
    taskItems.forEach((item) => {
      item.style.color = "#ffffff";
    });
    buttons.forEach((button) => {
      button.style.border = "1px solid #ffffff";
    });
  }

  darkTheme = !darkTheme;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    toggleTheme();
  }
});
