import * as React from "react";

import {Transition, Portal, Modal, Position, Overlay, Affix, AutoAffix} from "react-overlays";
import * as RootCloseWrapper from "react-overlays/lib/RootCloseWrapper";

function testTransition() {
  return (
    <Transition
      in={true}
      timeout={100}
      className='fade'
      enteredClassName='in'
      enteringClassName='in'
    >
      <div>Test</div>
    </Transition>
  );
}

class TestAffix extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <AutoAffix viewportOffsetTop={15} container={this}>
          <div>Test</div>
        </AutoAffix>
      </div>
    );
  }
}

class TestRootCloseWrapper extends React.Component {
  handleRootClose = () => { };
  render() {
    return (
      <RootCloseWrapper onRootClose={this.handleRootClose}
                        disabled={false}
                        event="click">
        <div>Test</div>
      </RootCloseWrapper>
    );
  }
}
