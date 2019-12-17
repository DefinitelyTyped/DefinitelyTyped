// Type definitions for @reach/alert 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type AlertProps = {
  type?: 'assertive' | 'polite';
} & React.HTMLProps<HTMLDivElement>;

declare const Alert: React.FC<AlertProps>;

export default Alert;
