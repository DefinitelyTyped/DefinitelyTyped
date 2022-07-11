export type Element =
  | { type: 'dot' }
  | { type: 'openBracket' }
  | { type: 'closeBracket' }
  | { type: 'pipe' }
  | { type: 'openCurl' }
  | { type: 'closeCurl' }
  | { type: 'colon' }
  | { type: 'comma' }
  | { type: 'openParen' }
  | { type: 'closeParen' }
  | { type: 'question' }
  | {
      type: 'binaryOp';
      precedence: number;
      eval?: (...args: unknown[]) => unknown;
      evalOnDemand?: (...args: unknown[]) => unknown;
    };

export default interface Grammar {
  elements: { [symbol: string]: Element };
  functions: { [name: string]: (...args: unknown[]) => unknown };
  transform: { [name: string]: (...args: [unknown, ...unknown[]]) => unknown };
}
