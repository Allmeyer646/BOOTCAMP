import React from "react";

export default class ReviewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.props.onClick(e)
    }
    render() {
        return(
            <div className="text-white bg-dark card-footer mt-4">
                <p>Your Review:</p>
                <input type="text" id="newReview"/><br /><br />
                <button className="btn btn-secondary" type="submit" onClick={this.handleClick} name={this.state.title} id={this.state.id}>Submit</button>
            </div>
        )
    }
}