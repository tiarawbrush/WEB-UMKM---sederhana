let navbar = document.querySelector('.navbar');

document.querySelector('#Menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
} 
let searchForm = document.querySelector('.search-form');

// Ensure this script is linked correctly to your HTML
document.querySelector('#seacrh-btn').onclick = function () {
    document.querySelector('.search-form').classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
