import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Jumbotron {
    export interface JumbotronProps extends ReactDOM.HTMLProps<Jumbotron> {
        componentClass?: React.ReactType;
    }
}
declare class Jumbotron extends React.Component<Jumbotron.JumbotronProps> { }
export = Jumbotron;
