const town = document.querySelector('.header_town')
const place = document.querySelector('.header_place')
const car = document.querySelector('.header_car')
const header = document.querySelector('.header-site')

const header_width = header.getBoundingClientRect().right
const header_height = header.getBoundingClientRect().bottom

header.addEventListener('mousemove', (e) =>{
    car.style.transform = `translate(${-e.pageX + e.pageX/1.03}px, ${-e.pageY + e.pageY/1.05}px)`
    place.style.transform = `translate(${-e.pageX + e.pageX/1.02}px, ${-e.pageY + e.pageY/1.03}px)`
    town.style.transform = `translate(${e.pageX - e.pageX/1.01}px, ${e.pageY - e.pageY/1.01}px)`
});





const navigation_ico = document.querySelector('.navigation_ico')
const menu = document.querySelector('.navigation_content')

navigation_ico.addEventListener('click', () =>{
    navigation_ico.classList.toggle('_active');
    menu.classList.toggle('_active')
});