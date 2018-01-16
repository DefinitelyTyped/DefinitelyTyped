import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const wrapper = shallow(<strong>Hello World!</strong>);
const result: object = toJson(wrapper);
