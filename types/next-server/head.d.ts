import * as React from "react";

export function defaultHead(className?: string): JSX.Element[];
export default class Head extends React.Component {
    static canUseDOM: boolean;
    static peek(): Array<React.ReactElement>;
    static rewind(): Array<React.ReactElement>;
}
