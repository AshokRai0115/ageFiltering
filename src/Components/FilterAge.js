import { useState } from "react";

function FilterAge(props){
    const [age, setAge] = useState(0)

    function ageFilterHandler(e){
        setAge(e.target.value) 
        props.onAgeToFilter(age);
    }
    return(
        <form>
            <input type="number" min="1" max="150" id="age" placeholder="Filter Age" onChange={ageFilterHandler}></input>
        </form>
    )
}

export default FilterAge;