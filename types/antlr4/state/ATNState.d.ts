import ATN from "../atn/ATN";
import IntervalSet from "../misc/IntervalSet";
import Transition from "../transition/Transition";

export default class ATNState {
    static readonly INVALID_TYPE: 0;
    static readonly BASIC: 1;
    static readonly RULE_START: 2;
    static readonly BLOCK_START: 3;
    static readonly PLUS_BLOCK_START: 4;
    static readonly STAR_BLOCK_START: 5;
    static readonly TOKEN_START: 6;
    static readonly RULE_STOP: 7;
    static readonly BLOCK_END: 8;
    static readonly STAR_LOOP_BACK: 9;
    static readonly STAR_LOOP_ENTRY: 10;
    static readonly PLUS_LOOP_BACK: 11;
    static readonly LOOP_END: 12;
    static readonly INVALID_STATE_NUMBER: -1;

    static readonly serializationNames: [
        "INVALID",
        "BASIC",
        "RULE_START",
        "BLOCK_START",
        "PLUS_BLOCK_START",
        "STAR_BLOCK_START",
        "TOKEN_START",
        "RULE_STOP",
        "BLOCK_END",
        "STAR_LOOP_BACK",
        "STAR_LOOP_ENTRY",
        "PLUS_LOOP_BACK",
        "LOOP_END",
    ];

    atn: ATN | null;
    stateNumber: number;
    stateType: number | null;
    ruleIndex: number;
    epsilonOnlyTransitions: boolean;
    transitions: Transition[];
    nextTokenWithinRule: IntervalSet | null;

    toString(): number;
    equals(other: ATNState): boolean;
    isNonGreedyExitState(): boolean;
    addTransition(trans: Transition, index?: number): void;
}
