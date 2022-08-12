// Type definitions for @semantic-release/error 3.0
// Project: https://github.com/semantic-release/error
// Definitions by: Alex Mendes <https://github.com/alexandermendes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class SemanticReleaseError extends Error {
  name: 'SemanticReleaseError';

  message: string;

  code: string;

  details?: string;

  semanticRelease: true;

  constructor(message: string, code: string, details?: string)
}

export = SemanticReleaseError;
