// Type definitions for get-pixels 3.3
// Project: https://github.com/scijs/get-pixels#readme
// Definitions by: Don McCurdy <https://github.com/donmccurdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as ndarray from 'ndarray';

type Callback = (err: string | null, pixels: ndarray | null) => void;

declare function getPixels(
    path: string | Uint8Array | Buffer,
    typeOrCallback: string | Callback,
    callback?: Callback
): void;

export default getPixels;
