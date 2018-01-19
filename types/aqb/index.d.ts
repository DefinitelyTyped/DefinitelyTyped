// Type definitions for aqbjs 2.1
// Project: https://github.com/arangodb/aqbjs
// Definitions by: Athenkosi Mase <https://github.com/Athenkosi-Mase>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/**
 * Error
 */
interface AqlError extends Error {
    /**
     *
     * @param message
     */
    new(message: string): Error;
    name: string;
}
interface Operation extends Expression {
    new(): Expression;
}
interface BinaryOperation extends Operation {
    /**
     *
     * @param operator
     * @param value1
     * @param value2
     */
    new(operator: string, value1: any, value2: any): Operation;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator: string;
}
interface UnaryOperation extends Expression {
    /**
     *
     * @param operator
     * @param value
     */
    new(operator: string, value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator: string;
}
interface SimpleReference extends Expression {
    /**
     *
     * @param value
     */
    new(value: string): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    re: RegExp;
    _value: string;
}
interface RawExpression extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
interface BooleanLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: boolean;
}
interface NumberLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    re: RegExp;
}
interface IntegerLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: number;
}
interface StringLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
interface ListLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(...value: any[]): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
interface ObjectLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: object;
}
interface NAryOperation extends Operation {
    /**
     *
     * @param operator
     * @param values
     */
    new(operator: string, values: any[]): Operation;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator: string;
    _values: Expression[];
}
interface RangeExpression extends Expression {
    /**
     *
     * @param start
     * @param end
     */
    new(start: any, end?: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _start: number;
    _end: number;
    re: RegExp;
}
interface PropertyAccess extends Expression {
    /**
     *
     * @param obj
     * @param keys
     */
    new(obj: any, keys: any[]): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _obj: Expression;
    _keys: Expression[];
}
interface TernaryOperation extends Operation {
    /**
     *
     * @param operator1
     * @param operator2
     * @param value1
     * @param value2
     * @param value3
     */
    new(operator1: string, operator2: string, value1: Expression, value2: any, value3: any): Operation;
    /**
     *
     * @return
     */
    toAQL(): string;
    _operator1: string;
    _operator2: string;
}
interface NullLiteral extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
}
interface Keyword extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: string;
    re: RegExp;
}
interface Identifier extends Expression {
    /**
     *
     * @param value
     */
    new(value: any): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _value: string;
}
interface FunctionCall extends Expression {
    /**
     *
     * @param functionName
     * @param args
     */
    new(functionName: string, ...args: any[]): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _re: RegExp;
    _functionName: string;
    _args: any[];
}
interface ForExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param varname
     * @param expr
     */
    new(prev: PartialStatement, varname: any, expr: any): PartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    _varname: Identifier;
}
interface FilterExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param expr
     */
    new(prev: PartialStatement, expr: any): PartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
}
interface Definitions {
    /**
     *
     * @param dfns
     */
    new(...dfns: any[]): any;
    /**
     *
     * @return
     */
    toAQL(): string;
    _dfns: any[];
}
interface LetExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param dfns
     * @param param
     */
    new(prev: PartialStatement, ...dfns: any[]): PartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    _prev: PartialStatement;
    _dfns: Definitions;
}
interface CollectExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param dfns
     * @param param
     * @param varname
     * @param intoExpr
     * @param keepNames
     * @param options
     */
    new(prev: PartialStatement, dfns: any[], varname: any, intoExpr: any, keepNames: any[], options: any): PartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    /**
     *
     * @param newVarname
     * @return
     */
    into(...newVarname: any[]): CollectExpression;
    /**
     *
     * @return
     */
    keep(...x: any[]): any;
    _keep: Identifier[];
    /**
     *
     * @param newOpts
     * @return
     */
    options(newOpts: any): any;
    _options: ObjectLiteral;
    /**
     *
     * @param newVarname
     * @return
     */
    withCountInto(newVarname: any): CollectWithCountIntoExpression;
}
interface CollectWithCountIntoExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param dfns
     * @param param
     * @param varname
     * @param options
     */
    new(prev: PartialStatement, dfns: any[], varname: any, options: any): PartialStatement;
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
interface SortExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param args
     */
    new(prev: PartialStatement, ...args: any[]): PartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
    keywords: string[];
    _args: Keyword[];
}
interface LimitExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param offset
     * @param count
     */
    new(prev: PartialStatement, offset: any, count?: any): PartialStatement;
    /**
     *
     * @return
     */
    toAQL(): string;
}
interface ReturnExpression extends Expression {
    /**
     *
     * @param prev
     * @param value
     * @param distinct
     */
    new(prev: LetExpression, value: any, distinct: boolean): Expression;
    /**
     *
     * @return
     */
    toAQL(): string;
    _prev: LetExpression;
    _distinct: boolean;
}
interface RemoveExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param collection
     * @param options
     */
    new(prev: PartialStatement, expr: any, collection: any, options: any): PartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): ReturnExpression;
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
    options(newOpts: any): RemoveExpression;
}
interface UpsertExpression extends PartialStatement {
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
    new(prev: PartialStatement, upsertExpr: any, insertExpr: any, replace: boolean, updateOrReplaceExpr: any, collection: any, options: any): PartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): ReturnExpression;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): ReturnExpression;
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
    options(newOpts: any): UpsertExpression;
}
interface InsertExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param collection
     * @param options
     */
    new(prev: PartialStatement, expr: any, collection: any, options: any): PartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): ReturnExpression;
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
    options(newOpts: any): InsertExpression;
}
interface UpdateExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param withExpr
     * @param collection
     * @param options
     */
    new(prev: PartialStatement, expr: any, withExpr: any, collection: any, options: any): PartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): ReturnExpression;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): ReturnExpression;
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
    options(newOpts: any): UpdateExpression;
}
interface ReplaceExpression extends PartialStatement {
    /**
     *
     * @param prev
     * @param expr
     * @param withExpr
     * @param collection
     * @param options
     */
    new(prev: PartialStatement, expr: any, withExpr: any, collection: any, options: any): PartialStatement;
    /**
     *
     * @param x
     * @return
     */
    returnNew(x: any): ReturnExpression;
    /**
     *
     * @param x
     * @return
     */
    returnOld(x: any): ReturnExpression;
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
    options(newOpts: any): ReplaceExpression;
}
/**
 * Expression
 */
interface Expression extends PartialStatement {
    /**
     * Equality
     *
     * Creates an equality comparison from the given values.
     *
     * qb.eq(a, b): (a == b)
     * OR:
     * qbValue.eq(b): (a == b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     * qb.ref('x').eq('y'): (x == y)
     *
     *
     * @param x
     * @param y
     * @return
     */
    eq(x: any, y?: any): BinaryOperation;
    /**
     * Inequality
     *
     * Creates an inequality comparison from the given values.
     *
     * qb.neq(a, b): (a != b)
     * OR:
     * qbValue.neq(b): (a != b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     * qb.ref('x').neq('y'): (x != y)
     *
     * @param x
     * @param y
     * @return
     */
    neq(x: any, y?: any): BinaryOperation;
    /**
     * Greater Than
     *
     * Creates a greater-than comparison from the given values.
     *
     * qb.gt(a, b): (a > b)
     * OR
     * qbValue.gt(b): (a > b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     *  qb.ref('x').gt('y'): (x > y)
     *
     *
     * @param x
     * @param y
     * @return
     */
    gt(x: any, y?: any): BinaryOperation;
    /**
     * Greater Than Or Equal To
     *
     * Creates a greater-than-or-equal-to comparison from the given values.
     *
     * qb.gte(a, b): (a >= b)
     * OR
     * qbValue.gte(b): (a >= b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     * qb.ref('x').gte('y'): (x >= y)
     *
     *
     * @param x
     * @param y
     * @return
     */
    gte(x: any, y?: any): BinaryOperation;
    /**
     * Less Than
     *
     * Creates a less-than comparison from the given values.
     *
     * qb.lt(a, b): (a < b)
     * OR
     * qbValue.lt(b): (a < b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     * qb.ref('x').lt('y'): (x < y)
     *
     * @param x
     * @param y
     * @return
     */
    lt(x: any, y?: any): BinaryOperation;
    /**
     * Less Than Or Equal To
     *
     * Creates a less-than-or-equal-to comparison from the given values.
     *
     * qb.lte(a, b): (a <= b)
     * OR
     * qbValue.lte(b): (a <= b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     * qb.ref('x').lte('y'): (x <= y)
     *
     * @param x
     * @param y
     * @return
     */
    lte(x: any, y?: any): BinaryOperation;
    /**
     * Contains
     *
     * Creates an "in" comparison from the given values.
     *
     * qb.in(a, b): (a in b)
     * OR:
     * qbValue.in(b): (a in b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     * qb.ref('x').in('y'): (x in y)
     *
     * @param x
     * @return
     */
    in(...x: any[]): BinaryOperation;
    /**
     * Negation
     *
     * Creates a negation from the given value.
     *
     * qb.not(a) => !(a)
     * OR:
     * qbValue.not() => !(a)
     *
     * If the value is not already an  value, it will be converted automatically.
     *
     * Examples
     *
     * qb.not('x') => !(x)
     *
     * @param x
     * @return
     */
    not(x?: any): UnaryOperation;
    /**
     * Negative Value
     *
     * Creates a negative value expression from the given value.
     *
     * qb.neg(a) => -(a)
     * OR:
     * qbValue.neg() => -(a)
     *
     * If the value is not already an AQL value, it will be converted automatically.
     *
     * Examples
     *
     * qb.neg('x') => -(x)
     *
     * @param x
     * @return
     */
    neg(x?: any): UnaryOperation;
    /**
     * Negated Contains
     *
     * Creates a "not in" comparison from the given values.
     *
     * qb.notIn(a, b): (a not in b)
     * OR:
     * qbValue.notIn(b): (a not in b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     *
     * qb.ref('x').notIn('y'): (x not in y)
     *
     * @param x
     * @return
     */
    notIn(...x: any[]): BinaryOperation;
    /**
     * Boolean And
     *
     * Creates an "and" operation from the given values.
     *
     * qb.and(a, b) =>(a && b)
     * OR:
     * aqlValue.and(b) =>(a && b)
     *
     * If the values are not already AQL values, they will be converted automatically.
     * This declare function can take any number of arguments.
     *
     * Examples
     *
     * qb.ref('x').and('y') =>(x && y)
     *
     * @param x
     * @return
     */
    and(...x: any[]): NAryOperation;
    /**
     * Boolean Or
     *
     * Creates an "or" operation from the given values.
     *
     * qb.or(a, b): (a || b)
     * OR:
     * Value.or(b): (a || b)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * This declare function can take any number of arguments.
     *
     * @param x
     * @return
     */
    or(...x: any[]): NAryOperation;
    /**
     * Addition
     *
     * Creates an addition operation from the given values.
     *
     * qb.add(a, b): (a + b)
     * OR:
     * Value.add(b): (a + b)
     *
     * If the values are not already  values, they will be converted automatically.
     * This declare function can take any number of arguments.
     *
     * Alias: qb.plus(a, b)
     *
     * Examples
     *
     * qb.ref('x').plus('y'): (x + y)
     *
     * @param x
     * @return
     */
    add(...x: any[]): NAryOperation;
    plus(...x: any[]): NAryOperation;
    /**
     * Subtraction
     *
     * Creates a subtraction operation from the given values.
     *
     * qb.sub(a, b): (a - b)
     * OR:
     * Value.sub(b): (a - b)
     *
     * If the values are not already  values, they will be converted automatically.
     * This declare function can take any number of arguments.
     *
     * Alias: qb.minus(a, b)
     *
     * Examples
     *
     * qb.ref('x').minus('y'): (x - y)
     *
     * @param x
     * @return
     */
    sub(...x: any[]): NAryOperation;
    minus(...x: any[]): NAryOperation;
    /**
     * Multiplication
     *
     * Creates a multiplication operation from the given values.
     *
     * qb.mul(a, b): (a * b)
     * OR:
     * Value.mul(b): (a * b)
     *
     * If the values are not already  values, they will be converted automatically.
     * This declare function can take any number of arguments.
     *
     * Alias: qb.times(a, b)
     *
     * Examples
     *
     * qb.ref('x').times('y'): (x * y)
     *
     * @param x
     * @return
     */
    mul(...x: any[]): NAryOperation;
    times(...x: any[]): NAryOperation;
    /**
     * Division
     *
     * Creates a division operation from the given values.
     *
     * qb.div(a, b): (a / b)
     * OR:
     * Value.div(b): (a / b)
     *
     * If the values are not already  values, they will be converted automatically.
     * This declare function can take any number of arguments.
     *
     * Examples
     * qb.ref('x').div('y'): (x / y)
     *
     * @param x
     * @return
     */
    div(...x: any[]): NAryOperation;
    /**
     * Modulus
     *
     * Creates a modulus operation from the given values.
     *
     * qb.mod(a, b): (a % b)
     * OR:
     * Value.mod(b): (a % b)
     *
     * If the values are not already  values, they will be converted automatically.
     * This declare function can take any number of arguments.
     *
     * Examples
     * qb.ref('x').mod('y'): (x % y)
     *
     * @param x
     * @return
     */
    mod(...x: any[]): NAryOperation;
    /**
     * Range
     *
     * Creates a range expression from the given values.
     *
     * qb.range(value1, value2): value1..value2
     *
     * OR:
     *
     * Value.range(value2): value1..value2
     *
     * If the values are not already  values, they will be converted automatically.
     * Alias: qb.to(value1, value2)
     *
     * Examples
     *
     * qb(2).to(5): 2..5
     *
     * @param value
     * @return
     */
    range(...value: number[]): RangeExpression;
    /**
     * Property Access
     *
     * Creates a property access expression from the given values.
     *
     * qb.get(obj, key): obj[key]
     * OR:
     * Obj.get(key): obj[key]
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Examples
     * qb.ref('x').get('y'): x[y]`
     *
     * @param value
     */
    get(value: any): PropertyAccess;
    /**
     * Ternary(if / else)
     *
     * Creates a ternary expression from the given values.
     *
     * qb.if(condition, thenDo, elseDo): (condition ? thenDo: elseDo)
     * OR:
     * qbValue.then(thenDo).else(elseDo): (condition ? thenDo: elseDo)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Alias: qbValue.then(thenDo).otherwise(elseDo)
     *
     * Examples
     * qb.ref('x').then('y').else('z'): (x ? y: z)
     *
     * @param value
     * @return
     */
    then(value: any): ThenRet;
}
interface ThenRet {
    /**
     *
     * @param y
     * @return
     */
    else(y: any): TernaryOperation;
    else_: TernaryOperation;
    /**
     *
     * @param y
     * @return
     */
    otherwise(y: any): TernaryOperation;
}
interface ForRet {
    /**
     *
     * @param expr
     * @return
     */
    in(expr: any): ForExpression;
    in_: ForRet["in"];
}
/**
 * PartialStatement
 *
 * In addition to the methods documented above, the query builder provides all methods of PartialStatement objects.
 *  Statement objects have a method toAQL() which returns their  representation as a JavaScript string.
 *
 * Examples
 *
 * qb.for('doc').in('my_collection').return('doc._key').toAQL()
 * // => FOR doc IN my_collection RETURN doc._key
 */
interface PartialStatement {
    /**
     * FOR expression IN collection
     *
     * PartialStatement::for(expression).in(collection): PartialStatement
     *
     * Examples
     *
     * _.for('doc').in('my_collection'): FOR doc IN my_collection
     *
     * @param varname
     * @return
     */
    for(varname: any): ForRet;
    /**
     * FILTER expression
     *
     * PartialStatement::filter(expression): PartialStatement
     *
     * Examples
     *
     * _.filter(qb.eq('a', 'b')): FILTER a == b
     *
     * @param varname
     * @return
     */
    filter(varname: any): FilterExpression;
    /**
     * LET varname = expression
     *
     * PartialStatement::let(varname, expression): PartialStatement
     *
     * Examples
     *
     * _.let('foo', 23): LET foo = 23
     *
     * LET var1 = expr1, var2 = expr2, …, varn = exprn
     *
     * PartialStatement::let(definitions): PartialStatement
     *
     * @param varname
     * @param expr
     * @return
     */
    let(varname: {}, expr: any): LetExpression;
    /**
     * COLLECT
     *
     * COLLECT WITH COUNT INTO varname
     * PartialStatement::collectWithCountInto(varname): CollectExpression
     *
     * Examples
     *
     * _.collectWithCountInto('x'): COLLECT WITH COUNT INTO x COLLECT varname = expression
     * PartialStatement::collect(varname, expression): CollectExpression
     *
     *  _.collect('x', 'y'): COLLECT x = y COLLECT var1 = expr1, var2 = expr2, …, varn = exprn
     * PartialStatement::collect(definitions): CollectExpression
     *
     * _.collect({x: 'a', y: 'b'}): COLLECT x = a, y = b WITH COUNT INTO varname
     * CollectExpression::withCountInto(varname): CollectExpression
     *
     * _.withCountInto('x'): WITH COUNT INTO x INTO varname
     * CollectExpression::into(varname): CollectExpression
     *
     * _.into('z'): INTO z KEEP ...vars
     * CollectExpression::keep(...vars): CollectExpression
     *
     * _.into('z').keep('a', 'b'): INTO z KEEP a, b INTO varname = expression
     * CollectExpression::into(varname, expression): CollectExpression
     *
     * _.into('x', 'y'): INTO x = y OPTIONS options
     * CollectExpression::options(options): CollectExpression
     *
     * _.options('opts'): OPTIONS opts
     *
     * @param varname
     * @param expr
     * @return
     */
    collect(varname: any, expr: any): CollectExpression;
    /**
     * COLLECT
     *
     * COLLECT WITH COUNT INTO varname
     * PartialStatement::collectWithCountInto(varname): CollectExpression
     *
     * Examples
     *
     * _.collectWithCountInto('x'): COLLECT WITH COUNT INTO x COLLECT varname = expression
     * PartialStatement::collect(varname, expression): CollectExpression
     *
     *  _.collect('x', 'y'): COLLECT x = y COLLECT var1 = expr1, var2 = expr2, …, varn = exprn
     * PartialStatement::collect(definitions): CollectExpression
     *
     * _.collect({x: 'a', y: 'b'}): COLLECT x = a, y = b WITH COUNT INTO varname
     * CollectExpression::withCountInto(varname): CollectExpression
     *
     * _.withCountInto('x'): WITH COUNT INTO x INTO varname
     * CollectExpression::into(varname): CollectExpression
     *
     * _.into('z'): INTO z KEEP ...vars
     * CollectExpression::keep(...vars): CollectExpression
     *
     * _.into('z').keep('a', 'b'): INTO z KEEP a, b INTO varname = expression
     * CollectExpression::into(varname, expression): CollectExpression
     *
     * _.into('x', 'y'): INTO x = y OPTIONS options
     * CollectExpression::options(options): CollectExpression
     *
     * _.options('opts'): OPTIONS opts
     *
     * @param varname
     * @return
     */
    collectWithCountInto(varname: any): CollectWithCountIntoExpression;
    /**
     * SORT ...args
     *
     * PartialStatement::sort(...args): PartialStatement
     *
     * Examples
     *
     * _.sort('x', 'DESC', 'y', 'ASC'): SORT x DESC, y ASC
     *
     * @param args
     * @return
     */
    sort(...args: any[]): SortExpression;
    /**
     * LIMIT offset, count
     *
     * PartialStatement::limit([offset,] count): PartialStatement
     *
     * Examples
     *
     * _.limit(20): LIMIT 20
     *
     * _.limit(20, 20): LIMIT 20, 20
     *
     * @param offset
     * @param count
     * @return
     */
    limit(offset: any, count?: any): LimitExpression;
    /**
     * RETURN expression
     *
     * PartialStatement::return(expression): ReturnExpression
     *
     * Examples
     *
     * _.return('x'): RETURN x
     * _.return({x: 'x'}): RETURN {x: x}
     *
     * @param x
     * @return
     */
    return(x: any): ReturnExpression;
    /**
     * RETURN DISTINCT expression
     *
     * PartialStatement::returnDistinct(expression): ReturnExpression
     *
     * Examples
     *
     * _.returnDistinct('x'): RETURN DISTINCT x
     *
     * @param x
     * @return
     */
    returnDistinct(x: any): ReturnExpression;
    /**
     * REMOVE
     *
     * REMOVE expression IN collection
     * PartialStatement::remove(expression).in(collection): RemoveExpression
     *
     * Alias: remove(expression).into(collection)
     *
     * Examples
     *
     * _.remove('x').in('y'): REMOVE x IN y LET varname = OLD RETURN varname
     * RemoveExpression::returnOld(varname): ReturnExpression
     *
     * _.returnOld('z'): LET z = OLD RETURN z OPTIONS options
     * RemoveExpression::options(options): RemoveExpression
     *
     * _.options('opts'): OPTIONS opts
     *
     * @param expr
     * @return
     */
    remove(expr: any): RemoveRet;
    /**
     * UPSERT
     *
     * UPSERT expression1 INSERT expression2 REPLACE expression3 IN collection
     * PartialStatement::upsert(expression1).insert(expression2).replace(expression3).in(collection): UpsertExpression
     *
     * Alias: ….into(collection)
     *
     * Examples
     *
     * _.upsert('x').insert('y').replace('z').in('c'): UPSERT x INSERT y REPLACE z IN c
     *
     * UPSERT expression1 INSERT expression2 UPDATE expression3 IN collection
     * PartialStatement::upsert(expression1).insert(expression2).update(expression3).in(collection): UpsertExpression
     *
     * Alias: ….into(collection)
     *
     * _.upsert('x').insert('y').update('z').in('c'): UPSERT x INSERT y UPDATE z IN c OPTIONS options
     * UpsertExpression::options(options): UpsertExpression
     *
     * _.options('opts'): OPTIONS opts
     *
     * @param upsertExpr
     * @return
     */
    upsert(expr: any): UpsertRet;
    /**
     * INSERT
     *
     * INSERT expression INTO collection
     *  PartialStatement::insert(expression).into(collection): InsertExpression
     *
     * Alias: insert(expression).in(collection)
     *
     * Examples
     *
     * _.insert('x').into('y'): INSERT x INTO y OPTIONS options
     * InsertExpression::options(options): InsertExpression
     *
     *  _.options('opts'): OPTIONS opts LET varname = NEW RETURN varname
     * InsertExpression::returnNew(varname): ReturnExpression
     *
     * _.returnNew('z'): LET z = NEW RETURN z
     *
     * @param expr
     * @return
     */
    insert(expr: any): InsertRet;
    /**
     * UPDATE
     *
     * UPDATE expression IN collection
     * PartialStatement::update(expression).in(collection): UpdateExpression
     *
     * Alias: update(expression).into(collection)
     *
     * Examples
     *
     * _.update('x').in('y'): UPDATE x IN y
     *
     * UPDATE expression1 WITH expression2 IN collection
     * PartialStatement::update(expression1).with(expression2).in(collection): UpdateExpression
     *
     * Alias: update(expression1).with(expression2).into(collection)
     *
     * _.update('x').with('y').in('z'): UPDATE x WITH y IN z OPTIONS options
     * UpdateExpression::options(options): UpdateExpression
     *
     * _.options('opts'): OPTIONS opts LET varname = NEW RETURN varname
     * UpdateExpression::returnNew(varname): ReturnExpression
     *
     * _.returnNew('z'): LET z = NEW RETURN z LET varname = OLD RETURN varname
     * UpdateExpression::returnOld(varname): ReturnExpression
     *
     * _.returnOld('z'): LET z = OLD RETURN z
     *
     * @param expr
     * @return
     */
    update(expr: any): UpdateRetWithRet;
    /**
     * REPLACE
     *
     * REPLACE expression IN collection
     * PartialStatement::replace(expression).in(collection): ReplaceExpression
     *
     * Alias: replace(expression).into(collection)
     *
     * Examples
     *
     * _.replace('x').in('y'): REPLACE x IN y REPLACE expression1 WITH expression2 IN collection
     * PartialStatement::replace(expression1).with(expression2).in(collection): ReplaceExpression
     *
     * Alias: replace(expression1).with(expression2).into(collection)
     *
     * _.replace('x').with('y').in('z'): REPLACE x WITH y IN z OPTIONS options
     * ReplaceExpression::options(options): ReplaceExpression
     *
     * _.options('opts'): OPTIONS opts LET varname = NEW RETURN varname
     *  ReplaceExpression::returnOld(varname): ReturnExpression
     *
     * _.returnNew('z'): LET z = NEW RETURN z LET varname = OLD RETURN varname
     * ReplaceExpression::returnNew(varname): ReturnExpression
     *
     * _.returnOld('z'): LET z = OLD RETURN z
     *
     * @param expr
     * @return
     */
    replace(expr: any): ReplaceRetWithRet;
}
interface RemoveRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): RemoveExpression;
    in: RemoveRet["into"];
    in_: RemoveRet["into"];
}
interface UpsertRet {
    /**
     *
     * @param insertExpr
     * @return
     */
    insert(insertExpr: any): UpsertRetInsertRet;
}
interface UpsertRetInsertRet {
    /**
     *
     * @param updateOrReplaceExpr
     * @return
     */
    update(updateOrReplaceExpr: any): UpsertRetInsertRetUpdateRet;
    replace: UpsertRetInsertRet["update"];
}
interface UpsertRetInsertRetUpdateRet {
    /**
     *
     * @param inCollection
     * @return
     */
    into(inCollection: any): UpsertExpression;
    in: UpsertRetInsertRetUpdateRet["into"];
    in_: UpsertRetInsertRetUpdateRet["into"];
}
interface InsertRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): InsertExpression;
    in: InsertRet["into"];
    in_: InsertRet["into"];
}
interface UpdateRetWithRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): UpdateExpression;
    in: UpdateRetWithRet["into"];
    in_: UpdateRetWithRet["into"];
}
interface ReplaceRetWithRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): ReplaceExpression;
    in: ReplaceRetWithRet["into"];
    in_: ReplaceRetWithRet["into"];
}
interface RemoveRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): RemoveExpression;
    in: RemoveRet["into"];
    in_: RemoveRet["into"];
}
interface UpsertRet {
    /**
     *
     * @param insertExpr
     * @return
     */
    insert(insertExpr: any): UpsertRetInsertRet;
}
interface UpsertRetInsertRet {
    /**
     *
     * @param updateOrReplaceExpr
     * @return
     */
    update(updateOrReplaceExpr: any): UpsertRetInsertRetUpdateRet;
    replace: UpsertRetInsertRet["update"];
}
interface UpsertRetInsertRetUpdateRet {
    /**
     *
     * @param inCollection
     * @return
     */
    into(inCollection: any): UpsertExpression;
    in: UpsertRetInsertRetUpdateRet["into"];
    in_: UpsertRetInsertRetUpdateRet["into"];
}
interface InsertRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): InsertExpression;
    in: InsertRet["into"];
    in_: InsertRet["into"];
}
interface UpdateRetWithRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): UpdateExpression;
    /**
     *
     * @param collection
     * @return
     */
    with(collection: any): UpdateRetWithRet;
    in: UpdateRetWithRet["into"];
    in_: UpdateRetWithRet["into"];
}
interface ReplaceRetWithRet {
    /**
     *
     * @param collection
     * @return
     */
    into(collection: any): ReplaceExpression;
    /**
     *
     * @param collection
     * @return
     */
    with(collection: any): ReplaceRetWithRet;
    in: ReplaceRetWithRet["into"];
    in_: ReplaceRetWithRet["into"];
}
/**
 *
 * @param self
 * @param args
 * @return
 */
declare function toArray(self: Expression, ...args: any[]): any[];
/**
 *
 * @param str
 * @return
 */
declare function isQuotedString(str: string): boolean;
/**
 *
 * @param expr
 * @return
 */
declare function wrapAQL(expr: Keyword): string;
/**
 *
 * @param number
 * @return
 */
declare function isValidNumber(number: number): boolean;
/**
 *
 * @param number
 * @return
 */
declare function castNumber(number: any): NumberLiteral;
/**
 *
 * @param bool
 * @return
 */
declare function castBoolean(bool: any): BooleanLiteral;
/**
 *
 * @param str
 * @return
 */
declare function castString(str: any): SimpleReference | Identifier | RangeExpression | StringLiteral | Expression | PartialStatement | NullLiteral;
/**
 *
 * @param obj
 * @return
 */
declare function castObject(obj: any): ObjectLiteral | ListLiteral | Identifier;
/**
 *
 * @param token
 * @return
 */
declare function autoCastToken(token: any): Expression | PartialStatement | NullLiteral;
/**
 * AQLfunctions
 *
 * If raw JavaScript values are passed to  statements, they will be wrapped in a matching  declare function automatically.
 * JavaScript strings wrapped in quotation marks will be wrapped in  strings, all other JavaScript strings will be wrapped as simple references(see ref)
 * and throw an Error if they are not well-formed.
 */
interface AQLfunctions extends Expression {
    /**
     * Boolean
     *
     * Wraps the given value as an  Boolean literal.
     *
     * qb.bool(value)
     *
     * If the value is truthy, it will be converted to the  Boolean true, otherwise it will be converted to the  Boolean false.
     * If the value is already an  Boolean, its own value will be wrapped instead.
     *
     * @param value
     */
    bool(value: any): BooleanLiteral;
    /**
     * Number
     *
     * Wraps the given value as an  Number literal.
     *
     * qb.num(value)
     *
     * If the value is not a JavaScript Number, it will be converted first.
     * If the value does not represent a finite number, an Error will be thrown.
     * If the value is already an  Number or  Integer, its own value will be wrapped instead.
     *
     * @param value
     */
    num(value: any): NumberLiteral;
    /**
     * Integer
     *
     * Wraps the given value as an  Integer literal.
     *
     * qb.int(value)
     *
     * If the value is not a JavaScript Number, it will be converted first.
     * If the value does not represent a finite integer, an Error will be thrown.
     * If the value is already an  Number or  Integer, its own value will be wrapped instead.
     *
     * @param value
     */
    int(value: any): IntegerLiteral;
    /**
     * String
     *
     * Wraps the given value as an  String literal.
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
    str(value: any): StringLiteral;
    /**
     * List
     *
     * Wraps the given value as an  List(Array) literal.
     *
     * qb.list(value)
     *
     * If the value is not a JavaScript Array, an Error will be thrown.
     * If the value is already an  List, its own value will be wrapped instead.
     * Any list elements that are not already  values will be converted automatically.
     *
     * @param value
     */
    list(value: any[]): ListLiteral;
    /**
     * Object
     *
     * Wraps the given value as an  Object literal.
     *
     * qb.obj(value)
     *
     * If the value is not a JavaScript Object, an Error will be thrown.
     * If the value is already an  Object, its own value will be wrapped instead.
     * Any property values that are not already  values will be converted automatically.
     * Any keys that are quoted strings will be treated as string literals.
     * Any keys that start with the character ":" will be treated as dynamic properties and must be well-formed simple references.
     * Any other keys that need escaping will be quoted if necessary.
     * If you need to pass in raw JavaScript objects that shouldn't be converted according to these rules, you can use the qb declare function directly instead.
     *
     * Examples
     *
     * qb.obj({'some.name': 'value'}): {"some.name": value}
     *
     * qb.obj({hello: world}): {hello: world}
     *
     * qb.obj({'"hello"': world}): {"hello": world}
     *
     * qb.obj({':dynamic': 'props'}): {[dynamic]: props}
     *
     * qb.obj({': invalid': 'key'}): throws an error(invalid is not a well-formed reference)
     *
     * @param obj
     */
    obj(obj: object): ObjectLiteral;
    /**
     * Simple Reference
     *
     * Wraps a given value in an  Simple Reference.
     *
     * qb.ref(value)
     *
     * If the value is not a JavaScript string or not a well-formed simple reference, an Error will be thrown.
     * If the value is an ArangoCollection, its name property will be used instead.
     * If the value is already an  Simple Reference, its value is wrapped instead.
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
    ref(value: string): SimpleReference;
    /**
     * Expressions
     *
     * @param value
     */
    expr(value: any): RawExpression;
    /**
     * Ternary(if / else)
     *
     * Creates a ternary expression from the given values.
     *
     * qb.if(condition, thenDo, elseDo): (condition ? thenDo: elseDo)
     * OR:
     * qbValue.then(thenDo).else(elseDo): (condition ? thenDo: elseDo)
     *
     * If the values are not already  values, they will be converted automatically.
     *
     * Alias: qbValue.then(thenDo).otherwise(elseDo)
     *
     * Examples
     * qb.ref('x').then('y').else('z'): (x ? y: z)
     *
     * @param cond
     * @param then
     * @param otherwise
     */
    if(cond: any, then: any, otherwise: any): Expression | number;
    /**
     * declare Function Call
     *
     * Creates a functon call for the given name and arguments.
     *
     * qb.fn(name)(...args)
     *
     * If the values are not already  values, they will be converted automatically.
     * For built-in AQLfunctions, methods with the relevant declare function name are already provided by the query builder.
     *
     * Examples
     *
     * qb.fn('MY::USER::FUNC')(1, 2, 3): MY::USER::FUNC(1, 2, 3)
     *
     * qb.fn('hello')(): hello()
     *
     * qb.RANDOM(): RANDOM()
     *
     * qb.FLOOR(qb.div(5, 2)): FLOOR((5 / 2))
     *
     * @param functionName
     * @param arity
     * @return
     */
    fn(functionName: string): (...arity: any[]) => FunctionCall;
}
type QBfunc = (obj: any) => AQLfunctions;
declare const QB: AQLfunctions & QBfunc;
export = QB;
