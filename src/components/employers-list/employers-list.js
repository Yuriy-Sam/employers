
import EmployeesListItem from "../employers-list-item/employers-list-item"

import './employers-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {

    const elements = data.map(item => {
        const { id, ...itemPops} = item;

        return (
            <EmployeesListItem 
            key={id} {...itemPops}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            onSalaryChange={onSalaryChange} /> //name={name} salary={salary}
        )
    });

    return (
        <ul className="add-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;