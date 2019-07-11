import { ComponentType } from 'react';
import { SingleValueProps } from '../components/SingleValue';
import { Fade } from './transitions';

export type AnimatedSingleValueProps<OptionType> = SingleValueProps<OptionType>;

export function AnimatedSingleValue<OptionType>(WrappedComponent: ComponentType<SingleValueProps<OptionType>>): ComponentType<AnimatedSingleValueProps<OptionType>>;

export default AnimatedSingleValue;
