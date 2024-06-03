const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.querySelector('.task-list');
const clearAllBtn = document.getElementById('clear-all');
const completedCount = document.querySelector('.completed-count');
const totalCount = document.querySelector('.total-count');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.classList.add('task-text');
        li.appendChild(taskText);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = task.completed ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>';
        completeBtn.addEventListener('click', () => toggleTaskCompletion(index));
        taskActions.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        taskActions.appendChild(deleteBtn);

        li.appendChild(taskActions);
        taskList.appendChild(li);
    });

    updateTaskCount();
}

function addTask() {
    const taskText = inputTask.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        inputTask.value = '';
        renderTasks();
    }
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function clearAll() {
    tasks = [];
    renderTasks();
}

function updateTaskCount() {
    const completedTasks = tasks.filter(task => task.completed).length;
    completedCount.textContent = completedTasks;
    totalCount.textContent = tasks.length;
}

addTaskBtn.addEventListener('click', addTask);
inputTask.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
clearAllBtn.addEventListener('click', clearAll);

renderTasks();