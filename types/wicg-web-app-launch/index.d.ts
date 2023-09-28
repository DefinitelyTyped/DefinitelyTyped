// Type definitions for non-npm package Web App Launch Handling 2023.01
// Project: https://github.com/WICG/web-app-launch
// Definitions by: Christian Liebel <https://github.com/christianliebel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.7

interface LaunchParams {
    targetURL?: string;
    files: ReadonlyArray<FileSystemHandle>;
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
