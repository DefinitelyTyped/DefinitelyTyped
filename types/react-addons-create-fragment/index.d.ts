// Type definitions for React (react-addons-create-fragment) 0.14
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export = createFragment;

declare function createFragment(object: { [key: string]: React.ReactNode }): React.ReactFragment;
