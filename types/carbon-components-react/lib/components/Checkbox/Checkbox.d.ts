import * as React from 'react';
import { ForwardRefReturn, ReactInputAttr } from '../../../typings/shared';

type ExcludedAttributes = 'id' | 'onChange' | 'onClick' | 'type';

// variant when "enable-2021-release" feature flag is enabled
export type CheckboxOnChangeDataVariant = (
    evt: React.ChangeEvent<HTMLInputElement>,
    data: { checked: boolean; id: string },
) => void;
export type CheckboxOnChangeDefaultVariant = (
    checked: boolean,
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
) => void;

export interface CheckboxProps extends Omit<ReactInputAttr, ExcludedAttributes> {
    defaultChecked?: boolean | undefined;
    hideLabel?: boolean | undefined;
    id: string;
    indeterminate?: boolean | undefined;
    labelText: NonNullable<React.ReactNode>;
    onChange?: CheckboxOnChangeDataVariant | CheckboxOnChangeDefaultVariant | undefined;
    /**
     * @deprecated
     */
    wrapperClassName?: string | undefined;
}

declare const Checkbox: ForwardRefReturn<HTMLInputElement, CheckboxProps>;

export default Checkbox;
