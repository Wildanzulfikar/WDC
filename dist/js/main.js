const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});

const itemDetailModal = document.querySelectorAll('#item-detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.addEventListener('click', function() {
    itemDetailModal.classList.remove('hidden')
})

document.querySelector('.close-icon').addEventListener('click', function() {
    itemDetailModal.classList.add('hidden')
})