import { ComponentType } from 'react';
import { MultiValueProps } from '../components/MultiValue';
import { Collapse, fn } from './transitions';

export type AnimatedMultiValueProps<OptionType> = {
  in: boolean,
  onExited: fn,
} & MultiValueProps<OptionType>;

export function AnimatedMultiValue<OptionType>(WrappedComponent: ComponentType<MultiValueProps<OptionType>>): ComponentType<AnimatedMultiValueProps<OptionType>>;

export default AnimatedMultiValue;
