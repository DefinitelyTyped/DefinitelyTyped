// Type definitions for save-pixels 2.3
// Project: https://github.com/mikolalysenko/save-pixels#readme
// Definitions by: Don McCurdy <https://github.com/donmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ndarray from 'ndarray';
import { Stream } from 'node:stream';

declare function savePixels(
    array: ndarray,
    type: 'png' | 'gif' | 'jpeg' | 'jpg' | 'canvas',
    options?: { quality?: number }
): Stream;

export default savePixels;
