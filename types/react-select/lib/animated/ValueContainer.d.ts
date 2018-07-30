import { ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';

export type AnimatedValueContainerProps = ValueContainerProps;

export function AnimatedValueContainer(WrappedComponent: ComponentType<ValueContainerProps>): ComponentType<AnimatedValueContainerProps>;

export default AnimatedValueContainer;
