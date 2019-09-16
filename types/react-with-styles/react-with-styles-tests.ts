import * as React from 'react';
import { withStyles, WithStylesProps, css } from 'react-with-styles';

const Component: React.FC<WithStylesProps> = ({ styles }) =>
  React.createElement('div', { ...css(styles.wrapper) });

const StyledComponent = withStyles(({ unit }) => ({
  wrapper: { borderRadius: unit },
}))(Component);
