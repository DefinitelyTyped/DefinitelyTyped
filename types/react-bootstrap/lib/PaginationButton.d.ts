import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

interface PaginationButtonProps extends React.HTMLProps<PaginationButton> {
  componentClass?: React.ReactType;
  className?: string;
  eventKey?: any;
  onSelect?: SelectCallback;
  disabled?: boolean;
  active?: boolean;
  onClick: React.MouseEventHandler<{}>;
}

export default class PaginationButton extends React.Component<PaginationButtonProps> { }
