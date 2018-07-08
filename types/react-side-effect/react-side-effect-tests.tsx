import * as React from "react";
import withSideEffect = require("react-side-effect");

interface DocumentTitleProps {
    title: string;
}

type State = string | undefined;

const DocumentTitle = () => null;

function reducePropsToState(propsList: DocumentTitleProps[]): State {
    const innermostProps = propsList[propsList.length - 1];
    if (innermostProps) {
        return innermostProps.title;
    }
}

function handleStateChangeOnClient(title: State) {
    document.title = title || "";
}

const DocumentTitleWithSideEffects = withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient
)(DocumentTitle);

const testComponent = () => <DocumentTitleWithSideEffects title="Title" />;

const otherTestComponent = () =>
    // $ExpectError
    <DocumentTitleWithSideEffects notAValidProp="this should fail" />;

export default DocumentTitleWithSideEffects;
