import * as React from "react";

interface Props {
  bar?: boolean;
}

export default class MySecondComponent extends React.Component<Props> {
  render() {
    return this.props.bar ? <div/> : null;
  }
}
