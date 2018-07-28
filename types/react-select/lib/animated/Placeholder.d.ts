import { ComponentType } from 'react';
import { PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';

export type AnimatedPlaceholderProps = PlaceholderProps;

declare const AnimatedPlaceholder: (WrappedComponent: ComponentType<PlaceholderProps>) => ComponentType<AnimatedPlaceholderProps>;

export default AnimatedPlaceholder;
