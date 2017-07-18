import * as React from 'react';
import { Sizes, SelectCallback } from 'react-bootstrap';

interface PaginationProps extends React.HTMLProps<Pagination> {
  activePage?: number;
  bsSize?: Sizes;
  bsStyle?: string;
  boundaryLinks?: boolean;
  buttonComponentClass?: React.ReactType;
  ellipsis?: React.ReactNode;
  first?: React.ReactNode;
  items?: number;
  last?: React.ReactNode;
  maxButtons?: number;
  next?: React.ReactNode;
  onSelect?: SelectCallback;
  prev?: React.ReactNode;
}

export default class Pagination extends React.Component<PaginationProps> { }
