// Type definitions for cypress-image-snapshot 3.1
// Project: https://github.com/palmerhq/cypress-image-snapshot
// Definitions by: Alex Kessock <https://github.com/Keysox>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot: () => void;
        }
    }
}

export {};
