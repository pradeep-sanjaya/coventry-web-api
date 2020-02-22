import React, { Component } from "react";
import Button from "./Button";
import Movie from './Movie';

class Card extends Component {

    state = {
        name: this.props.name,
        likeCount: this.props.likeCount
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.id} : {this.state.name}
                    </h5>
                    <img
                        className="card-img-top"
                        src="https://via.placeholder.com/200"
                    ></img>

                    <Movie></Movie>
                    {this.renderMovies()}
                    <p className="card-text">{this.props.description}</p>
                    {/* <Button></Button> */}

                    <div className="text-center">
                        <button className="btn btn-primary col-md-12" onClick={() => { this.likeAvengers(1) }}>Like&nbsp;
                            <span className="badge badge-light">{this.state.likeCount}</span>
                        </button>
                    </div>
                </div>
            </div >
        );
    }

    likeAvengers = (count) => {
        console.log("like clicked with: " + count);
        this.setState({
            likeCount: this.state.likeCount + 1
        });
    };

    renderMovies() {
        if (this.props.movies.length == 0) {
            return <p>No movies</p>
        } else {
            return this.props.movies.map(
                (movie, key) => <li key={key}>{movie}</li>
            );
        }

    }
}

export default Card;
