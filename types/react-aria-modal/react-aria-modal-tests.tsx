import AriaModal from 'react-aria-modal';
import * as React from 'react';
import { render } from 'react-dom';

declare const appContainer: HTMLElement;

const onExit = () => {};

render(
    <AriaModal onExit={onExit} titleId="describedby" underlayClickExits>
        <p id="describedby">Hello world</p>
    </AriaModal>,
    appContainer
);

const DisplacedModal = AriaModal.renderTo('#some-id');

render(
    <DisplacedModal onExit={onExit} titleId="describedby" underlayClickExits>
        <p id="describedby">Hello world</p>
    </DisplacedModal>,
    appContainer
);

render(
     <AriaModal
        onExit={() => {}}
        alert={true}
        focusDialog={true}
        titleText='A top modal'
        underlayClickExits={false}
        verticallyCenter={true}
        underlayColor={false}
      >
          <div>Hello</div>
      </AriaModal>,
      appContainer
);

const AriaModalOnExitBasic = (
    <AriaModal
        titleText="test"
        onExit={e => {
            e.stopPropagation();
        }}
    />
);

const AriaModalOnExitWithMouse = (
    <AriaModal
        titleText="test"
        onExit={(e: React.MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
            const clientX = e.clientX;
        }}
    />
);

const AriaModalOnExitWithKeyboard = (
    <AriaModal
        titleText="test"
        onExit={(e: React.KeyboardEvent) => {
            e.stopPropagation();
            e.preventDefault();
            const keyCode = e.code;
        }}
    />
);
