import ElmModule = require("react-elm-components/elm.js");
import React = require("react");
import Elm = require("react-elm-components");

function App() {
    return <Elm src={ElmModule.Elm.main} />;
}

function AppWithPorts() {
    return <Elm src={ElmModule.Elm.main} ports={(ports: Record<string, any>) => {}} />;
}

function AppWithFlags() {
    return <Elm src={ElmModule.Elm.main} flags={{ fakeUserId: "test-id" }} />;
}
