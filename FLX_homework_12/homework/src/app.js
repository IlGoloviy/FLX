const rootNode = document.getElementById('root');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const btnAdd = document.getElementById('btn-add');
const btnSave = document.getElementById('btn-save');
const btnCancel = document.getElementsByClassName('btn-cancel');
const inputTask = document.getElementById('new-task');
const taskList = document.getElementById('output');
const empty = document.getElementById('empty');
const inputEditTask = document.getElementById('edit-task');
const btnEditSave = document.getElementById('edit-save');
let counter = 0;

btnAdd.addEventListener('click', () => {
  location.hash = '#/add';
});

for (let i = 0; i < btnCancel.length; i++) {
  btnCancel[i].addEventListener('click', (ev) => {
    if (document.getElementById('save-edit-text')) {
      let deskTask = document.getElementById('save-edit-text');
      deskTask.removeAttribute('id');
    }
    location.hash = '';
  });
}
 
function addNewTask (count) {
  const task = document.createElement('div');
  const doneTask = document.createElement('img');
  const removeTask = document.createElement('img');
  const textTask = document.createElement('h2');
  doneTask.setAttribute('src', 'assets/img/todo-s.png');
  removeTask.setAttribute('src', 'assets/img/remove-s.jpg');
  localStorage.setItem('task'+count, inputTask.value);
  let textStorage = localStorage.getItem('task'+count);
  textTask.innerText = textStorage;
  task.appendChild(doneTask);
  task.appendChild(textTask);
  task.appendChild(removeTask);
  let firstDoneDiv = 0;
  if (document.getElementsByClassName('done').length > firstDoneDiv) {
    taskList.insertBefore(task, document.getElementsByClassName('done')[firstDoneDiv]);
  } else {
    taskList.appendChild(task); 
  }
  // if task is delete
  removeTask.addEventListener('click', removedTasks);
  // if task is done
  doneTask.addEventListener('click', () => {
    doneTask.setAttribute('src', 'assets/img/done-s.png');
    task.style.background = 'rgba(0,0,0,0.3)';
    doneTask.parentNode.setAttribute('class', 'done');
    taskList.appendChild(doneTask.parentNode);
  });
  // if task to edit
  textTask.addEventListener('click', editedTasks);
}

btnSave.addEventListener('click', () => {
  counter++;
  if (inputTask.value !== '') {
    empty.innerHTML = '';
    addNewTask(counter);
    location.hash = '';
    inputTask.value = '';
  } else {
    location.hash = '';
  }
});

function removedTasks(ev) {
  ev.path[1].remove();
  let parentElement = 2;
  if (ev.path[parentElement].children.length === 1) {
    empty.innerHTML = 'TODO is empty';
  }
}

function editedTasks(ev) {
  if (ev.path[1].className !== 'done') {
    location.hash = '#/modify';
    let firstTaskText = 0;
    inputEditTask.value = ev.path[firstTaskText].innerText;
    ev.path[firstTaskText].setAttribute('id', 'save-edit-text');
  }
}

btnEditSave.addEventListener('click', () => {
  let deskTask = document.getElementById('save-edit-text');
  deskTask.innerText = inputEditTask.value;
  deskTask.removeAttribute('id');
  location.hash = '';
});

window.addEventListener('hashchange', function() {
  if (location.hash === '#/add') {
    page1.style.display = 'none';
    page2.style.display = 'flex';
  }
  if (location.hash === '#/modify') {
    page3.style.display = 'flex';
    page1.style.display = 'none';
  }
  if (location.hash === '') {
    page1.style.display = 'flex';
    page2.style.display = 'none';
    page3.style.display = 'none';
  }
});
