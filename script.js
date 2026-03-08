const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');

  li.innerHTML = `<span>${text}</span> <button class="delete">Delete</button>`;

  li.querySelector('.delete').addEventListener('click', () => li.remove());

  taskList.appendChild(li);

  taskInput.value = '';
});