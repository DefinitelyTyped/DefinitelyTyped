import * as React from 'react';
import { withStyles, WithStylesProps, css } from 'react-with-styles';

declare module 'react-with-styles' {
  interface Theme {
    unit: number;
  }
}

const Component: React.FC<WithStylesProps> = ({ styles }) =>
  React.createElement('div', { ...css(styles.wrapper) });

const StyledComponent = withStyles(({ unit }) => ({
  wrapper: { borderRadius: unit },
}))(Component);
