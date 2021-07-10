// Type definitions for ft-poller 3.0
// Project: https://github.com/Financial-Times/ft-poller#readme
// Definitions by: Alex Kondov <https://github.com/AlexKondov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    [key: string]: any;
}

interface Config<PollerData, ExternalData> {
    url: string;
    defaultData?: PollerData | undefined;
    options?: Options | undefined;
    refreshInterval?: number | undefined;
    autostart?: boolean | undefined;
    parseData?: ((data: ExternalData) => PollerData) | undefined;
}

declare class Poller<PollerData, ExternalData = any> {
    constructor(config: Config<PollerData, ExternalData>);
    start(options?: Options): Promise<PollerData>;
    stop(): boolean;
    retry(): void;
    fetch(): void;
    getData(): PollerData;
    isRunning(): boolean;
}

export = Poller;
