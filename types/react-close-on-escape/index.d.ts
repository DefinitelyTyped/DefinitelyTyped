import React = require("react");

export interface CloseOnEscapeProps {
    /**
     * Callback triggered by pressing ESC
     */
    onEscape(): void;
}

export default class CloseOnEscape extends React.Component<CloseOnEscapeProps> {}
