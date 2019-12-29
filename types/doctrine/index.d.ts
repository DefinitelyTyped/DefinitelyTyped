// Type definitions for doctrine the JSDoc parser
// Project: https://github.com/eslint/doctrine
// Definitions by: rictic <https://github.com/rictic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Doctrine is a JSDoc parser that parses documentation comments from JavaScript
 * (you need to pass in the comment, not a whole JavaScript file).
 */

/**
 * Parse the given content as a jsdoc comment.
 */
export function parse(content: string, options?: Options): Annotation;
/**
 * Remove /*, *, and * / from jsdoc.
 */
export function unwrapComment(doc: string): string;

interface Options {
  /**
   * Set to `true` to delete the leading `/**`, any `*` that begins a line,
   * and the trailing `* /` from the source text. Default: `false`.
   */
  unwrap?: boolean;
  /**
   * An array of tags to return. When specified, Doctrine returns
   * only tags in this array. For example, if `tags` is `["param"]`, then only
   * `@param` tags will be returned. Default: `null`.
   */
  tags?: string[];
  /**
   * set to `true` to keep parsing even when syntax errors occur. Default:
   * `false`.
   */
  recoverable?: boolean;
  /**
   * Set to `true` to allow optional parameters to be specified in brackets
   * (`@param {string} [foo]`). Default: `false`.
   */
  sloppy?: boolean;
  /**
   * Set to `true` to throw an error when syntax errors occur. If false then
   * errors will be added to `tag.errors` instead.
   */
  strict?: boolean;
  /**
   * Set to `true` to preserve leading and trailing whitespace when extracting
   * comment text.
   */
  preserveWhitespace?: boolean;
  /**
   * Set to `true` to add `lineNumber` to each node, specifying the line on
   * which the node is found in the source. Default: `false`.
   */
  lineNumbers?: boolean;
}

/**
 * Represents a parsed jsdoc comment.
 */
interface Annotation {
  /** The overall description of the thing being documented. */
  description: string;
  tags: Tag[];
}

/**
 * Represents a single jsdoc tag.
 *
 * So for example:
 *   `@ param {{ok:String}} userName`
 *   (ignore the space after the @)
 *
 * Would be represented as:
 *
 *     {title: 'param', name: 'userName',
 *      type: {type: 'RecordType", fields: [
 *          {type: 'FieldType',
 *           key: 'ok',
 *           value: {type: 'NameExpression', name: 'String'}}]}}
 *
 */
export interface Tag {
  /** The title of the jsdoc tag. e.g. `@foo` will have a title of 'foo'. */
  title: string;
  /** The name of the thing this tag is documenting, if any. */
  name?: string;
  /** The description of the thing this tag is documenting. */
  description: string|null;
  /** The type of the thing this tag is documenting. */
  type?: Type|null;
  kind?: string;
  /** Any errors that were encountered in parsing the tag. */
  errors?: string[];
}

export type Type =
    (type.AllLiteral | type.ArrayType | type.FieldType | type.FunctionType |
     type.NameExpression | type.NonNullableType | type.NullableLiteral |
     type.NullableType | type.NullLiteral | type.OptionalType |
     type.ParameterType | type.RecordType | type.RestType |
     type.TypeApplication | type.UndefinedLiteral | type.UnionType |
     type.VoidLiteral);

export module type {
  export interface AllLiteral { type: 'AllLiteral' }
  export interface ArrayType { type: 'ArrayType', elements: Type[] }
  export interface FieldType { type: 'FieldType', key: string, value?: Type }
  export interface FunctionType {
    type: 'FunctionType';
    'this': Type;
    'new': Type, params: Type[];
    result: Type[]
  }
  export interface NameExpression { type: 'NameExpression', name: string }
  export interface NonNullableType {
    type: 'NonNullableType', prefix: boolean, expression: Type
  }
  export interface NullableLiteral { type: 'NullableLiteral' }
  export interface NullableType {
    type: 'NullableType', prefix: boolean, expression: Type
  }
  export interface NullLiteral { type: 'NullLiteral' }
  export interface OptionalType { type: 'OptionalType', expression: Type }
  export interface ParameterType {
    type: 'ParameterType', name: string, expression: Type
  }
  export interface RecordType { type: 'RecordType', fields: Type[] }
  export interface RestType {
    type: 'RestType';
    expression?: Type;
  }
  export interface TypeApplication {
    type: 'TypeApplication', expression: Type, applications: Type[]
  }
  export interface UndefinedLiteral { type: 'UndefinedLiteral' }
  export interface UnionType { type: 'UnionType', elements: Type[] }
  export interface VoidLiteral { type: 'VoidLiteral' }

  export function stringify(type: Type): string;
  export function parseType(src: string, options?: {midstream: boolean}): Type;
  export function parseParamType(
      src: string, options?: {midstream: boolean}): Type;

  export const Syntax: {
    NullableLiteral: 'NullableLiteral',
    AllLiteral: 'AllLiteral',
    NullLiteral: 'NullLiteral',
    UndefinedLiteral: 'UndefinedLiteral',
    VoidLiteral: 'VoidLiteral',
    UnionType: 'UnionType',
    ArrayType: 'ArrayType',
    RecordType: 'RecordType',
    FieldType: 'FieldType',
    FunctionType: 'FunctionType',
    ParameterType: 'ParameterType',
    RestType: 'RestType',
    NonNullableType: 'NonNullableType',
    OptionalType: 'OptionalType',
    NullableType: 'NullableType',
    NameExpression: 'NameExpression',
    TypeApplication: 'TypeApplication'
  }
}

export const version: string;
export const parseType: typeof type.parseType;
export const parseParamType: typeof type.parseParamType;
export const Syntax: typeof type.Syntax;
