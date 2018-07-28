import { ComponentType } from 'react';
import { MultiValueProps } from '../components/MultiValue';
import { Collapse, fn } from './transitions';

export type AnimatedMultiValueProps = {
  in: boolean,
  onExited: fn,
} & MultiValueProps;

declare const AnimatedMultiValue: (WrappedComponent: ComponentType<MultiValueProps>) => ComponentType<AnimatedMultiValueProps>;

export default AnimatedMultiValue;
