// Type definitions for opentok v2.3.2
// Project: https://github.com/opentok/opentok-node
// Definitions by: Seth Westphal <https://github.com/westy92>
//                 Anthony Messerschmidt <https://github.com/CatGuardian>
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
  }

  class OpenTok {
    constructor(apiKey: string, apiSecret: string);

    public createSession(options: OpenTok.SessionOptions, callback: (err: Error, session: OpenTok.Session) => void): void;
    public generateToken(sessionId: string, options: OpenTok.TokenOptions): OpenTok.Token;
    public startArchive(sessionId: string, options: OpenTok.ArchiveOptions, callback: (err: Error, archive: OpenTok.Archive) => void): void;
    public stopArchive(archiveId: string, callback: (err: Error, archive: OpenTok.Archive) => void): void;
    public getArchive(archiveId: string, callback: (err: Error, archive: OpenTok.Archive) => void): void;
    public deleteArchive(archiveId: string, callback: (err: Error) => void): void;
    public listArchives(options: OpenTok.ListArchivesOptions, callback: (err: Error, archives: OpenTok.Archive[], totalCount: number) => void): void;
  }

  export = OpenTok;
}
