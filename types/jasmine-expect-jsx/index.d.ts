/// <reference types="jasmine"/>

import * as React from "react";

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toEqualJSX(element: Expected<T>): boolean;
            toIncludeJSX(element: Expected<T>): boolean;
        }
    }
}
