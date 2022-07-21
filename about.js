// var is_Mobile = false;
// if (document.documentElement.clientWidth < 1000) {
//     is_Mobile = true;
// }

// if (!is_Mobile) {
    const img = document.querySelectorAll(".about_content div")
    const about_box = document.querySelector(".about_box")
    const nav_items = document.querySelectorAll(".about_nav")

    //default choice
    document.addEventListener('DOMContentLoaded', () =>{
        img[4].style.opacity = "1";
        nav_items[4].style.color = "coral";
    });


    about_box.addEventListener('click', (e) =>{
        for (var i = 0; i < nav_items.length; i++) {
            if (e.target == nav_items[i]) {
                Clear();
                img[i].style.opacity = "1";
                nav_items[i].style.color = "coral";
            }
        }
    });

    function Clear() {
        for (var j = 0; j < nav_items.length; j++) {
            img[j].style.opacity = "0";
            nav_items[j].style.color = "";
        }
    }
// }