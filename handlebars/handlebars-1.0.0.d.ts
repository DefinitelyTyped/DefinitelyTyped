// Type definitions for Handlebars 1.0
// Project: http://handlebarsjs.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


// Use either HandlebarsStatic or HandlebarsRuntimeStatic
declare var Handlebars: HandlebarsStatic;
//declare var Handlebars: HandlebarsRuntimeStatic;

/**
* Implement this interface on your MVW/MVVM/MVC views such as Backbone.View
**/
interface HandlebarsTemplatable {
    template: HandlebarsTemplateDelegate;
}

interface HandlebarsTemplateDelegate {
    (context: any, options?: any): string;
}

interface HandlebarsCommon {
    registerHelper(name: string, fn: Function, inverse?: boolean): void;
    registerPartial(name: string, str: any): void;
    K(): void;
    createFrame(object: any): any;

    Exception(message: string): void;
    SafeString: typeof hbs.SafeString;
    Utils: typeof hbs.Utils;

    logger: Logger;
    log(level: number, obj: any): void;
}

interface HandlebarsStatic extends HandlebarsCommon {
    parse(input: string): hbs.AST.ProgramNode;
    compile(input: any, options?: any): HandlebarsTemplateDelegate;
}

interface HandlebarsTemplates {
    [index: string]: HandlebarsTemplateDelegate;
}

interface HandlebarsRuntimeStatic extends HandlebarsCommon {
    // Handlebars.templates is the default template namespace in precompiler.
    templates: HandlebarsTemplates;
}

declare module hbs {
    class SafeString {
        constructor(str: string);
        static toString(): string;
    }

    module Utils {
        function escapeExpression(str: string): string;
    }
}

interface Logger {
    DEBUG: number;
    INFO: number;
    WARN: number;
    ERROR: number;
    level: number;

    methodMap: { [level: number]: string };

    log(level: number, obj: string): void;
}

declare module hbs {
    module AST {
        interface IStripInfo {
            left?: boolean;
            right?: boolean;
            inlineStandalone?: boolean;
        }

        class NodeBase {
            firstColumn: number;
            firstLine: number;
            lastColumn: number;
            lastLine: number;
            type: string;
        }

        class ProgramNode extends NodeBase {
            statements: NodeBase[];
        }

        class IdNode extends NodeBase {
            original: string;
            parts: string[];
            string: string;
            depth: number;
            idName: string;
            isSimple: boolean;
            stringModeValue: string;
        }

        class HashNode extends NodeBase {
            pairs: {0: string;
                    1: NodeBase}[];
        }

        class SexprNode extends NodeBase {
            hash: HashNode;
            id: NodeBase;
            params: NodeBase[];
            isHelper: boolean;
            eligibleHelper: boolean;
        }

        class MustacheNode extends NodeBase {
            strip: IStripInfo;
            escaped: boolean;
            sexpr: SexprNode;

        }

        class BlockNode extends NodeBase {
            mustache: MustacheNode;
            program: ProgramNode;
            inverse: ProgramNode;
            strip: IStripInfo;
            isInverse: boolean;
        }

        class PartialNameNode extends NodeBase {
            name: string;
        }

        class PartialNode extends NodeBase {
            partialName: PartialNameNode;
            context: NodeBase;
            hash: HashNode;
            strip: IStripInfo;
        }

        class RawBlockNode extends NodeBase {
            mustache: MustacheNode;
            program: ProgramNode;
        }

        class ContentNode extends NodeBase {
            original: string;
            string: string;
        }

        class DataNode extends NodeBase {
            id: IdNode;
            stringModeValue: string;
            idName: string;
        }

        class StringNode extends NodeBase {
            original: string;
            string: string;
            stringModeValue: string;
        }

        class NumberNode extends NodeBase {
            original: string;
            number: string;
            stringModeValue: number;
        }

        class BooleanNode extends NodeBase {
            bool: string;
            stringModeValue: boolean;
        }

        class CommentNode extends NodeBase {
            comment: string;
            strip: IStripInfo;
        }
    }
}

declare module "handlebars" {
    export = Handlebars;
}
