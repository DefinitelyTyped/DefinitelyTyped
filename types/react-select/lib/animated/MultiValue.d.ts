import { ComponentType } from 'react';
import { MultiValueProps } from '../components/MultiValue';
import { Collapse, fn } from './transitions';

type Props = {
  in: boolean,
  onExited: fn,
};

declare const AnimatedMultiValue: (WrappedComponent: ComponentType<MultiValueProps>) => ComponentType<Props>;

export default AnimatedMultiValue;
