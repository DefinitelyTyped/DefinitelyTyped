// Type definitions for opentok v2.9.2
// Project: https://github.com/opentok/opentok-node
// Definitions by: Seth Westphal <https://github.com/westy92>
//                 Anthony Messerschmidt <https://github.com/CatGuardian>
//                 Andrej Mihajlov <https://github.com/pronebird>
//                 Victor Alencar <https://github.com/valencar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'opentok' {

  namespace OpenTok {

    export type OutputMode = 'composed' | 'individual';

    export type ArchiveStatus = 'available' | 'expired' | 'failed' | 'paused' | 'started' | 'stopped' | 'uploaded';

    export interface Archive {
      createdAt: number;
      duration: string;
      id: string;
      name: string;
      partnerId: string;
      reason: string;
      sessionId: string;
      size: number;
      status: ArchiveStatus;
      hasAudio: boolean;
      hasVideo: boolean;
      outputMode: OutputMode;
      url: string;
    }

    export interface ArchiveOptions {
      name?: string;
      hasAudio?: boolean;
      hasVideo?: boolean;
      outputMode?: OutputMode;
      layout?: ArchiveLayoutOptions;
      resolution?: string;
    }

    export type ArchiveLayoutOptions = PredefinedArchiveLayoutOptions | CustomArchiveLayoutOptions;

    export interface PredefinedArchiveLayoutOptions {
      type: 'bestFit' | 'pip' | 'verticalPresentation' | 'horizontalPresentation';
    }

    export interface CustomArchiveLayoutOptions {
      type: 'custom';
      stylesheet: string;
    }

    export type MediaMode = 'relayed' | 'routed';

    export type ArchiveMode = 'manual' | 'always';

    export interface SessionOptions {
      mediaMode?: MediaMode;
      archiveMode?: ArchiveMode;
      location?: string;
    }

    export interface Session {
      sessionId: string;
    }

    export type Token = string;

    export type Role = 'subscriber' | 'publisher' | 'moderator';

    export interface TokenOptions {
      role?: Role;
      data?: string;
      expireTime?: number;
    }

    export interface ListArchivesOptions {
      count?: number;
      offset?: number;
      sessionId?: string;
    }

    export interface BroadcastLayoutOptions {
      type: 'bestFit' | 'pip' | 'verticalPresentation' | 'horizontalPresentation' | 'custom';
      stylesheet?: string
    }

    export interface BroadcastOutputOptionsRtmp {
      id: string;
      serverUrl: string;
      streamName: string;
      status?: string;
    }

    export interface BroadcastOutputOptions {
      hls?: {};
      rtmp?: BroadcastOutputOptionsRtmp[];
    }

    export interface BroadcastOptions {
      outputs: BroadcastOutputOptions;
      maxDuration?: number;
      resolution?: string;
      layout: BroadcastLayoutOptions;
    }

    export interface BroadcastUrlsResponse {
      hls?: string;
      rtmp?: BroadcastOutputOptionsRtmp[];
    }

    export interface Broadcast {
      id: string;
      status: string;
      broadcastUrls: BroadcastUrlsResponse;
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
  }

  class OpenTok {
    constructor(apiKey: string, apiSecret: string);

    public createSession(options: OpenTok.SessionOptions, callback: (error: Error | null, session?: OpenTok.Session) => void): void;
    public generateToken(sessionId: string, options: OpenTok.TokenOptions): OpenTok.Token;
    public startArchive(sessionId: string, options: OpenTok.ArchiveOptions, callback: (error: Error | null, archive?: OpenTok.Archive) => void): void;
    public stopArchive(archiveId: string, callback: (error: Error | null, archive?: OpenTok.Archive) => void): void;
    public getArchive(archiveId: string, callback: (error: Error | null, archive?: OpenTok.Archive) => void): void;
    public deleteArchive(archiveId: string, callback: (error: Error | null) => void): void;
    public listArchives(options: OpenTok.ListArchivesOptions, callback: (error: Error | null, archives?: OpenTok.Archive[], totalCount?: number) => void): void;
    public startBroadcast(sessionId: string, options: OpenTok.BroadcastOptions, callback: (error: Error | null, broadcast: OpenTok.Broadcast) => void): void;
    public stopBroadcast(broadcastId: string, callback: (error: Error | null, broadcast: OpenTok.BroadcastStopResponse) => void): void;
    public signal(sessionId: string, connectionId: string | null, data: OpenTok.SignalOptions, callback: (error: Error | null) => void): void;
  }

  export = OpenTok;
}
