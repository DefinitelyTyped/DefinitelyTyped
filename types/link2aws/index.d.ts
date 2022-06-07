// Type definitions for link2aws 1.0
// Project: https://github.com/link2aws/link2aws
// Definitions by: Kit Peters <https://github.com/popefelix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class ARN {
  constructor(text: string);
  string: string;
  console: string;
  qualifiers: string[];
  pathLast: string;
  consoleLink: string;
}
