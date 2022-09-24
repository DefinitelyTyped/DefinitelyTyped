// Type definitions for eth-url-parser 1.0
// Project: https://github.com/brunobar79/eth-url-parser
// Definitions by: gomes <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

declare namespace ethUrlParser {
  interface ParseOutput {
    scheme: 'ethereum';
    target_address: string;
    chain_id?: `${number}`;
    function_name?: string;
    prefix?: string;
    parameters?: Record<string, string>;
  }

  interface BuildInput  {
    prefix?: 'pay' | null;
    target_address: string;
    chain_id?: `${number}` | null;
    function_name?: string | null;
    parameters?: Record<string, string> | null;
  }

  function parse(url: string): ParseOutput;
  function build(input: BuildInput): string;
}

// eslint-disable-next-line
export = ethUrlParser;
