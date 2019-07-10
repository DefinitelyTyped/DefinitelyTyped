// Type definitions for rc-switch 1.8
// Project: http://github.com/react-component/switch
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Props {
    autoFocus?: boolean;
    checked?: boolean;
    checkedChildren: React.ReactNode;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    loadingIcon?: React.ReactNode;
    onChange?: (checked: boolean) => void;
    onClick?: (checked: boolean) => void;
    prefixCls?: string;
    tabIndex?: number;
    unCheckedChildren: React.ReactNode;
}

export default class Switch extends React.Component<Props> {}
