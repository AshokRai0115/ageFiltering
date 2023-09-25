import { useState } from "react";

import NewMember from "./NewMember";
import Member from "./Member";
import FilterAge from "./FilterAge";

function Members(props) {

    const [filteredMembers, setFilteredMembers] = useState([]);

    function submittedInfo(infoObj) {
        const dob = new Date(infoObj.dob);
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - dob;
        const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
        const age = Math.floor(ageInYears);
        const info = {
            name: infoObj.name,
            age: age,
            id: Math.random()
        }

        return props.onNewMemberAdded(info);

    }
    function returnAgeFilterHandler(age) {
        let ageGroup = props.members.filter(m=> Number(m.age) === Number(age))
        setFilteredMembers(ageGroup)
    }
    return (
        <div>
            <NewMember onInfoSubmit={submittedInfo} />
            <FilterAge onAgeToFilter={returnAgeFilterHandler} members = {props.members}></FilterAge>

            {
                filteredMembers.length > 0 ?
                    (
                        filteredMembers.map(m => {
                            console.log("Inside fitered")
                            return <Member key={m.id} name={m.name} age={m.age} />
                        })

                    ) :
                    (
                        props.members.map(m => {
                            return <Member key={m.id} name={m.name} age={m.age} />
                        })
                    )

            }


        </div>
    )
}

export default Members;