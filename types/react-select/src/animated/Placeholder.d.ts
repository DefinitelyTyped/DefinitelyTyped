import { ComponentType } from 'react';
import { PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';
import { OptionTypeBase } from '../types';

export type AnimatedPlaceholderProps<OptionType extends OptionTypeBase, IsMulti extends boolean> = PlaceholderProps<OptionType, IsMulti>;

export function AnimatedPlaceholder<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean
>(WrappedComponent: ComponentType<PlaceholderProps<OptionType, IsMulti>>): ComponentType<AnimatedPlaceholderProps<OptionType, IsMulti>>;

export default AnimatedPlaceholder;
