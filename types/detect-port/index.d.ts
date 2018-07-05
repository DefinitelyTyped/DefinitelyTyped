// Type definitions for detect-port 1.1
// Project: https://github.com/node-modules/detect-port
// Definitions by: François Nguyen <https://github.com/lith-light-g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DetectPort {
    (port: number, callback: (err: Error, _port: number) => void): void;
    (port: number): Promise<number>;
}
declare const detectPort: DetectPort;
export = detectPort;
