import React from "react";

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return(
            <div className="card w-75">
                <div className="card-header bg-warning text-black">
                    /Username/
                </div>
                <div className="card-body">
                    Comment text from people who love the farm
                </div>
                <div className="card-footer">
                </div>
            </div>
        )
    }
}