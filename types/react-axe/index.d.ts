// Type definitions for react-axe 3.1
// Project: https://github.com/dequelabs/react-axe
// Definitions by: Akshay Karthik <https://github.com/akshaykarthik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Spec } from "axe-core";

export = axe;

declare function axe(
    react: typeof React,
    reactDOM: typeof ReactDOM,
    timeout: number,
    config?: axe.ReactAxeConfig
): void;

declare namespace axe {
    type ReactAxeConfig = Spec;
}
