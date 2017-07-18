import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

interface PagerItemProps extends React.HTMLProps<PagerItem> {
  disabled?: boolean;
  eventKey?: any;
  next?: boolean;
  onSelect?: SelectCallback;
  previous?: boolean;
  target?: string;
}

export default class PagerItem extends React.Component<PagerItemProps> { }
