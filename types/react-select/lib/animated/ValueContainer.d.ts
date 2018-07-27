// @flow

import React, { type ComponentType } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { type ValueContainerProps } from '../components/containers';

// make ValueContainer a transition group
const AnimatedValueContainer = (WrappedComponent: ComponentType<ValueContainerProps>) => (props: any) => (
  <TransitionGroup component={WrappedComponent} {...props} />
);

export default AnimatedValueContainer;
