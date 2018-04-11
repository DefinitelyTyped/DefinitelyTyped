// Type definitions for react-timeout v1.1.1
// Project: https://github.com/plougsgaard/react-timeout
// Definitions by: Kerwyn Rojas <https://github.com/kerwynrg/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

declare module 'react-timeout' {
  function ReactTimeout(
    SourceComponent: React.ComponentClass<any>
  ): React.ComponentType<any>;

  namespace ReactTimeout {}

  export = ReactTimeout;
}
