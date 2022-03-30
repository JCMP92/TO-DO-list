'use strict';

import { pageTilte } from "../general-builders/builders.js";

const taskPage = (() => {

    const titleContainer = document.getElementById('content');

    const taskTitle = pageTilte('Tasks');
        taskTitle.setAttribute('id', 'task-title');

    titleContainer.appendChild(taskTitle);
})
();


export{
    taskPage,
}