// Type definitions for Ubuntu Unity Web API 1.0
// Project: https://launchpad.net/libunity-webapps
// Definitions by: John Vrbanac <https://github.com/jmvrbanac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface External {
   getUnityObject(version: number): Unity;
}

declare class UnitySettings {
   public name: string;
   public iconUrl: string;
   public onInit: Function;
}

declare enum UnityPlaybackState {
   Playing,
   Paused
}

declare class UnityTrackMetadata {
   title: string;

   // Optionals
   album: string;
   artist: string;
   artLocation: string;
}

interface UnityMediaPlayer {
   setTrack(trackMetadata: UnityTrackMetadata): any;

   onPrevious(onPreviousCallback: Function): any;
   onNext(onNextCallback: Function): any;
   onPlayPause(onPlayPauseCallback: Function): any;

   getPlaybackstate(response: Function): any;
   setPlaybackstate(state: UnityPlaybackState): any;

   setCanGoNext(cangonext: boolean): any;
   setCanGoPrev(cangoprev: boolean): any;
   setCanPlay(canplay: boolean): any;
   setCanPause(canpause: boolean): any;
}

interface UnityNotification {
   showNotification(summary: string, body: string, iconUrl?: string): any;
}

declare class UnityIndicatorProperties {
   public count: number;
   public time: Date;
   public iconURI: string;
   public onIndicatorActivated: Function;
}

interface UnityMessagingIndicator {
   showIndicator(name: string, indicatorProperties: UnityIndicatorProperties): any;
   clearIndicator(name: string): any;
   clearIndicators(): any;

   addAction(name: string, onActionInvoked: Function): any;
   removeAction(name: string): any;
   removeActions(): any;
   onPresenceChanged(onPresenceChanged: Function): any;

   // This is suppose to be readonly, but i'm not sure how to do this
   // in a definition file.
   presence: string;
}

interface UnityLauncher {
   setCount(count: number): any;
   clearCount(): any;

   setProgress(progress: number): any;
   clearProgress(): any;

   setUrgent(urgent: boolean): any;

   addAction(name: string, onActionInvoked: Function): any;
   removeAction(name: string): any;
   removeActions(): any;
}

interface Unity {
   init(settings: UnitySettings): any;
   addAction(name: string, callback: Function): any;
   removeAction(actionName: string): any;
   removeActions(): any;

   Notification: UnityNotification;
   MediaPlayer: UnityMediaPlayer;
   MessagingIndicator: UnityMessagingIndicator;
   Launcher: UnityLauncher;
}

interface BrowserPublic {
   getUnityObject(version: number): Unity;
}
