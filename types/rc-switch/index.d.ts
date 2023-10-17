import * as React from "react";

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
