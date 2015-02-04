// Type definitions for WebRTC
// Project: http://dev.w3.org/2011/webrtc/
// Definitions by: Ken Smith <https://github.com/smithkl42/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Taken from http://dev.w3.org/2011/webrtc/editor/getusermedia.html

interface MediaStreamConstraints {
  audio: any;
  video: any;
}
declare var MediaStreamConstraints: {
  prototype: MediaStreamConstraints;
  new (): MediaStreamConstraints;
};

interface MediaTrackConstraints {
  mandatory: MediaTrackConstraintSet;
  optional: MediaTrackConstraint[];
}
declare var MediaTrackConstraints: {
  prototype: MediaTrackConstraints;
  new (): MediaTrackConstraints;
};

// ks - Not defined in the source doc.
interface MediaTrackConstraintSet {
}
declare var MediaTrackConstraintSet: {
  prototype: MediaTrackConstraintSet;
  new (): MediaTrackConstraintSet;
};

// ks - Not defined in the source doc.
interface MediaTrackConstraint {
}
declare var MediaTrackConstraint: {
  prototype: MediaTrackConstraint;
  new (): MediaTrackConstraints;
};

interface Navigator {
  getUserMedia(constraints: MediaStreamConstraints,
               successCallback: (stream: any) => void,
               errorCallback: (error: Error) => void) : void;
  webkitGetUserMedia(constraints: MediaStreamConstraints,
                     successCallback: (stream: any) => void,
                     errorCallback: (error: Error) => void): void;
  mozGetUserMedia(constraints: MediaStreamConstraints,
                  successCallback: (stream: any) => void,
                  errorCallback: (error: Error) => void): void;
}

interface EventHandler { (event: Event): void; }

interface NavigatorUserMediaSuccessCallback {
  (stream: LocalMediaStream): void;
}

interface NavigatorUserMediaError {
  PERMISSION_DENIED: number; // = 1;
  code: number;
}
declare var NavigatorUserMediaError: {
  prototype: NavigatorUserMediaError;
  new (): NavigatorUserMediaError;
  PERMISSION_DENIED: number; // = 1;
};

interface NavigatorUserMediaErrorCallback {
  (error: NavigatorUserMediaError): void;
}

interface MediaStreamTrackList {
  length: number;
  item: MediaStreamTrack;
  add(track: MediaStreamTrack): void;
  remove(track: MediaStreamTrack): void;
  onaddtrack: (event: Event) => void;
  onremovetrack: (event: Event) => void;
}
declare var MediaStreamTrackList: {
  prototype: MediaStreamTrackList;
  new (): MediaStreamTrackList;
};
declare var webkitMediaStreamTrackList: {
  prototype: MediaStreamTrackList;
  new (): MediaStreamTrackList;
};

interface MediaStream {
  label: string;
  id: string;
  getAudioTracks(): MediaStreamTrackList;
  getVideoTracks(): MediaStreamTrackList;
  ended: boolean;
  onended: (event: Event) => void;
}
declare var MediaStream: {
  prototype: MediaStream;
  new (): MediaStream;
  new (trackContainers: MediaStream[]): MediaStream;
  new (trackContainers: MediaStreamTrackList[]): MediaStream;
  new (trackContainers: MediaStreamTrack[]): MediaStream;
};
declare var webkitMediaStream: {
  prototype: MediaStream;
  new (): MediaStream;
  new (trackContainers: MediaStream[]): MediaStream;
  new (trackContainers: MediaStreamTrackList[]): MediaStream;
  new (trackContainers: MediaStreamTrack[]): MediaStream;
};

// an - not defined in source doc.
interface SourceInfo {
  label: string;
  id: string;
  kind: string;
  facing: string;
}
declare var SourceInfo: {
  prototype: SourceInfo;
};

interface LocalMediaStream extends MediaStream {
  stop(): void;
}

interface MediaStreamTrack {
  kind: string;
  label: string;
  enabled: boolean;
  LIVE: number; // = 0;
  MUTED: number; // = 1;
  ENDED: number; // = 2;
  readyState: number;
  onmute: (event: Event) => void;
  onunmute: (event: Event) => void;
  onended: (event: Event) => void;
}
declare var MediaStreamTrack: {
  prototype: MediaStreamTrack;
  new (): MediaStreamTrack;
  LIVE: number; // = 0;
  MUTED: number; // = 1;
  ENDED: number; // = 2;
  getSources: (callback: (sources: SourceInfo[]) => void) => void;
};

interface streamURL extends URL {
  createObjectURL(stream: MediaStream): string;
}
//declare var URL: {
//  prototype: MediaStreamTrack;
//  new (): URL;
//  createObjectURL(stream: MediaStream): string;
//}

interface WebkitURL extends streamURL {
}
declare var webkitURL: {
  prototype: WebkitURL;
  new (): streamURL;
  createObjectURL(stream: MediaStream): string;
};

