import React from 'react';
// import { Link } from 'react-router-dom'
import Todo from "../todo"
import * as TodoAction from "../../action/todoAction"
import TodoSotre from "../../store/todoesStore"

export default class Todos extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: TodoSotre.getAll()
        };
    }

    componentWillMount() {
        TodoSotre.on("change", () => {
            this.setState({
                todos: TodoSotre.getAll(),
            });
        })
    }
    createTodo(){
        TodoAction.createTodo(Date.now());
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });
        return (
            <div>
                <button onClick={this.createTodo.bind(this)}>Create!</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}