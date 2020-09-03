import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <div className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
      </div>
    )
  }
}

export default StorePicker;