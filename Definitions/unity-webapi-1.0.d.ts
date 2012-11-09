// Type definitions for Ubuntu Unity Web API 1.0
// Project: https://launchpad.net/libunity-webapps
// Definitions by: John Vrbanac <john.vrbanac@linux.com> | https://github.com/jmvrbanac
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class UnitySettings {
   public name:String;
   public iconUrl:String;
   public onInit:Function;
}

enum UnityPlaybackState {
   Playing,
   Paused
}

declare class UnityTrackMetadata {
   title:String;

   // Optionals
   album:String;
   artist:String;
   artLocation:String;
}

interface UnityMediaPlayer {
   setTrack(trackMetadata:UnityTrackMetadata);

   onPrevious(onPreviousCallback:Function);
   onNext(onNextCallback:Function);
   onPlayPause(onPlayPauseCallback:Function);

   getPlaybackstate(response:Function);
   setPlaybackstate(state:UnityPlaybackState);

   setCanGoNext(cangonext:Boolean);
   setCanGoPrev(cangoprev:Boolean);
   setCanPlay(canplay:Boolean);
   setCanPause(canpause:Boolean);
}	      

interface UnityNotification {
   showNotification (summary:String, body:String, iconUrl?:String);
} 

declare class UnityIndicatorProperties {
   public count:Number;
   public time:Date;
   public iconURI:String;
   public onIndicatorActivated:Function;
}

interface UnityMessagingIndicator {
   showIndicator(name:String, indicatorProperties:UnityIndicatorProperties);
   clearIndicator(name:String);
   clearIndicators();

   addAction(name:String, onActionInvoked:Function);
   removeAction(name:String);
   removeActions();
   onPresenceChanged(onPresenceChanged:Function);
   
   // This is suppose to be readonly, but i'm not sure how to do this
   // in a definition file.
   presence:String;
}

 interface UnityLauncher {
   setCount(count:number);
   clearCount();
	
   setProgress(progress:number);
   clearProgress();

   setUrgent(urgent:Boolean);

   addAction(name:String, onActionInvoked:Function);
   removeAction(name:String);
   removeActions();
} 

interface Unity {
	init(settings:UnitySettings);
	addAction(name:String, callback:Function);
	removeAction(actionName:String);
   	removeActions();

	Notification:UnityNotification;
	MediaPlayer:UnityMediaPlayer;
	MessagingIndicator:UnityMessagingIndicator;
	Launcher:UnityLauncher;
}

interface BrowserPublic {
	getUnityObject(version:number):Unity;
}

