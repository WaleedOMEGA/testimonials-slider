const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const txt1 = document.querySelector('.txt-1');
const txt2 = document.querySelector('.txt-2');
const button = document.querySelectorAll('button')
let swipe = 1;
function slider(n) {
    if (n == 1) {
        img1.classList.remove('none');
        txt1.classList.remove('none');
        img2.classList.add('none');
        txt2.classList.add('none');
        
    } else {
        img2.classList.remove('none');
        txt2.classList.remove('none');
        img1.classList.add('none');
        txt1.classList.add('none');
        
    }
}
for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click', function () {
        if (swipe == 1) {
            swipe = 2;
            slider(2);
        } else {
            swipe = 1;
            slider(1);
        }
    });
}