'use strict';

const pageTilte = (title) => {
    const titleContent = document.createElement('div');    
    const titleText = document.createElement('h2');
        titleText.classList.add('page-title');    
        titleText.textContent = title;
    
    titleContent.appendChild(titleText);
    
    return titleContent;
}

export{
    pageTilte,
}