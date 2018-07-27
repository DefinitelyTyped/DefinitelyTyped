import { ComponentType } from 'react';
import { PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';

declare const AnimatedPlaceholder: (WrappedComponent: ComponentType<PlaceholderProps>) => ComponentType<any>;

export default AnimatedPlaceholder;
