import {
    AttributeOperator,
    CFG,
    Config,
    ContextNode,
    CustomSelector,
    CustomSelectorResult,
    Dom as _Dom,
    Global,
    MatchLambda,
    MatchResolver,
    MatcherMode,
    SelectLambda,
    SelectResolver,
    Snapshot,
} from "../index";

export as namespace NW;
export const Dom: Dom;

// Needed because there's no other way to re-export an interface when it's shadowed by an exported variable:
// tslint:disable-next-line: no-empty-interface
export interface Dom extends _Dom {}
export {
    AttributeOperator,
    CFG,
    Config,
    ContextNode,
    CustomSelector,
    CustomSelectorResult,
    Global,
    MatchLambda,
    MatchResolver,
    MatcherMode,
    SelectLambda,
    SelectResolver,
    Snapshot,
};
