function FilterAge(props){
    function ageFilterHandler(event){
        return props.onAgeToFilter(event.target.value);
    }
    return(
        <form>
            <input type="number" min="1" max="150" id="age" placeholder="Filter Age" onChange={ageFilterHandler}></input>

        </form>
    )
}

export default FilterAge;