// Type definitions for react-dragula 1.1
// Project: https://github.com/bevacqua/react-dragula
// Definitions by: Adriaan Marain <https://github.com/AdrianMrn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DragulaOptions, Drake } from 'dragula';

export = reactDragula;

declare function reactDragula(containers: HTMLElement[], options?: DragulaOptions): Drake;
