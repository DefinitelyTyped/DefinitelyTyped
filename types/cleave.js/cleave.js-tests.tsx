import * as React from "react";
import Cleave = require("cleave.js");
import CleaveReact = require("cleave.js/react");

const Example1 = () => {
    const cleave = new Cleave("#my-input", { phone: true });
    cleave.setPhoneRegionCode("AT");
    cleave.setRawValue("foo");
    const foo: string = cleave.getFormattedValue();
    const bar: string = cleave.getRawValue();
    cleave.destroy();
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
