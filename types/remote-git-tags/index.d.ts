// Type definitions for remote-git-tags 4.0
// Project: https://github.com/sindresorhus/remote-git-tags
// Definitions by: Chris Midgley <https://github.com/midgleyc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function remoteGitTags(repoUrl: string): Promise<Map<string, string>>;
