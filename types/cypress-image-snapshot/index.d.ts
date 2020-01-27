// Type definitions for cypress-image-snapshot 3.1
// Project: https://github.com/palmerhq/cypress-image-snapshot
// Definitions by: Alex Kessock <https://github.com/Keysox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="Cypress" />
import { MatchImageSnapshotOptions } from '../jest-image-snapshot';

export interface Options extends Partial<Cypress.ScreenshotOptions & MatchImageSnapshotOptions> {}

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot(nameOrOptions?: string | Options): void;
            matchImageSnapshot(name: string, options: Options): void;
        }
    }
}
