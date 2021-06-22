import { ComponentType } from 'react';
import { PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';
import { GroupTypeBase, OptionTypeBase } from '../types';

export type AnimatedPlaceholderProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = PlaceholderProps<OptionType, IsMulti, GroupType>;

export function AnimatedPlaceholder<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
>(
    WrappedComponent: ComponentType<PlaceholderProps<OptionType, IsMulti, GroupType>>,
): ComponentType<AnimatedPlaceholderProps<OptionType, IsMulti, GroupType>>;

export default AnimatedPlaceholder;
