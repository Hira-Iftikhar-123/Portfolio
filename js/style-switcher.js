const styleSwitcherToggle = document.querySelector('.style-switch-toggler');
styleSwitcherToggle.addEventListener('click',() => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

window.addEventListener("scroll", () => {
    if(document.querySelector('.style-switcher').classList.contains('open')) 
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
})

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) 
{
    alternateStyles.forEach((style) => {
        if(color==style.getAttribute('title')) 
        {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled','true');
        }
    })
}

const lightDarkMode = document.querySelector('.day-night');
lightDarkMode.addEventListener('click', () => {
    lightDarkMode.querySelector('i').classList.toggle('fa-sun');
    lightDarkMode.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener("load", () => {
    if(document.body.classList.contains('dark')) 
    {
        lightDarkMode.querySelector('i').classList.add('fa-sun');
    }
    else
    {
        lightDarkMode.querySelector('i').classList.add('fa-moon');
    }
})
