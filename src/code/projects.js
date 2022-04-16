import { pageTilte, clearContent, pageContent } from "./modules/builders";
import { createTask } from "./tasks";

const projects = (() => {

    //EMPTY ARRAY WHERE PROJECTS WILL BE STORED
    let projectsContainer = []; 

    //CREATION OF DEFAULT PROJECTS
    if(localStorage.getItem('projects') === null){
        projectsContainer =[
            {
                name: 'Sample Project',
                id: 'Sample Project',
                tasks: []
            } 
        ]
        showStoredProjects();
        projectCount();   
    } else {
        const storedProjects =JSON.parse(localStorage.getItem('projects'));
        projectsContainer = storedProjects;
        showStoredProjects();
        projectCount(); 

    }

    class Project {
        constructor(name) {
            this.name = name;
            this.id = name;
            this.tasks = []; //EMPTY ARRAY, INSIDE THE PROJECTS, WHERE TASKS WILL BE STORED
        }
    }

    function showStoredProjects () {
        for (let i= 0; i < projectsContainer.length; i++) {
            createProject(projectsContainer[i].name);
        }
    };


    function newProject() {
        const projectTitleInput = document.getElementById('proj-name');
        const name = projectTitleInput.value; 
        const project = new Project(name);
        //Validator
        if (name === ''){return}
        else if (projValidation(project)){
        projectsContainer.push(project);
        createProject(name);
        projectsLocalStorage();
        }
        else{
            alert("You already have a project with that name!");
            restartProjectForm();
        }    
    };



    function projectCount () {
        const projectCount = document.querySelector('.project-count');
        projectCount.textContent = projectsContainer.length;
    };

    return{
        projectsContainer,
        newProject,
        projectCount,
        showStoredProjects
    }
})
();




//BUTTONS AND EVENTS LISTENERS--------------------------------------------------------------------------------------------------

const newProjBtn = document.querySelector('.new-proj-btn');
const closeModalButton = document.querySelector('[data-close-button]');
const modalNewProj = document.getElementById('modal-newproj');
const overlayNewProj = document.getElementById('overlay-newproj');
const doneBtn = document.getElementById('done-btn');


const buttonEvents = (() => {

    //THE MODAL POP UP FLASHES WHEN WE REFRESH THE PAGE, ADDING A NO DISPLAY CLASS TO THE HTML INDEX AND THEN USING THIS LOAD EVENT LISTENER TO REMOVE IT HELPS US TO PREVENT THIS
    window.addEventListener('load', displayModal);
    
        newProjBtn.addEventListener('click', openModal);
        closeModalButton.addEventListener('click', closeModal);
        overlayNewProj.addEventListener('click', closeModal);
        doneBtn.addEventListener('click', projects.newProject);
        doneBtn.addEventListener('click', closeModal);
        doneBtn.addEventListener('click', restartForm);
       
        
    })
    ();
    
    function displayModal() {
        modalNewProj.classList.remove('no-display');

    };
    
    //FUNCTIONS TO OPEN OR CLOSE THE NEW PROJECT MODAL
    function openModal() {
        modalNewProj.classList.add('active');
        overlayNewProj.classList.add('active');
        
    }
    
    
    function closeModal() {
        
        modalNewProj.classList.remove('active');
        overlayNewProj.classList.remove('active');   
    }
    
    
    function restartForm() {
        const projectTitleInput = document.getElementById('proj-name');
        projectTitleInput.value = ''; 
    }


//THIS FUNCTIONS CREATES THE CONTENT OF THE PROJECT CARDS, ADDING THE EVENT LISTENERS TO THEM
function createProject (identifier) {

    const projectsStorageDiv = document.querySelector('.projects-div-store');

 //CREATION OF THE PROJECT CARD
     const projectCard = document.createElement('div');
     const textAndIcons = document.createElement('div');
     const textContainer = document.createElement('a');
     const iconsContainer = document.createElement('div');
     const projectText = document.createElement('p');
     const deleteIcon = document.createElement('button');

     //PROJECT CARD
     projectCard.setAttribute('data-proj-identifier', identifier);
    
     
     //MAIN CONTAINER INSIDE THE PROJECT CARD
     textAndIcons.setAttribute('data-proj-identifier', identifier);
     textAndIcons.classList.add('project-text-and-icons-container');

     //CONTAINER OF THE PROJECT NAME
     textContainer.setAttribute('data-proj-identifier', identifier);
     textContainer.classList.add('project-text-container');
     textContainer.setAttribute('href', '#');

     //CONTAINER OF THE DELETE AND EDIT ICONS
     iconsContainer.setAttribute('data-proj-identifier', identifier);
     iconsContainer.classList.add('project-icons-container');

     //PROJECT NAME (TEXT)
     projectText.setAttribute('data-proj-identifier', identifier);
     projectText.classList.add('project-text-name');
     projectText.textContent = identifier;

     //DELETE BUTTON
     deleteIcon.setAttribute('data-proj-identifier', identifier);
     deleteIcon.textContent = 'delete';

     //APPEND DOM CREATED ELEMENTS TO THE projects-div-store
     textContainer.appendChild(projectText);
     iconsContainer.appendChild(deleteIcon);
     textAndIcons.appendChild(textContainer);
     textAndIcons.appendChild(iconsContainer);
     projectCard.appendChild(textAndIcons);
     projectCard.appendChild(iconsContainer);
     projectsStorageDiv.appendChild(projectCard);


     
    //DELETE BUTTONS FUNCTION
    deleteIcon.addEventListener('click', function (e) {
        let projectIndex = projects.projectsContainer.findIndex(elem => elem.name === e.target.parentNode.dataset.projIdentifier);
        let removePorject = document.querySelector(`[data-proj-identifier='${identifier}']`);
        let pageTitle = document.querySelector('.page-title');
        let projIdentifier = e.target.parentNode.dataset.projIdentifier;

        projects.projectsContainer.splice(projectIndex, 1);
        removePorject.remove();
        projectsLocalStorage();

        if (projIdentifier === pageTitle.textContent) {
            clearContent();
        } else {
            return;
        }
      

        
    });


//PROJECT ANCHORS FUNCTIONS AND LISTENERS

    const projectCards = document.querySelectorAll('a');

    projectCards.forEach(projectCard => projectCard.addEventListener('click', (e) => {
        clearContent();
        const projectName = e.target.parentNode.dataset.projIdentifier;
        pageTilte(projectName);
        pageContent(projectName);

        if(localStorage.getItem('projects') === null){//Review this--------------------------------------------------------------IMPORTANT
            return;
        }else{
            showStoredTasks();
        }

    }));

    

};    



//SAVE THE proyectList AS 'projects' INSIDE THE LOCAL STORAGE
function projectsLocalStorage () {
    
    localStorage.setItem('projects', JSON.stringify(projects.projectsContainer));
    console.log(projects.projectsContainer);
    projects.projectCount ();
};

//VALIDATE PROJECT TO BE SURE THAT THERE IS NOT TWO PROJECTS WITH THE SAME NAME BECAUSE THIS WILL CAUSE PROBLEMS WITH THE DELETE BUTTON
function projValidation(projectToValidate){
    return !projects.projectsContainer.some(project => project.name === projectToValidate.name);
}


//RESTART THE PROJECT CREATOR FORM
function restartProjectForm() {
    const projectTitleInput = document.getElementById('proj-name');
    projectTitleInput.value = '';
}


//STARTING PAGE
function loadStartPage() {
    clearContent();

}

function showStoredTasks() {
    const storedProjects =JSON.parse(localStorage.getItem('projects'));
    projects.projectsContainer = storedProjects;

    const projName = document.querySelector('.page-title').textContent;
    let projectIndex = projects.projectsContainer.findIndex(elem => elem.name === projName);
    for (let i= 0; i < projects.projectsContainer[projectIndex].tasks.length; i++){
        createTask(projects.projectsContainer[projectIndex].tasks[i].title, projects.projectsContainer[projectIndex].tasks[i].date);
    }
    
}

export  {
    projects,
    buttonEvents,

}