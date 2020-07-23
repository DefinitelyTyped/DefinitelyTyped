// Type definitions for ft-poller 3.0
// Project: https://github.com/Financial-Times/ft-poller#readme
// Definitions by: Alex Kondov <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'ft-poller' {
    interface Config<PollerData, ExternalData> {
        url: string;
        defaultData?: PollerData;
        options?: object;
        refreshInterval?: number;
        autostart?: boolean;
        parseData?: (data: ExternalData) => PollerData;
    }

    class Poller<PollerData, ExternalData = any> {
        constructor(config: Config<PollerData, ExternalData>);
        start(options?: object): Promise<PollerData | void>;
        stop(): boolean;
        retry(): void;
        fetch(): void;
        getData(): PollerData;
        isRunning(): boolean;
    }

    export default Poller;
}
