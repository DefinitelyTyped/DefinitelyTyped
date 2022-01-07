// Type definitions for ember-cli-fastboot 2.2
// Project: https://github.com/ember-fastboot/ember-cli-fastboot
// Definitions by: Henry Majoros <https://github.com/hmajoros>
//                 Dan Freeman <https://github.com/dfreeman>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4

import './services/fastboot';
import { FastBoot } from './-private';

declare global {
  const FastBoot: FastBoot | undefined;
}

export {};
