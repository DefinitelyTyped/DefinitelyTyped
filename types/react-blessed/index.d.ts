// Type definitions for react-blessed 0.7
// Project: https://github.com/yomguithereal/react-blessed#readme
// Definitions by: Century Guo <https://github.com/guoshencheng>
//                 NickHackman <https://github.com/NickHackman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

/// <reference path="./react.d.ts" />

import * as React from 'react';
import { Widgets, screen } from 'blessed';
export type Callback = () => void | null | undefined;
export type renderer = (c: JSX.Element, s: Widgets.Screen, callback?: Callback) => React.Component<any, any> | null;
export function render(c: JSX.Element, s: Widgets.Screen, callback?: Callback): React.Component<any, any> | null;
export function createBlessedRenderer(bls: any): renderer;
