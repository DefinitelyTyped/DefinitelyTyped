import React = require("react");

interface Props {
    text: string;
}

export const AComponent: React.FC<Props> = ({ text }) => <span>{text}</span>;
