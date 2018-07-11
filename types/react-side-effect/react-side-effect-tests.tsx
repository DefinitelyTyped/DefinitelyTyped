import * as React from "react";
import withSideEffect = require("react-side-effect");

interface DocumentTitleProps {
    title: string;
}

type State = string | undefined;

interface ServerState {
    innerState: State;
}

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

const mapStateOnServer = (state: State): ServerState => ({ innerState: state });

const DocumentTitleServer = withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient,
    mapStateOnServer
)(DocumentTitle);

const testServer = () => {
    const testComponent = () => <DocumentTitleServer title="Title" />;
    const peekedState: ServerState = DocumentTitleServer.peek();
    const rewindedState: State = DocumentTitleServer.rewind();
};

const DocumentTitleNotServer = withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient
)(DocumentTitle);

const testNotServer = () => {
    const testComponent = () => <DocumentTitleNotServer title="asdf" />;
    const peekedState: State = DocumentTitleNotServer.peek();
    const rewindedState: State = DocumentTitleNotServer.rewind();
};

const testInvalidProp = () => (
    // $ExpectError
    <DocumentTitleServer notAValidProp="this should fail" />
);
