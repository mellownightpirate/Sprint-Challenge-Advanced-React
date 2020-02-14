import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';


class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryBar
        data={}
        // data accessor for x values
        x="player"
        // data accessor for y values
        y="country"
      />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);