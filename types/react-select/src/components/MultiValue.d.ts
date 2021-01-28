import { ComponentType, Component, ReactNode } from 'react';
import { CSSObject } from '@emotion/serialize';

import { borderRadius, colors, spacing } from '../theme';
import { CommonProps, GroupTypeBase, OptionTypeBase } from '../types';

export type MultiValueProps<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, true, GroupType> & {
    children: ReactNode;
    components: any;
    cropWithEllipsis: boolean;
    data: OptionType;
    innerProps: any;
    isFocused: boolean;
    isDisabled: boolean;
    removeProps: {
        onTouchEnd: (event: any) => void;
        onClick: (event: any) => void;
        onMouseDown: (event: any) => void;
    };
};

export function multiValueCSS(): CSSObject;
export function multiValueLabelCSS(props: MultiValueProps<any>): CSSObject;
export function multiValueRemoveCSS(props: MultiValueProps<any>): CSSObject;

export interface MultiValueGenericProps<OptionType extends OptionTypeBase> {
    children: ReactNode;
    data: OptionType;
    innerProps: { className?: string };
    selectProps: any;
}
export const MultiValueGeneric: ComponentType<MultiValueGenericProps<any>>;

export const MultiValueContainer: typeof MultiValueGeneric;
export const MultiValueLabel: typeof MultiValueGeneric;
export type MultiValueRemoveProps<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, true, GroupType> & {
    children: ReactNode;
    data: OptionType;
    innerProps: {
        className: string;
        onTouchEnd: (event: any) => void;
        onClick: (event: any) => void;
        onMouseDown: (event: any) => void;
    };
    selectProps: any;
};
export class MultiValueRemove<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends Component<MultiValueRemoveProps<OptionType, GroupType>> {
    static defaultProps: {
        children: ReactNode;
    };
}

export class MultiValue<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends Component<MultiValueProps<OptionType, GroupType>> {
    static defaultProps: {
        cropWithEllipsis: boolean;
    };
}

export default MultiValue;
