/**
 * Jexl's abstract syntax tree
 */
type Ast =
  | { type: 'UnaryExpression'; operator: string; right: Ast }
  | { type: 'BinaryExpression'; operator: string; left: Ast; right: Ast }
  | { type: 'ConditionalExpression'; test: Ast; consequent: Ast; alternate: Ast }
  | { type: 'FilterExpression'; relative: boolean; expr: Ast; subject: Ast }
  | { type: 'Literal'; value: string | number | boolean }
  | { type: 'ArrayLiteral'; value: Ast[] }
  | { type: 'ObjectLiteral'; value: { [key: string]: Ast } }
  | { type: 'Identifier'; value: string; from?: Ast; relative?: boolean }
  | { type: 'FunctionCall'; name: string; pool: 'functions' | 'transforms'; args: Ast[] };

export default Ast;
