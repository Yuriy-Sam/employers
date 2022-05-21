
import EmployeesListItem from "../employers-list-item/employers-list-item"

import './employers-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        const { id, ...itemPops} = item;

        return (
            <EmployeesListItem 
            key={id} {...itemPops}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleRise={() => onToggleRise(id)} /> //name={name} salary={salary}
        )
    });

    return (
        <ul className="add-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;