import AriaModal from 'react-aria-modal';
import * as React from 'react';
import { render } from 'react-dom';

declare const appContainer: HTMLElement;

const onExit = () => {};

render(
    <AriaModal onExit={onExit} underlayClickExits>
        Hello world
    </AriaModal>,
    appContainer
);
