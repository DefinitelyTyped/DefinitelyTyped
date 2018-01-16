// Type definitions for aqbjs
// Project: https://github.com/arangodb/aqbjs
// Contributions by: Athenkosi Mase <https://github.com/Athenkosi-Mase> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * AQLError
 */
export interface AqlError extends Error {
    /**
     *
     * @param message
     */
    new (message: string): Error;
    name: string;
}

export interface AQLOperation extends AQLExpression {
    new (): AQLExpression;
}
export interface AQLBinaryOperation extends AQLOperation {
    /**
     *
     * @param operator
     * @param value1
     * @param value2
     */
    new (operator: string, value1: AQLExpression, value2: any): AQLOperation;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator: string;
}
export interface AQLSimpleReference extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLRawExpression extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLBooleanLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: boolean;
}
export interface AQLNumberLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    re: RegExp;
}
export interface AQLIntegerLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: number;
}
export interface AQLStringLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLListLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLObjectLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: {};
}
export interface AQLNAryOperation extends AQLOperation {
    /**
     *
     * @param operator
     * @param values
     */
    new (operator: string, values: Array<AQLExpression>): AQLOperation;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator: string;
    _values: Array<AQLExpression>;
}
export interface AQLRangeExpression extends AQLExpression {
    /**
     *
     * @param start
     * @param end
     */
    new (start: number | AQLExpression, end: number): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _end: number;
    re: RegExp;
}
export interface AQLPropertyAccess extends AQLExpression {
    /**
     *
     * @param obj
     * @param keys
     */
    new (obj: AQLExpression, keys: Array<AQLExpression>): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _obj: AQLExpression;
    _keys: Array<AQLExpression>;
}
export interface AQLTernaryOperation extends AQLOperation {
    /**
     *
     * @param operator1
     * @param operator2
     * @param value1
     * @param value2
     * @param value3
     */
    new (operator1: string, operator2: string, value1: AQLExpression, value2: any, value3: any): AQLOperation;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator1: string;
    _operator2: string;
}
export interface AQLNullLiteral extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLKeyword extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    re: RegExp;
}
export interface AQLIdentifier extends AQLExpression {
    /**
     *
     * @param value
     */
    new (value: string): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: string;
}
export interface AQLFunctionCall extends AQLExpression {
    /**
     *
     * @param functionName
     * @param args
     */
    new (functionName: string, args: any): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLForExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param varname
     * @param expr
     */
    new (prev: AQLPartialStatement, varname: any, expr: any): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    _varname: AQLIdentifier;
}
export interface AQLFilterExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param expr
     */
    new (prev: AQLPartialStatement, expr: any): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLDefinitions {
    /**
     *
     * @param dfns
     * @param undefined
     */
    new (dfns: any, param2: any): any;
    /**
     *
     * @return
     */
    toAQL(): string;
    _dfns: Array<any>;
}
export interface AQLLetExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param dfns
     * @param undefined
     */
    new (prev: AQLPartialStatement, dfns: any, param3: any): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    _prev: AQLPartialStatement;
    _dfns: AQLDefinitions;
}
export interface AQLCollectExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param dfns
     * @param undefined
     * @param varname
     * @param intoExpr
     * @param keepNames
     * @param options
     */
    new (prev: AQLPartialStatement, dfns: any, param3: any, varname: any, intoExpr: any, keepNames: Array<any>, options: any): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newVarname
     * @param newIntoExpr
     * @return
     */
    into(newVarname: any, newIntoExpr: any): AQLCollectExpression;
    /**
     *
     * @return
     */
    keep(): any;
    _keep: Array<AQLIdentifier>;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): any;
    _options: AQLObjectLiteral;
    /**
     *
     * @param newVarname
     * @return
     */
    withCountInto(newVarname: any): AQLCollectWithCountIntoExpression;
}
export interface AQLCollectWithCountIntoExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param dfns
     * @param undefined
     * @param varname
     * @param options
     */
    new (prev: AQLPartialStatement, dfns: any, param3: any, varname: any, options: any): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): any;
}
export interface AQLSortExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param args
     */
    new (prev: AQLPartialStatement, args: Array<any>): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    keywords: Array<string>;
    _args: Array<AQLKeyword>;
}
export interface AQLLimitExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param offset
     * @param count
     */
    new (prev: AQLPartialStatement, offset: any, count: any): AQLPartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
}
export interface AQLReturnExpression extends AQLExpression {
    /**
     *
     * @param prev
     * @param value
     * @param distinct
     */
    new (prev: AQLLetExpression, value: any, distinct: boolean): AQLExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _prev: AQLLetExpression;
    _distinct: boolean;
}
export interface AQLRemoveExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param collection
     * @param options
     */
    new (prev: AQLPartialStatement, expr: any, collection: any, options: any): AQLPartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): AQLReturnExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): AQLRemoveExpression;
}
export interface AQLUpsertExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param upsertExpr
     * @param insertExpr
     * @param replace
     * @param updateOrReplaceExpr
     * @param collection
     * @param options
     */
    new (prev: AQLPartialStatement, upsertExpr: any, insertExpr: any, replace: boolean, updateOrReplaceExpr: any, collection: any, options: any): AQLPartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): AQLReturnExpression;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): AQLReturnExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _updateOrReplace: string;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): AQLUpsertExpression;
}
export interface AQLInsertExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param collection
     * @param options
     */
    new (prev: AQLPartialStatement, expr: any, collection: any, options: any): AQLPartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): AQLReturnExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): AQLInsertExpression;
}
export interface AQLUpdateExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param withExpr
     * @param collection
     * @param options
     */
    new (prev: AQLPartialStatement, expr: any, withExpr: any, collection: any, options: any): AQLPartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): AQLReturnExpression;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): AQLReturnExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): AQLUpdateExpression;
}
export interface AQLReplaceExpression extends AQLPartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param withExpr
     * @param collection
     * @param options
     */
    new (prev: AQLPartialStatement, expr: any, withExpr: any, collection: any, options: any): AQLPartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): AQLReturnExpression;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): AQLReturnExpression;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): AQLReplaceExpression;
}

/**
 * Equality
 *
 * Creates an equality comparison from the given values.
 *
 * qb.eq(a, b) => (a == b)
 * OR:
 * qbValue.eq(b) => (a == b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 * qb.ref('x').eq('y') => (x == y)
 *
 *
 * @param x
 * @return
 */
export declare type AQLeq = (x: any) => AQLBinaryOperation;
/**
 * Inequality
 *
 * Creates an inequality comparison from the given values.
 *
 * qb.neq(a, b) => (a != b)
 * OR:
 * qbValue.neq(b) => (a != b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 * qb.ref('x').neq('y') => (x != y)
 *
 * @param x
 * @return
 */
export declare type AQLneq = (x: any) => AQLBinaryOperation;
/**
 * Greater Than
 *
 * Creates a greater-than comparison from the given values.
 *
 * qb.gt(a, b) => (a > b)
 * OR
 * qbValue.gt(b) => (a > b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 *  qb.ref('x').gt('y') => (x > y)
 *
 *
 * @param x
 * @return
 */
export declare type AQLgt = (x: any) => AQLBinaryOperation;
/**
 * Greater Than Or Equal To
 *
 * Creates a greater-than-or-equal-to comparison from the given values.
 *
 * qb.gte(a, b) => (a >= b)
 * OR
 * qbValue.gte(b) => (a >= b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 * qb.ref('x').gte('y') => (x >= y)
 *
 *
 * @param x
 * @return
 */
export declare type AQLgte = (x: any) => AQLBinaryOperation;
/**
 * Less Than
 *
 * Creates a less-than comparison from the given values.
 *
 * qb.lt(a, b) => (a < b)
 * OR
 * qbValue.lt(b) => (a < b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 * qb.ref('x').lt('y') => (x < y)
 *
 * @param x
 * @return
 */
export declare type AQLlt = (x: any) => AQLBinaryOperation;
/**
 * Less Than Or Equal To
 *
 * Creates a less-than-or-equal-to comparison from the given values.
 *
 * qb.lte(a, b) => (a <= b)
 * OR
 * qbValue.lte(b) => (a <= b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 * qb.ref('x').lte('y') => (x <= y)
 *
 * @param x
 * @return
 */
export declare type AQLlte = (x: any) => AQLBinaryOperation;
/**
 * Contains
 *
 * Creates an "in" comparison from the given values.
 *
 * qb.in(a, b) => (a in b)
 * OR:
 * qbValue.in(b) => (a in b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 * qb.ref('x').in('y') => (x in y)
 *
 * @param x
 * @return
 */
export declare type AQLin = (x: any[]) => AQLBinaryOperation;
/**
 * Negated Contains
 *
 * Creates a "not in" comparison from the given values.
 *
 * qb.notIn(a, b) => (a not in b)
 * OR:
 * qbValue.notIn(b) => (a not in b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 *
 * qb.ref('x').notIn('y') => (x not in y)
 *
 * @param x
 * @return
 */
export declare type AQLnotIn = (x: any[]) => AQLBinaryOperation;
/**
 * Boolean Or
 *
 * Creates an "or" operation from the given values.
 *
 * qb.or(a, b) => (a || b)
 * OR:
 * aqlValue.or(b) => (a || b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * This function can take any number of arguments.
 *
 * @param x
 * @return
 */
export declare type AQLor = (x: any) => AQLNAryOperation;
/**
 * Addition
 *
 * Creates an addition operation from the given values.
 *
 * qb.add(a, b) => (a + b)
 * OR:
 * aqlValue.add(b) => (a + b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 * This function can take any number of arguments.
 *
 * Alias: qb.plus(a, b)
 *
 * Examples
 *
 * qb.ref('x').plus('y') => (x + y)
 *
 * @param x
 * @return
 */
export declare type AQLadd = (x: any) => AQLNAryOperation;
/**
 * Subtraction
 *
 * Creates a subtraction operation from the given values.
 *
 * qb.sub(a, b) => (a - b)
 * OR:
 * aqlValue.sub(b) => (a - b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 * This function can take any number of arguments.
 *
 * Alias: qb.minus(a, b)
 *
 * Examples
 *
 * qb.ref('x').minus('y') => (x - y)
 *
 * @param x
 * @return
 */
export declare type AQLsub = (x: any) => AQLNAryOperation;
/**
 * Multiplication
 *
 * Creates a multiplication operation from the given values.
 *
 * qb.mul(a, b) => (a * b)
 * OR:
 * aqlValue.mul(b) => (a * b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 * This function can take any number of arguments.
 *
 * Alias: qb.times(a, b)
 *
 * Examples
 *
 * qb.ref('x').times('y') => (x * y)
 *
 * @param x
 * @return
 */
export declare type AQLmul = (x: any) => AQLNAryOperation;
/**
 * Division
 *
 * Creates a division operation from the given values.
 *
 * qb.div(a, b) => (a / b)
 * OR:
 * aqlValue.div(b) => (a / b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 * This function can take any number of arguments.
 *
 * Examples
 * qb.ref('x').div('y') => (x / y)
 *
 * @param x
 * @return
 */
export declare type AQLdiv = (x: any) => AQLNAryOperation;
/**
 * Modulus
 *
 * Creates a modulus operation from the given values.
 *
 * qb.mod(a, b) => (a % b)
 * OR:
 * aqlValue.mod(b) => (a % b)
 *
 * If the values are not already AQL values, they will be converted automatically.
 * This function can take any number of arguments.
 *
 * Examples
 * qb.ref('x').mod('y') => (x % y)
 *
 * @param x
 * @return
 */
export declare type AQLmod = (x: any) => AQLNAryOperation;
/**
 * Range
 *
 * Creates a range expression from the given values.
 *
 * qb.range(value1, value2) => value1..value2
 *
 * OR:
 *
 * aqlValue.range(value2) => value1..value2
 *
 * If the values are not already AQL values, they will be converted automatically.
 * Alias: qb.to(value1, value2)
 *
 * Examples
 *
 * qb(2).to(5) => 2..5
 *
 * @param value
 */
export declare type AQLrange = (value: any) => AQLRangeExpression;
/**
 * Property Access
 *
 * Creates a property access expression from the given values.
 *
 * qb.get(obj, key) => obj[key]
 * OR:
 * aqlObj.get(key) => obj[key]
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Examples
 * qb.ref('x').get('y') =>x[y]`
 *
 * @param value
 */
export declare type AQLget = (value: any) => AQLPropertyAccess;
/**
 * Ternary (if / else)
 *
 * Creates a ternary expression from the given values.
 *
 * qb.if(condition, thenDo, elseDo) => (condition ? thenDo : elseDo)
 * OR:
 * qbValue.then(thenDo).else(elseDo) => (condition ? thenDo : elseDo)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Alias: qbValue.then(thenDo).otherwise(elseDo)
 *
 * Examples
 * qb.ref('x').then('y').else('z') => (x ? y : z)
 *
 * @param value
 * @return
 */
export declare type AQLthen = (value: any) => ThenRet;
export interface ThenRet {
    /**
     *
     * @param y
     * @return
     */
    else(y: any): AQLTernaryOperation;
    /**
     *
     */
    else_: AQLTernaryOperation;
    /**
     *
     */
    otherwise(y: any): AQLTernaryOperation;
}
/**
 *
 */
export interface AQLExpression extends AQLPartialStatement {
    eq: AQLeq;
    neq: AQLneq;
    gt: AQLgt;
    gte: AQLgte;
    lt: AQLlt;
    lte: AQLlte;
    in: AQLin;
    notIn: AQLnotIn;
    or: AQLor;
    add: AQLadd;
    plus: AQLadd;
    sub: AQLsub;
    minus: AQLsub;
    mul: AQLmul;
    times: AQLmul;
    div: AQLdiv;
    mod: AQLmod;
    range: AQLrange;
    get: AQLget;
    then: AQLthen;
}
/**
 * FOR expression IN collection
 *
 * PartialStatement::for(expression).in(collection) : PartialStatement
 *
 * Examples
 *
 * _.for('doc').in('my_collection') => FOR doc IN my_collection
 *
 * @param varname
 * @return
 */
export declare type AQLfor = (varname: any) => ForRet;
export interface ForRet {
    /**
     *
     * @param expr
     * @return
     */
    in(expr: any): AQLForExpression;
    in_: ForRet["in"];
}
/**
 * FILTER expression
 *
 * PartialStatement::filter(expression) : PartialStatement
 *
 * Examples
 *
 * _.filter(qb.eq('a', 'b')) => FILTER a == b
 *
 * @param varname
 * @return
 */
export declare type AQLfilter = (varname: any) => AQLFilterExpression;
/**
 * LET varname = expression
 *
 * PartialStatement::let(varname, expression) : PartialStatement
 *
 * Examples
 *
 * _.let('foo', 23) => LET foo = 23
 *
 * LET var1 = expr1, var2 = expr2, …, varn = exprn
 *
 * PartialStatement::let(definitions) : PartialStatement
 *
 * @param varname
 * @param expr
 * @return
 */
export declare type AQLlet = (varname: Let0, expr: string) => AQLLetExpression;
export interface Let0 {
}
/**
 * COLLECT
 *
 * COLLECT WITH COUNT INTO varname
 * PartialStatement::collectWithCountInto(varname) : CollectExpression
 *
 * Examples
 *
 * _.collectWithCountInto('x') => COLLECT WITH COUNT INTO x COLLECT varname = expression
 * PartialStatement::collect(varname, expression) : CollectExpression
 *
 *  _.collect('x', 'y') => COLLECT x = y COLLECT var1 = expr1, var2 = expr2, …, varn = exprn
 * PartialStatement::collect(definitions) : CollectExpression
 *
 * _.collect({x: 'a', y: 'b'}) => COLLECT x = a, y = b WITH COUNT INTO varname
 * CollectExpression::withCountInto(varname) : CollectExpression
 *
 * _.withCountInto('x') => WITH COUNT INTO x INTO varname
 * CollectExpression::into(varname) : CollectExpression
 *
 * _.into('z') => INTO z KEEP ...vars
 * CollectExpression::keep(...vars) : CollectExpression
 *
 * _.into('z').keep('a', 'b') => INTO z KEEP a, b INTO varname = expression
 * CollectExpression::into(varname, expression) : CollectExpression
 *
 * _.into('x', 'y') => INTO x = y OPTIONS options
 * CollectExpression::options(options) : CollectExpression
 *
 * _.options('opts') => OPTIONS opts
 *
 * @param varname
 * @param expr
 * @return
 */
export declare type AQLcollect = (varname: any, expr: any) => AQLCollectExpression;
/**
 * COLLECT
 *
 * COLLECT WITH COUNT INTO varname
 * PartialStatement::collectWithCountInto(varname) : CollectExpression
 *
 * Examples
 *
 * _.collectWithCountInto('x') => COLLECT WITH COUNT INTO x COLLECT varname = expression
 * PartialStatement::collect(varname, expression) : CollectExpression
 *
 *  _.collect('x', 'y') => COLLECT x = y COLLECT var1 = expr1, var2 = expr2, …, varn = exprn
 * PartialStatement::collect(definitions) : CollectExpression
 *
 * _.collect({x: 'a', y: 'b'}) => COLLECT x = a, y = b WITH COUNT INTO varname
 * CollectExpression::withCountInto(varname) : CollectExpression
 *
 * _.withCountInto('x') => WITH COUNT INTO x INTO varname
 * CollectExpression::into(varname) : CollectExpression
 *
 * _.into('z') => INTO z KEEP ...vars
 * CollectExpression::keep(...vars) : CollectExpression
 *
 * _.into('z').keep('a', 'b') => INTO z KEEP a, b INTO varname = expression
 * CollectExpression::into(varname, expression) : CollectExpression
 *
 * _.into('x', 'y') => INTO x = y OPTIONS options
 * CollectExpression::options(options) : CollectExpression
 *
 * _.options('opts') => OPTIONS opts
 *
 * @param varname
 * @return
 */
export declare type AQLcollectWithCountInto = (varname: any) => AQLCollectWithCountIntoExpression;
/**
 * SORT ...args
 *
 * PartialStatement::sort(...args) : PartialStatement
 *
 * Examples
 *
 * _.sort('x', 'DESC', 'y', 'ASC') => SORT x DESC, y ASC
 *
 * @return
 */
export declare type AQLsort = () => AQLSortExpression;
/**
 * LIMIT offset, count
 *
 * PartialStatement::limit([offset,] count) : PartialStatement
 *
 * Examples
 *
 * _.limit(20) => LIMIT 20
 *
 * _.limit(20, 20) => LIMIT 20, 20
 *
 * @param x
 * @param y
 * @return
 */
export declare type AQLlimit = (x: any, y: any) => AQLLimitExpression;
/**
 * RETURN expression
 *
 * PartialStatement::return(expression) : ReturnExpression
 *
 * Examples
 *
 * _.return('x') => RETURN x
 * _.return({x: 'x'}) => RETURN {x: x}
 *
 * @param x
 * @return
 */
export declare type AQLreturn = (x: any) => AQLReturnExpression;
/**
 * RETURN DISTINCT expression
 *
 * PartialStatement::returnDistinct(expression) : ReturnExpression
 *
 * Examples
 *
 * _.returnDistinct('x') => RETURN DISTINCT x
 *
 * @param x
 * @return
 */
export declare type AQLreturnDistinct = (x: any) => AQLReturnExpression;
/**
 * REMOVE
 *
 * REMOVE expression IN collection
 * PartialStatement::remove(expression).in(collection) : RemoveExpression
 *
 * Alias: remove(expression).into(collection)
 *
 * Examples
 *
 * _.remove('x').in('y') => REMOVE x IN y LET varname = OLD RETURN varname
 * RemoveExpression::returnOld(varname) : ReturnExpression
 *
 * _.returnOld('z') => LET z = OLD RETURN z OPTIONS options
 * RemoveExpression::options(options) : RemoveExpression
 *
 * _.options('opts') => OPTIONS opts
 *
 * @param expr
 * @return
 */
export declare type AQLremove = (expr: any) => AQLRemoveRet;
export interface AQLRemoveRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): AQLRemoveExpression;
    in: AQLRemoveRet["into"];
    in_: AQLRemoveRet["into"];
}
/**
 * UPSERT
 *
 * UPSERT expression1 INSERT expression2 REPLACE expression3 IN collection
 * PartialStatement::upsert(expression1).insert(expression2).replace(expression3).in(collection) : UpsertExpression
 *
 * Alias: ….into(collection)
 *
 * Examples
 *
 * _.upsert('x').insert('y').replace('z').in('c') => UPSERT x INSERT y REPLACE z IN c
 *
 * UPSERT expression1 INSERT expression2 UPDATE expression3 IN collection
 * PartialStatement::upsert(expression1).insert(expression2).update(expression3).in(collection) : UpsertExpression
 *
 * Alias: ….into(collection)
 *
 * _.upsert('x').insert('y').update('z').in('c') => UPSERT x INSERT y UPDATE z IN c OPTIONS options
 * UpsertExpression::options(options) : UpsertExpression
 *
 * _.options('opts') => OPTIONS opts
 *
 * @param upsertExpr
 * @return
 */
export declare type AQLupsert = (expr: any) => AQLUpsertRet;
export interface AQLUpsertRet {
    /**
     *
     * @param insertExpr
     * @return
     */
    insert(insertExpr: any): AQLUpsertRetInsertRet;
}
export interface AQLUpsertRetInsertRet {
    /**
     *
     * @param updateOrReplaceExpr
     * @return
     */
    update(updateOrReplaceExpr: any): AQLUpsertRetInsertRetUpdateRet;
    replace: AQLUpsertRetInsertRet["update"];
}
export interface AQLUpsertRetInsertRetUpdateRet {
    /**
     *
     * @param inCollection
     * @return
     */
    into(inCollection: any): AQLUpsertExpression;
    in: AQLUpsertRetInsertRetUpdateRet["into"];
    in_: AQLUpsertRetInsertRetUpdateRet["into"];
}
/**
 * INSERT
 *
 * INSERT expression INTO collection
 *  PartialStatement::insert(expression).into(collection) : InsertExpression
 *
 * Alias: insert(expression).in(collection)
 *
 * Examples
 *
 * _.insert('x').into('y') => INSERT x INTO y OPTIONS options
 * InsertExpression::options(options) : InsertExpression
 *
 *  _.options('opts') => OPTIONS opts LET varname = NEW RETURN varname
 * InsertExpression::returnNew(varname) : ReturnExpression
 *
 * _.returnNew('z') => LET z = NEW RETURN z
 *
 * @param expr
 * @return
 */
export declare type AQLinsert = (expr: any) => AQLInsertRet;
export interface AQLInsertRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): AQLInsertExpression;
    in: AQLInsertRet["into"];
    in_: AQLInsertRet["into"];
}
/**
 * UPDATE
 *
 * UPDATE expression IN collection
 * PartialStatement::update(expression).in(collection) : UpdateExpression
 *
 * Alias: update(expression).into(collection)
 *
 * Examples
 *
 * _.update('x').in('y') => UPDATE x IN y
 *
 * UPDATE expression1 WITH expression2 IN collection
 * PartialStatement::update(expression1).with(expression2).in(collection) : UpdateExpression
 *
 * Alias: update(expression1).with(expression2).into(collection)
 *
 * _.update('x').with('y').in('z') => UPDATE x WITH y IN z OPTIONS options
 * UpdateExpression::options(options) : UpdateExpression
 *
 * _.options('opts') => OPTIONS opts LET varname = NEW RETURN varname
 * UpdateExpression::returnNew(varname) : ReturnExpression
 *
 * _.returnNew('z') => LET z = NEW RETURN z LET varname = OLD RETURN varname
 * UpdateExpression::returnOld(varname) : ReturnExpression
 *
 * _.returnOld('z') => LET z = OLD RETURN z
 *
 * @param expr
 * @return
 */
export declare type AQLupdate = (expr: any) => AQLUpdateRetWithRet;
export interface AQLUpdateRetWithRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): AQLUpdateExpression;
    in: AQLUpdateRetWithRet["into"];
    in_: AQLUpdateRetWithRet["into"];
}
/**
 * REPLACE
 *
 * REPLACE expression IN collection
 * PartialStatement::replace(expression).in(collection) : ReplaceExpression
 *
 * Alias: replace(expression).into(collection)
 *
 * Examples
 *
 * _.replace('x').in('y') => REPLACE x IN y REPLACE expression1 WITH expression2 IN collection
 * PartialStatement::replace(expression1).with(expression2).in(collection) : ReplaceExpression
 *
 * Alias: replace(expression1).with(expression2).into(collection)
 *
 * _.replace('x').with('y').in('z') => REPLACE x WITH y IN z OPTIONS options
 * ReplaceExpression::options(options) : ReplaceExpression
 *
 * _.options('opts') => OPTIONS opts LET varname = NEW RETURN varname
 *  ReplaceExpression::returnOld(varname) : ReturnExpression
 *
 * _.returnNew('z') => LET z = NEW RETURN z LET varname = OLD RETURN varname
 * ReplaceExpression::returnNew(varname) : ReturnExpression
 *
 * _.returnOld('z') => LET z = OLD RETURN z
 *
 * @param expr
 * @return
 */
export declare type AQLreplace = (expr: any) => AQLUpdateRetWithRet;
export interface AQLReplaceRetWithRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): AQLReplaceExpression;
    in: AQLReplaceRetWithRet["into"];
    in_: AQLReplaceRetWithRet["into"];
}
/**
 * AQLPartialStatement
 *
 * In addition to the methods documented above, the query builder provides all methods of PartialStatement objects.
 * AQL Statement objects have a method toAQL() which returns their AQL representation as a JavaScript string.
 *
 * Examples
 *
 * qb.for('doc').in('my_collection').return('doc._key').toAQL()
 * // => FOR doc IN my_collection RETURN doc._key
 */
export interface AQLPartialStatement {
    for: AQLfor;
    filter: AQLfilter;
    let: AQLlet;
    collect: AQLcollect;
    collectWithCountInto: AQLcollectWithCountInto;
    sort: AQLsort;
    limit: AQLlimit;
    return: AQLreturn;
    returnDistinct: AQLreturnDistinct;
    remove: AQLremove;
    upsert: AQLupsert;
    insert: AQLinsert;
    update: AQLupdate;
    replace: AQLreplace;
}

/**
 *
 * @param self
 * @param args
 * @return
 */
export declare type toArray = (self: AQLExpression, args: 1) => 1;
/**
 *
 * @param str
 * @return
 */
export declare type isQuotedString = (str: string) => boolean;
/**
 *
 * @param expr
 * @return
 */
export declare type wrapAQL = (expr: AQLKeyword) => string;
/**
 *
 * @param number
 * @return
 */
export declare type isValidNumber = (number: number) => boolean;
/**
 *
 * @param number
 * @return
 */
export declare type castNumber = (number: any) => AQLIntegerLiteral;
/**
 *
 * @param bool
 * @return
 */
export declare type castBoolean = (bool: any) => AQLBooleanLiteral;
/**
 *
 * @param str
 * @return
 */
export declare type castString = (str: any) => number;
/**
 *
 * @param obj
 * @return
 */
export declare type castObject = (obj: any) => {};
/**
 *
 * @param token
 * @return
 */
export declare type autoCastToken = (token: number | AQLExpression) => number | AQLExpression;
/**
 * Boolean
 *
 * Wraps the given value as an AQL Boolean literal.
 *
 * qb.bool(value)
 *
 * If the value is truthy, it will be converted to the AQL Boolean true, otherwise it will be converted to the AQL Boolean false.
 * If the value is already an AQL Boolean, its own value will be wrapped instead.
 *
 * @param value
 */
export declare type AQLbool = (value: any) => AQLBooleanLiteral;
/**
 * Number
 *
 * Wraps the given value as an AQL Number literal.
 *
 * qb.num(value)
 *
 * If the value is not a JavaScript Number, it will be converted first.
 * If the value does not represent a finite number, an AQLError will be thrown.
 * If the value is already an AQL Number or AQL Integer, its own value will be wrapped instead.
 *
 * @param value
 */
export declare type AQLnum = (value: any) => AQLNumberLiteral;
/**
 * Integer
 *
 * Wraps the given value as an AQL Integer literal.
 *
 * qb.int(value)
 *
 * If the value is not a JavaScript Number, it will be converted first.
 * If the value does not represent a finite integer, an AQLError will be thrown.
 * If the value is already an AQL Number or AQL Integer, its own value will be wrapped instead.
 *
 * @param value
 */
export declare type AQLint = (value: any) => AQLIntegerLiteral;
/**
 * String
 *
 * Wraps the given value as an AQL String literal.
 *
 * qb.str(value)
 *
 * If the value is not a JavaScript String, it will be converted first.
 * If the value is a quoted string, it will be treated as a string literal.
 * If the value is an object with a toAQL method, the result of calling that method will be wrapped instead.
 *
 * Examples
 *
 * 23 => "23"
 *
 * "some string" => "some string"
 *
 * '"some string"' => "\"some string\""
 *
 *
 * @param value
 */
export declare type AQLstr = (value: any) => AQLStringLiteral;
/**
 * List
 *
 * Wraps the given value as an AQL List (Array) literal.
 *
 * qb.list(value)
 *
 * If the value is not a JavaScript Array, an AQLError will be thrown.
 * If the value is already an AQL List, its own value will be wrapped instead.
 * Any list elements that are not already AQL values will be converted automatically.
 *
 * @param value
 */
export declare type AQLlist = (value: any[]) => AQLListLiteral;
/**
 * Object
 *
 * Wraps the given value as an AQL Object literal.
 *
 * qb.obj(value)
 *
 * If the value is not a JavaScript Object, an AQLError will be thrown.
 * If the value is already an AQL Object, its own value will be wrapped instead.
 * Any property values that are not already AQL values will be converted automatically.
 * Any keys that are quoted strings will be treated as string literals.
 * Any keys that start with the character ":" will be treated as dynamic properties and must be well-formed simple references.
 * Any other keys that need escaping will be quoted if necessary.
 * If you need to pass in raw JavaScript objects that shouldn't be converted according to these rules, you can use the qb function directly instead.
 *
 * Examples
 *
 * qb.obj({'some.name': 'value'}) => {"some.name": value}
 *
 * qb.obj({hello: world}) => {hello: world}
 *
 * qb.obj({'"hello"': world}) => {"hello": world}
 *
 * qb.obj({':dynamic': 'props'}) => {[dynamic]: props}
 *
 * qb.obj({': invalid': 'key'}) => throws an error (invalid is not a well-formed reference)
 *
 * @param obj
 */
export declare type AQLobj = (obj: {}) => AQLObjectLiteral;
/**
 * Simple Reference
 *
 * Wraps a given value in an AQL Simple Reference.
 *
 * qb.ref(value)
 *
 * If the value is not a JavaScript string or not a well-formed simple reference, an AQLError will be thrown.
 * If the value is an ArangoCollection, its name property will be used instead.
 * If the value is already an AQL Simple Reference, its value is wrapped instead.
 *
 * Examples
 *
 * Valid values:
 *
 * foo
 *
 * foo.bar
 *
 * foo[*].bar
 *
 * foo.bar.QUX
 *
 * _foo._bar._qux
 *
 * foo1.bar2
 *
 * `foo`.bar
 *
 * foo.`bar`
 *
 * Invalid values:
 *
 * 1foo
 *
 * föö
 *
 * foo bar
 *
 * foo[bar]
 *
 * @param value
 * @return
 */
export declare type AQLref = (value: string) => AQLSimpleReference;
/**
 * Expressions
 *
 * @param value
 */
export declare type AQLexpr = (value: any) => AQLRawExpression;
/**
 * Ternary (if / else)
 *
 * Creates a ternary expression from the given values.
 *
 * qb.if(condition, thenDo, elseDo) => (condition ? thenDo : elseDo)
 * OR:
 * qbValue.then(thenDo).else(elseDo) => (condition ? thenDo : elseDo)
 *
 * If the values are not already AQL values, they will be converted automatically.
 *
 * Alias: qbValue.then(thenDo).otherwise(elseDo)
 *
 * Examples
 * qb.ref('x').then('y').else('z') => (x ? y : z)
 *
 * @param cond
 * @param then
 * @param otherwise
 */
export declare type AQLif = (cond: any, then: any, otherwise: any) => AQLExpression | number;
/**
 * Function Call
 *
 * Creates a functon call for the given name and arguments.
 *
 * qb.fn(name)(...args)
 *
 * If the values are not already AQL values, they will be converted automatically.
 * For built-in functions, methods with the relevant function name are already provided by the query builder.
 *
 * Examples
 *
 * qb.fn('MY::USER::FUNC')(1, 2, 3) => MY::USER::FUNC(1, 2, 3)
 *
 * qb.fn('hello')() => hello()
 *
 * qb.RANDOM() => RANDOM()
 *
 * qb.FLOOR(qb.div(5, 2)) => FLOOR((5 / 2))
 *
 * @param functionName
 * @param arity
 * @return
 */
export declare type AQLfn = (functionName: string, arity: Array<any>) => () => AQLFunctionCall;
/**
 * AQLTypes
 *
 * If raw JavaScript values are passed to AQL statements, they will be wrapped in a matching AQL type automatically.
 * JavaScript strings wrapped in quotation marks will be wrapped in AQL strings, all other JavaScript strings will be wrapped as simple references (see AQLref)
 * and throw an AQLError if they are not well-formed.
 */
export interface AQLTypes extends AQLExpression {
    if: AQLif;
    bool: AQLbool;
    num: AQLnum;
    int: AQLint;
    str: AQLstr;
    list: AQLlist;
    obj: AQLobj;
    ref: AQLref;
    expr: AQLexpr;
    fn: AQLfn;
}
export interface QB extends AQLTypes {
    /**
     *
     * @param obj
     * @return
     */
    new (obj: any): QB;
}
export default QB;