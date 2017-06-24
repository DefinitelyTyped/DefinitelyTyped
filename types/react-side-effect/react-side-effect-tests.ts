import * as React from "react";
import * as withSideEffect from "react-side-effect";

interface DocumentTitleProps {
    title: string
}

class DocumentTitle extends React.Component<DocumentTitleProps> {
  public render() {
    if (this.props.children) {
      return React.Children.only(this.props.children);
    } else {
      return null;
    }
  }
}

function reducePropsToState(propsList: any[]) {
  var innermostProps = propsList[propsList.length - 1];
  if (innermostProps) {
    return innermostProps.title;
  }
}

function handleStateChangeOnClient(title: string) {
  document.title = title || "";
}

let DocumentTitleWithSideEffects = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);

export default DocumentTitleWithSideEffects;
