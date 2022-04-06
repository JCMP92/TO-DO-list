import  projects  from "../projects";

function createProject () {
    const projectCount = document.querySelector('.project-count');
    const projectsStorageDiv = document.querySelector('.projects-div-store');

 //SAVE THE proyectList AS 'projects' INSIDE THE LOCAL STORAGE
 localStorage.setItem('projects', JSON.stringify(projects.projectsContainer));
 
 projectCount.textContent = projects.projectsContainer.length;

 for (let i = 0; i < projects.projectsContainer.length; i += 1) {
     const projectCard = document.createElement('a');
     const textAndIcons = document.createElement('div');
     const textContainer = document.createElement('div');
     const iconsContainer = document.createElement('div');
     const projectText = document.createElement('p');
     const editIcon = document.createElement('i');
     const deleteIcon = document.createElement('i');

     //PROJECT CARD
     projectCard.setAttribute('data-proj-index', i);
     projectCard.setAttribute('href', '#');
     
     //MAIN CONTAINER INSIDE THE PROJECT CARD
     textAndIcons.setAttribute('data-proj-index', i);
     textAndIcons.classList.add('project-text-and-icons-container');

     //CONTAINER OF THE PROJECT NAME
     textContainer.setAttribute('data-proj-index', i);
     textContainer.classList.add('project-text-container');

     //CONTAINER OF THE DELETE AND EDIT ICONS
     iconsContainer.setAttribute('data-proj-index', i);
     iconsContainer.classList.add('project-icons-container');

     //PROJECT NAME (TEXT)
     projectText.setAttribute('data-proj-index', i);
     projectText.classList.add('project-text-name');
     projectText.textContent = projects.projectsContainer[i].name;

     //EDIT ICON
     editIcon.setAttribute('data-proj-index', i);
     editIcon.classList.add('fab', 'fa-twitter');

     //DELETE ICON
     deleteIcon.setAttribute('data-proj-index', i);
     deleteIcon.classList.add('fab', 'fa-twitter');

     //APPEND DOM CREATED ELEMENTS TO THE projects-div-store
     textContainer.appendChild(projectText);
     iconsContainer.appendChild(editIcon);
     iconsContainer.appendChild(deleteIcon);
     textAndIcons.appendChild(textContainer);
     textAndIcons.appendChild(iconsContainer);
     projectCard.appendChild(textAndIcons);
     projectCard.appendChild(iconsContainer);
     projectsStorageDiv.appendChild(projectCard);

     

    }

}     
 export{
    createProject,
}