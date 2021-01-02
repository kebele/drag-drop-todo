const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;


let isler = []
let not_start = []
let in_progress = []
let completed = []

//todos daki her şeye darg eventleri atamak
todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

//drag lar
//drag start, display none
function dragStart(e) {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  // console.log("dragStart");

  const parentId = e.target.parentElement.id
  let is = e.target.firstElementChild.innerHTML
// console.log(parentId)
  if (parentId === "not-start") {
    // console.log(e.target.firstElementChild.innerHTML)
    // console.log(not_start)
    // console.log("secili indeks : " + not_start.indexOf(is))
    // not_start.pop(is)
    not_start.splice(not_start.indexOf(is), 1)
    localStorage.setItem('not_start', JSON.stringify(not_start))
    console.log("not-start : " + not_start)

  } else if (parentId === "in-progress") {
    // console.log("in-progress")
    // in_progress.pop(is)
    // console.log("in_progress : " + in_progress)
    in_progress.splice(in_progress.indexOf(is), 1)
    localStorage.setItem('in_progress', JSON.stringify(in_progress))
    console.log("in-progress : " + in_progress)
  } else if (parentId === "completed") {
    // console.log("in-progress")
    // completed.pop(is)
    // console.log("completed : " + completed)
    completed.splice(completed.indexOf(is), 1)
    localStorage.setItem('completed', JSON.stringify(completed))
    console.log("completed : " + completed)
  }
}

//drag end display block, parent ın id sini aldık
//inner da yazan işi aldık
//parent id ne ise ilgili old. array e işi yazdırdık ve local de de ilgili old. array a drag end de taşıdık
function dragEnd(e) {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  // console.log("dragEnd");
  // console.log(e.target.parentElement.id)
  const parentId = e.target.parentElement.id
  let is = e.target.firstElementChild.innerHTML

  //not_start a bırakma
  if (parentId === "not-start") {
    // console.log(e.target.firstElementChild.innerHTML)
    // console.log(not_start)
    e.target.setAttribute('data-array', 'not_start')
    not_start.push(is)
    console.log(not_start)
    // console.log("not-start : " + not_start)
    //data-attribute değiştirelim
    localStorage.setItem('not_start', JSON.stringify(not_start))
    console.log("not_start : " + JSON.parse(localStorage.getItem('not_start')))

    //in_progress e bırakma
  } else if (parentId === "in-progress") {
    // console.log("in-progress")
    e.target.setAttribute('data-array', 'in_progress')
    in_progress.push(is)
    // console.log("in_progress : " + in_progress)
    localStorage.setItem('in_progress', JSON.stringify(in_progress))
    console.log("in_progress : " + JSON.parse(localStorage.getItem('in_progress')))

    //completed e bırakma
  } else if (parentId === "completed") {
    // console.log("in-progress")
    e.target.setAttribute('data-array', 'completed')
    completed.push(is)
    localStorage.setItem('completed', JSON.stringify(completed))
    // console.log("completed : " + completed)
    console.log("completed : " + JSON.parse(localStorage.getItem('completed')))
  }
}

//bütün alanlara drag eventlerini tanımladık
all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});
//drag over
function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
  // this.style.backgroundColor = "orange";
}
//drag enter
function dragEnter() {
  this.style.border = "2px solid black";
  // console.log("dragEnter");
}
//drag leave
function dragLeave() {
  this.style.border = "none";
  // console.log("dragLeave");
}
//drag drop ile kutuyu bıraktığımızda appendChild olacak
function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  // console.log("dropped");
}