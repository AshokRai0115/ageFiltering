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
    function returnAgeFilterHandler(filterAge) {
        console.log(filterAge)
        props.members.map(m => {
            if (m.age == filterAge) {
                setFilteredMembers(prev => {
                    return [m,
                        ...prev]
                })
            }
        })
    }
    return (
        <div>
            <NewMember onInfoSubmit={submittedInfo} />
            <FilterAge onAgeToFilter={returnAgeFilterHandler}></FilterAge>

            {
                filteredMembers.map(m => {
                    console.log(m.id)
                    return <Member key={m.id} name={m.name} age={m.age} />
                })
            }


        </div>
    )
}

export default Members;