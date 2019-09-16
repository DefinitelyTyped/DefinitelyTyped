import * as React from 'react';
import withDirection, { WithDirectionProps } from 'react-with-direction';

const Component: React.FC<WithDirectionProps> = ({ direction }) =>
  React.createElement('div', { dir: direction });

withDirection(Component);
