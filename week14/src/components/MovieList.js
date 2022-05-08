import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: 'Full Metal Jacket', 
                image: '/images/fullmetaljacket.jpg',
                synopsis: 'First half is mostly exercise and foul language.  Second half is wartime cynicism.',
                reviews: []
            },
            {
                title: 'The Shining', 
                image: '/images/theshining.jpg',
                synopsis: 'All work and no play makes Jack a dull boy.  Creepy twins.  Blood filled elevators.  Hedge maze.  Frozen solid.',
                reviews: []                
            },
            {
                title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 
                image: '/images/drstrangelove.jpg',
                synopsis: 'An inept government accidentally starts nuclear war.',
                reviews: []                
            },
            {
                title: '2001: A Space Odyssey ', 
                image: '/images/2001aspaceodyssey.png',
                synopsis: 'Monkeys worship a stone slab.  HAL9000 tries to kill everyone.  A giant space baby appears.',
                reviews: []                
            },
            {
                title: 'A Clockwork Orange', 
                image: '/images/aclockworkorange.png',
                synopsis: 'Ultraviolence, followed by experimental brainwashing, and then more ultraviolence.',
                reviews: []                
            },
            {
                title: 'Eyes Wide Shut', 
                image: '/images/eyeswideshut.png',
                synopsis: 'Lots of shenanigans with masks on, and Nicole Kidman cheats on Tom Cruise.',
                reviews: []                
            },
            {
                title: 'Spartacus', 
                image: '/images/spartacus.png',
                synopsis: 'A gladiator leads a slave rebellion.  I am Spartacus.',
                reviews: []                
            }
        ]
        
        let films;
        films = movies.map((movie, index) => <Movie title={movie.title} image={movie.image} synopsis={movie.synopsis} reviews={movie.reviews} key={index} />)
        return(
            <div>
                {films}
            </div>
        )
    }
}