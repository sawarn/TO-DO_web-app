import React from "react"

function ToDo(props){


    const Style={

        fontStyle:"italic",
        color:"cdcdcd",
        textDecoration:"line-through"
    }



    return(

        <div className ="todo-list">
            <input type="checkbox"
            checked={props.item.completed}
            onChange={()=> props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? Style :null}>{props.item.text}</p>

        </div>
    )
}

export default ToDo