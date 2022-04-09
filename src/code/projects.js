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
            console.log(projectsContainer[i].name);
        }
    };


    function newProject() {
        const projectTitleInput = document.getElementById('proj-name');
        const name = projectTitleInput.value; 
        const project = new Project(name);
        //I should add here the project validators
        if (name === ''){return;}
        else if (projValidation(project)){
        //------------------------------------
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
        projectCount
    }
})
();

export default projects;





//THIS FUNCTIONS CREATES THE CONTENT OF THE PROJECT CARDS, ADDING THE EVENT LISTENERS TO THEM
function createProject (identifier) {

    const projectsStorageDiv = document.querySelector('.projects-div-store');

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
     editIcon.textContent = 'edit';
     editIcon.classList.add('edit-btn')

     //DELETE ICON
     deleteIcon.setAttribute('data-proj-identifier', identifier);
     deleteIcon.textContent = 'delete';

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

    //EDIT ICON FUNCTION
    editIcon.addEventListener('click', function (e){
        console.log('hi');
    })

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

//RESTART TH PROJECT CREATOR FORM
function restartProjectForm() {
    const projectTitleInput = document.getElementById('proj-name');
    projectTitleInput.value = '';
}