import React from "react";

export default class NavItems extends React.Component {
    render(){
        return(
            <li className="nav-item">{this.props.link}</li>
        )
    }
}