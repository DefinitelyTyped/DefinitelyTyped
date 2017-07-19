import * as React from "react";

import Transition from 'react-overlays/lib/Transition';
import Portal from 'react-overlays/lib/Portal';
import Modal from 'react-overlays/lib/Modal';
import Position from 'react-overlays/lib/Position';
import Overlay from 'react-overlays/lib/Overlay';
import Affix from 'react-overlays/lib/Affix';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';

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
