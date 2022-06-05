import React from "react";
import ReplyButton from './reply';

import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    render() {
        return(
            <div className="card w-75">
                <div className="card-header bg-warning text-black">
                    Leave us a message! 
                </div>
                <div className="card-body">
                    Previous remarks:
                </div>
                <div className="card-footer">
                    <Comment />
                    <Comment />
                    <ReplyButton />
                </div>
            </div>
        )

    }
}