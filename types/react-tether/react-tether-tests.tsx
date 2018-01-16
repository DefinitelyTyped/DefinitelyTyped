import TetherComponent from "react-tether";
import * as React from "react";

const ReactTetherAllOptions: JSX.Element =
    <TetherComponent
        attachment="bottom middle"
        id="id123"
        className="react-tether"
        onUpdate={() => {}}
        onRepositioned={() => {}}
        renderElementTag="div"
        renderElementTo=".container"
    />;

const ReactTetherRequiredOptions: JSX.Element =
    <TetherComponent attachment="bottom middle" />;
