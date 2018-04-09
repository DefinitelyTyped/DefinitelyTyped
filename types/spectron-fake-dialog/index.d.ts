// Type definitions for spectron-fake-dialog 0.0
// Project: https://github.com/joe-re/spectron-fake-dialog
// Definitions by: Katharina Rakebrand <https://github.com/klappar>
//                 David Hahn <https://github.com/davidka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Application } from 'spectron';

export interface FakeDialogOptions {
    method: string;
    value: any;
}

export function apply(app: Application): void;

export function mock(options: FakeDialogOptions[]): any;
