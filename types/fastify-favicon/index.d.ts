// Type definitions for fastify-favicon v0.3.0
// Project: https://github.com/smartiniOnGitHub/fastify-favicon
// Definitions by: Philipp Gfeller <https://github.com/tuelsch/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function defaultFaviconPlugin(): void;

declare namespace fastifyFavicon {
  interface FastifyFaviconOptions {
    path: string;
  }
}

export = defaultFaviconPlugin;
