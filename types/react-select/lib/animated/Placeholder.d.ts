// @flow

import React, { type ComponentType } from 'react';
import { type PlaceholderProps } from '../components/Placeholder';
import { Fade, collapseDuration } from './transitions';

// fade in when last multi-value removed, otherwise instant
const AnimatedPlaceholder = (WrappedComponent: ComponentType<PlaceholderProps>) => (props: any) => (
  <Fade
    component={WrappedComponent}
    duration={props.isMulti ? collapseDuration : 1}
    {...props}
  />
);

export default AnimatedPlaceholder;
