import * as React from "react";

interface Props {
  foo: boolean;
}

export default class MyComponent extends React.Component<Props> {
  render() {
    return this.props.foo ? <div/> : null;
  }
}
