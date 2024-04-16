import React = require("react");
import Elm = require("react-elm-components");

interface ElmProgram {
    [x: string]: Elm.Elm18Node | Elm.Elm19Node;
}

// Mock the output of an Elm 0.19.x-compiled program, e.g. `elm make Main.elm --output=elm.js`
const Elm19Mock: ElmProgram = { main: { init: ({ node, flags }) => {} } };

function App() {
    return <Elm src={Elm19Mock.main} />;
}

function AppWithPorts() {
    return (
        <Elm
            src={Elm19Mock.main}
            ports={(ports: Record<string, Elm.SenderPort<{ value: number }> | Elm.ReceiverPort<string>>) => {}}
        />
    );
}

function AppWithFlags() {
    return <Elm src={Elm19Mock.main} flags={{ fakeUserId: "test-id" }} />;
}

// Mock the output of an Elm 0.18.x-compiled program, e.g. `elm-make Main.elm --output=elm.js`
const Elm18Mock: ElmProgram = { main: { embed: (node, flags) => {} } };

function AppWithElm18() {
    return <Elm src={Elm18Mock.main} />;
}

function AppWithElm18AndPorts() {
    return <Elm src={Elm18Mock.main} ports={(ports: Record<string, any>) => {}} />;
}

function AppWithElm18AndFlags() {
    return <Elm src={Elm18Mock.main} flags={{ fakeUserId: "test-id" }} />;
}
