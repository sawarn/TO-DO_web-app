import React from "react"

function FormComponent(props){

    return(
        <main>
            <form>
                <input
                name="firstname" 
                value={props.data.firstname} 
                onChange={props.handleChange} 
                placeholder="First Name"
                /> 
                <br/>
                <input 
                name="lastname" 
                value={props.data.lastname} 
                onChange={props.handleChange} 
                placeholder="Last Name"/>
                <br/>
                <input 
                name="age" 
                value={props.data.age} 
                onChange={props.handleChange} 
                placeholder="Age"/> <br/>

                <label>
                    <input 
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={props.handleChange}
                    /> Male

                </label> <br/>

                <label>
                    <input 
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={props.handleChange}
                    /> Female

                </label> <br/>

                <select value={props.data.destination}
                name="destination"
                onChange={props.handleChange}
                >
                    
                    <option value="">-- Please choose a Country --</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Switzerland">Switzerland</option>
                </select> <br/>

                <label>
                    <input
                    type="checkbox"
                    name="isVegan"
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                    /> Vegan?

                </label>

                <label>
                    <input
                    type="checkbox"
                    name="isKosher"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                    /> Kosher?

                </label>

                <label>
                    <input
                    type="checkbox"
                    name="isLactoseFree"
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                    /> Lactose Free?

                </label>
                
                <br/>
                <br/>

                <button>Submit</button>
            </form>

            <hr/>
            <h2>Entered Information :</h2>
            <p>Your Name: {props.data.firstname} {props.data.lastname}</p>
            <p>Your Age: {props.data.age}</p>
            <p>Your Gender: {props.data.gender} </p>
            <p>Your Destination: {props.data.destination}</p>
            <p>Your Dietary Restrictions: {props.data.dietaryRestrictions}</p>
            <p>Vegan : {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher : {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free : {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>
    )

}

export default FormComponent