import React from 'react';
import { House } from './House';
import { houseApi } from '../rest/HouseApi.js';

export class HouseList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await houseApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouses) => {
        await houseApi.put(updatedHouses);
        this.fetchHouses();
    };

    render() {
        return (
            <div className="house-list">
                {this.state.houses.map((house) => (
                    <House
                        house={house}
                        key={house._id}
                        updateHouse={this.updateHouse}
                    />
                ))}
            </div>
        )
    }
}