/// <reference types="react" />

export type ListenerCallback = (experimentName: string, variantName: string) => void;
export interface Subscription {
    remove(): void;
    listener: ListenerCallback;
    eventType: string;
}

export namespace emitter {
    function emitWin(experimentName: string): void;
    function addActiveVariantListener(eventName: string | ListenerCallback, callback?: ListenerCallback): Subscription;
    function addPlayListener(eventName: string | ListenerCallback, callback?: ListenerCallback): Subscription;
    function addWinListener(eventName: string | ListenerCallback, callback?: ListenerCallback): Subscription;
    function defineVariants(experimentName: string, variantNames: string[], variantWeights?: number[]): void;
    function setActiveVariant(experimentName: string, variantName: string): void;
    function getActiveVariant(experimentName: string): string;
    function calculateActiveVariant(
        experimentName: string,
        userIdentifier?: string,
        defaultVariantName?: string,
    ): string;
    function getSortedVariants(experimentName: string): string[];
    function setCustomDistributionAlgorithm(
        customAlgorithm: (experimentName: string, userIdentifier: string, defaultVariantName?: string) => void,
    ): void;
}

export interface ExperimentProps {
    name: string;
    defaultVariantName?: string;
    userIdentifier?: string;
    children: React.ReactNode;
}

export function Experiment({
    name,
    defaultVariantName,
    userIdentifier,
    children,
}: ExperimentProps): JSX.Element;

export function Variant({
    name,
    children,
}: { name: string; children: React.ReactNode }): JSX.Element;

export namespace experimentDebugger {
    function setDebuggerAvailable(isAvailable: boolean): void;
    function enable(): void;
    function disable(): void;
}

export namespace mixpanelHelper {
    function enable(): void;
    function disable(): void;
}

export namespace segmentHelper {
    function enable(): void;
    function disable(): void;
}
