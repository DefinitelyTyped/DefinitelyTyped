import Appbar from './lib/react/appbar';
import Button from './lib/react/button';
import Checkbox from './lib/react/checkbox';
import Col from './lib/react/col';
import Container from './lib/react/container';
import Divider from './lib/react/divider';
import Dropdown from './lib/react/dropdown';
import DropdownItem from './lib/react/dropdown-item';
import Form from './lib/react/form';
import Input from './lib/react/input';
import Option from './lib/react/option';
import Panel from './lib/react/panel';
import Radio from './lib/react/radio';
import Row from './lib/react/row';
import Select from './lib/react/select';
import Tab from './lib/react/tab';
import Tabs from './lib/react/tabs';
import Textarea from './lib/react/textarea';

export {
    Appbar,
    Button,
    Checkbox,
    Col,
    Container,
    Divider,
    Dropdown,
    DropdownItem,
    Form,
    Input,
    Option,
    Panel,
    Radio,
    Row,
    Select,
    Tab,
    Tabs,
    Textarea
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: string | undefined;
    variant?: string | undefined;
}

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string | undefined;
    label?: React.ReactNode | undefined;
    autoFocus?: boolean | undefined;
    checked?: boolean | undefined;
    disabled?: boolean | undefined;
    form?: string | undefined;
    required?: boolean | undefined;
    value?: string | string[] | number | undefined;
}

export interface ColProps extends DivProps {
    xs?: number | undefined;
    sm?: number | undefined;
    md?: number | undefined;
    lg?: number | undefined;
    xl?: number | undefined;
    'xs-offset'?: number | undefined;
    'sm-offset'?: number | undefined;
    'md-offset'?: number | undefined;
    'lg-offset'?: number | undefined;
    'xl-offset'?: number | undefined;
}

export interface ContainerProps extends DivProps {
    fluid?: boolean | undefined;
}

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}
export type DividerProps = DivProps;

export interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    link?: string | undefined;
    target?: string | undefined;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    onOutsideClick?: React.MouseEventHandler<HTMLDivElement> | undefined;

    variant?: string | undefined;
    size?: string | undefined;
    label?: React.ReactNode | undefined;
    alignMenu?: 'left' | 'right' | undefined;
    disabled?: boolean | undefined;
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    inline?: boolean | undefined;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.Ref<HTMLInputElement> | undefined;
    onLabelClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
    hint?: string | undefined;
    invalid?: boolean | undefined;
    label?: React.ReactNode | undefined;
    floatingLabel?: boolean | undefined;
}

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
}

export type PanelProps = DivProps;
export type RadioProps = CheckboxProps;

export interface RowProps extends DivProps {
    xs?: number | undefined;
    sm?: number | undefined;
    md?: number | undefined;
    lg?: number | undefined;
}

export interface SelectProps extends DivProps {
    label?: React.ReactNode | undefined;
    readOnly?: boolean | undefined;
    useDefault?: boolean | undefined;
}

export interface TabProps {
    children?: React.ReactNode;
    value?: any;
    label?: React.ReactNode | undefined;
    onActive?: ((tab: Tab) => void) | undefined;
}

export interface TabsProps extends DivProps {
    defaultSelectedIndex?: number | undefined;
    selectedIndex?: number | undefined;
    justified?: boolean | undefined;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    inputRef?: React.Ref<HTMLTextAreaElement> | undefined;
    onLabelClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
    hint?: string | undefined;
    invalid?: boolean | undefined;
    label?: React.ReactNode | undefined;
    floatingLabel?: boolean | undefined;
}
