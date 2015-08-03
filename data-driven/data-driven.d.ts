﻿// Type definitions for data-driven.js
// Project: https://github.com/fluentsoftware/data-driven
// Definitions by: Adam Babcock <https://github.com/mrhen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "data-driven" {
	function data_driven<T>(data:T[], callback:()=>any):any;
    export = data_driven
}
