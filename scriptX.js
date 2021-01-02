//add todo

const form = document.getElementById('form');
const input = document.getElementById('input');
const close_btns = document.querySelectorAll(".close");


//todo girdikten sonra submitlemek
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //submit ile todo ekleyecek
  addTodo();
});

//todo ekleyecek function
function addTodo(todo) {
  let todoText = input.value;
  //   console.log(todoText);
  
  //todo varsa onun texti
  if (todo) {
    todoText = todo.text
  }
  // ne girersek önce isler e push 
  isler.push(todoText)
  console.log(isler)

  //ekrana todo box oluşturma
  const no_status = document.getElementById('no_status');
  const deneme = document.createElement('div');
  deneme.classList.add('todo');
  deneme.setAttribute('draggable', 'true');
  deneme.setAttribute('data-array', 'isler')
  deneme.innerHTML = `<p>${todoText}</p><span class="close">&times;</span>`;
  no_status.appendChild(deneme);

  //drag işlemleri
  deneme.addEventListener('dragstart', dragStart);
  deneme.addEventListener('dragend', dragEnd);

  //modalda todo girdikten sonra
  input.value = '';
  todo_form.classList.remove('active');
  overlay.classList.remove('active');

  //todo yu ekrandan silmek
  const close_btns = document.querySelectorAll(".close");
  close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // console.log("123")        
      btn.parentElement.style.display = "none";
      console.log(btn.parentElement.classList)
      // getInfo(e)
    });
  });
}

// function getInfo(e){
//   // console.log(e.target.parentElement.id)
//   console.log(e.target)
// }