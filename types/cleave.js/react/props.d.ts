import * as React from "react";
import * as ReactDOM from "react-dom";
import { CleaveOptions } from "../options";

export type InitHandler = (owner: React.ReactInstance) => void;

export interface ChangeEvent<T> extends ReactDOM.ChangeEvent<T> {
    target: { rawValue: string } & EventTarget & T;
}

export type ChangeEventHandler<T = Element> = ReactDOM.EventHandler<ChangeEvent<T>>;

export interface Props extends ReactDOM.InputHTMLAttributes<HTMLInputElement> {
    onInit?: InitHandler;
    options: CleaveOptions;
    htmlRef?: (i: any) => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
