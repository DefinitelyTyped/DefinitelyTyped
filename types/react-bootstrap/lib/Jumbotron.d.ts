import * as React from 'react';

declare namespace Jumbotron {
    export interface JumbotronProps extends React.HTMLProps<Jumbotron> {
        componentClass?: React.ReactType;
    }
}
declare class Jumbotron extends React.Component<Jumbotron.JumbotronProps> { render(): React.ReactNode }
export = Jumbotron;
