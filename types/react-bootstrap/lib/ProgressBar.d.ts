import * as React from 'react';
import { Sizes } from 'react-bootstrap';

interface ProgressBarProps extends React.HTMLProps<ProgressBar> {
  // Optional
  active?: boolean;
  bsSize?: Sizes;
  bsStyle?: string;
  interpolatedClass?: any; // TODO: Add more specific type
  max?: number;
  min?: number;
  now?: number;
  srOnly?: boolean;
  striped?: boolean;
}

export default class ProgressBar extends React.Component<ProgressBarProps> { }
