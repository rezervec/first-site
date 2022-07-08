const slider = document.querySelector('.slider_ba')
const img_up = document.querySelector('.slider_ba_img-up img')
const roller = document.querySelector('.slider_ba_roller')
const box_slider = document.querySelector('.box_slider_ba')
const body = document.querySelector('body')

var roller_isActive = false;

document.addEventListener('DOMContentLoaded', () =>{
    img_up.style.width = `${img_up.offsetWidth / 4}px`
});


slider.addEventListener('mousedown', () =>{
    roller_isActive = true;
});

box_slider.addEventListener('mouseup', () =>{
    roller_isActive = false;
});

slider.addEventListener('mousemove', (e) =>{
    if (!roller_isActive){return}
    else {
        img_up.style.width = `${e.pageX - slider.getBoundingClientRect().left}px`;
        roller.style.left = `${e.pageX - slider.getBoundingClientRect().left}px`;
    }
});

console.log(window.innerWidth)
