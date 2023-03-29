//variables

var addBtn = document.querySelector('.addBtn');
var input = document.querySelector('.inputtask');
var listcontainer = document.querySelector('.taskcontainer');

//status

const listStatus = 'no task';
const activity = null;

//events

addBtn.addEventListener('click', function () {
  let list = document.createElement('div');
  list.classList.add('list');

  let task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = input.value;

  list.appendChild(task);

  let checkBtn = document.createElement('button')
  checkBtn.innerHTML = '<i class="fa fa-check"></i>'
  checkBtn.classList.add('check');
  list.appendChild(checkBtn);

  let deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
  deleteBtn.classList.add('delete');
  list.appendChild(deleteBtn);


  if (input.value === '') {
    alert('enter task');
  }
  else {
    listcontainer.appendChild(list);
  }

  input.value = '';

  checkBtn.addEventListener('click',function(){
   if (checkBtn.parentElement.style.textDecoration==="line-through"){
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    checkBtn.parentElement.style.textDecoration="none";
   }
   else{
    checkBtn.innerHTML = '<i class="fa fa-times" class = "check"></i>';
    checkBtn.parentElement.style.textDecoration="line-through";
    checkBtn.parentElement.style.textDecorationSkipInk="auto";
   }
  });
  

  deleteBtn.addEventListener('click', function () {
    deleteBtn.parentElement.remove();
  })
});