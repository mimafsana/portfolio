//Typing Script Js
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Back-end & Front-end Developer"],
typeSpeed: 80,
backSpeed: 80,

});
var typed = new Typed(".typing-2",{
    strings: ["Web Designer", "Web Developer", "Back-end & Front-end Developer"],
typeSpeed: 100,
backSpeed: 60,

});
//Show answer on click code
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //changing icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus';
        }
        else{
            icon.className = 'fa-solid fa-plus';
        }
    })
})


//Show hide the nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector
('#open-menu-btn');
const closeBtn = document.querySelector
('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
//close nav menu js code
const closeNew = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNew);

//nav color change when we are scrolling
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.
    toggle('window-scroll', window.scrollY>100);
})