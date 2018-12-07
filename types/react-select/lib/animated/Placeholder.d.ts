import { ComponentType } from 'react';
import { PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';

export type AnimatedPlaceholderProps<OptionType> = PlaceholderProps<OptionType>;

export function AnimatedPlaceholder<OptionType>(WrappedComponent: ComponentType<PlaceholderProps<OptionType>>): ComponentType<AnimatedPlaceholderProps<OptionType>>;

export default AnimatedPlaceholder;
