// Type definitions for react-node-resolver 2.0
// Project: https://github.com/jossmac/react-node-resolver#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface Props {
    innerRef: React.RefCallback<HTMLElement>;
    children: React.ReactElement;
}

export default class NodeResolver extends React.Component<Props> {}
