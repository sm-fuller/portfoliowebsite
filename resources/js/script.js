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
        image: 'coffeelovers_full.png',
        url: 'https://sm-fuller.github.io/companyhomepage.io/'
    },
    {
        project: 'photogens',
        title: 'PhotoGens',
        description: 'This challenge project includes a homepage for an imagined club group, named PhotoGens, and was built using CSS responsive design.PhotoGens is a non- profit organization, dedicated to promoting the art and science of photography.',
        technologies: ['HTML', 'CSS'],
        image: 'photogens_full.png',
        url: 'https://sm-fuller.github.io/responsiveclubwebsite.io/'
    },
    {
        project: 'websitedesign',
        title: 'Website Design',
        description: 'This challenge project provides a proposed design layout for a website. The details are given in the form of a web page that is styled using the same design details outlined on the page, thus giving a preview of the design. The design details include color scheme, web fonts, text styles and button styles.',
        technologies: ['HTML', 'CSS'],
        image: 'websitedesign_full.png',
        url: 'https://sm-fuller.github.io/websitedesign.io/'
    }
];

/* Functions */
const setSpanYears = () => {
    const yearDiff = today.getFullYear() - startYear;
    const yearSpan = document.getElementById('yearSpan');
    if (yearSpan) {
        yearSpan.innerHTML = yearDiff;
    }
};

function addListItem(parentList, listItemText) {
    let listItem = document.createElement('li');
    listItem.innerHTML = listItemText;
    parentList.appendChild(listItem);
}

function toggleNav(target) {
    const aboutDiv = document.getElementById('about');
    const projectsDiv = document.getElementById('projects');

    // sets page title text for current navigation link
    document.getElementById('pageTitle').innerHTML = target;
    // sets active status on current navigation link
    const links = document.getElementById('menu').querySelectorAll('a');
    links.forEach(link => {
        link.classList.remove('active');
    });
    // displays content for current navigation link
    aboutDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    currentIndex = -1;
    switch (target.toLowerCase()) {
        case "about": {
            aboutDiv.style.display = '';
            document.querySelector('a[href="index.html"').classList.add('active');
            break;
        }
        case "projects": {
            projectsDiv.style.display = '';
            document.querySelector('a[href="index.html?projects"').classList.add('active');
            toggleProject();
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
    document.getElementById('projectTitle').innerHTML = currentProject.title;
    document.getElementById('projectDescription').innerHTML = currentProject.description;
    document.getElementById('visit').setAttribute('href', currentProject.url);
    document.getElementById('projectImage').style.backgroundImage = `url("./resources/images/${currentProject.image}")`;

    const projectTechnologies = document.getElementById('projectTechnologies');
    while (projectTechnologies.firstChild) {
        projectTechnologies.removeChild(projectTechnologies.firstChild);
    }
    addListItem(projectTechnologies, 'Technologies:');
    currentProject.technologies.forEach(technology => addListItem(projectTechnologies, technology));
}

/* General Code */
const nextButton = document.getElementById('next');
if (nextButton) {
    nextButton.addEventListener('click', toggleProject);
}

const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.innerHTML = today.getFullYear();
}

setSpanYears();

if (!window.location.href.includes('contact.html')) {
    if (window.location.search === '?projects') {
        toggleNav('projects');
    }
    else {
        toggleNav('about');
    }
}
