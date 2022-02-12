// Type definitions for react-scroll-rotate 0.0
// Project: https://github.com/giladk/react-scroll-rotate#readme
// Definitions by: Alex Bukurov <https://github.com/abukurov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ScrollRotateProps {
  target?: string | undefined;
  throttle?: number | undefined;
  from?: number | undefined;
  to?: number | undefined;
  method?: 'px' | 'perc' | undefined;
  loops?: number | undefined;
  animationDuration?: number | undefined;
  children: React.ReactNode;
}

export class ScrollRotate extends React.Component<ScrollRotateProps> {}
