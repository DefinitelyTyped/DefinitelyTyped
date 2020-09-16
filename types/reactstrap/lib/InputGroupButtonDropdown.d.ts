import * as React from 'react';
import { DropdownProps } from './Dropdown';

export interface InputGroupButtonDropdownProps extends DropdownProps {
    addonType: 'prepend' | 'append';
}

declare class InputGroupButtonDropdown<T = {[key: string]: any}> extends React.Component<InputGroupButtonDropdownProps> {}
export default InputGroupButtonDropdown;
