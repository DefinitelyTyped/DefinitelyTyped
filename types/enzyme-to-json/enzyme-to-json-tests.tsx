import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as React from "react";

const wrapper = shallow(<strong>Hello World!</strong>);
const result: object = toJson(wrapper);
