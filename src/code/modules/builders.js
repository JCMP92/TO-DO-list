'use strict';

const startPage = () => {
    const pageContent = document.querySelector('#content');
    const imageInit = document.createElement('img');
    
};

const pageTilte = (title) => {
    const pageContent = document.querySelector('#content');
    const titleContent = document.createElement('div');    
    const titleText = document.createElement('h2');
        titleText.classList.add('page-title');    
        titleText.textContent = title;
    
    titleContent.appendChild(titleText);
    pageContent.appendChild(titleContent);
    
    // return titleContent;
}

const pageContent = (btnName, btnId) => {
    const pageContent = document.createElement('div');
        pageContent.setAttribute('id', 'page-content');
    const addBtn = document.createElement('button');
        addBtn.setAttribute('id', btnId);
        addBtn.textContent = btnName;
    
    pageContent.appendChild(addBtn);

    return pageContent;
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