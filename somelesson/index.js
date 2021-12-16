const listElem = document.querySelector('.list');

const tasks = [
 { id: 1, text: 'Buy milk', done: false },
 { id: 2, text: 'Pick up Tom from airport', done: false },
 { id: 3, text: 'Visit party', done: false },
 {
  id: 4,
  text: 'Visit doctor',
  done: true,
 },
 {
  id: 5,
  text: 'Buy meat',
  done: true,
 },
];

const renderTasks = (tasksList) => {
 listElem.innerHTML = '';

 const tasksElems = tasksList
  .sort((a, b) => a.done - b.done)
  .map(({ id, text, done }) => {
   const listItemElem = document.createElement('li');
   listItemElem.classList.add('list__item');
   const checkbox = document.createElement('input');

   checkbox.setAttribute('type', 'checkbox');
   checkbox.setAttribute('data-id', id);
   checkbox.checked = done;

   checkbox.classList.add('list__item-checkbox');
   if (done) {
    listItemElem.classList.add('list__item_done');
   }

   listItemElem.append(checkbox, text);

   return listItemElem;
  });

 listElem.append(...tasksElems);
};

renderTasks(tasks);

// Events
// 1. Add events to the elemnt
// 2. create event handlers

// list
// click

// in event
// out undef
// algo
// 0. get task id
// 1. Find task by id
// 2. Update task
// 3. Re-render
// function updateTaskHandler(event) {
//  //  console.dir(event.target.classList.contains('list__item-checkbox'));
//  //  console.dir(event.target.getAttribute('type'));

//  if (!event.target.classList.contains('list__item-checkbox')) {
//   return;
//  }
//  // const id = event.target.dataset.id;
//  const { id } = event.target.dataset;
//  const task = tasks.find((el) => el.id === Number(id));
//  // super bad
//  /*
//  let newStatus;
//  if (task.done) {
//   newStatus = false;
//  } else {
//   newStatus = true;
//  }
//  */

//  task.done = !task.done;
//  renderTasks(tasks);
//  //TODO
// }

function updateTaskHandler(event) {
 if (!event.target.classList.contains('list__item-checkbox')) {
  return;
 }
 const { id } = event.target.dataset;
 const task = tasks.find((el) => el.id === Number(id));
 //  task.done = even.target.checked;
 task.done = !task.done;
 renderTasks(tasks);
}

// in: str, func
// out: undef
listElem.addEventListener('click', updateTaskHandler);
console.log;

// Web flow
// 1 get data +++
// 2 render +++
// 3 update data, do not update DOM +++
// 4 re render +++
