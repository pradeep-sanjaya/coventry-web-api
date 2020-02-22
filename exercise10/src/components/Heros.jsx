import React from "react";
import axios from "axios"
import Hero from "./Hero";

class Heros extends React.Component {

    state = {
        heros: [
        ]
    };

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container" >
                <div className="row">
                    {this.state.heros.map((hero, key) => {
                        return (
                            <div className="col-md-4" key={key}>
                                <Hero hero={hero} ></Hero>
                            </div>
                        );
                    })
                    }
                </div>
            </div >
        );
    }

    async componentDidMount() {
        let { data } = await axios.get("http://localhost:8080/api/heros");

        let heros = data.map(hero => {
            return ({
                id: hero._id,
                name: hero.name,
                likeCount: hero.likeCount
            });
        });

        this.setState({ heros: heros });
    }

}

export default Heros;