import { createProject } from "./modules/createProjects";

const projects = (() => {

    //EMPTY ARRAY WHERE PROJECTS WILL BE STORED
    let projectsContainer = []; 

    class Project {
        constructor(name) {
            this.name = name;
            this.id = name;
            this.tasks = []; //EMPTY ARRAY, INSIDE THE PROJECTS, WHERE TASKS WILL BE STORED
        }
    }

    function newProject(name) {
        // const name = projectTitleInput.value;
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