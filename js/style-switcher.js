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
    const icon = lightDarkMode.querySelector('i');
    icon.classList.remove('fa-sun', 'fa-moon');
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
    } else {
        icon.classList.add('fa-moon');
    }
});
window.addEventListener("load", () => {
    const icon = lightDarkMode.querySelector('i');
    icon.classList.remove('fa-sun', 'fa-moon');
    if(document.body.classList.contains('dark')) {
        icon.classList.add('fa-sun');
    } else {
        icon.classList.add('fa-moon');
    }
});
