import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class LinkTo extends React.PureComponent<
ReactDOM.DetailedHTMLProps<ReactDOM.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> &
  { story: string, kind?: string }
> {}
