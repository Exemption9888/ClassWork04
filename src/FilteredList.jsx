import React, { Component } from 'react';

class FilteredList extends Component {
    render() {
        return (
            <div className="module">
                this.state = {
                    search: "",
                    type: "All"
                };
                onFilter = (eventKey) => {
                    this.setState({type: eventKey});
                };
                filterItem = (item) => {
                    const matchesSearch = item.name
                    .toLowerCase()
                    .search(this.state.search) !== -1;
                    const matchesType = this.state.type === "All" 
                    || item.type === this.state.type;
                    return matchesSearch && matchesType;
                }
                <DropdownButton title="Filter" onSelect={this.onFilter}>
                    <MenuItem eventKey="All">All</MenuItem>
                    <MenuItem eventKey="Fruit">Fruit</MenuItem>
                    <MenuItem eventKey="Vegetable">Vegetables</MenuItem>
                </DropdownButton>
            </div>
        );
    }
}

export default FilteredList;