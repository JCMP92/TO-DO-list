'use strict';

const pageTilte = (title) => {
    const titleContent = document.createElement('div');    
    const titleText = document.createElement('h2');
        titleText.classList.add('page-title');    
        titleText.textContent = title;
    
    titleContent.appendChild(titleText);
    
    return titleContent;
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

export{
    pageTilte,
    pageContent,
}