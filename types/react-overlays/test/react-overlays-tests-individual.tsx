import * as React from "react";

import * as Portal from 'react-overlays/lib/Portal';
import * as Modal from 'react-overlays/lib/Modal';
import * as Position from 'react-overlays/lib/Position';
import Overlay = require('react-overlays/lib/Overlay');
import * as Affix from 'react-overlays/lib/Affix';
import AutoAffix = require('react-overlays/lib/AutoAffix');
import RootCloseWrapper = require('react-overlays/lib/RootCloseWrapper');

import { OverlayFade } from './react-overlays-tests-transition';

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

class TestOverlay extends React.Component<{}, {open: boolean}> {
  target: HTMLElement | null = null;
  state = {open: false};

  render(): JSX.Element {
    const { open } = this.state;

    return (
        <div>
            <button type="button"
                    ref={(ref) => this.target = ref}
                    onClick={() => this.setState({open: !open})}>Click me</button>

            <Overlay show={open}
                     rootClose={true}
                     target={() => this.target}
                     transition={OverlayFade}
                     onHide={() => this.setState({open: false})}
                     placement="bottom">
                <div>Popover content</div>
            </Overlay>
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
