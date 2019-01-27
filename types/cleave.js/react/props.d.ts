import * as React from "react";
import { CleaveOptions } from "../options";

export type InitHandler = (owner: React.ReactInstance) => void;

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onInit?: InitHandler;
    options: CleaveOptions;
    htmlRef?: (i: any) => void;
}
