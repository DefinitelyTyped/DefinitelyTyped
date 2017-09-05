import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';

declare class PaginationButton extends React.Component<PaginationButtonProps> { }
declare namespace PaginationButton { }
export = PaginationButton

interface PaginationButtonProps extends React.HTMLProps<PaginationButton> {
  componentClass?: React.ReactType;
  className?: string;
  eventKey?: any;
  onSelect?: SelectCallback;
  disabled?: boolean;
  active?: boolean;
  onClick: React.MouseEventHandler<{}>;
}
