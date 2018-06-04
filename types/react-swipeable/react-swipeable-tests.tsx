import * as React from 'react';
import Swipeable = require('react-swipeable');

class SampleComponent extends React.PureComponent<Swipeable.SwipeableProps> {
  private readonly handleSwiped: Swipeable.OnSwipedCallback = () => {};
  private readonly handleSwiping: Swipeable.OnSwipingCallback = () => {};
  private readonly handleSwipingUp: Swipeable.OnSwipingDirectionCallback = () => {};
  private readonly handleSwipingRight: Swipeable.OnSwipingDirectionCallback = () => {};
  private readonly handleSwipingDown: Swipeable.OnSwipingDirectionCallback = () => {};
  private readonly handleSwipingLeft: Swipeable.OnSwipingDirectionCallback = () => {};
  private readonly handleSwipedUp: Swipeable.OnSwipedDirectionCallback = () => {};
  private readonly handleSwipedRight: Swipeable.OnSwipedDirectionCallback = () => {};
  private readonly handleSwipedDown: Swipeable.OnSwipedDirectionCallback = () => {};
  private readonly handleSwipedLeft: Swipeable.OnSwipedDirectionCallback = () => {};
  private readonly handleTap: Swipeable.OnTapCallback = () => {};
  private readonly handleClick = () => {};

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
        disabled
        innerRef="swipe-ref"
        onClick={this.handleClick}
      >
        <div>
          This element can be swiped
        </div>
      </Swipeable>
    );
  }
}

class DivSwipeable extends Swipeable<HTMLDivElement> {}
const TestComponent: React.StatelessComponent = (_) => {
    const handleSwiped = (event: React.TouchEvent<HTMLDivElement>) => {};
    return (
        <DivSwipeable
            nodeName="div"
            onSwiped={handleSwiped}
        >
            <div>this is sample code.</div>
        </DivSwipeable>
    );
};
