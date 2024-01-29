export class Emulator {
    start(options?: {
        logging?: boolean;
        flags?: string;
        adminPort?: number;
        restPort?: number;
        grpcPort?: number;
    }): Promise<boolean>;

    stop(): Promise<boolean>;

    setLogging(logging: boolean): void;
}

export const emulator: Emulator;
