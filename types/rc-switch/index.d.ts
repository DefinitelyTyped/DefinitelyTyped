// Type definitions for rc-switch 1.9
// Project: https://github.com/react-component/switch
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
//                 Matteo Frana <https://github.com/matteofrana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Props {
    autoFocus?: boolean | undefined;
    checked?: boolean | undefined;
    checkedChildren?: React.ReactNode | undefined;
    className?: string | undefined;
    defaultChecked?: boolean | undefined;
    disabled?: boolean | undefined;
    loadingIcon?: React.ReactNode | undefined;
    onChange?: ((checked: boolean) => void) | undefined;
    onClick?: ((checked: boolean) => void) | undefined;
    prefixCls?: string | undefined;
    tabIndex?: number | undefined;
    unCheckedChildren?: React.ReactNode | undefined;
}

export default class Switch extends React.Component<Props> {}
