// @flow

import React, { type ComponentType } from 'react';
import { type SingleValueProps } from '../components/SingleValue';
import { Fade } from './transitions';

// instant fade; all transition-group children must be transitions

const AnimatedSingleValue = (WrappedComponent: ComponentType<SingleValueProps>) => (props: any) => (
  <Fade component={WrappedComponent} {...props} />
);

export default AnimatedSingleValue;
