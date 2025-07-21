// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openBtn = document.querySelector('.btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener("click", function(){
    overlay.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", function(){
    overlay.classList.toggle("open-modal");
})