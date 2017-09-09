import React from 'react';
// import { Link } from 'react-router-dom'
import Todo from "../todo"
import * as TodoAction from "../../action/todoAction"
import TodoSotre from "../../store/todoesStore"

export default class Todos extends React.Component {

    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoSotre.getAll(),
            // loading: true
        };
    }

    componentWillMount() {
        TodoSotre.on("change", this.getTodos);
        console.log("count",TodoSotre.listenerCount("change"));


    }
    componentWillUnmount() {
        TodoSotre.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoSotre.getAll(),
        });
    }
    // createTodos(){
    //     TodoAction.createTodo(Date.now());
    // }

    reloadTodos(){
        TodoAction.reloadTodo();
    }

    render() {
        const {todos} = this.state;
        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
        });
        return (
            <div>
                {/*<button onClick={this.createTodos.bind(this)}>Create!</button>*/}
                <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}