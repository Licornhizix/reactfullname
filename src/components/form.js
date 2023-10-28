import React, { useState }  from 'react'

export const AddStaff= ()=> {

    var [ name , setName ] = useState() //to define the state
    const nameUpdate = (event) => { setName(event.target.value) } //to link the input field to update the state

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }


    return (
        <div>
            <form>
                <label>Full Name:</label>
                <input required onChange={nameUpdate}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddStaff