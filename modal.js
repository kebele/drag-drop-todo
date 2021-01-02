
/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById('input').focus()
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
    
  });
});

//close modal
close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

//click outside of the modal
window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};


