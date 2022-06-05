import React from "react";
import Background from "./background";


export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome to our farm!</h2>
                <Background/>
            </div>
        ) 
    }
}