const not_start_lsden = JSON.parse(localStorage.getItem('not_start'))
const in_progress_lsden = JSON.parse(localStorage.getItem('in_progress'))
const completed_lsden = JSON.parse(localStorage.getItem('completed'))
console.log(not_start_lsden)
console.log(in_progress_lsden)
console.log(completed_lsden)


const not_startEl = document.getElementById('not-start');
const in_progressEl = document.getElementById('in-progress');
const completedEl = document.getElementById('completed');

//localStorage dan todo ları oluşturma

if(not_start_lsden.length > 0){
    // console.log("asd")
    not_start_lsden.forEach((x) => {
        const ns = document.createElement('div')
        ns.classList.add('todo')
        ns.setAttribute('draggable', 'true');
    ns.setAttribute('data-array', 'not-start')
    ns.innerHTML = `<p>${x}</p><span class="close">&times;</span>`;
    not_startEl.appendChild(ns);

    ns.addEventListener('dragstart', dragStart);
    ns.addEventListener('dragend', dragEnd);

    //todo yu ekrandan silmek
    const close_btns = document.querySelectorAll(".close");
    close_btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log("123")        
        btn.parentElement.style.display = "none";
        // console.log(btn.parentElement.classList)
        // getInfo(e)
      });
    });
    })    
}

if(in_progress_lsden.length > 0){
    // console.log("asd")
    in_progress_lsden.forEach((x) => {
        const ip = document.createElement('div')
        ip.classList.add('todo')
        ip.setAttribute('draggable', 'true');
    ip.setAttribute('data-array', 'not-start')
    ip.innerHTML = `<p>${x}</p><span class="close">&times;</span>`;
    in_progressEl.appendChild(ip);

    ip.addEventListener('dragstart', dragStart);
    ip.addEventListener('dragend', dragEnd);

    //todo yu ekrandan silmek
    const close_btns = document.querySelectorAll(".close");
    close_btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log("123")        
        btn.parentElement.style.display = "none";
        // console.log(btn.parentElement.classList)
        // getInfo(e)
      });
    });
    })    
}

if(completed_lsden.length > 0){
    // console.log("asd")
    completed_lsden.forEach((x) => {
        const cmp = document.createElement('div')
        cmp.classList.add('todo')
        cmp.setAttribute('draggable', 'true');
    cmp.setAttribute('data-array', 'not-start')
    cmp.innerHTML = `<p>${x}</p><span class="close">&times;</span>`;
    completedEl.appendChild(cmp);

    cmp.addEventListener('dragstart', dragStart);
    cmp.addEventListener('dragend', dragEnd);

    //todo yu ekrandan silmek
    const close_btns = document.querySelectorAll(".close");
    close_btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log("123")        
        btn.parentElement.style.display = "none";
        // console.log(btn.parentElement.classList)
        // getInfo(e)
      });
    });
    })    
}

























function localTodo(todo) {
    // let todoText = input.value;
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