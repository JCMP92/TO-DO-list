'use strict';

import { pageTilte, pageContent } from "../general-builders/builders.js";

const taskPage = (() => {

    const titleContainer = document.getElementById('content');

    const taskTitle = pageTilte('Tasks');
        taskTitle.setAttribute('id', 'task-title');

    titleContainer.appendChild(taskTitle);

    const tasksContainer = pageContent('New Task', 'task-page-btn');
        tasksContainer.setAttribute('id', 'task-container');
        
    titleContainer.appendChild(tasksContainer);
})
();


export{
    taskPage,
}