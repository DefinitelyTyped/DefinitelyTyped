import { Component } from "react";

export interface ResizerProps {
    className?: string | undefined;
    disabled?: boolean | undefined;
    minWidth?: number | undefined;
}

export default class ColumnResizer extends Component<ResizerProps> {}
