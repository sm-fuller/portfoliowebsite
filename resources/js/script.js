/* Page Elements */
const pageTitle = document.getElementById('pageTitle');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectTechnologies = document.getElementById('projectTechnologies');
const projectImage = document.getElementById('projectImage');
const aboutDiv = document.getElementById('about');
const projectsDiv = document.getElementById('projects');

/* Variables */
const today = new Date();
const startYear = 2014;
let currentIndex = -1;

const projectsInfo = [
    {
        project: 'coffee lovers',
        title: 'Coffee Lovers',
        description: 'This challenge project includes a homepage for an imagined company, named Coffee Lovers, and was built using CSS Flexbox design.Coffee Lovers is a place where coffee lovers can meet and enjoy the variety of flavors they have to offer.',
        technologies: ['HTML', 'CSS'],
        image: 'coffeelovers_full.png'
    },
    {
        project: 'photogens',
        title: 'PhotoGens',
        description: 'This challenge project includes a homepage for an imagined club group, named PhotoGens, and was built using CSS responsive design.PhotoGens is a non- profit organization, dedicated to promoting the art and science of photography.',
        technologies: ['HTML', 'CSS'],
        image: 'photogens_full.png'
    },
    {
        project: 'websitedesign',
        title: 'Website Design',
        description: 'This challenge project provides a proposed design layout for a website. The details are given in the form of a web page that is styled using the same design details outlined on the page, thus giving a preview of the design. The design details include color scheme, web fonts, text styles and button styles.',
        technologies: ['HTML', 'CSS'],
        image: 'websitedesign_full.png'
    }
];

/* Functions */
const setSpanYears = () => {
    const yearDiff = today.getFullYear() - startYear;
    document.getElementById('yearSpan').innerHTML = yearDiff;
};

function addListItem(parentList, listItemText) {
    let listItem = document.createElement('li');
    listItem.innerHTML = listItemText;
    parentList.appendChild(listItem);
}

function toggleNav(event) {
    // sets page title text for current navigation link
    pageTitle.innerHTML = event.target.innerHTML;
    // sets active status on current navigation link
    const links = document.getElementById('menu').querySelectorAll('a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    // displays content for current navigation link
    aboutDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    switch (event.target.innerHTML.toLowerCase()) {
        case "about": {
            aboutDiv.style.display = '';
            break;
        }
        case "projects": {
            projectsDiv.style.display = '';
            break;
        }
    }
}

function toggleProject() {
    currentIndex++;
    if (currentIndex >= projectsInfo.length || currentIndex < 0) {
        currentIndex = 0;
    }

    const currentProject = projectsInfo[currentIndex];
    projectTitle.innerHTML = currentProject.title;
    projectDescription.innerHTML = currentProject.description;
    projectImage.style.backgroundImage = `url("./resources/images/${currentProject.image}")`;

    while (projectTechnologies.firstChild) {
        projectTechnologies.removeChild(projectTechnologies.firstChild);
    }
    addListItem(projectTechnologies, 'Technologies:');
    currentProject.technologies.forEach(technology => addListItem(projectTechnologies, technology));
}

/* General Code */
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', toggleProject);

const eventlinks = document.getElementById('menu').querySelectorAll('a[href="#"]');
eventlinks.forEach(link => {
    link.addEventListener('click', toggleNav);
});

const goToLink = document.getElementById('goToProjects');
goToLink.addEventListener('click', toggleNav);

const currentYear = document.getElementById('currentYear');
currentYear.innerHTML = today.getFullYear();

setSpanYears();
toggleProject();