import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
      // another way instead of using constructor
      // state = {
      //   fishes: {},
      //   order: {}
      // };
    }
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = firebase.syncstate(`${params.storeId}/fishes`,{
      context: this,
      state: 'fishes'
    });
  }

  addFish = fish => {
    // take a copy of the existing state
    const fishes = {...this.state.fishes};
    // add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // set the new fishes object to state
    this.setState({
      fishes
    })
  };

  loadSampleFishes = () => {
    this.setState({ 
      fishes: sampleFishes
    })
  };

  addToOrder = (key) => {
    // take a copy of state
    const order = {...this.state.order};
    // either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    // call setState to update our state object
    this.setState({
      order
    })
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Wes is cool"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish 
              key={key} 
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order} 
        />
        <Inventory 
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  };
}

export default App;