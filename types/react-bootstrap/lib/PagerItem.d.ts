import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare class PagerItem extends React.Component<PagerItemProps> { }
declare namespace PagerItem { }
export = PagerItem

interface PagerItemProps extends React.HTMLProps<PagerItem> {
  disabled?: boolean;
  eventKey?: any;
  next?: boolean;
  onSelect?: SelectCallback;
  previous?: boolean;
  target?: string;
}
