// Type definitions for @fluent/sequence 0.4
// Project: http://projectfluent.org
// Definitions by: Mark Weaver <https://github.com/blushingpenguin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { FluentBundle } from "@fluent/bundle";

export interface MapBundleAsync {
    (bundles: AsyncIterable<FluentBundle>, id: string): Promise<FluentBundle|null>;
    (bundles: AsyncIterable<FluentBundle>, id: string[]): Promise<Array<FluentBundle|null>>;
}

export const mapBundleAsync: MapBundleAsync;

export interface MapBundleSync {
    (bundles: Iterable<FluentBundle>, id: string): FluentBundle|null;
    (bundles: Iterable<FluentBundle>, id: string[]): Array<FluentBundle|null>;
}

export const mapBundleSync: MapBundleSync;

export as namespace FluentSequence;
