import * as React from 'react';

interface BadgeProps extends React.HTMLProps<Badge> {
  bsClass?: string;
  pullRight?: boolean;
}

export default class Badge extends React.Component<BadgeProps> { }
