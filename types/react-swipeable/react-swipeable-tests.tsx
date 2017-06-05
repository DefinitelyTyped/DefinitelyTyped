import * as React from 'react';
import * as Swipeable from 'react-swipeable';

class SampleComponent extends React.PureComponent<void, void> {
  private handleSwiped = () => {};
  private handleSwiping = () => {};
  private handleSwipingUp = () => {};
  private handleSwipingRight = () => {};
  private handleSwipingDown = () => {};
  private handleSwipingLeft = () => {};
  private handleSwipedUp = () => {};
  private handleSwipedRight = () => {};
  private handleSwipedDown = () => {};
  private handleSwipedLeft = () => {};
  private handleTap = () => {};
  private handleClick = () => {};

  render() {
    return (
      <Swipeable
        onSwiped={this.handleSwiped}
        onSwiping={this.handleSwiping}
        onSwipingUp={this.handleSwipingUp}
        onSwipingRight={this.handleSwipingRight}
        onSwipingDown={this.handleSwipingDown}
        onSwipingLeft={this.handleSwipingLeft}
        onSwipedUp={this.handleSwipedUp}
        onSwipedRight={this.handleSwipedRight}
        onSwipedDown={this.handleSwipedDown}
        onSwipedLeft={this.handleSwipedLeft}
        onTap={this.handleTap}
        flickThreshold={10}
        delta={10}
        preventDefaultTouchmoveEvent
        stopPropagation
        nodeName="swipe"
        trackMouse
        onClick={this.handleClick}
      >
        <div>
          This element can be swiped
        </div>
      </Swipeable>
    );
  }
}
