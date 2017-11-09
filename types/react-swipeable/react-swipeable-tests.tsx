import * as React from 'react';
import * as Swipeable from 'react-swipeable';

class SampleComponent extends React.PureComponent<Swipeable.SwipeableProps> {
  private handleSwiped: Swipeable.OnSwipedCallback = () => {};
  private handleSwiping: Swipeable.OnSwipingCallback = () => {};
  private handleSwipingUp: Swipeable.OnSwipingDirectionCallback = () => {};
  private handleSwipingRight: Swipeable.OnSwipingDirectionCallback = () => {};
  private handleSwipingDown: Swipeable.OnSwipingDirectionCallback = () => {};
  private handleSwipingLeft: Swipeable.OnSwipingDirectionCallback = () => {};
  private handleSwipedUp: Swipeable.OnSwipedDirectionCallback = () => {};
  private handleSwipedRight: Swipeable.OnSwipedDirectionCallback = () => {};
  private handleSwipedDown: Swipeable.OnSwipedDirectionCallback = () => {};
  private handleSwipedLeft: Swipeable.OnSwipedDirectionCallback = () => {};
  private handleTap: Swipeable.OnTapCallback = () => {};
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
