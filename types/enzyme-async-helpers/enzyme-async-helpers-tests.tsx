import * as React from 'react';
import { mount } from 'enzyme';
import { waitForElement, waitForProps, waitForState, Config } from "enzyme-async-helpers";

const component = mount(<div>component</div>);
const config: Config = {
    interval: 50,
    timeout: 2000,
    timeoutMessage: 'Timed out.',
    logStructureOnTimeout: true,
    logStructureOnSuccess: false
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
