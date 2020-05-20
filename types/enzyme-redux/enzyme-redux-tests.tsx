import { mountWithState, mountWithStore, shallowWithState, shallowWithStore } from 'enzyme-redux';
import * as React from 'react';

const Component = () => <div>component</div>;
const shallowWithStateWrapper = shallowWithState(<Component />, {});
const shallowWithStoreWrapper = shallowWithStore(<Component />, {});

const mountWithStateWrapper = mountWithState(<Component />, {});
const mountWithStoreWrapper = mountWithStore(<Component />, {});
