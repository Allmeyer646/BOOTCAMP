import React from "react";
import {Image} from 'react-bootstrap'
import barn from './images/barn.jpg';

export default class Background extends React.Component {
    render() {
        return (
            <div>
                <img
                className="d-block img-fluid"
                src={barn}
                />
            </div>
        ) 
    }
}