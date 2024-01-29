export const STRATEGY_MIN_NETWORK_TRAFFIC: 0;
export const STRATEGY_GROUP: 1;
export const STRATEGY_PROGRESSIVE: 2;
export const STRATEGY_DICHOTOMY: 3;
export type Strategy =
    | typeof STRATEGY_MIN_NETWORK_TRAFFIC
    | typeof STRATEGY_GROUP
    | typeof STRATEGY_PROGRESSIVE
    | typeof STRATEGY_DICHOTOMY;

export function chooseNextLevelToFetch(
    strategy: any,
    node: any,
    nodeLevel: any,
    currentLevel: any,
    layer: any,
    failureParams: any,
): any;
