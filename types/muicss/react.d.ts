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
    size?: string;
    variant?: string;
}

export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string;
    label?: React.ReactNode;
    autoFocus?: boolean;
    checked?: boolean;
    disabled?: boolean;
    form?: string;
    required?: boolean;
    value?: string | string[] | number;
}

export interface ColProps extends DivProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    'xs-offset'?: number;
    'sm-offset'?: number;
    'md-offset'?: number;
    'lg-offset'?: number;
    'xl-offset'?: number;
}

export interface ContainerProps extends DivProps {
    fluid?: boolean;
}

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}
export type DividerProps = DivProps;

export interface DropdownItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    link?: string;
    target?: string;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    onOutsideClick?: React.MouseEventHandler<HTMLDivElement>;

    variant?: string;
    size?: string;
    label?: React.ReactNode;
    alignMenu?: 'left' | 'right';
    disabled?: boolean;
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    inline?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.Ref<HTMLInputElement>;
    onLabelClick?: React.MouseEventHandler<HTMLInputElement>;
    hint?: string;
    invalid?: boolean;
    label?: React.ReactNode;
    floatingLabel?: boolean;
}

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
}

export type PanelProps = DivProps;
export type RadioProps = CheckboxProps;

export interface RowProps extends DivProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
}

export interface SelectProps extends DivProps {
    label?: React.ReactNode;
    readOnly?: boolean;
    useDefault?: boolean;
}

export interface TabProps {
    value?: any;
    label?: React.ReactNode;
    onActive?: (tab: Tab) => void;
}

export interface TabsProps extends DivProps {
    defaultSelectedIndex?: number;
    selectedIndex?: number;
    justified?: boolean;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    inputRef?: React.Ref<HTMLTextAreaElement>;
    onLabelClick?: React.MouseEventHandler<HTMLInputElement>;
    hint?: string;
    invalid?: boolean;
    label?: React.ReactNode;
    floatingLabel?: boolean;
}
