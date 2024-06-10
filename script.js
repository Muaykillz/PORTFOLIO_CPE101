var navbar = document.querySelector('.navbar');

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        navbar.querySelectorAll('a').forEach(navItem => {
            navItem.classList.remove("active");
        });

        const targetId = this.getAttribute('href').substring(1);
        const target = e.target;
        target.classList.add("active");
        const scroll_List = { 'hero': 0, 'about_me': 730, 'my_skills': 1480, 'contact_me': 2000 };

        window.scrollTo({
            top: scroll_List[targetId],
            behavior: 'smooth',
        });
    });
});


window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
    }
});


function switchMode() {
    const root = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    const isLightMode = getComputedStyle(root).getPropertyValue('--primary-color') == '#000';
    console.log(`isLightMode: ${isLightMode}`);
    if (isLightMode) {
        root.style.setProperty('--primary-color', '#fff');
        root.style.setProperty('--highlight-color', '#51C151');
        root.style.setProperty('--highlight-img-color', 'invert(58%) sepia(77%) saturate(395%) hue-rotate(71deg) brightness(98%) contrast(82%);');
        root.style.setProperty('--background-color', 'linear-gradient(160deg, #000 53.8%, rgba(9, 20, 10, 0.96) 100%)');
        root.style.setProperty('--background-color-m', '#000');
        root.style.setProperty('--hero-bg-color', '#2D2D2D33');
        root.style.setProperty('--hero-border', `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='480' ry='480' stroke='%2399999955' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`);
        root.style.setProperty('--skill-bg-color', '#00000080');
        root.style.setProperty('--skill-border-color', '#FFFFFF4D');
        themeIcon.src = './assets/dark.svg';
    } else {
        root.style.setProperty('--primary-color', '#000');
        root.style.setProperty('--highlight-color', '#009300');
        root.style.setProperty('--background-color', 'linear-gradient(151deg, #FFF 73.8%, #00B900 134%)');
        root.style.setProperty('--background-color-m', '#fff');
        root.style.setProperty('--hero-bg-color', '#cacaca33');
        root.style.setProperty('--hero-border', `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='480' ry='480' stroke='%2333333355' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`);
        root.style.setProperty('--skill-bg-color', '#fff');
        root.style.setProperty('--skill-border-color', '#fff');
        themeIcon.src = './assets/light.svg';
    }
}

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', switchMode);


