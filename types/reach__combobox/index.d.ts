// Type definitions for @reach/combobox 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface ComboboxProps extends Omit<React.HTMLProps<HTMLElement>, 'onSelect'> {
    children?: React.ReactNode;
    onSelect?: (value: string) => void;
    openOnFocus?: boolean;
    as?: string;
}

export interface ComboboxInputProps extends React.HTMLProps<HTMLElement> {
    selectOnClick?: boolean;
    autocomplete?: boolean;
    value?: string;
    as?: string;
}

export interface ComboboxPopoverProps extends React.HTMLProps<HTMLElement> {
    portal?: boolean;
}

export interface ComboboxListProps extends React.HTMLProps<HTMLElement> {
    persistSelection?: boolean;
    as?: string;
}

export interface ComboboxOptionProps extends React.HTMLProps<HTMLElement> {
    children?: React.ReactNode;
    value: string;
}

export const Combobox: React.FC<ComboboxProps>;
export const ComboboxInput: React.FC<ComboboxInputProps>;
export const ComboboxPopover: React.FC<ComboboxPopoverProps>;
export const ComboboxList: React.FC<ComboboxListProps>;
export const ComboboxOption: React.FC<ComboboxOptionProps>;
export const ComboboxOptionText: React.FC;
