import * as CodeMirror from "codemirror";

declare module "codemirror" {
  // Based on https://codemirror.net/demo/simplemode.html
  interface Rule {
    regex?: string | RegExp;
    token?: string | Array<string> | null;
    sol?: boolean;
    next?: string;
    push?: string;
    pop?: boolean;
    mode?: any;
    indent?: boolean;
    dedent?: boolean;
    dedentIfLineStart?: boolean;
  }

  function defineSimpleMode(
    name: string,
    mode: { start: Array<Rule>; comment?: Array<Rule>; meta?: any }
  ): void;
}
