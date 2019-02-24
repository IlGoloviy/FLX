let rootNode = document.getElementById('root');

// code create html

const desc = document.createElement('h2');
desc.innerText = 'TODO Cat List';
rootNode.appendChild(desc);

const divNewAction = document.createElement('div');
divNewAction.setAttribute('class', 'new-action');
rootNode.appendChild(divNewAction);

const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Add New Action');
divNewAction.appendChild(input);

const btn = document.createElement('button');
btn.innerHTML = '<i class="material-icons">add</i>';
divNewAction.appendChild(btn);

rootNode.appendChild(document.createElement('hr'));

const actions = document.createElement('div');
actions.setAttribute('id', 'actions');
rootNode.appendChild(actions);

const picture = document.createElement('img');
picture.setAttribute('src', '../homework/assets/img/cat.png');
rootNode.appendChild(picture);

// code for creating a functional

let actionLine, markAction, label, textAction, deleteAction;
let counterId = 0;
const maxActions = 10;

function createActions(labelId, counterId) {
  actionLine = document.createElement('div');
  actionLine.setAttribute('class', 'action action'+counterId);
  actionLine.setAttribute('draggable', 'true');
  actions.appendChild(actionLine);

  markAction = document.createElement('input');
  markAction.setAttribute('type', 'checkbox');
  markAction.setAttribute('id', labelId);
  actionLine.appendChild(markAction);

  label = document.createElement('label');
  label.setAttribute('for', labelId);
  actionLine.appendChild(label);

  textAction = document.createElement('p');
  textAction.innerText = input.value.trim();
  actionLine.appendChild(textAction);

  deleteAction = document.createElement('button');
  deleteAction.setAttribute('class', 'action'+counterId);
  deleteAction.innerHTML = '<i class="material-icons">delete</i>';
  actionLine.appendChild(deleteAction);

  // Marked action can’t be unchecked
  let doneAction = document.getElementById(labelId);
  doneAction.addEventListener('click', function () {
    doneAction.setAttribute('checked', 'checked');
    doneAction.disabled = true;
  });

  // Delete action
  let delAction = document.getElementsByClassName('action'+counterId);
  const firstElement = 0, secondElement = 1;
  delAction[secondElement].addEventListener('click', function() {
    delAction[firstElement].remove();
    // if delete 10 action or less
    if (actions.childNodes.length < maxActions) {
      desc.innerText = 'TODO Cat List';
      input.disabled = false;
    }
  });
}

// If input is empty plus button is disabled
function ctrlButton() {
  const sizeInput = 0;
  btn.disabled = this.value.trim().length === sizeInput;
}

input.addEventListener('input', ctrlButton, false);
ctrlButton.call(input);

// if click the add action button
function addActions() {
  counterId++;
  let labelId = 'check' + counterId;

  createActions(labelId, counterId);
  input.value = '';
  ctrlButton.call(input);
  
  // if more 10 actions
  if (actions.childNodes.length >= maxActions) {
    desc.innerText = 'Maximum item per list are created';
    input.value = '';
    input.disabled = true;
    btn.disabled = true;
  }
}

btn.addEventListener('click', addActions);

// Drag & drop action
let dAndD = null;
const numNotIndexOf = -1;
let actionList = document.querySelector('#actions');

actionList.addEventListener('dragstart', function(e) {
  dAndD = e.target;
});

actionList.addEventListener('dragover', function(e) {
    if (e.target.className.indexOf('action') !== numNotIndexOf) {
        e.preventDefault();
        e.target.style.background = 'rgba(0,0,0,0.01)';
    }
});

actionList.addEventListener('dragleave', function(e) {
  e.target.style.background = '';
});

actionList.addEventListener('drop', function(e) {
    if (e.target.className.indexOf('action') !== numNotIndexOf) {
        e.preventDefault();
        e.target.style.background = '';
        actionList.insertBefore(dAndD, e.target);
    }
});
