declare module "opentok" {
    namespace OpenTok {
        export type OutputMode = "composed" | "individual";

        export type ArchiveStatus = "available" | "expired" | "failed" | "paused" | "started" | "stopped" | "uploaded";

        export interface Archive {
            createdAt: number;
            duration: string;
            id: string;
            name: string;
            partnerId?: string;
            projectId?: string;
            reason: string;
            sessionId: string;
            size: number;
            status: ArchiveStatus;
            hasAudio: boolean;
            hasVideo: boolean;
            outputMode: OutputMode;
            resolution?: "640x480" | "1280x720" | undefined;
            streamMode?: "auto" | "manual" | undefined;
            streams?: Stream[] | undefined;
            url: string;
            delete(callback: (error: Error | null) => void): void;
            stop(callback: (error: Error | null, archive?: Archive) => void): void;
        }

        export interface ArchiveOptions {
            name?: string | undefined;
            hasAudio?: boolean | undefined;
            hasVideo?: boolean | undefined;
            outputMode?: OutputMode | undefined;
            layout?: ArchiveLayoutOptions | undefined;
            resolution?: string | undefined;
            streamMode?: "auto" | "manual" | undefined;
        }

        export type ArchiveLayoutOptions =
            | PredefinedArchiveLayoutOptions
            | CustomArchiveLayoutOptions
            | ScreenshareArchiveLayoutOptions;

        export interface PredefinedArchiveLayoutOptions {
            type: "bestFit" | "pip" | "verticalPresentation" | "horizontalPresentation" | "focus";
        }

        export interface CustomArchiveLayoutOptions {
            type: "custom";
            stylesheet: string;
        }

        export interface ScreenshareArchiveLayoutOptions {
            type: "bestFit";
            screenshareType?: "bestFit" | "horizontalPresentation" | "verticalPresentation" | "pip";
        }

        export type MediaMode = "relayed" | "routed";

        export type ArchiveMode = "manual" | "always";

        export interface SessionOptions {
            mediaMode?: MediaMode | undefined;
            archiveMode?: ArchiveMode | undefined;
            location?: string | undefined;
        }

        export interface Stream {
            streamId: string;
            hasAudio: boolean;
            hasVideo: boolean;
        }

        export interface PatchStream {
            hasAudio?: boolean | undefined;
            hasVideo?: boolean | undefined;
        }

        export interface Session {
            sessionId: string;
        }

        export type Token = string;

        export interface DialOptions {
            headers?: { [key: string]: string } | undefined;
            auth?: { [key: string]: string } | undefined;
            secure: boolean;
            from: string;
            video?: boolean;
            observeForceMute?: boolean;
        }

        export type Role = "subscriber" | "publisher" | "moderator";

        export interface TokenOptions {
            role?: Role | undefined;
            data?: string | undefined;
            expireTime?: number | undefined;
            initialLayoutClassList?: string[] | undefined;
        }

        export interface ListArchivesOptions {
            count?: number | undefined;
            offset?: number | undefined;
            sessionId?: string | undefined;
        }

        export type BroadcastLayoutType =
            | "bestFit"
            | "pip"
            | "verticalPresentation"
            | "horizontalPresentation"
            | "focus";

        export interface BroadcastLayoutOptions {
            type?: BroadcastLayoutType | undefined;
        }

        export interface CustomBroadcastLayoutOptions {
            type: "custom";
            stylesheet: string;
        }

        export type BroadcastLayout = BroadcastLayoutOptions | CustomBroadcastLayoutOptions;

        export interface BroadcastOutputOptionsRtmp {
            id: string;
            serverUrl: string;
            streamName: string;
            status?: string | undefined;
        }

        export interface BroadcastOutputOptions {
            hls?: {} | undefined;
            rtmp?: BroadcastOutputOptionsRtmp[] | undefined;
        }

        export interface BroadcastOptions {
            outputs: BroadcastOutputOptions;
            maxDuration?: number | undefined;
            resolution?: "640x480" | "1280x720" | undefined;
            streamMode?: "auto" | "manual" | undefined;
            layout: BroadcastLayout;
        }

        export interface ListBroadcastsOptions {
            count?: number | undefined;
            offset?: number | undefined;
            sessionId?: string | undefined;
        }

        export interface BroadcastUrlsResponse {
            hls?: string | undefined;
            rtmp?: BroadcastOutputOptionsRtmp[] | undefined;
        }

        export interface Broadcast {
            broadcastUrls: BroadcastUrlsResponse;
            createdAt: number;
            id: string;
            projectId: number;
            resolution: "640x480" | "1280x720";
            sessionId: string;
            status: string;
            updatedAt: number;
            stop(callback: (error: Error | null, broadcast: Broadcast) => void): void;
        }

        export interface BroadcastStopResponse {
            id: string;
            sessionId: string;
            projectId: number;
            createdAt: number;
            updatedAt: number;
            resolution: string;
        }

        export interface SignalOptions {
            type: string;
            data: any;
        }

        export interface SipInterconnect {
            id: string;
            connectionId: string;
            streamId: string;
        }

        export type StreamId = string;

        export interface Stream {
            id: string;
            name: string;
            layoutClassList: string[];
            videoType: "camera" | "screen" | "custom";
        }

        export interface Env {
            apiUrl?: string;
            uaAddendum?: string;
            timeout?: number;
        }
    }

    class OpenTok {
        constructor(apiKey: string, apiSecret: string, env?: OpenTok.Env);

        public createSession(
            options: OpenTok.SessionOptions,
            callback: (error: Error | null, session?: OpenTok.Session) => void,
        ): void;
        public deleteArchive(archiveId: string, callback: (error: Error | null) => void): void;
        public dial(
            sessionId: string,
            token: OpenTok.Token,
            sipUri: string,
            options: OpenTok.DialOptions,
            callback: (error: Error | null, sipInterconnect: OpenTok.SipInterconnect) => void,
        ): void;
        public forceDisconnect(sessionId: string, connectionId: string, callback: (error: Error | null) => void): void;
        public generateToken(sessionId: string, options?: OpenTok.TokenOptions): OpenTok.Token;
        public getArchive(archiveId: string, callback: (error: Error | null, archive?: OpenTok.Archive) => void): void;
        public getBroadcast(
            broadcastId: string,
            callback: (error: Error | null, broadcast?: OpenTok.Broadcast) => void,
        ): void;
        public getStream(
            sessionId: string,
            options: OpenTok.StreamId,
            callback: (error: Error | null, stream?: OpenTok.Stream) => void,
        ): void;
        public listArchives(
            options: OpenTok.ListArchivesOptions,
            callback: (error: Error | null, archives?: OpenTok.Archive[], totalCount?: number) => void,
        ): void;
        public listBroadcasts(
            options: OpenTok.ListBroadcastsOptions,
            callback: (error: Error | null, broadcasts?: OpenTok.Broadcast[]) => void,
        ): void;
        public listStreams(
            sessionId: string,
            callback: (error: Error | null, streams?: OpenTok.Stream[]) => void,
        ): void;
        public addArchiveStream(
            archiveId: string,
            streamId: string,
            options: OpenTok.PatchStream,
            callback: (error: Error | null) => void,
        ): void;
        public removeArchiveStream(
            archiveId: string,
            streamId: string,
            options: OpenTok.PatchStream,
            callback: (error: Error | null) => void,
        ): void;
        public addBroadcastStream(
            broadcastId: string,
            streamId: string,
            options: OpenTok.PatchStream,
            callback: (error: Error | null) => void,
        ): void;
        public removeBroadcastStream(
            broadcastId: string,
            streamId: string,
            options: OpenTok.PatchStream,
            callback: (error: Error | null) => void,
        ): void;
        public playDTMF(
            sessionId: string,
            connectionId: string,
            digits: string,
            callback: (error: Error | null) => void,
        ): void;
        public setArchiveLayout(
            archiveId: string,
            type: OpenTok.BroadcastLayoutType | "custom",
            stylesheet: string | null,
            callback: (error: Error | null) => void,
        ): void;
        public setBroadcastLayout(
            broadcastId: string,
            type: OpenTok.BroadcastLayoutType | "custom",
            stylesheet: string | null,
            callback: (error: Error | null) => void,
        ): void;
        public setStreamClassLists(
            sessionId: string,
            classListArray: ReadonlyArray<{ id: string; layoutClassList: string[] }>,
            callback: (error: Error | null) => void,
        ): void;
        public signal(
            sessionId: string,
            connectionId: string | null,
            data: OpenTok.SignalOptions,
            callback: (error: Error | null) => void,
        ): void;
        public startArchive(
            sessionId: string,
            options: OpenTok.ArchiveOptions,
            callback: (error: Error | null, archive?: OpenTok.Archive) => void,
        ): void;
        public startBroadcast(
            sessionId: string,
            options: OpenTok.BroadcastOptions,
            callback: (error: Error | null, broadcast: OpenTok.Broadcast) => void,
        ): void;
        public stopArchive(archiveId: string, callback: (error: Error | null, archive?: OpenTok.Archive) => void): void;
        public stopBroadcast(
            broadcastId: string,
            callback: (error: Error | null, broadcast: OpenTok.BroadcastStopResponse) => void,
        ): void;
    }

    export = OpenTok;
}
