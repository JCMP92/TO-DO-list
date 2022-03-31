'use strict';

class Task {
    constructor(name, description, priority, date){
        this.name = name;
        this.id = name;
        this.description = description;
        this.date = date;
        this.done = done;
        this.priority = priority;
    }
    //TASK Name--------------------------------------
    set name(name) {
        this.name = name; 
    };
    get name(){
        return this.name;
    };
    //TASK Id---------------------------------------
    get id(){
        return this.id;
    };
    //TASK Descriprion------------------------------
    set description(description) {
        if(description){
            this.description = description;
        }
    };
    get description(){
        return this.description;
    };
    //TASK Priority---------------------------------
    set priority(priority){
        if(priority){
            this.priority = priority;
        }
    };
    get priority() {
        return this._priority;
      }


}

export{
    Task,
}