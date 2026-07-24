import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            type: 'All'
        };
        this.searchName = React.createRef();
        this.selectType = React.createRef();
    }

    onFilter = () => {
        this.setState({
            search: this.searchName.current.value,
            type: this.selectType.current.value
        });
    };

    render() {
        const search = this.state.search;
        const type = this.state.type;

        const filterItem = this.props.items.filter((item) => {
            const matchesSearch = item.name
                .toLowerCase()
                .search(this.state.search) !== -1;
            const matchesType = this.state.type === "All"
                || item.type === this.state.type;
            return matchesSearch && matchesType;
        })

        return (
            <div className="module">
                <h1><u>Module 3 & 4</u></h1>
                <label for="filter">Enter a name: </label>
                <input
                    type="text"
                    id="filter"
                    name="filter"
                    ref={this.searchName}
                />
                <br/>
                <label for="dropdown">Select an Option: </label>
                <select
                    name="drowndown"
                    id="dropdown"
                    ref={this.selectType}>
                    <option value="All">Produce</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>
                <br/>
                <button
                    onClick={this.onFilter}
                >
                    Go!
                </button>
                <List items={filterItem} />
            </div>
        );
    };
}

export default FilteredList;