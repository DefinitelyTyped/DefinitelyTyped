// Type definitions for react-lifecycles-compat 3.0
// Project: https://github.com/reactjs/react-lifecycles-compat#readme
// Definitions by: bySabi Files <https://github.com/bySabi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export function polyfill<T extends React.ComponentType<any>>(
  Comp: T
): T & { [K in keyof T]: T[K] };
