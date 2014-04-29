// Type definitions for LESS
// Project: http://lesscss.org/
// Definitions by: AndrewGaspar <https://github.com/AndrewGaspar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "less" {
    class LessError {
        constructor(e: Error, env);

        type: any;
        message: string;
        filename: string;
        index;
        line: number;
        callLine: number;
        callExtract;
        stack;
        column;
        extract: any[];
    }

    interface Options {
        contents?;
        rootpath?: string;
        files?;
        paths?: string[];
        mime?: string;
        filename?: string;
        optimization?: number;
        dumpLineNumbers?: boolean;
        strictImports?;
        entryPath?: string;
        relativeUrls?;
        errback? (path: string, paths: string[], callback: Function, env: Options);
        frames?;
        compress?: boolean;
    }

    export module tree {
        export module mixin { // TODO
            export class Call {

            }

            export class Definition extends Ruleset {

            }
        }

        export module functions {
            export function rgb(r: number, g: number, b: number): Color;
            export function rgba(r: number, g: number, b: number, a: number): Color;
            export function hsl(h: number, s?: number, l?: number): Color;
            export function hsla(h: number, s?: number, l?: number, a?: number): Color;
            export function hsv(h: number, s: number, v: number): Color;
            export function hsva(h: number, s: number, v: number, a: number): Color;
            export function hue(color: Color): Dimension;
            export function saturation(color: Color): Dimension;
            export function lightness(color: Color): Dimension;
            export function red(color: Color): Dimension;
            export function green(color: Color): Dimension;
            export function blue(color: Color): Dimension;
            export function alpha(color: Color): Dimension;
            export function luma(color: Color): Dimension;
            export function saturate(color: Color, amount: IValuableNumber): Color;
            export function desaturate(color: Color, amount: IValuableNumber): Color;
            export function lighten(color: Color, amount: IValuableNumber): Color;
            export function darken(color: Color, amount: IValuableNumber): Color;
            export function fadein(color: Color, amount: IValuableNumber): Color;
            export function fadeout(color: Color, amount: IValuableNumber): Color;
            export function fade(color: Color, amount: IValuableNumber): Color;
            export function spin(color: Color, amount: IValuableNumber): Color;
            export function mix(color1: Color, color2: Color, weight: Dimension): Color;
            export function greyscale(color: Color): Color;
            export function contrast(color: Color, dark?: Color, light?: Color, threshold?: IValuableNumber): Color;
            export function contrast(color: Color, dark?: Color, light?: Color, threshold?: number): Color;
            export function e(str: string): Anonymous;
            export function e(str: JavaScript): Anonymous;
            export function escape(str: IValuableString): Anonymous;
            export function unit(val: IValuableNumber, unit?: ICSSable): Dimension;
            export function round(n: Dimension, f?: IValuableNumber): Dimension;
            export function round(n: number, f?: IValuableNumber): number;
            export function ceil(n: number): number;
            export function ceil(n: Dimension): Dimension;
            export function floor(n: number): number;
            export function floor(n: Dimension): Dimension;
            export function argb(color: Color): Anonymous;
            export function percentage(n: IValuableNumber): Dimension;
            export function color(n: Quoted): Color;
            export function iscolor(n): Keyword;
            export function isnumber(n): Keyword;
            export function isstring(n): Keyword;
            export function iskeyword(n): Keyword;
            export function isurl(n): Keyword;
            export function ispixel(n): Keyword;
            export function ispercentage(n): Keyword;
            export function isem(n): Keyword;
            export function multiply(color1: Color, color2: Color): Color;
            export function screen(color1: Color, color2: Color): Color;
            export function overlay(color1: Color, color2: Color): Color;
            export function softlight(color1: Color, color2: Color): Color;
            export function hardlight(color1: Color, color2: Color): Color;
            export function difference(color1: Color, color2: Color): Color;
            export function exclusion(color1: Color, color2: Color): Color;
            export function average(color1: Color, color2: Color): Color;
            export function negation(color1: Color, color2: Color): Color;
            export function tint(color: Color, amount: Dimension): Color;
            export function shade(color: Color, amount: Dimension): Color;
        }

        export var colors: any; // Could be module - got lazy

        interface HasDebugInfo {
            debugInfo: DebugInfo;
        }

        interface DebugInfo {
            lineNumber;
            fileName: string;
        }

        interface HSL {
            h: number;
            s: number;
            l: number;
            a: number;
        }

        interface DebugInfoFunction {
            (env: Options, ctx: HasDebugInfo): string;
            asComment(ctx: HasDebugInfo): string;
            asMediaQuery(ctx: HasDebugInfo): string;
        }

        interface RuleContainer {
            [name: string]: Rule;
        }

        interface ICSSable {
            toCSS(ctx?, env?: Options): string;
        }

        interface IEvalable {
            eval(env: Options): IEvalable;
        }

        interface IInjectable extends ICSSable, IEvalable {}

        interface IOperable {
            operate(op: Operation, other: IOperable): IOperable;
        }

        interface IComparable {
            compare(x: IComparable): number;
        }

        interface IColorable {
            toColor(): Color;
        }

        interface IValuableNumber {
            value: number;
        }

        interface IValuableString {
            value: string;
        }

        export class Color implements IOperable, IInjectable, IComparable {
            constructor(rgb: string, a: number);
            constructor(rgb: number[], a: number);

            rgb: number[];
            alpha: number;
            eval(): Color;
            toCSS(): string;
            operate(op: Operation, other: Color): Color;
            operate(op: Operation, other: IColorable): Color;
            toHSL(): HSL;
            toARGB(): string;
            compare(x: Color): number;
        }

        export class Directive implements IInjectable {
            constructor(name, value);

            name;
            value: ICSSable;
            ruleset: Ruleset;
            
            toCSS(ctx?, env?: Options): string;
            eval(env: Options): Directive;

            variable(name);
            find();
            rulesets();
        }

        export class Operation implements IEvalable {
            constructor(op, operands);

            op: string;
            operands: IEvalable;

            eval(env: Options): IEvalable;

            operate(op: string, a: number, b: number): number;
        }

        export class Dimension implements IColorable, IInjectable, IOperable, IComparable {
            constructor(value: number, unit: string);

            value: number;
            unit: string;

            eval(): Dimension;
            toColor(): Color;
            toCSS(): string;
            operate(op: Operation, other: Dimension): Dimension;
            compare(other: IComparable): number;
        }

        export class Keyword implements IInjectable, IComparable {
            constructor(value: string);

            value: string;

            eval(): Keyword;
            toCSS(): string;
            compare(other: IComparable): number;

            static True: Keyword;
            static False: Keyword;
        }

        export class Variable implements IEvalable {
            constructor(name: string, index, file: string);

            name: string;
            index;
            file: string;

            eval(env: Options): IEvalable;
        }

        export class AbstractRuleset implements IEvalable {
            selectors: Selector[];
            rules: any[];
            strictImports;

            eval(env: Options): Ruleset;
            evalImports(env: Options): void;
            makeImportant(): Ruleset;
            matchArgs(args: any): boolean;
            resetCache(): void;
            variables(): RuleContainer;
            variable(): Rule;
            rulesets(): Ruleset[];
            find(selector: Selector, self: Rule): Rule[];
            joinSelectors(paths: string[], context: any[][], selectors: Selector[]): void;
            joinSelector(paths: string[], context: any[][], selector: Selector): void;
            mergeElementsOnToSelectors(elements: Element[], selectors: Selector[]): void;
        }

        export class Ruleset extends AbstractRuleset {
            constructor(selectors: Selector[], rules: Rule[], strictImports);

            toCSS(context?: any[][], env?: Options): string;
        }

        export class Element implements IInjectable {
            constructor(combinator: Combinator, value, index);

            combinator: Combinator;
            value;
            index;

            eval(env: Options): Element;
            toCSS(env?: Options): string;
        }

        export class Combinator implements ICSSable {
            constructor(value: string);

            value: string;

            toCSS(env?: Options): string;
        }

        export class Selector implements IInjectable {
            constructor(elements: Element[]);

            match(other: Selector): boolean;
            eval(env: Options): Selector;
            toCSS(env?: Options): string;
        }

        export class Quoted implements IInjectable, IComparable {
            constructor(str: string, content: string, escaped: boolean, i);

            escaped: boolean;
            value: string;
            quote: string;
            index;

            toCSS(): string;
            eval(env: Options): Quoted;
            compare(x: IComparable): number;
        }

        export class Expression implements IInjectable {
            constructor(value: IEvalable[]);

            value: IEvalable[];

            eval(env: Options): IEvalable;
            toCSS(env?: Options): string;
        }

        export class Rule implements IInjectable {
            constructor(name: string, value?: Value, important?: string, index?, inline?: boolean);

            name: string;
            value: Value;
            important: string;
            index;
            inline: boolean;

            toCSS(env?: Options): string;
            eval(context): Rule;

            makeImportant(): Rule;
        }

        export class Shorthand implements IInjectable {
            constructor(a: ICSSable, b: ICSSable);

            a: ICSSable;
            b: ICSSable;

            toCSS(env?: Options): string;
            eval(): Shorthand;
        }

        export class Call implements IInjectable {
            constructor(name: string, args: IEvalable[], index, filename: string);

            name: string;
            args: IEvalable[];
            index;
            filename: string;

            eval(env: Options): IEvalable;
            toCSS(env?: Options): string;
        }

        export class URL implements IInjectable {
            constructor(val, rootpath: string);

            value;
            rootpath: string;

            toCSS(): string;
            eval(ctx): URL;
        }

        export class Alpha implements IInjectable {
            constructor(val);

            value;

            toCSS(): string;
            eval(env: Options): Alpha;
        }

        export class Import implements IInjectable {
            constructor(path, imports, features: ICSSable, once: boolean, index, rootpath);

            once: boolean;
            index;
            features: ICSSable;
            rootpath;
            path: string;
            css: boolean;

            toCSS(env?: Options): string;
            eval(env: Options): IEvalable;
        }

        export class Comment implements IInjectable {
            constructor(value: string, silent);

            value: string;
            silent: boolean;

            toCSS(env?: Options): string;
            eval(): Comment;
        }

        export class Anonymous implements IInjectable, IComparable {
            constructor(value: string);

            value: string;

            toCSS(): string;
            eval(): Anonymous;
            compare(x): number;
        }

        export class Value implements IInjectable {
            constructor(value: IEvalable[]);
            
            value: IEvalable[];
            is: string;

            eval(env: Options): IEvalable;
            toCSS(env?: Options): string;
        }

        export class JavaScript implements IEvalable {
            constructor(expression: string, index, escaped: boolean);

            escaped: boolean;
            expression: string;
            index;

            eval(env: Options): IEvalable;
        }

        export class Assignment implements IInjectable {
            constructor(key: string, val);
            constructor(key: string, val: ICSSable);
            constructor(key: string, val: IEvalable);

            key: string;
            value;

            toCSS(): string;
            eval(env: Options): Assignment;
        }

        export class Condition {
            constructor(op: string, l, r, i, negate: boolean);

            op: string;
            lvalue;
            rvalue;
            index;
            negate: boolean;

            eval(env: Options): boolean;
        }

        export class Paren implements IInjectable {
            constructor(node: IInjectable);
            value: IInjectable;

            toCSS(env?: Options): string;
            eval(env: Options): Paren;
        }

        export class Media implements IInjectable {
            constructor(value, features);

            selectors: Selector[];
            features: Value;
            ruleset: Ruleset;

            toCSS(ctx?, env?: Options): string;
            eval(env: Options): IEvalable;

            variable(name): Rule;
            rulesets(): Ruleset[];
            find(selector: Selector, self: Rule): Rule[];

            emptySelectors(): Selector[];
            evalTop(env: Options): IEvalable;
            evalNested(env: Options): Ruleset;
            permute(arr: any[]): any[];
            bubbleSelectors(selectors: Selector[]): void;
        }

        export class Ratio implements IInjectable {
            constructor(value: string);

            value: string;

            toCSS(env?: Options): string;
            eval(): Ratio;
        }

        export class UnicodeDescriptor implements IInjectable {
            constructor(value: string);

            value: string;
            
            toCSS(env?: Options): string;
            eval(): UnicodeDescriptor;
        }
        
        export class Attribute implements IInjectable {
            constructor(value: string);

            value: string;

            toCSS(env?: Options): string;
            genCSS(env: Options, output): string;
            eval(): Attribute;
        }

        export var debugInfo: DebugInfoFunction;
        export function find(obj: any[], fun: Function): any;
        export function jsify(obj: any): string;
        export function operate(op: string, a: number, b: number): number;

        export var True: Keyword;
        export var False: Keyword;
    }

    class ParserNode extends tree.AbstractRuleset {
        toCSS(): string;
        toCSS(options: { compress: boolean; }, variables?): string;
    }

    export class Parser {
        constructor(env?: Options);

        imports: {
            paths: string[];
            queue: string[];
            files;
            contents;
            mime: string;
            error;
            push(path: string, callback: (e, root, imported) => void);
        }; // TODO

        parse: (str: string, callback: (error: LessError, root: ParserNode) => void ) => void;

        parsers: { // Major TODO
        };
    }

    export function render(input: string, callback: (e, css: string) => void): void;
    export function render(input: string, options: Options,
        callback: (e, css: string) => void): void;

    export function formatError(ctx, options: { color: boolean; }): string;
    export function writeError(ctx, options: { color: boolean; }): void;

    export var version: number[];
}
