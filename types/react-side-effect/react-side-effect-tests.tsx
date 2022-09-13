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

const DocumentTitleWithServerMapState = withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient,
    mapStateOnServer
)(DocumentTitle);

const testWithServerMapState = () => {
    const testComponent = () => (
        <DocumentTitleWithServerMapState title="Title" />
    );
    const peekedState:
        | ServerState
        | State = DocumentTitleWithServerMapState.peek();
    const rewindedState: ServerState = DocumentTitleWithServerMapState.rewind();
};

const DocumentTitleNotServer = withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient
)(DocumentTitle);

const testWithoutMapState = () => {
    const testComponent = () => <DocumentTitleNotServer title="asdf" />;
    const peekedState: State = DocumentTitleNotServer.peek();
    const rewindedState: State = DocumentTitleNotServer.rewind();
};

const testInvalidProp = () => (
    // @ts-expect-error
    <DocumentTitleServer notAValidProp="this should fail" />
);
