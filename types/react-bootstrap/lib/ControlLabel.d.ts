import * as React from 'react';

declare class ControlLabel extends React.Component<ControlLabelProps> { }
declare namespace ControlLabel { }
export = ControlLabel

interface ControlLabelProps extends React.HTMLProps<ControlLabel> {
  bsClass?: string;
  htmlFor?: string;
  srOnly?: boolean;
}
