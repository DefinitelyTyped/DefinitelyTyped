type DetectPortCallback = (err: Error, _port: number) => void;

interface PortConfig {
    port?: number;
    hostname?: string | undefined;
    callback?: DetectPortCallback | undefined;
}

interface DetectPort {
    (port: number | PortConfig | undefined, callback: DetectPortCallback): void;
    (port?: number | PortConfig): Promise<number>;
}
declare const detectPort: DetectPort;
export = detectPort;
