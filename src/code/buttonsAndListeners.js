const buttonEvents = (() => {
    const newProjBtn = document.querySelector('.new-proj-btn');
    const closeModalButton = document.querySelector('[data-close-button]');
    const modalNewProj = document.getElementById('modal-newproj');
    const overlayNewProj = document.getElementById('overlay-newproj');

    newProjBtn.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);
    overlayNewProj.addEventListener('click', closeModal);


    function openModal() {
        modalNewProj.classList.add('active');
        overlayNewProj.classList.add('active');
        
    }

    function closeModal() {
        modalNewProj.classList.remove('active');
        overlayNewProj.classList.remove('active');   
    }

})
();

export default buttonEvents;

