import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import * as PagerItem from './PagerItem';

declare class Pager extends React.Component<PagerProps> {
  public static Item: typeof PagerItem;
}
declare namespace Pager { }
export = Pager

interface PagerProps extends React.HTMLProps<Pager> {
  onSelect?: SelectCallback;
}
