import { createProject } from "./modules/projectFunctions";



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
    } else {
        const storedProjects =JSON.parse(localStorage.getItem('projects'));
        projectsContainer = storedProjects;
    }

    class Project {
        constructor(name) {
            this.name = name;
            this.id = name;
            this.tasks = []; //EMPTY ARRAY, INSIDE THE PROJECTS, WHERE TASKS WILL BE STORED
        }
    }

    function newProject() {
        const projectTitleInput = document.getElementById('proj-name');
        const name = projectTitleInput.value; 
        const project = new Project(name);
        projectsContainer.push(project);
        createProject(name);

    };



    return{
        projectsContainer,
        newProject
    }
})
();

export default projects;