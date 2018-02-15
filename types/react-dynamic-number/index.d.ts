// Type definitions for react-dynamic-number 1.7
// Project: https://github.com/uhlryk/react-dynamic-number
// Definitions by: Eugene Rodin <https://github.com/eugrdn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

/**
 * remove Diff & Omit when in will be placed in TS from scratch
 */
export type Diff<T extends string, U extends string> = ({[P in T]: P} & {[P in U]: never} & {[x: string]: never})[T];
export type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};

export type BaseInputProps = Partial<
  Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'ref' | 'value' | 'onChange' | 'placeholder'
  >
>;

export interface DynamicNumberProps extends BaseInputProps {
  value?: number | '';
  separator?: '.' | ',';
  thousand?: boolean | ' ';
  integer?: number;
  fraction?: number;
  positive?: boolean;
  negative?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, modelValue: number, viewValue: string) => void;
}

export default class DynamicNumber extends React.Component<DynamicNumberProps> {}
