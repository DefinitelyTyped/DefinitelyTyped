// Type definitions for @semantic-release/error 3.0
// Project: https://github.com/semantic-release/error
// Definitions by: Alex Mendes <https://github.com/alexandermendes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module '@semantic-release/error' {
  class SemanticReleaseError extends Error {
    public name: 'SemanticReleaseError';

    public message: string;

    public code: string;

    public details?: string;

    public semanticRelease: true;

    constructor (message: string, code: string, details?: string)
  }

  export = SemanticReleaseError;
}
