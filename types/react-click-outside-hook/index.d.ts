// Type definitions for react-click-outside-hook 1.0
// Project: https://github.com/bdeloeste/react-click-outside-hook#readme
// Definitions by: Bryan Deloeste <https://github.com/bdeloeste>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { MutableRefObject } from "react";

export function useClickOutside<T>(): [MutableRefObject<T>, boolean];
