// @flow

import React, { type ComponentType } from 'react';
import { type InputProps } from '../components/Input';
import { type BaseTransition } from './transitions';
import { type PropsWithInnerRef } from '../types';

type AnimatedInputProps = BaseTransition & PropsWithInnerRef;

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
const AnimatedInput = (WrappedComponent: ComponentType<InputProps>) => {
  return ({
    in: inProp,
    onExited,
    appear,
    enter,
    exit,
    innerRef,
    ...props
  }: AnimatedInputProps) => (
    // $FlowFixMe
    <WrappedComponent innerRef={innerRef} {...props}/>
  );
};

export default AnimatedInput;
