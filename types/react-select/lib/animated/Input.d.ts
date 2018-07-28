import { default as React, ComponentType } from 'react';
import { InputProps } from '../components/Input';
import { BaseTransition } from './transitions';
import { PropsWithInnerRef } from '../types';

export type AnimatedInputProps = BaseTransition & PropsWithInnerRef & InputProps;

declare const AnimatedInput: (WrappedComponent: ComponentType<InputProps>) => ComponentType<AnimatedInputProps>;

export default AnimatedInput;
