// Type definitions for SIPml5
// Project: http://sipml5.org/
// Definitions by: A. Groenenboom <https://github.com/chookies>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module SIPml {
  class Event {
    public description: string;
    public type: string;

    public getContent(): Object;
    public getContentString(): string;
    public getContentType(): Object;
    public getSipResponseCode(): number;
  }

  class EventTarget {
    public addEventListener(type: any, listener: Function): void;
    public removeEventListener(type: any): void;
  }

  class Session {
    public accept(configuration?: Session.Configuration): number;
    public getId(): number;
    public getRemoteFriendlyName(): string;
    public getRemoteUri(): string;
    public reject(configuration?: Session.Configuration): number;
    public setConfiguration(configuration?: Session.Configuration): void;
  }

  export module Session {
    interface Configuration {
      audio_remote?: HTMLAudioElement;
      bandwidth?: Object;
      expires?: number;
      from?: string;
      sip_caps?: Object[];
      sip_headers?: Object[];
      video_local?: HTMLVideoElement;
      video_remote?: HTMLVideoElement;
      video_size?: Object;
    }

    class Call extends Session {
      public acceptTransfer(configuration?: Session.Configuration): number;
      public call(to: string, configuration?: Session.Configuration): number;
      public dtmf(): number;
      public hangup(configuration?: Session.Configuration): number;
      public hold(configuration?: Session.Configuration): number;
      public info(): number;
      public rejectTransfer(): number;
      public resume(): number;
      public transfer(): number;
    }

    class Event extends SIPml.Event {
      public session: Session;

      public getTransferDestinationFriendlyName(): string;
    }

    class Message extends Session {
      public send(to: string, content?: any, contentType?: string, configuration?: Session.Configuration): number;
    }

    class Publish extends Session {
      public publish(content?: any, contentType?: string, configuration?: Session.Configuration): number;

      public unpublish(configuration?: Session.Configuration): void;
    }

    class Registration extends Session {
      public register(configuration?: Session.Configuration): void;
      public unregister(configuration?: Session.Configuration): void;
    }

    class Subscribe extends Session {
      public subscribe(to: string, configuration?: Session.Configuration): number;
      public unsubscribe(configuration?: Session.Configuration): number;
    }
  }

  class Stack extends EventTarget {
    public constructor(configuration?: Stack.Configuration);
    public setConfiguration(configuration: Stack.Configuration): number;
    public newSession(type: string, configuration: Stack.Configuration): any;
    public start(): number;
    public stop(timeout: number): number;
  }

  export module Stack {
    interface Configuration {
      bandwidth?: Object;
      display_name?: string;
      enable_click2call?: boolean;
      enable_early_ims?: boolean;
      enable_media_stream_cache?: boolean;
      enable_rtcweb_breaker?: boolean;
      events_listener?: Object;
      ice_servers?: Object[];
      impi?: string;
      impu?: string;
      outbound_proxy_url?: string;
      password?: string;
      realm?: string;
      sip_headers?: Object[];
      video_size?: Object;
      websocket_proxy_url?: string;
    }

    class Event extends SIPml.Event {
      public description: string;
      public newSession: Session;
      public type: string;
    }
  }

  function getNavigatorFriendlyName(): string;

  function getNavigatorVersion(): string;

  function getSystemFriendlyName(): string;

  function getWebRtc4AllVersion(): string;

  function haveMediaStream(): boolean;

  function init(readyCallback?: (e:any) => any, errorCallback?: (e:any) => any): boolean;

  function isInitialized(): boolean;

  function isNavigatorOutdated(): boolean;

  function isReady(): boolean;

  function isScreenShareSupported(): boolean;

  function isWebRtcPluginOutdated(): boolean;

  function isWebRtc4AllSupported(): boolean;

  function isWebRtcSupported(): boolean;

  function isWebSocketSupported(): boolean;

  function setDebugLevel(level: string): void;

  function setWebRtcType(type: string): boolean;
}
