import * as React from 'react';

declare class Jumbotron extends React.Component<JumbotronProps> { }
declare namespace Jumbotron { }
export = Jumbotron

interface JumbotronProps extends React.HTMLProps<Jumbotron> {
  componentClass?: React.ReactType;
}
