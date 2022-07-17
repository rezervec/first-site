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
// const modal_portfolio = document.querySelector('.modal_portfolio')
// const modal_main = document.querySelector('.modal-main')
// const modal_sub_el = document.querySelectorAll('.modal-sub-el')
const cross = document.querySelector('.modal_portfolio span')


// portfolio_elem.forEach(portfolio_elem => {
//     portfolio_elem.addEventListener('click', (e) => {
//         if(e.target.closest('img')) {
//             modal_main.src = e.target.src;
//             modal_sub_el.src = portfolio_elem.src;
//             modal_portfolio.style.display = "block";
//         }
//         cross.addEventListener('click', () => {
//             modal_portfolio.style.display = "none";
//         });
//     });
// });

const modal_portfolio = document.querySelector('.modal_portfolio');
const modal_main = document.querySelector('.modal-main');
const modal_sub_el = document.querySelectorAll('.modal-sub-el');


for (i = 0; i < portfolio_elem.length; i++) {
    portfolio_elem[i].addEventListener('click', (elem) => {
        if (elem.target.closest('img')) {
            modal_main.src = elem.target.src;
            var element_click = document.querySelectorAll('.portfolio_elem')[i];
            var element_images = document.querySelectorAll('.portfolio_elem img');
            var modal_img_id = 0;
            for (j = 0; j < 4; j++) {
                if (element_images[j].img != elem.target) {
                    modal_sub_el[modal_img_id].src = element_images[j].src;
                }
            }

            modal_portfolio.style.display = "block";
            cross.addEventListener('click', () => {
                modal_portfolio.style.display = "none";
            });
        }
    });
}