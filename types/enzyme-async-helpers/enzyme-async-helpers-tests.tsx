import { mount } from "enzyme";
import { Config, waitForElement, waitForProps, waitForState } from "enzyme-async-helpers";
import * as React from "react";

const component = mount(<div>component</div>);
const config: Config = {
    interval: 50,
    timeout: 2000,
    timeoutMessage: "Timed out.",
    logStructureOnTimeout: true,
    logStructureOnSuccess: false,
};

// $ExpectType Promise<void>
waitForElement(component, "selector");
// $ExpectType Promise<void>
waitForElement(component, "selector", config);

// $ExpectType Promise<void>
waitForProps(component, (props) => true);
// $ExpectType Promise<void>
waitForProps(component, (props) => true, config);

// $ExpectType Promise<void>
waitForState(component, (state) => true);
// $ExpectType Promise<void>
waitForState(component, (state) => true, config);
