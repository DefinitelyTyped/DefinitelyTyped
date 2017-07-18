import * as React from 'react';
import { SelectCallback } from 'react-bootstrap';
import PagerItem from './PagerItem';

interface PagerProps extends React.HTMLProps<Pager> {
  onSelect?: SelectCallback;
}

export default class Pager extends React.Component<PagerProps> {
  public static Item: typeof PagerItem;
}
