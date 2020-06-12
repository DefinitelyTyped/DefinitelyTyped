// Type definitions for react-blessed 0.3
// Project: https://github.com/yomguithereal/react-blessed#readme
// Definitions by: Century Guo <https://github.com/guoshencheng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference path="./react.d.ts" />

import * as React from 'react';
import { Widgets, screen } from 'blessed';
export type Callback = () => void | null | undefined;
export type renderer = (
  c: JSX.Element, s: Widgets.Screen, callback?: Callback,
) => React.Component<any, any> | null;
export function render(
  c: JSX.Element, s: Widgets.Screen, callback?: Callback
): React.Component<any, any> | null;
export function createBlessedRenderer(bls: any): renderer;
