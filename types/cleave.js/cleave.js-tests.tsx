import * as React from "react";
import Cleave = require("cleave.js");
import CleaveReact = require("cleave.js/react");

const Example1 = () => {
    Cleave("#my-input", { phone: true });
};

const ExampleReact1 = (props: any) => {
    return (
        <CleaveReact
            value="test"
            className="form-control"
            options={{ phone: true }}
        />
    );
};
