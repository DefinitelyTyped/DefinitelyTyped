// @flow

import React, { type ComponentType } from 'react';
import { type MultiValueProps } from '../components/MultiValue';
import { Collapse, type fn } from './transitions';

// strip transition props off before spreading onto actual component
type Props = {
  in: boolean,
  onExited: fn,
};

const AnimatedMultiValue = (WrappedComponent: ComponentType<MultiValueProps>) => {
  return ({ in: inProp, onExited, ...props }: Props) => (
    <Collapse in={inProp} onExited={onExited}>
      {/* $FlowFixMe */}
      <WrappedComponent cropWithEllipsis={inProp} {...props}/>
    </Collapse>
  );
};

export default AnimatedMultiValue;
