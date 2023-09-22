import * as React from "react";

export interface RowProps {
    children: React.ReactNode;
    className?: string;
}

declare const Row: React.FunctionComponent<RowProps> & {
    displayName: "Row";
};

export default Row;
