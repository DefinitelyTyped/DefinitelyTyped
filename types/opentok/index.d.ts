// Type definitions for opentok v2.10.0
// Project: https://github.com/opentok/opentok-node
// Definitions by: Seth Westphal <https://github.com/westy92>
//                 Anthony Messerschmidt <https://github.com/CatGuardian>
//                 Andrej Mihajlov <https://github.com/pronebird>
//                 Victor Alencar <https://github.com/valencar>
//                 Luis Felipe Zaguini <https://github.com/zaguiini>
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
      resolution?: '640x480' | '1280x720';
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
      type: 'bestFit' | 'pip' | 'verticalPresentation' | 'horizontalPresentation' | 'focus';
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

    export interface DialOptions {
      headers?: { [key: string]: string };
      auth?: { [key: string]: string };
      secure: boolean;
      from: string;
    }

    export type Role = 'subscriber' | 'publisher' | 'moderator';

    export interface TokenOptions {
      role?: Role;
      data?: string;
      expireTime?: number;
      initialLayoutClassList?: string[];
    }

    export interface ListArchivesOptions {
      count?: number;
      offset?: number;
      sessionId?: string;
    }

    export type BroadcastLayoutType = 'bestFit' | 'pip' | 'verticalPresentation' | 'horizontalPresentation' | 'focus';

    export interface BroadcastLayoutOptions {
      type?: BroadcastLayoutType;
    }

    export interface CustomBroadcastLayoutOptions {
      type: 'custom';
      stylesheet: string;
    }

    export type BroadcastLayout = BroadcastLayoutOptions | CustomBroadcastLayoutOptions;

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
      resolution?: '640x480' | '1280x720';
      layout: BroadcastLayout;
    }

    export interface ListBroadcastsOptions {
      count?: number;
      offset?: number;
      sessionId?: string;
    }

    export interface BroadcastUrlsResponse {
      hls?: string;
      rtmp?: BroadcastOutputOptionsRtmp[];
    }

    export interface Broadcast {
      broadcastUrls: BroadcastUrlsResponse;
      createdAt: number;
      id: string;
      projectId: number;
      resolution: '640x480' | '1280x720';
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
      videoType: 'camera' | 'screen';
    }
  }

  class OpenTok {
    constructor(apiKey: string, apiSecret: string);

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
    ): OpenTok.SipInterconnect;
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
    public listStreams(sessionId: string, callback: (error: Error | null, streams?: OpenTok.Stream[]) => void): void;
    public setArchiveLayout(
      archiveId: string,
      type: OpenTok.BroadcastLayoutType | 'custom',
      stylesheet: string | null,
      callback: (error: Error | null) => void,
    ): void;
    public setBroadcastLayout(
      broadcastId: string,
      type: OpenTok.BroadcastLayoutType | 'custom',
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
