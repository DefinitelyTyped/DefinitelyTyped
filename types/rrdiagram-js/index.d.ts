declare class Expression {
    /**
     * @param {GrammarToRRDiagram} grammarToRRDiagram
     * @return {RRElement}
     */
    toRRElement(grammarToRRDiagram: model.GrammarToRRDiagram): RRElement;
    /**
     * @param {GrammarToBNF} grammarToBNF
     * @param {string[]} sb
     * @param {boolean} isNested
     */
    toBNF(grammarToBNF: model.GrammarToBNF, sb: string[], isNested: boolean): void;
    /**
     * @param {*} o
     * @return {boolean}
     */
    equals(o: any): boolean;
}
export namespace bnfdisplay {
    class BNFDisplay {
        bnfToGrammar: model.BNFToGrammar;
        grammarToRRDiagram: model.GrammarToRRDiagram;
        rrDiagramToSVG: ui.RRDiagramToSVG;

        /**
         * @return {BNFToGrammar}
         */
        getBNFToGrammar(): model.BNFToGrammar;

        /**
         * @return {GrammarToRRDiagram}
         */
        getGrammarToRRDiagram(): model.GrammarToRRDiagram;

        /**
         * @return {RRDiagramToSVG}
         */
        getRRDiagramToSVG(): ui.RRDiagramToSVG;

        /**
         * @param {string} className
         * @param {string} newClassName
         */
        replaceBNF(className: string, newClassName: string): void;
    }
}

export namespace model {
    class BNFToGrammar {
        /**
         * @param {string} text
         * @return {Grammar}
         */
        convert(text: string): Grammar;
    }

    class Choice extends Expression {
        /**
         * @param {Expression | Expression[]} expressions
         */
        constructor(expressions: Expression | Expression[], ...args: any[]);

        expressions: Expression | Expression[];

        /**
         * @return {Expression[]}
         */
        getExpressions(): Expression[];
    }

    class Grammar {
        constructor(rules: any, ...args: any[]);
        rules: any;
        /**
         * @return {Rule[]}
         */
        getRules(): Rule[];
        /**
         * @param {GrammarToBNF} grammarToBNF
         * @return {string}
         */
        toBNF(grammarToBNF: GrammarToBNF): string;
    }

    class GrammarToBNF {
        static get RuleDefinitionSign(): {
            EQUAL: number;
            COLON_EQUAL: number;
            COLON_COLON_EQUAL: number;
        };
        static get LiteralDefinitionSign(): {
            QUOTE: number;
            DOUBLE_QUOTE: number;
        };
        ruleDefinitionSign: number;
        literalDefinitionSign: number;
        isCommaSeparator: boolean;
        isUsingMultiplicationTokens: boolean;
        ruleConsideredAsLineBreak: any;
        /**
         * @param {Grammar} grammar
         * @return {string}
         */
        convert(grammar: Grammar): string;
    }

    class GrammarToRRDiagram {
        ruleLinkProvider: (ruleName: any) => string;
        ruleConsideredAsLineBreak: any;
        /**
         * @param {Rule} rule
         * @return {RRDiagram}
         */
        convert(rule: Rule): ui.RRDiagram;
    }

    class Literal extends Expression {
        /**
         * @param {string} text
         */
        constructor(text: string);
        text: string;
    }

    class Repetition extends Expression {
        /**
         * @param {Expression} expression
         * @param {number} minRepetitionCount
         * @param {?number} maxRepetitionCount
         */
        constructor(expression: Expression, minRepetitionCount: number, maxRepetitionCount: number | null);
        expression: Expression;
        minRepetitionCount: number;
        maxRepetitionCount: number;
        /**
         * @return {Expression}
         */
        getExpression(): Expression;
        /**
         * @return {number}
         */
        getMinRepetitionCount(): number;
        /**
         * @return {?number}
         */
        getMaxRepetitionCount(): number | null;
    }

    class Rule {
        /**
         * @param {string} name
         * @param {Expression} expression
         * @param {?string} originalExpressionText
         */
        constructor(name: string, expression: Expression, originalExpressionText: string | null);
        name: string;
        expression: Expression;
        originalExpressionText: string;
        /**
         * @return {string}
         */
        getName(): string;
        /**
         * @return {?string}
         */
        getOriginalExpressionText(): string | null;
        /**
         * @param {GrammarToRRDiagram} grammarToRRDiagram
         * @return {RRDiagram}
         */
        toRRDiagram(grammarToRRDiagram: GrammarToRRDiagram): ui.RRDiagram;
        /**
         * @param {GrammarToBNF} grammarToBNF
         * @return {string}
         */
        toBNF(grammarToBNF: GrammarToBNF): string;
    }

    class RuleReference extends Expression {
        /**
         * @param {string} ruleName
         */
        constructor(ruleName: string);
        ruleName: string;
        getRuleName(): string;
    }

    class Sequence extends Expression {
        /**
         * @param {(Expression | Expression[])} expressions
         */
        constructor(expressions: Expression | Expression[], ...args: any[]);
        expressions: Expression | Expression[];
        /**
         * @param {Expression[]}
         */
        getExpressions(): Expression | Expression[];
    }

    class SpecialSequence extends Expression {
        /**
         * @param {string} text
         */
        constructor(text: string);
        text: string;
    }
}

declare class RRElement {
    layoutInfo: any;
    setLayoutInfo(layoutInfo: any): void;
    getLayoutInfo(): any;
}

export namespace ui {
    class RRBreak extends RRElement {
        computeLayoutInfo(rrDiagramToSVG: any): void;
        toSVG(rrDiagramToSVG: any, xOffset: any, yOffset: any, svgContent: any): void;
    }

    class RRChoice extends RRElement {
        /**
         * @param {(RRElement[] | RRElement)} rrElements
         */
        constructor(rrElements: RRElement[] | RRElement, ...args: any[]);
        rrElements: RRElement | RRElement[];
        computeLayoutInfo(rrDiagramToSVG: any): void;
        toSVG(rrDiagramToSVG: any, xOffset: any, yOffset: any, svgContent: any): void;
    }

    class RRDiagram {
        /**
         * @param {RRElement} rrElement
         */
        constructor(rrElement: RRElement);
        rrElement: RRElement;
        toSVG(rrDiagramToSVG: any): string;
    }

    class RRDiagramToSVG {
        static get BoxShape(): {
            RECTANGLE: number;
            ROUNDED_RECTANGLE: number;
            HEXAGON: number;
        };
        cssConnectorClass: string;
        cssRuleClass: string;
        cssRuleTextClass: string;
        cssLiteralClass: string;
        cssLiteralTextClass: string;
        cssSpecialSequenceClass: string;
        cssSpecialSequenceTextClass: string;
        cssLoopCardinalitiesTextClass: string;
        ruleShape: number;
        literalShape: number;
        specialSequenceShape: number;
        /**
         * @param {RRDiagram} rrDiagram
         * @return {string}
         */
        convert(rrDiagram: RRDiagram): string;
    }

    class RRLine extends RRElement {
        computeLayoutInfo(rrDiagramToSVG: any): void;
        toSVG(rrDiagramToSVG: any, xOffset: any, yOffset: any, svgContent: any): void;
    }

    class RRLoop extends RRElement {
        /**
         * @param {RRElement} rrElement
         * @param {RRElement} loopElement
         * @param {?number} minRepetitionCount
         * @param {?number} maxRepetitionCount
         */
        constructor(
            rrElement: RRElement,
            loopElement: RRElement,
            minRepetitionCount: number | null,
            maxRepetitionCount: number | null,
        );
        rrElement: RRElement;
        loopElement: RRElement;
        minRepetitionCount: number;
        maxRepetitionCount: number;
        cardinalitiesText: string;
        cardinalitiesWidth: number;
        fontYOffset: number;
        computeLayoutInfo(rrDiagramToSVG: any): void;
        toSVG(rrDiagramToSVG: any, xOffset: any, yOffset: any, svgContent: any): void;
    }

    class RRSequence extends RRElement {
        /**
         * @param {(RRElement | RRElement[])} rrElements
         */
        constructor(rrElements: RRElement | RRElement[], ...args: any[]);
        rrElements: RRElement | RRElement[];
        getRRElements(): RRElement | RRElement[];
        computeLayoutInfo(rrDiagramToSVG: any): void;
        toSVG(rrDiagramToSVG: any, xOffset: any, yOffset: any, svgContent: any): void;
    }

    class RRText extends RRElement {
        static get Type(): {
            LITERAL: number;
            RULE: number;
            SPECIAL_SEQUENCE: number;
        };
        /**
         * @param {Type} type
         * @param {string} text
         * @param {?string} link
         */
        constructor(
            type: {
                LITERAL: number;
                RULE: number;
                SPECIAL_SEQUENCE: number;
            },
            text: string,
            link: string | null,
        );
        type: {
            LITERAL: number;
            RULE: number;
            SPECIAL_SEQUENCE: number;
        };
        text: string;
        link: string;
        fontInfo: {
            textWidth: number;
            textHeight: number;
            descent: number;
            height: number;
        };
        getType(): {
            LITERAL: number;
            RULE: number;
            SPECIAL_SEQUENCE: number;
        };
        getText(): string;
        getLink(): string;
        computeLayoutInfo(rrDiagramToSVG: any): void;
        toSVG(rrDiagramToSVG: any, xOffset: any, yOffset: any, svgContent: any): void;
    }
}

export {};
