import * as React from "react";

export = BodyClassName;

declare class BodyClassName extends React.Component<{ children?: React.ReactElement; className: string }> {
    static canUseDOM: boolean;
    static displayName: string;
    static peek(): any;
    static rewind(): any;
}
