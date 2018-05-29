import * as React from 'react';
import { DropdownProps } from './Dropdown';

export type InputGroupButtonDropdownProps<T = {}> = DropdownProps & {
    addonType: 'prepend' | 'append';
} & T;

declare class InputGroupButtonDropdown<T = {}> extends React.Component<InputGroupButtonDropdownProps<T>> {}
export default InputGroupButtonDropdown;
