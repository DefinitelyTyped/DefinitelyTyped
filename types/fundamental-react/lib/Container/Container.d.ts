import * as React from "react";

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    /** Set to true to remove the margins between the panels */
    noGap?: boolean;
}

declare const Container: React.FunctionComponent<ContainerProps> & {
    displayName: "Container";
};

export default Container;
