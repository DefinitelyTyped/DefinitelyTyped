// Type definitions for non-npm package aws-sdk2-types 0.0
// Project: https://aws.amazon.com/blogs/developer/why-and-how-you-should-use-aws-sdk-for-javascript-v3-on-node-js-18
// Definitions by: Amazon.com, Inc. or its affiliates <https://github.com/aws>
//                 Nathan Shively-Sanders <https://github.com/sandersn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { GlobalConfigInstance } from './lib/config';

export * from './clients/all';
export * from './lib/core';
export var config: GlobalConfigInstance;

export as namespace AWS;
