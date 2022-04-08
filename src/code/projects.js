import { createProject, projectCount, projectsLocalStorage, showStoredProjects } from "./modules/projectFunctions";



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
        projectsContainer.push(project);
        createProject(name);
        projectsLocalStorage();

    };

    function projectCount () {
        const projectCount = document.querySelector('.project-count');
        projectCount.textContent = projectsContainer.length;
    };

    return{
        projectsContainer,
        newProject
    }
})
();

export default projects;