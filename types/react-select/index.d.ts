// Type definitions for react-select 2.0
// Project: https://github.com/JedWatson/react-select#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
//                 Jon Freedman <https://github.com/jonfreedman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import SelectBase from './lib/Select';
import { StateManager } from './lib/stateManager';

export default SelectBase;
// export default StateManager;

export { SelectBase };
export { default as Async } from './lib/Async';
export { default as AsyncCreatable } from './lib/AsyncCreatable';
export { default as Creatable } from './lib/Creatable';
export { createFilter } from './lib/filters';
export { default as makeAnimated } from './lib/animated/index';
export { components } from './lib/components/index';
export { mergeStyles } from './lib/styles';
