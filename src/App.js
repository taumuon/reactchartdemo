import React, { Component } from 'react';
import './App.css';
import MyChart from './MyChart';

  function generateSeries() {
    var d = [];
    for (var i = 0; i < 10; ++i) {
      d.push({
        x: i, y: Math.random() * 2.0 * i
      });
    }

    return d;
  }

class App extends Component {
  
  constructor()  {
    super();

    var d = generateSeries();

    this.state = {
      seriesdata: d
    };

    this._interval = null;
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      var d = generateSeries();

      this.setState( { seriesdata: d });
    }, 2000);
  }

  componentWillUnmount(){
    clearInterval(this._interval);
  }

  render() {
    return (
      <div className="App">
        <MyChart chartdata={this.state.seriesdata}/>
      </div>
    );
  }
}

export default App;
