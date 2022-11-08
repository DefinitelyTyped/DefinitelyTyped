// Type definitions for eth-url-parser 1.0
// Project: https://github.com/brunobar79/eth-url-parser
// Definitions by: gomes <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ParseOutput {
  scheme: 'ethereum';
  target_address: string;
  chain_id?: `${number}`;
  function_name?: string;
  prefix?: string;
  parameters?: Record<string, string>;
}

export interface BuildInput  {
  prefix?: 'pay' | null;
  target_address: string;
  chain_id?: `${number}` | null;
  function_name?: string | null;
  parameters?: Record<string, string> | null;
}

export function parse(url: string): ParseOutput;
export function build(input: BuildInput): string;
