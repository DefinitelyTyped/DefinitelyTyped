import * as React from "react";

import * as Transition from 'react-overlays/lib/Transition';
import * as Portal from 'react-overlays/lib/Portal';
import * as Modal from 'react-overlays/lib/Modal';
import * as Position from 'react-overlays/lib/Position';
import * as Overlay from 'react-overlays/lib/Overlay';
import * as Affix from 'react-overlays/lib/Affix';
import * as AutoAffix from 'react-overlays/lib/AutoAffix';
import * as RootCloseWrapper from 'react-overlays/lib/RootCloseWrapper';

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
