// Type definitions for expo-mixpanel-analytics 0.0
// Project: https://github.com/codekadiya/expo-mixpanel-analytics
// Definitions by: Martin Treurnicht <https://github.com/martintreurnicht>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare class ExpoMixpanelAnalytics {
    constructor(token: string);
    identify(userId: string): void;
    track(name: string, props: Props): void;
    people_set(props: Props): void;
    people_set_once(props: Props): void;
    people_unset(keys: string[]): void;
    people_increment(props: Props<number>): void;
    people_append(props: Props): void;
    people_union(props: Props<string[]>): void;
    people_delete_user(): void;
    reset(): void;
    token: string;
}

interface Props<T = any> {
    [key: string]: T;
}

export default ExpoMixpanelAnalytics;
