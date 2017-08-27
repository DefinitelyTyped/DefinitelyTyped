import * as React from 'react';

declare class Badge extends React.Component<BadgeProps> { }
declare namespace Badge { }
export = Badge

interface BadgeProps extends React.HTMLProps<Badge> {
  bsClass?: string;
  pullRight?: boolean;
}
