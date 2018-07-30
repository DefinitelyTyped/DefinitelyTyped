import { ComponentType } from 'react';
import { SingleValueProps } from '../components/SingleValue';
import { Fade } from './transitions';

export type AnimatedSingleValueProps = SingleValueProps;

export function AnimatedSingleValue(WrappedComponent: ComponentType<SingleValueProps>): ComponentType<AnimatedSingleValueProps>;

export default AnimatedSingleValue;
