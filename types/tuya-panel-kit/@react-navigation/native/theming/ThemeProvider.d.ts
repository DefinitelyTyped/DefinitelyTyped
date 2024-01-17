import * as React from "react";
import type { Theme } from "../types";
// tslint:disable:interface-over-type-literal
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props = {
    value: Theme;
    children: React.ReactNode;
};
export default function ThemeProvider({ value, children }: Props): React.JSX.Element;
export {};
