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
