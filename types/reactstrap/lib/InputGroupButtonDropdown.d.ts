import { DropdownProps } from './Dropdown';

export interface InputGroupButtonDropdownProps extends DropdownProps {
    addonType: 'prepend' | 'append';
}

declare const InputGroupButtonDropdown: React.StatelessComponent<InputGroupButtonDropdownProps>;
export default InputGroupButtonDropdown;
