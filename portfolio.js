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