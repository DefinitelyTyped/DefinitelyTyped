import { ComponentType } from 'react';
import { SingleValueProps } from '../components/SingleValue';
import { Fade } from './transitions';

declare const AnimatedSingleValue: (WrappedComponent: ComponentType<SingleValueProps>) => ComponentType<any>;

export default AnimatedSingleValue;
