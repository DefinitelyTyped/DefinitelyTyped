import * as postcss from "postcss";

export = postcssLess;

declare const postcssLess: postcss.Syntax & {
    parse: postcss.Parser<postcss.Root>;
    stringify: postcss.Stringifier;
    nodeToString: (node: postcss.Node) => string;
};

declare namespace postcssLess {
    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/nodes/import.js
    interface ImportAtRule extends postcss.AtRule {
        import: true;
        filename: string;
        options?: string | undefined;
    }

    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/nodes/variable.js
    interface VariableAtRule extends postcss.AtRule {
        variable: true;
        value: string;
    }

    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/LessParser.js#L147-L151
    interface MixinAtRule extends postcss.AtRule {
        mixin: true;
        important?: true | undefined;
    }

    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/LessParser.js#L57
    interface FunctionAtRule extends postcss.AtRule {
        function: true;
    }

    type AtRule = ImportAtRule | VariableAtRule | MixinAtRule | FunctionAtRule;

    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/LessParser.js#L187
    interface ExtendRule extends postcss.Rule {
        extend: true;
    }

    type Rule = ExtendRule;

    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/LessParser.js#L187
    interface ExtendDeclaration extends postcss.Declaration {
        extend: true;
    }

    type Declaration = ExtendDeclaration;

    // @see https://github.com/shellscape/postcss-less/blob/v3.1.4/lib/LessParser.js#L73
    interface InlineComment extends postcss.Comment {
        inline: true;
    }

    type Comment = InlineComment;
}
