import * as React from "react";
import type { Theme } from "../types";
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
declare type Props = {
    value: Theme;
    children: React.ReactNode;
};
export default function ThemeProvider({ value, children }: Props): JSX.Element;
export {};
