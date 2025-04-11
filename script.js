const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
}

const titles = ["Full Stack Developer", "UI/UX Designer"];
let currentIndex = 0;
const typewriterElement = document.getElementById('typewriter');

function typeTitle() {
    const text = titles[currentIndex];
    typewriterElement.textContent = '';
    typewriterElement.style.animation = 'none';
    void typewriterElement.offsetWidth;
    typewriterElement.style.animation = 'typing 2s steps(20, end) forwards, blink 0.5s step-end infinite';

    let i = 0;
    function type() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % titles.length;
                setTimeout(typeTitle, 1000);
            }, 1000);
        }
    }
    type();
}

typeTitle();

const projects = [
    { name: "Personal Portfolio", desc: "HTML, CSS & JavaScript", img: "project1.jpg", path: "index.html" },
    { name: "Java Mini Game", desc: "Java", img: "project2.jpg", path: "index.html" },
    { name: "Coffee Website", desc: "HTML, CSS & JavaScript", img: "project3.jpg", path: "index.html" },
    { name: "MovieHub Application", desc: "Flutter", img: "project4.jpg", path: "Projects/MovieHub Application/index.html" },
    { name: "To-do Listing Web Application", desc: "React, Springboot & MySql", img: "project5.jpg", path: "index.html" },
    { name: "Notvia Notepad", desc: "Flutter", img: "project6.jpg", path: "index.html" }
];

let scrollIndex = 0;
const projectsContainer = document.getElementById('projects-container');
const projectDetails = document.getElementById('project-details');
const projectElements = document.querySelectorAll('.project');

function updateProjectDetails(index) {
    const project = projects[index];
    projectDetails.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a href="${project.path}" class="btn" style="width: fit-content;">See More</a>
    `;
    projectElements.forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
}

projectElements.forEach((project, index) => {
    project.addEventListener('click', () => {
        scrollIndex = index;
        projectsContainer.scrollTo({ left: index * 340, behavior: 'smooth' });
        updateProjectDetails(index);
    });
});

function scrollProjects(direction) {
    scrollIndex += direction;
    if (scrollIndex >= projects.length) scrollIndex = 0;
    if (scrollIndex < 0) scrollIndex = projects.length - 1;
    projectsContainer.scrollTo({ left: scrollIndex * 340, behavior: 'smooth' });
    updateProjectDetails(scrollIndex);
}

updateProjectDetails(0);

function sendEmail() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (fullName && email && mobile && subject && message) {
        window.location.href = `mailto:example@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`)}`;
    } else {
        alert('Please fill out all fields.');
    }
}