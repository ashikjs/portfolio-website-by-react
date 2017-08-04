import React from 'react';
// import { Link } from 'react-router-dom'
import Todo from "../todo"

export default class Todos extends React.Component {

    constructor() {
        super();
        this.state ={
            todos: [
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
                }
            ]
        }
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) =>{
            return <Todo key={todo.id} {...todo} />;
        });
        return (
            <div>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}