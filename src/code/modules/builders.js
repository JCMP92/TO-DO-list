import { openTaskModal, tasks, taskButtonEvents } from "../tasks";


'use strict';

const startPage = () => {
    const pageContent = document.querySelector('#content');
    const imageInit = document.createElement('img');
    
};

const pageTilte = (title) => {
    const pageContent = document.querySelector('#content');
    const titleContent = document.createElement('div');   
    const titleText = document.createElement('h2');
    const addBtn = document.createElement('button'); 

        titleText.classList.add('page-title');    
        titleText.textContent = title;

        addBtn.setAttribute('class', 'add-btn');
        addBtn.textContent = 'Add';
        addBtn.addEventListener('click', taskButtonEvents.openTaskModal)
    
    titleContent.appendChild(titleText);
    titleContent.appendChild(addBtn);
    pageContent.appendChild(titleContent);
    
}

const pageContent = (project) => {
    const mainContent= document.getElementById('content');
    const pageContent = document.createElement('div');
        pageContent.setAttribute('id', 'page-content'+`${project}`);
        pageContent.classList.add('tasks-displayer');
    
    mainContent.appendChild(pageContent);
    
}

const clearContent = () => {
    const mainContent = document.querySelector('.main-container')
    const oldContent = document.querySelector('#content');
    if (oldContent) {
        mainContent.removeChild(oldContent);
    }

    const newContent = document.createElement('div');
    newContent.setAttribute('id', 'content');
    mainContent.appendChild(newContent);

    return newContent;
};  

export{
    pageTilte,
    pageContent,
    clearContent
}