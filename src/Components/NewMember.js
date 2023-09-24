import { useState } from "react";

function NewMember(props){
    const [info, setInfo] = useState({
        name: "",
        dob: ""
    })
    function nameHandler(event){
        setInfo(prev=>{
            return {...prev,
            name: event.target.value }
        })
    }

    function dobHandler(event){
        setInfo(prev =>{
            return{
                ...prev,
                dob: event.target.value
            }
        })
    } 

    function infoSubmit(event){
        event.preventDefault();
        props.onInfoSubmit(info);
        setInfo({
            name: "",
            dob: ""
        })
    }

    return(
        <form onSubmit={infoSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={nameHandler} value={info.name} />
            <label htmlFor="dob">DOB: </label>
            <input type="date" id="dob" onChange={dobHandler} value={info.dob}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewMember;