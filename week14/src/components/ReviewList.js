import React from "react";
import Review from "./review";
import Stars from "./stars"

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews
        }
    }
    render() {
        return (
            <div>
                <Stars starCount={5}/>
                <hr/>
                <Review reviews={this.state.reviews}/>
            </div>
        )
    }
}