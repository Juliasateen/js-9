'use strict';

function createToDoList() {
    
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    // используем событие change

    input.addEventListener('change', createTask);

    function createTask(event){
        // через event надо достучаться до value (value это то, то вводим в поле input)
        const value = event.target.value;

        //напишем проверку на пустые значения при вводе
        // метод .trim() убирает пробелы, если после очищения пробелов в строке будет пусто, т.е. false, то показать alert
        if(!value.trim()) return alert('You haven\'t created a task');

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox');

        const task = document.createElement('span');
        task.classList.add('task');

        //внутри span будет текст, который будет вводить пользователь → const value = event.target.value;
        task.innerHTML = value;
        
        taskContainer.append(checkbox, task);

        const tasks = document.querySelector('.tasks');
        tasks.prepend(taskContainer);

        //очищаем input после ввода данных
        input.value = '';

    checkbox.addEventListener('click', checkTask);

   // обработчик событий на изменение введенной задачи
    task.addEventListener('click', editeTask);
    }

    //очищение по кнопке
    button.addEventListener('click', deleteTask)


// this - это то на чем висит обработчик, т.е. checkbox
// через метод nextSibling() обращаемся к следующему узлу от checkbox - это span и вешаем на него класс active
function checkTask(){
    this.nextSibling.classList.toggle('active');
}

// event.target = <span>text</span>
// при клике будет изменять текст используя innerHTML + promt
function editeTask(event) {
    event.target.innerHTML = prompt('Change your task', event.target.textContent);
}


//очищение по кнопке - все div с классом .task задаем пустое значение
function deleteTask() {
    const deleteElements = document.querySelector('.tasks');
    deleteElements.innerHTML = '';
}
}

createToDoList();


