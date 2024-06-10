var navbar = document.querySelector('.navbar');
navbar.classList.add('sticky');

const heroPosition = 0;
const aboutMePosition = document.querySelector('.about-me').offsetTop;
const mySkillsPosition = document.querySelector('.my-skills').offsetTop;
const contactMePosition = document.querySelector('.contact-me').offsetTop;



document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        navbar.querySelectorAll('a').forEach(navItem => {
            navItem.classList.remove("active");
        });

        const targetId = this.getAttribute('href').substring(1);
        const target = e.target;
        target.classList.add("active");


        console.log(`heroPosition: ${heroPosition}, aboutMePosition: ${aboutMePosition}, mySkillsPosition: ${mySkillsPosition}, contactMePosition: ${contactMePosition}`);
        const scroll_List = { 'hero': heroPosition * 0.84, 'about_me': aboutMePosition * 0.84, 'my_skills': mySkillsPosition * 0.94, 'contact_me': contactMePosition * 1.2 };

        window.scrollTo({
            top: scroll_List[targetId],
            behavior: 'smooth',
        });
    });
});


window.addEventListener("scroll", function () {
    var scrollInvite = document.querySelector('.scroll-invite');

    if (window.scrollY > 60) {
        scrollInvite.classList.add('fade-out');
    } else {
        scrollInvite.classList.remove('fade-out');
    }
});


function switchMode() {
    const root = document.documentElement;
    const themeIconDesktop = document.getElementById('theme-icon-desktop');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    const isLightMode = getComputedStyle(root).getPropertyValue('--primary-color') == '#000';
    console.log(`isLightMode: ${isLightMode}`);
    if (isLightMode) {
        root.style.setProperty('--primary-color', '#fff');
        root.style.setProperty('--highlight-color', '#51C151');
        root.style.setProperty('--highlight-img-color', 'invert(58%) sepia(77%) saturate(395%) hue-rotate(71deg) brightness(98%) contrast(82%);');
        root.style.setProperty('--background-color', 'linear-gradient(160deg, #000 53.8%, rgba(14, 28, 15, 0.96) 100%)');
        root.style.setProperty('--background-color-m', '#000');
        root.style.setProperty('--hero-bg-color', '#6D6D6D33');
        root.style.setProperty('--hero-border', `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='480' ry='480' stroke='%2399999955' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`);
        root.style.setProperty('--skill-bg-color', '#00000080');
        root.style.setProperty('--skill-border-color', '#FFFFFF4D');
        themeIconDesktop.src = './assets/dark.svg';
        themeIconMobile.src = './assets/dark.svg';
    } else {
        root.style.setProperty('--primary-color', '#000');
        root.style.setProperty('--highlight-color', '#009300');
        root.style.setProperty('--background-color', 'linear-gradient(151deg, #FFF 73.8%, #00B900 134%)');
        root.style.setProperty('--background-color-m', '#fff');
        root.style.setProperty('--hero-bg-color', '#dadada33');
        root.style.setProperty('--hero-border', `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='480' ry='480' stroke='%2333333355' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e")`);
        root.style.setProperty('--skill-bg-color', '#fff');
        root.style.setProperty('--skill-border-color', '#fff');
        themeIconDesktop.src = './assets/light.svg';
        themeIconMobile.src = './assets/light.svg';
    }
}

const toggleButtonDesktop = document.getElementById('theme-toggle-desktop');
toggleButtonDesktop.addEventListener('click', switchMode);
const toggleButtonMobile = document.getElementById('theme-toggle-mobile');
toggleButtonMobile.addEventListener('click', switchMode);
switchMode();

const checkIcon = document.querySelector(".check-icon");
const navMenu = document.querySelector(".nav-menu");

checkIcon.addEventListener("change", () => {
    navMenu.style.visibility = checkIcon.checked ? "visible" : "hidden";
});
document.querySelectorAll(".navitem").forEach(n => n.addEventListener("click", () => {
    checkIcon.checked = false;
}));

