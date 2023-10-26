import React, { useState }  from 'react'

export const AddStaff= ()=> {

    var [ name , setName ] = useState() //to define the state
    const nameUpdate = (event) => { setName(event.target.value) } //to link the input field to update the state

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