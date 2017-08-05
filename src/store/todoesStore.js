import {EventEmitter} from "events";
import dispatcher from "../dispatches";


class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id:1001,
                text: "This is First Todo",
                complete: false
            },
            {
                id:1002,
                text: "This is second Todo ",
                complete: false
            },
            {
                id:1003,
                text: "Buy a Mack ",
                complete: false
            },
            {
                id:1004,
                text: "Your Bill is 1259$",
                complete: false
            },
            {
                id:1005,
                text: "Pay your Bill online bank ",
                complete: false
            },
            {
                id:1006,
                text: "Everything is now ok :P ",
                complete: false
            },
        ]
    }
    getAll(){
        return this.todos;
    }
    createTodo(text){
       const  id= Date.now();
       this.todos.push({
           id,
           text,
           complete: false,
       });
       this.emit("change");
    }
    handleActions(action) {
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
    }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;
export default todoStore;


