import * as React from "react";
import { CleaveOptions } from "../options";

export type InitHandler = (owner: React.ReactInstance) => void;

export interface ChangeEvent<T> extends React.ChangeEvent<T> {
    target: { rawValue: string } & EventTarget & T;
}

export type ChangeEventHandler<T = Element> = React.EventHandler<ChangeEvent<T>>;

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onInit?: InitHandler;
    options: CleaveOptions;
    htmlRef?: (i: any) => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
