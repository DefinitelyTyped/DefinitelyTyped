import * as React from "react";

export interface Props {
    innerRef: React.RefCallback<HTMLElement>;
    children: React.ReactElement;
}

export default class NodeResolver extends React.Component<Props> {}
