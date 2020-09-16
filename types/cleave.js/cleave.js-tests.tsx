import * as React from "react";
import Cleave = require("cleave.js");
import CleaveReact = require("cleave.js/react");
import { Props, ChangeEvent } from "cleave.js/react/props";

const ExampleSelector1 = () => {
    const cleave = new Cleave("#my-input", { phone: true });
    cleave.setPhoneRegionCode("AT");
    cleave.setRawValue("foo");
    const foo: string = cleave.getFormattedValue();
    const bar: string = cleave.getRawValue();
    cleave.destroy();
};

const ExampleElement1 = () => {
    const input: HTMLElement = new HTMLElement();

    const cleave = new Cleave(input, { date: true });
    cleave.setRawValue("2001/01/01");
    const formattedDate: string = cleave.getISOFormatDate();
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

const ExampleReact2 = (props: Props) => {
    return (
        <CleaveReact
            value="test"
            className="form-control"
            {...props}
            options={{ phone: true }}
        />
    );
};

const ExampleReact3 = (props: Props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        return e.target.rawValue;
    };
    return (
        <CleaveReact
            value="test"
            className="form-control"
            options={{ date: true }}
            onChange={handleChange}
        />
    );
};
