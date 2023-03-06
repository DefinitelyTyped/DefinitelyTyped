// Type definitions for link2aws 1.0
// Project: https://github.com/link2aws/link2aws
// Definitions by: Kit Peters <https://github.com/popefelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class ARN {
  constructor(text: string);
  get string(): string;
  get console(): string;
  get qualifiers(): string[];
  get pathLast(): string;
  get consoleLink(): string;
}
