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
