import * as React from 'react';
import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';

export type UncontrolledProps<T = {}> = UncontrolledDropdownProps<T>;
export type UncontrolledButtonDropdownProps<T = {}> = UncontrolledProps<T>;

export type ButtonDropdownProps<T = {}> = DropdownProps<T>;

declare class ButtonDropdown<T = {[key: string]: any}> extends React.Component<ButtonDropdownProps<T>> {}
export default ButtonDropdown;
