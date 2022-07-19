const left = document.querySelector('.btn-left')
const right = document.querySelector('.btn-right')
const portfolio_elem = document.querySelectorAll('.portfolio_elem')
const portfolio_window = document.querySelector('.portfolio')

const elems_in_window = Math.floor(portfolio_window.clientWidth / portfolio_elem[0].clientWidth);
const hidden_elems = portfolio_elem.length - elems_in_window;

if ((hidden_elems) > 0) {
    click_counter = 0;

    right.addEventListener('click', () => {
        if (click_counter < hidden_elems) {
            click_counter++;
            for (i = 0; i < portfolio_elem.length; i++) {
                portfolio_elem[i].style.transform = `translate(-${click_counter * 100}%, 0)`
            }
            console.log("click - " + click_counter)
        }
    });

    left.addEventListener('click', () => {
        if(click_counter > 0) {
            click_counter--;
            for (i = 0; i < portfolio_elem.length; i++) {
                portfolio_elem[i].style.transform = `translate(-${click_counter * 100}%, 0)`
            }
            console.log("click - " + click_counter)
        }
    });

}

console.log(portfolio_elem.length)
console.log( Math.floor(portfolio_window.clientWidth / portfolio_elem[0].clientWidth) )

//////////
const modal_images = document.querySelector('.modal-img')
const modal_img = document.querySelectorAll('.modal-img img')
const modal_portfolio = document.querySelector('.modal_portfolio')
const portfolio_images = document.querySelectorAll('.portfolio_elem img')

const cross = document.querySelector('.modal_portfolio span')


for (let i = 0; i < portfolio_elem.length; i++) {
    portfolio_elem[i].addEventListener('click', (img) => {
        if (img.target.closest('img')) {
            modal_img[0].src = img.target.src;
            modal_portfolio.style.display = 'block';

            let term = 1;
            for(j = 0; j < modal_img.length; j++) {
                if (img.target != portfolio_images[j+4*i])
                    modal_img[j+term].src = portfolio_images[j+4*i].src;
                else term--;
            }
        }
    });
}

modal_images.addEventListener('click', (img_mod) => {
    if (img_mod.target.closest('img')) {
        let img_swap = modal_img[0].src;
        modal_img[0].src = img_mod.target.src;
        img_mod.target.src = img_swap;
        console.log('swap')
    }
});

cross.addEventListener('click', () =>{
    modal_portfolio.style.display = 'none';
    for (let i = 0; i < modal_img; i++) {
        modal_img[i].src = "";
    }
});