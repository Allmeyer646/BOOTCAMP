import React from "react";
import Story from "./story";
import Post from "./post";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About us</h2>
                <Story/>
                <Post/>
            </div>
        ) 
    }
}