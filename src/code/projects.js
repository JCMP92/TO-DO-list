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
        const project = new Project(name);
        projectsContainer.push(project);

        console.log(projects.projectsContainer);
    };

    return{
        projectsContainer,
        newProject
    }
})
();

export default projects;