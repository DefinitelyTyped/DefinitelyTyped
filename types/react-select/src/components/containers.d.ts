import { Component, ReactNode, ComponentType } from 'react';
import { CSSObject } from '@emotion/serialize';
import { spacing } from '../theme';
import { CommonProps, GroupTypeBase, KeyboardEventHandler, OptionTypeBase } from '../types';

// ==============================
// Root Container
// ==============================

export interface ContainerState {
    /** Whether the select is disabled. */
    isDisabled: boolean;
    /** Whether the text in the select is indented from right to left. */
    isRtl: boolean;
}

export type ContainerProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> &
    ContainerState & {
        /** The children to be rendered. */
        children: ReactNode;
        /** Inner props to be passed down to the container. */
        innerProps: { onKeyDown: KeyboardEventHandler };
    };
export function containerCSS(state: ContainerState): CSSObject;
export const SelectContainer: ComponentType<ContainerProps<any, boolean>>;

// ==============================
// Value Container
// ==============================

export type ValueContainerProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & {
    /** Set when the value container should hold multiple values */
    isMulti: boolean;
    /** Whether the value container currently holds a value. */
    hasValue: boolean;
    /** The children to be rendered. */
    children: ReactNode;
};
export function valueContainerCSS(): CSSObject;
export class ValueContainer extends Component<ValueContainerProps<any, boolean>> {}

// ==============================
// Indicator Container
// ==============================

export interface IndicatorsState {
    /** Whether the text should be rendered right to left. */
    isRtl: boolean;
    /** Whether the component is disabled */
    isDisabled: boolean;
}

export type IndicatorContainerProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> &
    IndicatorsState & {
        /** The children to be rendered. */
        children: ReactNode;
    };

export function indicatorsContainerCSS(): CSSObject;
export const IndicatorsContainer: ComponentType<IndicatorContainerProps<any, boolean>>;
