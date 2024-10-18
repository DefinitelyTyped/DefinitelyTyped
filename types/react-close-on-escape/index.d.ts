import * as React from "react";

export interface CloseOnEscapeProps {
    /**
     * Callback triggered by pressing ESC
     */
    onEscape(): void;
}

export default class CloseOnEscape extends React.Component<CloseOnEscapeProps> {}
