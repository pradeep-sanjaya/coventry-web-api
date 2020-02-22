import React, { Component } from "react";
import Card from "./Card";

class Hero extends Component {
    state = {
        heroId: this.props.hero.id,
        name: this.props.hero.name,
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content.",
        movies: ["Movie1", "Movie2"],
        likeCount: this.props.likeCount
    };
    render() {
        return (
            <React.Fragment>
                <h1>Hero</h1>
                <h5>{this.isAvenger()}</h5>
                <Card
                    id={this.state.heroId}
                    name={this.state.name}
                    description={this.state.description}
                    movies={this.state.movies}
                    likeCount={this.state.likeCount}
                ></Card>
            </React.Fragment>
        );
    }

    isAvenger() {
        return this.state.heroId > 1000 ? "Avenger" : "Not an Avenger";
    }
}

export default Hero;
