/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./react-fontawesome.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import FontAwesome = require('react-fontawesome');

class TestComponent extends React.Component<{}, {}> {

  render() {

    return (
      <FontAwesome
        className='super-crazy-colors'
        name="rocket"
        size="2x"
        spin
        style={
          { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }
        }
      />
    );
  }
}
