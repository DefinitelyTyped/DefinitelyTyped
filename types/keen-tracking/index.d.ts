// Type definitions for keen-tracking 2.0
// Project: https://github.com/keen/keen-tracking.js#readme, https://keen.io
// Definitions by: Rui Ferreira <https://github.com/rui-ferreira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export default class KeenTracking {
    constructor(options: { projectId: string; writeKey: string; requestType?: string });

    recordEvent(
        collectionName: string,
        event: object
    ): Promise<{ created: boolean }>;

    recordEvents(events: {
        [collectionName: string]: object[];
    }): Promise<{
        [collectionName: string]: boolean[];
    }>;
}
