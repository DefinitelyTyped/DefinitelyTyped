import * as React from 'react';

interface ControlLabelProps extends React.HTMLProps<ControlLabel> {
  bsClass?: string;
  htmlFor?: string;
  srOnly?: boolean;
}

export default class ControlLabel extends React.Component<ControlLabelProps> { }
