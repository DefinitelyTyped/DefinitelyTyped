import * as React from 'react';

declare class SafeAnchor extends React.Component<SafeAnchorProps> { }
declare namespace SafeAnchor { }
export = SafeAnchor

interface SafeAnchorProps extends React.HTMLProps<SafeAnchor> {
  href?: string;
  onClick?: React.MouseEventHandler<{}>;
  disabled?: boolean;
  role?: string;
  componentClass?: React.ReactType;
}
