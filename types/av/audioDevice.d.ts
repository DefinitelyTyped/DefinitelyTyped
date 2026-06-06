/// <reference path="./buffer.d.ts" />

declare namespace AV {
    class AudioDevice {
        static register(device: DeviceConstructor): void;
        static create(sampleRate: number, channels: number): Device | null;

        constructor(sampleRate: number, channels: number);

        playing: boolean;
        currentTime: number;

        start(): void;
        stop(): void;
        seek(time: number): void;

        on(event: "refill", fn: (buffer: Buffer) => void): void;
        on(event: "timeUpdate", fn: (msecs: number) => void): void;

        off(event: "refill", fn: (buffer: Buffer) => void): void;
        off(event: "timeUpdate", fn: (msecs: number) => void): void;

        once(event: "refill", fn: (buffer: Buffer) => void): void;
        once(event: "timeUpdate", fn: (msecs: number) => void): void;

        emit(event: "refill", fn: (buffer: Buffer) => void): void;
        emit(event: "timeUpdate", fn: (msecs: number) => void): void;
    }

    interface DeviceConstructor {
        new(sampleRate: number, channels: number): Device;
    }

    interface Device {
        supported: boolean;

        destroy(): void;
        getDeviceTime(): number;

        on(event: "refill", fn: (buffer: Buffer) => void): void;
        on(event: "timeUpdate", fn: (msecs: number) => void): void;

        off(event: "refill", fn: (buffer: Buffer) => void): void;
        off(event: "timeUpdate", fn: (msecs: number) => void): void;

        once(event: "refill", fn: (buffer: Buffer) => void): void;
        once(event: "timeUpdate", fn: (msecs: number) => void): void;

        emit(event: "refill", fn: (buffer: Buffer) => void): void;
        emit(event: "timeUpdate", fn: (msecs: number) => void): void;
    }
}
