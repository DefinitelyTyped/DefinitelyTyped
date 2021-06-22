// Type definitions for react-close-on-escape 3.0
// Project: https://github.com/conorhastings/react-close-on-escape#readme
// Definitions by: Robert Baruck <https://github.com/JamesAlias>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface CloseOnEscapeProps {
    /**
     * Callback triggered by pressing ESC
     */
    onEscape(): void;
}

export default class CloseOnEscape extends React.Component<CloseOnEscapeProps> {}
