import * as React from 'react';

interface SafeAnchorProps extends React.HTMLProps<SafeAnchor> {
  href?: string;
  onClick?: React.MouseEventHandler<{}>;
  disabled?: boolean;
  role?: string;
  componentClass?: React.ReactType;
}

export default class SafeAnchor extends React.Component<SafeAnchorProps> { }
