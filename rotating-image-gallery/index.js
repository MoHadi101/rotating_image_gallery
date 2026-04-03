const imageContainerEl = document.querySelector('.image-container');
const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');


let x = 0;
let teimer;
prevEl.addEventListener('click', () => {
    x= x + 45;
    updateGallery();
    clearTimeout(teimer);
});
nextEl.addEventListener('click', () => {
    x= x - 45;
    updateGallery();
    clearTimeout(teimer);
});

updateGallery = () => {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    teimer = setTimeout(()=>{
        x = x - 45;
        updateGallery();
    }, 3000)
}
 updateGallery();
//odrer wird es anderes geschriben  wie hier oben
//aber so wird es : function updateGallery() {
//    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
//}