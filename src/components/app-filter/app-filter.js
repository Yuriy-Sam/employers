
import './app-filter.css';


const AppFilter = (props) => {

    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повишение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'},
    ]

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button 
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelector(name)} >
                    {label}
            </button>

        )
    })



    return (
        <div className="btn-group" >
            {buttons}
        </div>

    )

}

export default AppFilter;