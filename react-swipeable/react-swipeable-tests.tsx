/// <reference path="../react/react.d.ts" />
/// <reference path="react-swipeable.d.ts" />

import Swipeable = require('react-swipeable');
import React = require('react');

var SampleComponent = React.createClass({
  render: function () {
    return (
      <Swipeable
        onSwiping={this.swiping}
        onSwipingUp={this.swipingUp}
        onSwipingRight={this.swipingRight}
        onSwipingDown={this.swipingDown}
        onSwipingLeft={this.swipingLeft}
        onSwipedUp={this.swipedUp}
        onSwipedRight={this.swipedRight}
        onSwipedDown={this.swipedDown}
        onSwipedLeft={this.swipedLeft}
        onSwiped={this.handleSwipeAction}
        preventDefaultTouchmoveEvent={false}
        nodeName={"swipe"}>
        <div>
          This element can be swiped
        </div>
      </Swipeable>
    )
  }
})
