/// <reference types="jasmine"/>

import React = require("react");

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toEqualJSX(element: Expected<T>): boolean;
            toIncludeJSX(element: Expected<T>): boolean;
        }
    }
}
