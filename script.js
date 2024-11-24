document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.classList.add('remove-task-btn');

            removeBtn.addEventListener('click', function() {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(removeBtn);
            taskList.appendChild(taskItem);

            taskInput.value = '';
        } else {
            alert("Por favor, insira uma descrição para a tarefa.");
        }
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
