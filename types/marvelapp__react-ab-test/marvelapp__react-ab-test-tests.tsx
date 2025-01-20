import { Experiment, Variant } from "marvelapp__react-ab-test";
import * as React from "react";

const TestComponent = (
    <div>
        <Experiment name="My Example">
            <Variant name="A">
                <div>Version A</div>
            </Variant>
            <Variant name="B">
                <div>Version B</div>
            </Variant>
        </Experiment>
    </div>
);
