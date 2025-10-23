import React = require("react");

export interface RowProps {
    children: React.ReactNode;
    className?: string;
}

declare const Row: React.FunctionComponent<RowProps> & {
    displayName: "Row";
};

export default Row;
