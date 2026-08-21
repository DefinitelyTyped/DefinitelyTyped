interface LaunchParams {
    targetURL?: string;
    files: readonly FileSystemHandle[];
}

interface LaunchConsumer {
    (params: LaunchParams): any;
}

interface LaunchQueue {
    setConsumer(consumer: LaunchConsumer): void;
}

interface Window {
    readonly launchQueue?: LaunchQueue;

    LaunchQueue?: LaunchQueue;
    LaunchParams?: LaunchParams;
}
