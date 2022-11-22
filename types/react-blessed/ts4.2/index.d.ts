/// <reference path="./react.d.ts" />

import * as React from "react";
import { Widgets, screen } from "blessed";
export type Callback = () => void | null | undefined;
export type renderer = (c: JSX.Element, s: Widgets.Screen, callback?: Callback) => React.Component<any, any> | null;
export function render(c: JSX.Element, s: Widgets.Screen, callback?: Callback): React.Component<any, any> | null;
export function createBlessedRenderer(bls: any): renderer;
