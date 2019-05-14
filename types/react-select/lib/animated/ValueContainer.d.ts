import { ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';

export type AnimatedValueContainerProps<OptionType> = ValueContainerProps<OptionType>;

export function AnimatedValueContainer<OptionType>(WrappedComponent: ComponentType<ValueContainerProps<OptionType>>): ComponentType<AnimatedValueContainerProps<OptionType>>;

export default AnimatedValueContainer;
