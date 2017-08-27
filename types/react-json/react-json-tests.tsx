import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as Json from 'react-json';
import { Json } from "react-json";

let TestObject = {
    s: "Hello, world",
    b: true,
    n: 666,
    o: {
        s: "Hello, world",
        b: true,
        n: 666,
        o: {
            s: "Hello, world",
            b: true,
            n: 666,
        }
    }
};

export class TestComponent extends React.Component<{}, {}> {
    render(): JSX.Element {
        return <Json value={TestObject} onChange={val => console.log(val)}/>;
    }
}
