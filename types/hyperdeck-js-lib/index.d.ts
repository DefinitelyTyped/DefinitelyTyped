/// <reference types="node" />

import { EventEmitter } from "events";
import { GlobalLogger } from "js-logger";

export const Logger: GlobalLogger;

export namespace Hyperdeck {
    type Config = string | { ip: string; pingInterval?: number };

    /** Format is `hours:minutes:seconds:frames` */
    type Timecode = `${number}:${number}:${number}:${number}`;

    interface Response<T> {
        code: number;
        text: string;
        params: T;
    }

    interface Notifier {
        on(event: "asynchronousEvent", callback: (response: Response<unknown>) => void): this;
        on(event: "connectionStateChange", callback: (response: { connected: boolean }) => void): this;
        on(event: "connectionLost", callback: () => void): this;

        once(event: "asynchronousEvent", callback: (response: Response<unknown>) => void): this;
        once(event: "connectionStateChange", callback: (response: { connected: boolean }) => void): this;
        once(event: "connectionLost", callback: () => void): this;
    }
    class Notifier extends EventEmitter {}

    type VideoFormat =
        | "NTSC"
        | "PAL"
        | "NTSCp"
        | "PALp"
        | "720p50"
        | "720p5994"
        | "720p60"
        | "1080p23976"
        | "1080p24"
        | "1080p25"
        | "1080p2997"
        | "1080p30"
        | "1080i50"
        | "1080i5994"
        | "1080i60"
        | "4Kp23976"
        | "4Kp24"
        | "4Kp25"
        | "4Kp2997"
        | "4Kp30"
        | "4Kp50"
        | "4Kp5994"
        | "4Kp60";

    type FileFormat =
        | "QuickTimeUncompressed"
        | "QuickTimeProResHQ"
        | "QuickTimeProRes"
        | "QuickTimeProResLT"
        | "QuickTimeProResProxy"
        | "QuickTimeDNxHD220"
        | "DNxHD220"
        | "QuickTimeDNxHR_HQX"
        | "DNxHR_HQX"
        | "H.264Low"
        | "H.264Medium"
        | "H.264High "
        | "QuickTimeDNxHD45 "
        | "DNxHD45"
        | "QuickTimeDNxHD145"
        | "DNxHD145"
        | "QuickTimeDNxHR_SQ "
        | "DNxHR_SQ"
        | "QuicktimeDNxHR_LB"
        | "DNxHR_LB";

    interface DeviceInfo {
        "unique id": string;
        model: string;
        "protocol version": string;
    }

    interface SlotInfo {
        "slot id": string;
        status: "empty" | "mounting" | "mounted" | "error";
        "volume name": string;
        "recording time": string;
        "video format": VideoFormat;
    }

    interface ClipList {
        [clipId: string]: `${string} ${Timecode} ${Timecode}`;
    }

    interface TransportInfo {
        status: "preview" | "stopped" | "play" | "forward" | "rewind" | "jog" | "shuttle" | "record";
        speed: string;
        /** could be "none" */
        "slot id": string;
        "display timecode": Timecode;
        timecode: Timecode;
        /** could be "none" */
        "clip id": string;
        "video format": VideoFormat;
        loop: "true" | "false";
    }
}

export class HyperdeckCore {
    /**
     * Make a request to the hyperdeck.
     * - If the hyperdeck returns a success response the promise will be resolved
     *   with the payload.
     * - If the hyperdeck returns a failure response the promise will be rejected
     *   with the payload.
     * - If the hyperdeck looses connection or is not connected the promise will be
     *   rejected and the payload will be `null`.
     * @return The promise which will resolve/reject when a response has been received
     *         (or connection lost).
     */
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    makeRequest<T>(command: string): Promise<Hyperdeck.Response<T>>;

    /**
     * Returns a promise that resolves when they hyperdeck is connected,
     * or rejected if the connection fails.
     */
    onConnected(): Promise<void>;

    /**
     * Determine if currently connected to the hyperdeck.
     * @return boolean true if connected, false otherwise.
     */
    isConnected(): boolean;

    /**
     * Get the notifier.
     * Events with id 'asynchronousEvent' will be emitted from this for asynchronous events
     * from the hyperdeck.
     * 'connectionLost' is emitted if the hyperdeck connection is lost (or fails to connect)
     */
    getNotifier(): Hyperdeck.Notifier;

    /**
     * Destroy the hyperdeck instance, and disconnect if connected.
     */
    destroy(): void;
}

export class Hyperdeck extends HyperdeckCore {
    constructor(config: Hyperdeck.Config);

    play(speed?: number): Promise<Hyperdeck.Response<unknown>>;
    stop(): Promise<Hyperdeck.Response<unknown>>;
    record(): Promise<Hyperdeck.Response<unknown>>;
    goTo(timecode: Hyperdeck.Timecode): Promise<Hyperdeck.Response<unknown>>;
    jogTo(timecode: Hyperdeck.Timecode): Promise<Hyperdeck.Response<unknown>>;
    jogForward(timecode: Hyperdeck.Timecode): Promise<Hyperdeck.Response<unknown>>;
    jogBackwards(timecode: Hyperdeck.Timecode): Promise<Hyperdeck.Response<unknown>>;
    slotInfo(id?: number): Promise<Hyperdeck.Response<Hyperdeck.SlotInfo>>;
    transportInfo(): Promise<Hyperdeck.Response<Hyperdeck.TransportInfo>>;
    clipsGet(): Promise<Hyperdeck.Response<Hyperdeck.ClipList>>;
    nextClip(): Promise<Hyperdeck.Response<unknown>>;
    prevClip(): Promise<Hyperdeck.Response<unknown>>;
    slotSelect(id?: number): Promise<Hyperdeck.Response<unknown>>;
    format(format: string): Promise<Hyperdeck.Response<unknown>>;
}
