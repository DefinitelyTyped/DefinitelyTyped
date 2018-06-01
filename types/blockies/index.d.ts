// Type definitions for blockies 0.0
// Project: https://github.com/goldylucks/blockies-npm
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BlockiesIcon {
    toDataURL(): string;
}
interface BlockiesConfig {
    seed: string;
}
declare function blockies(config: BlockiesConfig): BlockiesIcon;

export = blockies;
