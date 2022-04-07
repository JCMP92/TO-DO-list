import  projects  from "../projects";

function createProject (identifier) {
    const projectCount = document.querySelector('.project-count');
    const projectsStorageDiv = document.querySelector('.projects-div-store');

 //SAVE THE proyectList AS 'projects' INSIDE THE LOCAL STORAGE

    projectsLocalStorage();
 
    projectCount.textContent = projects.projectsContainer.length;

 //CREATION OF THE PROJECT CARD
     const projectCard = document.createElement('div');
     const textAndIcons = document.createElement('div');
     const textContainer = document.createElement('a');
     const iconsContainer = document.createElement('div');
     const projectText = document.createElement('p');
     const editIcon = document.createElement('button');
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

     //EDIT ICON
     editIcon.setAttribute('data-proj-identifier', identifier);
     editIcon.classList.add('fab', 'fa-twitter');

     //DELETE ICON
     deleteIcon.setAttribute('data-proj-identifier', identifier);
     deleteIcon.classList.add('fab', 'fa-twitter', 'delete-btn');

     //APPEND DOM CREATED ELEMENTS TO THE projects-div-store
     textContainer.appendChild(projectText);
     iconsContainer.appendChild(editIcon);
     iconsContainer.appendChild(deleteIcon);
     textAndIcons.appendChild(textContainer);
     textAndIcons.appendChild(iconsContainer);
     projectCard.appendChild(textAndIcons);
     projectCard.appendChild(iconsContainer);
     projectsStorageDiv.appendChild(projectCard);

     
    //DELETE BUTTONS FUNCTION
    deleteIcon.addEventListener('click', function (e) {
        let projectIndex = projects.projectsContainer.findIndex(elem => elem.name === e.target.parentNode.dataset.projIdentifier);
        projects.projectsContainer.splice(projectIndex, 1);
        let removePorject = document.querySelector(`[data-proj-identifier='${identifier}']`);
        removePorject.remove();
        projectsLocalStorage();
    })
};    



function projectsLocalStorage () {
    localStorage.setItem('projects', JSON.stringify(projects.projectsContainer));
    console.log(projects.projectsContainer);
};



 export{
    createProject,
}