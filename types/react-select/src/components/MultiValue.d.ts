import { ComponentType, Component, ReactNode, ReactElement } from 'react';
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
    innerProps: { className?: string | undefined };
    selectProps: any;
}
export function MultiValueGeneric<OptionType extends OptionTypeBase>(
    // tslint:disable-next-line:no-unnecessary-generics
    props: MultiValueGenericProps<OptionType>,
): ReactElement;

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
export function MultiValueRemove<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: MultiValueRemoveProps<OptionType, GroupType>): ReactElement;

declare function MultiValue<
    OptionType extends OptionTypeBase,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: MultiValueProps<OptionType, GroupType>): ReactElement;

export default MultiValue;
