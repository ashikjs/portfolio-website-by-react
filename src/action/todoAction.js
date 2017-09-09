import dispatcher from "../dispatches";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodo() {
    // axios("http://someurl.com/somedataendpoint").then((data)=>{
    //     console.log("got the data!", data);
    // });

    dispatcher.dispatch({type: "FETCH_TODOS"});
    setTimeout(()=>{
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
            {
                id:10101,
                text: "This is First Todo",
                complete: false
            },
            {
                id:10104,
                text: "Your Bill is 1259$",
                complete: false
            },
            {
                id:10105,
                text: "Pay your Bill online bank ",
                complete: true
            },
            {
                id:10106,
                text: "Everything is now ok :P ",
                complete: true
            },
            {
                id:10102,
                text: "This is second Todo ",
                complete: false
            },
            {
                id:10103,
                text: "Buy a Mack ",
                complete: true
            },
        ] })

    }, 1000);
}

