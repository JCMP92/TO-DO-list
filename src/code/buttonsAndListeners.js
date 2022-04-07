import  projects  from "./projects";

const newProjBtn = document.querySelector('.new-proj-btn');
const closeModalButton = document.querySelector('[data-close-button]');
const modalNewProj = document.getElementById('modal-newproj');
const overlayNewProj = document.getElementById('overlay-newproj');
const doneBtn = document.getElementById('done-btn');

const buttonEvents = (() => {

//THE MODAL POP UP FLASHES WHEN WE REFRESH THE PAGE, ADDING A NO DISPLAY CLASS TO THE HTML INDEX AND THEN USING THIS LOAD EVENT LISTENER TO REMOVE IT HELPS US TO PREVENT THIS
document.addEventListener('load', displayModal)

    newProjBtn.addEventListener('click', displayModal);
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

export  {
    buttonEvents,

};