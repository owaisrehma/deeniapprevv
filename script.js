// navbar--------------->

const menuToggle = document.getElementById('menu-toggle');
const navbarList = document.getElementById('navbar-list');
menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


// Download and review counter--------------->

let count = 0;
const target = 50;
const speed = 30;


const Download = document.querySelector('.download h1');
const Review = document.querySelector('.review h1');

// download function -------------------->
function updateDownload () {
    if (count < target) {
        Download.textContent = count;
        count++;
        
        setTimeout(updateDownload , speed);
    }else{
        Download.textContent = target + 'K'
    }
}
updateDownload();

// review function -------------------->
let countrev = 0;
const targetrev = 200;
const speedrev = 6;

function updatereview () {
    if (countrev < targetrev) {
        Review.textContent = countrev;
        countrev++;

        setTimeout(updatereview, speedrev);
    }else{
        Review.textContent = targetrev + '+'
    }
}
updatereview ()

