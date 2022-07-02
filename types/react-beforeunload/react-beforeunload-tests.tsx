import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useBeforeunload, Beforeunload } from 'react-beforeunload';

function AppWithNoopHook() {
    useBeforeunload();

    return <h1>AppWithDialogBoxHook</h1>;
}

function AppWithDialogBoxHook() {
    useBeforeunload(event => event.preventDefault());

    return <h1>AppWithDialogBoxHook</h1>;
}

function AppWithCustomMessageHook() {
    useBeforeunload(() => "You'll lose your data!");

    return <h1>AppWithCustomMessageHook</h1>;
}

function AppWithDialogBoxComponent() {
    return <Beforeunload onBeforeunload={event => event.preventDefault()} />;
}

function AppWithCustomMessageComponent() {
    return <Beforeunload onBeforeunload={() => "You'll lose your data!"} />;
}

function AppWithDialogBoxWithChildrenComponent() {
    return (
        <Beforeunload onBeforeunload={event => event.preventDefault()}>
            <h1>AppWithCustomMessageHook</h1>
        </Beforeunload>
    );
}

function AppWithCustomMessageWithChildrenComponent() {
    return (
        <Beforeunload onBeforeunload={() => "You'll lose your data!"}>
            <h1>AppWithCustomMessageHook</h1>
        </Beforeunload>
    );
}

function App() {
    return (
        <>
            <AppWithDialogBoxHook />
            <AppWithCustomMessageHook />
            <AppWithDialogBoxComponent />
            <AppWithCustomMessageComponent />
            <AppWithDialogBoxWithChildrenComponent />
            <AppWithCustomMessageWithChildrenComponent />
        </>
    );
}
ReactDOM.render(<App />, document.getElementById('app'));
