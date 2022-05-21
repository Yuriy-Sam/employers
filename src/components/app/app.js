import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';


import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, rise: false, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2},
                {name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3},
            ]
        }
        this.maxId = 4;
    }

    




    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        /*this.setState(({data}) => {
            const newArr = data.slice();
            newArr.push(newItem)
            return {
                data: newArr
            }
        })*/
        this.setState(({data}) => {
            console.log(data);
            const newArr = [...data, newItem];
            return {
                data: newArr
                
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}

                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}

                }
                return item;
            })
        }))    
    }
 

    onDelete = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render() {
        const employers = this.state.data.length;
        const increases = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                employers={employers}
                increases={increases} />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                data={this.state.data}
                onDelete={this.onDelete}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise} />
                <EmployersAddForm
                onAdd={this.addItem} />
            </div>
        );
    }


}

export default App;