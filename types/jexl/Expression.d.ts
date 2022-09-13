import Ast from './Ast';

export interface Context {
  [key: string]: any;
}

declare class Expression {
  constructor(lang: any, exprStr: string);

  /**
   * Forces a compilation of the expression string that this Expression object
   * was constructed with. This function can be called multiple times; useful
   * if the language elements of the associated Jexl instance change.
   * @returns this Expression instance, for convenience
   */
  compile(): Expression;

  /**
   * Asynchronously evaluates the expression within an optional context.
   * @param context A mapping of variables to values, which will be
   *      made accessible to the Jexl expression when evaluating it
   * @returns resolves with the result of the evaluation.
   */
  eval(context?: Context): Promise<any>;

  /**
   * Synchronously evaluates the expression within an optional context.
   * @param context A mapping of variables to values, which will be
   *      made accessible to the Jexl expression when evaluating it
   * @returns the result of the evaluation.
   * @throws on error
   */
  evalSync(context?: Context): any;

  /**
   * Get the abstract syntax tree that represents the compiled expression
   * @returns the abstract syntax tree
   */
  _getAst(): Ast;
}

export default Expression;
