import * as React from "react";
import * as ReactDOM from "react-dom";
import FontAwesome = require('react-fontawesome');

class BasicTestComponent extends React.Component {
  render() {
    return (
      <FontAwesome
        className='super-crazy-colors'
        name="rocket"
        size="2x"
        spin
      />
    );
  }
}

class CSSTestComponent extends React.Component {
  render() {
    return (
      <FontAwesome
        name="rocket"
        style={{backgroundColor: 'red', color: 'blue'}}
      />
    );
  }
}
