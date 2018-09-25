import * as React from "react";

export function defaultHead(): JSX.Element[];
export default class Head extends React.Component {
    static canUseDOM: boolean;
    static peek(): React.ReactElement<any>[];
    static rewind(): React.ReactElement<any>[];
}
