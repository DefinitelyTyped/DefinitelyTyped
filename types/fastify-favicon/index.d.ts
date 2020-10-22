// Type definitions for fastify-favicon 0.3
// Project: https://github.com/smartiniOnGitHub/fastify-favicon
// Definitions by: Philipp Gfeller <https://github.com/tuelsch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function defaultFaviconPlugin(): void;

declare namespace defaultFaviconPlugin {
  interface FastifyFaviconOptions {
    path?: string;
  }
}

export = defaultFaviconPlugin;
