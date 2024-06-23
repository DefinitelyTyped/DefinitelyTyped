interface Settings {
    raw?: string | undefined;
    type?: number | undefined;
}
declare class ArrayWithErrors<T> extends Array<T> {
    errors: string[];
}
declare class TraceryNode {
    errors: string[];
    expansionErrors: string[];
    grammar: TraceryGrammar;
    parent: TraceryNode | null;
    depth: number;
    childIndex: number;
    isExpanded: boolean;
    children: TraceryNode[];
    finishedText?: string | undefined;
    childRule: string;
    raw: string | undefined;
    type: number | undefined;
    symbol: string;
    modifiers: string[];
    preactions: TraceryNodeAction[];
    postactions: TraceryNodeAction[];
    action?: TraceryNodeAction | undefined;
    constructor(parent: TraceryNode | TraceryGrammar | null, childIndex: number, settings: Settings);
    toString(): string;
    expandChildren(childRule: string, preventRecursion: boolean): void;
    expand(preventRecursion?: boolean): void;
    clearEscapeChars(): void;
}
declare class TraceryNodeAction {
    node: TraceryNode;
    type: 0 | 1 | 2;
    target: string;
    rule: string;
    ruleSections: string[];
    finishedRules: string[];
    constructor(node: TraceryNode, raw: string);
    createUndo(): TraceryNodeAction;
    activate(): void;
    toText(): string;
}
declare class TraceryRuleSet {
    grammar: TraceryGrammar;
    raw: string | string[];
    falloff: number;
    defaultRules: string[];
    defaultUses?: number[] | undefined;
    conditionalRule?: string | undefined;
    conditionalValues?: TraceryRuleSet[] | undefined;
    shuffledDeck?: number[] | undefined;
    constructor(grammar: TraceryGrammar, raw: string | string[]);
    selectRule(errors?: string[]): any;
    clearState(): void;
}
declare class TracerySymbol {
    grammar: TraceryGrammar;
    key: string;
    rawRules: ConstructorParameters<typeof TraceryRuleSet>[1];
    baseRules: TraceryRuleSet;
    stack?: TraceryRuleSet[] | undefined;
    uses?:
        | Array<{
            node?: TraceryNode | undefined;
        }>
        | undefined;
    isDynamic?: boolean | undefined;
    constructor(grammar: TraceryGrammar, key: string, rawRules: ConstructorParameters<typeof TraceryRuleSet>[1]);
    clearState(): void;
    pushRules(rawRules: ConstructorParameters<typeof TraceryRuleSet>[1]): void;
    popRules(): void;
    selectRule(node?: TraceryNode, errors?: string[]): any;
    getActiveRules(): any;
    rulesToJSON(): string;
}
type Modifiers = Record<string, (s: string, params: string[]) => string>;
declare class TraceryGrammar {
    modifiers: Modifiers;
    symbols: Partial<Record<string, TracerySymbol>>;
    raw: Record<string, string | string[]>;
    subgrammars: TraceryGrammar[];
    errors?: string[] | undefined;
    constructor(raw: Record<string, string | string[]>);
    clearState(): void;
    addModifiers(mods: Modifiers): void;
    loadFromRawObj(raw: Record<string, string | string[]>): void;
    createRoot(rule: string): TraceryNode;
    expand(rule: string, allowEscapeChars?: boolean): TraceryNode;
    flatten(rule: string, allowEscapeChars?: boolean): string;
    toJSON(): string;
    pushRules(key: string, rawRules: ConstructorParameters<typeof TracerySymbol>[2], sourceAction?: boolean): void;
    popRules(key: string): void;
    selectRule(key: string, node: TraceryNode, errors: string[]): any;
}
declare const tracery: {
    createGrammar: (raw: ConstructorParameters<typeof TraceryGrammar>[0]) => TraceryGrammar;
    parseTag: (tagContents: string | null) => {
        symbol: any;
        preactions: any[];
        postactions: any[];
        modifiers: any[];
    };
    parse: (rule: string | null) => ArrayWithErrors<Settings>;
    baseEngModifiers: {
        replace: (s: string, params: string[]) => string;
        capitalizeAll: (s: string) => string;
        capitalize: (s: string) => string;
        a: (s: string) => string;
        firstS: (s: string) => string;
        s: (s: string) => string;
        ed: (s: string) => string;
    };
    TraceryNode: typeof TraceryNode;
    Grammar: typeof TraceryGrammar;
    Symbol: typeof TracerySymbol;
    RuleSet: typeof TraceryRuleSet;
};
export = tracery;
