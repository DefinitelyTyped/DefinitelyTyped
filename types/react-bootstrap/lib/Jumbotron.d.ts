import * as React from 'react';

interface JumbotronProps extends React.HTMLProps<Jumbotron> {
  componentClass?: React.ReactType;
}

export default class Jumbotron extends React.Component<JumbotronProps> { }
