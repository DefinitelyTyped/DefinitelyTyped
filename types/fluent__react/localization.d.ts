import { FluentBundle } from '@fluent/bundle';

export interface ReactLocalizationNotification {
    relocalize(): void;
}

export default class ReactLocalization {
    constructor(bundles: Iterable<FluentBundle>);
    subscribe(component: ReactLocalizationNotification): void;
    unsubscribe(component: ReactLocalizationNotification): void;
    setBundles(bundles: Iterable<FluentBundle>): void;
    getBundle(id: string): FluentBundle | null;
    getBundle(id: string[]): Array<FluentBundle | null>;
    getString(id: string, args?: object, fallback?: string): string;
    reportError(error: string): void;
}

export function isReactLocalization(props: object, propName: string): Error | null;
