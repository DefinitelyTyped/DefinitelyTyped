import * as React from "react";
import * as ReactDOM from "react-dom";
import FontAwesome = require('react-fontawesome');

class TestComponent extends React.Component {

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
