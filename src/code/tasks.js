import { projects } from "./projects";

const tasks = (() => {
    class Task {
        constructor(title, date){
            this.title = title;
            this.date = date;
            this.done = false;
        }
    }

    function newTask() {
        const projName = document.querySelector('.page-title').textContent;
        let projectIndex = projects.projectsContainer.findIndex(elem => elem.name === projName);
        const taskTitleInput = document.getElementById('new-task-title');
        const taskDateInput = document.getElementById('due-date');
        const title = taskTitleInput.value;
        const date = taskDateInput.value;
        const task = new Task(title, date);
        projects.projectsContainer[projectIndex].tasks.push(task);
        createTask(title, date);
        projectsLocalStorage();
    };

    return{
        newTask,
    }
})
();

//BUTTONS AND EVENTS LISTENERS--------------------------------------------------------------------------------------------------
const TaskModal = document.querySelector('.modal-task');
const overlayNewProj = document.getElementById('overlay-newproj');
const closeModalTask = document.querySelector('[data-edit-close]');
const addTask = document.getElementById('done-task-btn');




const taskButtonEvents = (() => {
    window.addEventListener('load', displayModal);

    closeModalTask.addEventListener('click', closeModal);
    overlayNewProj.addEventListener('click', closeModal);
    addTask.addEventListener('click', tasks.newTask);
    addTask.addEventListener('click', closeModal);
    addTask.addEventListener('click', restartTaskForm);

    function openTaskModal() {
        TaskModal.classList.add('active');
        overlayNewProj.classList.add('active');
        
    };

    function closeModal() {
        TaskModal.classList.remove('active');
        overlayNewProj.classList.remove('active');   
    }

    function displayModal() {
        TaskModal.classList.remove('no-display');

    };

    return{
        openTaskModal
    }

})
();


//FUNCTION TO CREATE A NEW TASK
function createTask (identifier, dateInputVal) {
    const projTitle = document.querySelector('.page-title').textContent;
    const mainContent = document.getElementById('page-content'+projTitle);

//CREATION OF THE TASK CARD
    const taskCard = document.createElement('div');
    const leftCard = document.createElement('div');
    const rightCard = document.createElement('div');
    const checkDone = document.createElement('input');
    const title = document.createElement('p');
    const date = document.createElement('p');
    const buttonsContainer = document.createElement('div');
    const editTask = document.createElement('button');
    const deleteTask = document.createElement('button');

    //TASK CARD-------------------------------------------------------------------------------
    taskCard.setAttribute('data-task-identifier', identifier);

    //LEFT SIDE OF THE CARD-------------------------------------------------------------------
    leftCard.setAttribute('data-task-identifier', identifier);
    leftCard.classList.add('left-card-side');

    //RIGHT SIDE OF THE CARD------------------------------------------------------------------
    rightCard.setAttribute('data-task-identifier', identifier);
    rightCard.classList.add('right-card-side');

    //CHECKBOX OF TASK DONE-------------------------------------------------------------------
    checkDone.setAttribute('data-task-identifier', identifier);
    checkDone.setAttribute("type", "checkbox");
    checkDone.classList.add('check-done');

    //PROJECT TITLE (TEXT)
    title.setAttribute('data-proj-identifier', identifier);
    title.classList.add('task-text-title');
    title.textContent = identifier;

    //PROJECT DATE (TEXT)
    date.setAttribute('data-proj-identifier', identifier);
    date.classList.add('task-text-date');
    date.textContent = dateInputVal;

    //RIGHT SIDE OF THE CARD------------------------------------------------------------------
    buttonsContainer.setAttribute('data-task-identifier', identifier);
    buttonsContainer.classList.add('buttons-container');

    //EDIT BUTTON----------------------------------------------------------------------------
    editTask.setAttribute('data-proj-identifier', identifier);
    editTask.textContent = 'edit';

    //DELETE BUTTON--------------------------------------------------------------------------
    deleteTask.setAttribute('data-proj-identifier', identifier);
    deleteTask.textContent = 'delete';

    buttonsContainer.appendChild(editTask);
    buttonsContainer.appendChild(deleteTask);
    leftCard.appendChild(checkDone);
    leftCard.appendChild(title);
    rightCard.appendChild(date);
    rightCard.appendChild(buttonsContainer);
    taskCard.appendChild(leftCard);
    taskCard.appendChild(rightCard);
    mainContent.appendChild(taskCard);


};

//STORAGE FUNCTION
function projectsLocalStorage () {
    localStorage.setItem('projects', JSON.stringify(projects.projectsContainer));
    console.log(projects.projectsContainer);
};

//RESTART THE TASK CREATOR FORM
function restartTaskForm() {
    const taskTitleInput = document.getElementById('new-task-title');
    taskTitleInput.value = '';
};

// function showStoredTasks() {
//     const projName = document.querySelector('.page-title').textContent;
//     let projectIndex = projects.projectsContainer.findIndex(elem => elem.name === projName);
//     for (let i= 0; i < projects.projectsContainer[projectIndex].tasks.length; i++){
//         createTask(projects.projectsContainer[i].tasks.title, projects.projectsContainer[i].tasks.date);
//     }
// }

export {
    tasks,
    taskButtonEvents,
    createTask,

}