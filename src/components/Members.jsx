import React from "react";
import { Select } from "react-select";

const members = [
    {label:'miembro1', value:'miembro1'},
    {label:'miembro2', value:'miembro2'},
    {label:'miembro3', value:'miembro3'},
]

export const Members = () => {

    const [selectedMember, setSelectedMember] = useState();

    const handleSelectChange = ({value}) =>{
        console.log(value);
    }

    return(
        <div>
            <Select
                options = {members}
                onchange={(handleSelectChange)}
            />
        </div>

    )
}