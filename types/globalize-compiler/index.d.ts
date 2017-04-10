// Type definitions for globalize-compiler v0.2.0
// Project: https://github.com/jquery-support/globalize-compiler
// Definitions by: Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="globalize" />
import * as ESTree from "estree";

interface CompileTemplateOptions {
  /**
   * the source of the compiled formatters and parsers.
   */
  code: string;

  /**
   * a list of globalize runtime modules that the compiled code depends on, e.g. globalize-runtime/number.
   */
  dependencies: string[];
}

interface CompileOptions {
  /**
   * A function that replaces the default template.
   */
  template?: (options: CompileTemplateOptions) => string;
}

interface FormatterOrParserFunction {
  (...args: any[]): any;
}

interface ExtractFunction {
  /**
   * @param {globalize} the globalize object.
   *
   * @returns an Array with the formatters and parsers created using the passed Globalize.
   */
  (globalize: GlobalizeStatic): FormatterOrParserFunction[];
}

interface CompileExtractsAttributes extends CompileOptions {
  /**
   * an Array of extracts obtained by @see{GlobalizeCompilerStatic.extract}
   */
  extracts: ExtractFunction;

  /**
   * a locale to be used as Globalize.locale(defaultLocale) when generating the extracted formatters and parsers.
   */
  defaultLocale: string;

  /**
   * an Object with CLDR data (in the JSON format) or a Function taking one argument: locale, a String; returning
   *  an Object with the CLDR data for the passed locale. Defaults to the entire supplemental data plus the entire
   *  main data for the defaultLocale.
   */
  cldr?: Object | ((locale: string) => Object);

  /**
   * an Object with messages data (in the JSON format) or a Function taking one argument: locale, a String; returning
   *  an Object with the messages data for the passed locale. Defaults to {}.
   */
  messages?: Object | ((locale: string) => Object);
}

/**
 * Generates a JavaScript bundle containing the specified globalize formatters and parsers.
 *
 * @param {formattersAndParsers} an Array or an Object containing formatters and/or parsers.
 * @param {options} compiler options.
 *
 * @returns a String with the generated JavaScript bundle (UMD wrapped) including the compiled formatters and
 *  parsers.
 */
export function compile(formattersAndParsers: FormatterOrParserFunction[] | { [key: string]: FormatterOrParserFunction },
        options?: CompileOptions): string;

/**
 * Creates an extract function from a source file.
 *
 * @param {input} a String with a filename, or a String with the file content, or an AST Object.
 *
 * @returns an extract. An extract is a Function taking one argument: Globalize, the Globalize Object;
 *  and returning an Array with the formatters and parsers created using the passed Globalize.
 */
export function extract(input: string | ESTree.Program): ExtractFunction;

/**
 * Generates a JavaScript bundle containing the specified globalize formatters and parsers.
 *
 * @param {options} compiler attributes.
 *
 * @returns a String with the generated JavaScript bundle (UMD wrapped) including the compiled formatters and
 *  parsers.
 */
export function compileExtracts(attributes: CompileExtractsAttributes): string;
