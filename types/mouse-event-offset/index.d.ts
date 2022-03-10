// Type definitions for mouse-event-offset 3.0
// Project: https://github.com/mattdesl/mouse-event-offset
// Definitions by: Saiichi Hashimoto <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import type { MouseEvent, TouchEvent } from 'react';

declare function offset(e: MouseEvent | TouchEvent, element?: HTMLElement): [number, number];

export = offset;
