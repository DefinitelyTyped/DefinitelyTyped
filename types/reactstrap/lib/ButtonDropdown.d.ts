import * as React from 'react';
import { UncontrolledDropdownProps, DropdownProps } from './Dropdown';
export { UncontrolledDropdownProps as UncontrolledButtonDropdownProps, DropdownProps as ButtonDropdownProps };

declare class ButtonDropdown<T = {[key: string]: any}> extends React.Component<DropdownProps> {}
export default ButtonDropdown;
