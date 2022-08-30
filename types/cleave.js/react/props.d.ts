import Cleave = require('../');
import * as React from 'react';
import { CleaveOptions } from '../options';

export type ReactInstanceWithCleave = React.ReactInstance & Omit<Cleave, 'destroy'>;

export type InitHandler = (owner: ReactInstanceWithCleave) => void;

export interface ChangeEvent<T> extends React.ChangeEvent<T> {
    target: { rawValue: string } & EventTarget & T;
}

export type ChangeEventHandler<T = Element> = React.EventHandler<ChangeEvent<T>>;

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onInit?: InitHandler | undefined;
    options: CleaveOptions;
    htmlRef?: ((i: any) => void) | undefined;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}
