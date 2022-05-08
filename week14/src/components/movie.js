import React from 'react';
import ReviewButton from './ReviewButton';
import ReviewList from './ReviewList';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            image: props.image,
            synopsis: props.synopsis,
            reviews: props.reviews
        }
        this.setReviews = this.setReviews.bind(this)
    }
    setReviews(e) {
        let newReview = e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
        this.setState( state => {
            if ( state.title === e.target.name ) {
                state.reviews.push(newReview)
                return {reviews: state.reviews }
            }
        })

    }
    render() {
        return(
            <div className="row my-5">
                <div className="card mx-auto" style={{ width: "50%" }}>
                    <div className="card-body">
                        <h3 className="card-title">{this.state.title}</h3>
                        <p className="card-text">
                            <img className="poster" src={this.state.image} alt="" />
                            <br/>
                            {this.state.synopsis}
                        </p>
                    </div>
                    <ReviewList reviews={this.state.reviews} />
                    <ReviewButton onClick={ (e) => this.setReviews(e) } name={this.state.title} />
                </div>
            </div>
        ) 
    }
}