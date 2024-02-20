import { Elm as Main } from "react-elm-components/elm.js";
import * as React from "react";
import Elm from "react-elm-components";

function App() {
    return <Elm src={Main.main} />;
}

function AppWithPorts() {
    return <Elm src={Main.main} ports={(ports) => {}} />;
}

function AppWithFlags() {
    return <Elm src={Main.main} flags={{ fakeUserId: "test-id" }} />;
}
