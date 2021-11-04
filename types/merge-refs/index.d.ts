// Type definitions for merge-refs 1.0
// Project: https://github.com/wojtekmaj/merge-refs
// Definitions by: Jakub Skoneczny <https://github.com/Skona27>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

declare function merge_refs<T>(...refs: Array<React.Ref<T>>): (instance: T) => void;
export default merge_refs;
