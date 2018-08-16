import * as React from "react";

export function defaultHead(): JSX.Element[];
export default class extends React.Component {
    static canUseDOM: boolean;
    static peek(): Array<React.ReactElement<any>>;
    static rewind(): Array<React.ReactElement<any>>;
}
