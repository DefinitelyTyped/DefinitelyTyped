// Type definitions for react-dragula 1.1
// Project: https://github.com/bevacqua/react-dragula
// Definitions by: Adriaan Marain <https://github.com/AdrianMrn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { DragulaOptions, Drake } from 'dragula';

declare module 'react-dragula' {
    export default function dragula(containers: Array<HTMLElement>, options?: DragulaOptions): Drake;
}
