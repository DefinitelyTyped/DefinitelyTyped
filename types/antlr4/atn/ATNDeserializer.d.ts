import LexerAction from "../action/LexerAction";
import IntervalSet from "../misc/IntervalSet";
import ATNState from "../state/ATNState";
import BasicState from "../state/BasicState";
import StarLoopEntryState from "../state/StarLoopEntryState";
import Transition from "../transition/Transition";
import ATN from "./ATN";
import ATNDeserializationOptions from "./ATNDeserializationOptions";

export default class ATNDeserializer {
    deserializationOptions: ATNDeserializationOptions;
    stateFactories: Array<(() => BasicState) | null> | null;
    actionFactories: Array<(dataA: any, dataB: any) => LexerAction> | null;
    data: number[];
    pos?: number;

    constructor(options?: ATNDeserializationOptions);

    deserialize(data: number[]): ATN;

    reset(data: number[] | string): boolean;

    skipUUID(): void;

    checkVersion(legacy: boolean): void;

    readATN(): ATN;

    readStates(atn: ATN, legacy: boolean): void;

    readRules(atn: ATN, legacy: boolean): void;

    readModes(atn: ATN): void;

    readSets(atn: ATN, sets: IntervalSet[], reader: () => number): void;

    readEdges(atn: ATN, sets: IntervalSet[]): void;

    readDecisions(atn: ATN): void;

    readLexerActions(atn: ATN, legacy: boolean): void;

    generateRuleBypassTransitions(atn: ATN): void;

    generateRuleBypassTransition(atn: ATN, idx: number): void;

    stateIsEndStateFor(state: ATNState, idx: number): StarLoopEntryState | null;

    /**
     * Analyze the {@link StarLoopEntryState} states in the specified ATN to set
     * the {@link StarLoopEntryState.isPrecedenceDecision} field to the
     * correct value.
     *
     * @param atn The ATN.
     */
    markPrecedenceDecisions(atn: ATN): void;

    verifyATN(atn: ATN): void;

    checkCondition(condition: boolean, message?: string): void;

    readInt(): number | undefined;

    readInt32(): number;

    edgeFactory(
        atn: ATN,
        type: number,
        src: number,
        trg: number,
        arg1: number,
        arg2: number,
        arg3: number,
        sets: IntervalSet[],
    ): Transition;

    stateFactory(type: number, ruleIndex: number): BasicState | undefined;

    lexerActionFactory(type: number, data1: number, data2: number): LexerAction;
}
