import React from "react";
import PicScroll from "./picscroll";

export default class Products extends React.Component {
    render() {
        return (
            <div>
                <h2>Products from our farm</h2>
                <PicScroll/>
            </div>
        ) 
    }
}