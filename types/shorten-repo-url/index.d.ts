// Type definitions for shorten-repo-url 1.5
// Project: https://github.com/bfred-it/shorten-repo-url#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = shortenRepoUrl;

declare function shortenRepoUrl(url: string, currentUrl?: string): string;

declare namespace shortenRepoUrl {
    function applyToLink(link: HTMLAnchorElement, currentUrl?: string): boolean;
}
