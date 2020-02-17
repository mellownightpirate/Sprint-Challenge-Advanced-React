import React, { Component } from "react";

class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(result => {
        this.setState({ players: result });
      })
      .catch(err => console.log("Error fetching players.", err));
  }

  render() {
    return (
      <div>
        <h2 data-testid="heading">
          Women's World Cup players ranked by search interest from Google
          Trends, June-July 2019, worldwide:
        </h2>
        <hr></hr>
        {this.state.players.map(item => (
          <p key={item.id}>
            {" "}
            {item.id + 1}. {item.name}{" "}
          </p>
        ))}
      </div>
    );
  }
}

export default PlayerList;
