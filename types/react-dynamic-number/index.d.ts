// Type definitions for react-dynamic-number 1.7
// Project: https://github.com/uhlryk/react-dynamic-number
// Definitions by: Eugene Rodin <https://github.com/eugrdn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

/**
 * remove Diff & Omit when in will be placed in TS from scratch
 */
type Diff<T extends string, U extends string> = ({[P in T]: P} & {[P in U]: never} & {[x: string]: never})[T];
type Omit<T, K extends keyof T> = {[P in Diff<keyof T, K>]: T[P]};

interface OmittedFields {
  ref: any;
  value: any;
  onChange: any;
  placeholder: any;
}

type BaseInputProps = Partial<
  Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof OmittedFields>
>;

type Value = number | '';
type Separator = '.' | ',';
type Thousand = boolean | ' ';

export interface DynamicNumberProps extends BaseInputProps {
  value?: Value;
  separator?: Separator;
  thousand?: Thousand;
  integer?: number;
  fraction?: number;
  positive?: boolean;
  negative?: boolean;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, modelValue: number, viewValue: string) => void;
}

declare class DynamicNumber extends React.Component<DynamicNumberProps> {}
export default DynamicNumber;
