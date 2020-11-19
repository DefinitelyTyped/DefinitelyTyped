import { ComponentType } from 'react';
import { PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';
import { OptionTypeBase } from '../types';

export type AnimatedPlaceholderProps<OptionType extends OptionTypeBase, isMulti extends boolean> = PlaceholderProps<OptionType, isMulti>;

export function AnimatedPlaceholder<
    OptionType extends OptionTypeBase,
    isMulti extends boolean
>(WrappedComponent: ComponentType<PlaceholderProps<OptionType, isMulti>>): ComponentType<AnimatedPlaceholderProps<OptionType, isMulti>>;

export default AnimatedPlaceholder;
