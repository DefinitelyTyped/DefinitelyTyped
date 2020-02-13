import React = require('react');

export interface PopoverProps {
    inverted?: boolean;
    visible?: boolean;
    children: React.ReactNode[] | React.ReactNode;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    skin?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
    trigger: React.ReactNode;
    onClose?: () => void;
}

export default class Popover extends React.Component<PopoverProps> {}
