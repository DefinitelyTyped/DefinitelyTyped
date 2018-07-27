import { ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { ValueContainerProps } from '../components/containers';

declare const AnimatedValueContainer: (WrappedComponent: ComponentType<ValueContainerProps>) => ComponentType<any>;

export default AnimatedValueContainer;
