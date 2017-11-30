import * as React from 'react';
import { Doughnut } from 'react-chartjs-2';

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
      '#CCC',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }]
});

export default class DynamicDoughnutExample extends React.Component {
  getInitialState() {
    return getState();
  }

  componentWillMount() {
    setInterval(() => {
      this.setState(getState());
    }, 5000);
  }

  render() {
    return (
      <div>
        <h2>Dynamically refreshed Doughnut Example</h2>
        <Doughnut data={this.state} />
      </div>
    );
  }
}
