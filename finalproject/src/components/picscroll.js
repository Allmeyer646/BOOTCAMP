import React from "react";
import {Carousel} from "react-bootstrap";
import chickens from './images/chickens.jpg';
import pigs from './images/pigs.jpg';
import vegetables from './images/vegetables.jpg';

export default class PicScroll extends React.Component {
    render() {
        return(
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block img-fluid"
                src={chickens}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Chickens</h3>
                <p>This is a picture of yardbirds</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block img-fluid"
                src={pigs}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Pigs</h3>
                <p>This is a picture of swines</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-75 img-fluid"
                src={vegetables}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Veggies</h3>
                <p>This is a picture of vegetables</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        )
    }
}