// Type definitions for react-tether 0.5
// Project: https://github.com/souporserious/react-tether
// Definitions by: Ryan Price <https://github.com/ryprice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export default TetherComponent;
export as namespace ReactTether;

import * as React from 'react';
import * as Tether from 'tether';

declare class TetherComponent extends React.Component<ReactTether.TetherComponentProps> { }

declare namespace ReactTether {
    interface TetherComponentProps extends React.Props<TetherComponent>, Tether.ITetherOptions {
        renderElementTag?: string;
        renderElementTo?: string | { appendChild(element: HTMLElement): void };
        id?: string;
        className?: string;
        style?: React.CSSProperties;
        onUpdate?(): void;
        onRepositioned?(): void;
    }
}
