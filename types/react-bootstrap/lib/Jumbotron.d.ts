import * as React from 'react';

declare namespace Jumbotron {
    export interface JumbotronProps extends React.HTMLProps<Jumbotron> {
        componentClass?: React.ElementType | undefined;
    }
}
declare class Jumbotron extends React.Component<Jumbotron.JumbotronProps> { }
export = Jumbotron;
