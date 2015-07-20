// Type definitions for git-config
// Project: https://github.com/eugeneware/git-config
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "git-config" {
    export function sync(gitFile?: string): Object; // Synchronous version.
}
