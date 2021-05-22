import React from "react"
import todo from "./components/todoData"
import ToDo from "./ToDoItem"


class App extends React.Component{

    constructor(){
        super()
        this.state={
            todos: todo
        }

        this.handleChange=this.handleChange.bind(this)
    }


    handleChange(id){

        this.setState(prevState =>{
            const updatedTodo= prevState.todos.map ( todo=> {
                if(todo.id===id){

                    todo.completed= !todo.completed
                }
                return todo
            })

            return{
                todos: updatedTodo
            }
        })
    }

    render(){

        const todoItems= this.state.todos.map( item=> <ToDo key ={item.id} item={item}
        handleChange= {this.handleChange}
        />)

        return(

        <div className="todo-list">
            {todoItems}
        </div>
        )
    }
}

export default App