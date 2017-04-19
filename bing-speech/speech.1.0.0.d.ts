// Type definitions for speech.1.0.0.js
// Project: https://www.microsoft.com/cognitive-services/en-us/speech-api
// Definitions by: Chao Wang <https://github.com/lvovl> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Microsoft.ProjectOxford.SpeechRecognition{
	// Microsoft.ProjectOxford.SpeechRecognition.MicrophoneRecognitionClient.!0
	
	/**
	 * 
	 */
	interface MicrophoneRecognitionClient0 {
				
		/**
		 * 
		 */
		serviceUri : string;
				
		/**
		 * 
		 */
		clientVersion : string;
				
		/**
		 * 
		 */
		authenticationScheme : string;
	}
}
declare namespace Bing.Synthesis.prototype{
	// Bing.Synthesis.prototype.getVoices.!ret
	type GetVoicesRet = Array</* Bing.Synthesis.prototype.getVoices.!ret.<i> */ any>;
}
declare namespace Bing.Synthesis.prototype.getVoices{
	// Bing.Synthesis.prototype.getVoices.!ret.<i>
	
	/**
	 * 
	 */
	interface GetVoicesRetI {
				
		/**
		 * 
		 */
		voiceURI : string;
				
		/**
		 * 
		 */
		localService : boolean;
				
		/**
		 * 
		 */
		default : boolean;
	}
}
declare namespace Bing.Synthesis.prototype{
	// Bing.Synthesis.prototype.createEvent.!ret
	
	/**
	 * 
	 */
	interface CreateEventRet {
				
		/**
		 * 
		 */
		timeStamp : number;
				
		/**
		 * 
		 */
		elapsedTime : number;
	}
}
declare namespace Bing.Speech.prototype{
	// Bing.Speech.prototype.createEvent.!ret
	
	/**
	 * 
	 */
	interface CreateEventRet {
				
		/**
		 * 
		 */
		timeStamp : number;
				
		/**
		 * 
		 */
		target : Bing.Speech;
				
		/**
		 * 
		 */
		srcElement : Bing.Speech;
				
		/**
		 * 
		 */
		currentTarget : Bing.Speech;
	}
}
declare namespace Bing.Speech.prototype{
	// Bing.Speech.prototype.createRecogitionDestination.!ret
	
	/**
	 * 
	 */
	interface CreateRecogitionDestinationRet {
				
		/**
		 * 
		 * @param e 
		 */
		onaudioprocess(e : any): void;
	}
}
declare namespace Bing{
	// Bing.decodeAudioData.!2
	type DecodeAudioData2 = ((buffer : any) => void);
}
declare namespace Bing{
	// Bing.decodeAudioData.!3
	type DecodeAudioData3 = (() => void);
}
declare namespace Bing{
	// Bing.handleJSONWebResponse.!0
	
	/**
	 * 
	 */
	interface HandleJSONWebResponse0 {
				
		/**
		 * 
		 */
		responseType : string;
				
		/**
		 * 
		 */
		onload(): void;
	}
}
declare namespace Bing{
	// Bing.LuisClient.!0
	
	/**
	 * 
	 */
	interface LuisClient0 {
				
		/**
		 * 
		 */
		serviceUri : string;
				
		/**
		 * 
		 */
		clientVersion : string;
				
		/**
		 * 
		 */
		authenticationScheme : string;
	}
}
declare namespace Bing.HttpClient.prototype{
	// Bing.HttpClient.prototype.dispatchResult.!0
	
	/**
	 * 
	 */
	interface DispatchResult0 {
				
		/**
		 * 
		 */
		resultIndex : number;
		
		/**
		 * 
		 */
		results : {
						
			/**
			 * 
			 */
			length : number;
		}
				
		/**
		 * 
		 */
		status : number;
	}
}
declare namespace Bing.NaclClient.prototype{
	// Bing.NaclClient.prototype.postMessage.!0
	type PostMessage0 = Array<string>;
}
declare namespace Bing{
	// Bing.createSpeech.!ret
	
	/**
	 * 
	 */
	interface CreateSpeechRet {
				
		/**
		 * 
		 */
		preferences : /* Bing.NaclClient.preferences */ any;
				
		/**
		 * 
		 */
		onintent : /* Bing.NaclClient.onintent */ any;
	}
}
declare namespace Bing.Speech{
	// Bing.Speech.onresult.!0
	
	/**
	 * 
	 */
	interface Onresult0 {
				
		/**
		 * 
		 */
		resultIndex : number;
		
		/**
		 * 
		 */
		results : {
						
			/**
			 * 
			 */
			length : number;
		}
				
		/**
		 * 
		 */
		status : number;
	}
}
declare namespace Bing.Speech.Onresult0.results{
	// Bing.Speech.onresult.!0.results.<i>.<i>
	
	/**
	 * 
	 */
	interface ResultsII {
				
		/**
		 * 
		 */
		confidence : number;
	}
}
declare namespace Bing.NaclClient{
	// Bing.NaclClient.onintent.!0
	
	/**
	 * 
	 */
	interface Onintent0 {
	}
}

/**
 * ----------------------------------------------------------------------
 *  Microsoft Speech SDK
 *  ====================
 * 
 * 
 *  FEATURES
 *  --------
 *  * Short-form recognition.
 *  * Long-form dictation.
 *  * Recognition with intent.
 *  * Integrated microphone support.
 *  * External audio support.
 * 
 *  LICENSE
 *  -------
 *  � 2015 Microsoft. All rights reserved.
 *  This document is provided �as-is�. Information and views expressed in this document, including URL and other Internet Web site references, may change without notice.
 *  Some examples depicted herein are provided for illustration only and are fictitious.  No real association or connection is intended or should be inferred.
 *  This document does not provide you with any legal rights to any intellectual property in any Microsoft product. You may copy and use this document for your internal, reference purposes. This
 *  document is confidential and proprietary to Microsoft. It is disclosed and can be used only pursuant to a non-disclosure agreement.
 * ----------------------------------------------------------------------
 */
declare var Microsoft : {
	
	/**
	 * 
	 */
	namespace ProjectOxford{
		
		/**
		 * 
		 */
		namespace SpeechRecognition{
			
			/**
			 * 
			 */
			namespace SpeechRecognitionMode{
								
				/**
				 * 
				 */
				_map : Array<string>;
								
				/**
				 * 
				 */
				shortPhrase : number;
								
				/**
				 * 
				 */
				longDictation : number;
			}
			
			/**
			 * 
			 */
			interface MicrophoneRecognitionClient {
								
				/**
				 * 
				 * @param prefs 
				 */
				new (prefs : {} | /* Microsoft.ProjectOxford.SpeechRecognition.DataRecognitionClient._prefs */ any);
								
				/**
				 * 
				 */
				startMicAndRecognition(): void;
								
				/**
				 * 
				 */
				endMicAndRecognition(): void;
			}
			
			/**
			 * 
			 */
			interface DataRecognitionClient {
								
				/**
				 * 
				 * @param prefs 
				 */
				new (prefs : /* Bing.NaclClient.preferences */ any | /* Microsoft.ProjectOxford.SpeechRecognition.DataRecognitionClient._prefs */ any);
								
				/**
				 * 
				 * @param buffer 
				 * @param actualAudioBytesInBuffer 
				 */
				sendAudio(buffer : any, actualAudioBytesInBuffer : any): void;
								
				/**
				 * 
				 */
				endAudio(): void;
				
				/**
				 * 
				 */
				_prefs : {
										
					/**
					 * 
					 */
					serviceUri : string;
										
					/**
					 * 
					 */
					clientVersion : string;
										
					/**
					 * 
					 */
					authenticationScheme : string;
				}
								
				/**
				 * 
				 */
				_start : boolean;
								
				/**
				 * 
				 */
				_sr : Bing.Speech;
			}
			
			/**
			 * 
			 */
			namespace SpeechRecognitionServiceFactory{
								
				/**
				 * 
				 * @param speechRecognitionMode 
				 * @param language 
				 * @param primaryKey 
				 * @param secondaryKey 
				 * @return  
				 */
				function createDataClient(speechRecognitionMode : any, language : any, primaryKey : any, secondaryKey : any): DataRecognitionClient;
								
				/**
				 * 
				 * @param language 
				 * @param primaryKey 
				 * @param secondaryKey 
				 * @param luisAppId 
				 * @param luisSubscriptionId 
				 * @return  
				 */
				function createDataClientWithIntent(language : any, primaryKey : any, secondaryKey : any, luisAppId : any, luisSubscriptionId : any): Microsoft.ProjectOxford.SpeechRecognition.DataRecognitionClient;
								
				/**
				 * 
				 * @param speechRecognitionMode 
				 * @param language 
				 * @param primaryKey 
				 * @param secondaryKey 
				 * @return  
				 */
				function createMicrophoneClient(speechRecognitionMode : any, language : any, primaryKey : any, secondaryKey : any): MicrophoneRecognitionClient;
								
				/**
				 * 
				 * @param language 
				 * @param primaryKey 
				 * @param secondaryKey 
				 * @param luisAppId 
				 * @param luisSubscriptionId 
				 * @return  
				 */
				function createMicrophoneClientWithIntent(language : any, primaryKey : any, secondaryKey : any, luisAppId : any, luisSubscriptionId : any): Microsoft.ProjectOxford.SpeechRecognition.MicrophoneRecognitionClient;
								
				/**
				 * 
				 */
				export var BaseSpeechUrl : string;
								
				/**
				 * 
				 * @param speechRecognitionMode 
				 * @param language 
				 * @param primaryKey 
				 * @param secondaryKey 
				 * @return  
				 */
				function createPrefs(speechRecognitionMode : number, language : any, primaryKey : any, secondaryKey : any): /* Microsoft.ProjectOxford.SpeechRecognition.DataRecognitionClient._prefs */ any;
			}
		}
	}
}

/**
 * 
 */
declare namespace Bing{
		
	/**
	 * 
	 */
	export var _cuDeferred : Array</* Bing.Task */ any>;
		
	/**
	 * 
	 */
	export var _defaultVoiceName : string;
		
	/**
	 * 
	 * @param text 
	 */
	function write(text : string): void;
		
	/**
	 * 
	 * @param text 
	 */
	function writeline(text : string): void;
		
	/**
	 * 
	 * @param name 
	 * @param value 
	 */
	function setValue(name : any, value : any): void;
		
	/**
	 * 
	 * @param name 
	 */
	function getValue(name : string): void;
		
	/**
	 * 
	 * @param name 
	 */
	function dispatchEvent(name : string): void;
		
	/**
	 * 
	 */
	function dispatchAudioStart(): void;
		
	/**
	 * 
	 */
	function dispatchAudioStop(): void;
		
	/**
	 * 
	 */
	function useHttp(): void;
		
	/**
	 * 
	 */
	function devMode(): void;
	
	/**
	 * 
	 */
	namespace SynthState{
				
		/**
		 * 
		 */
		export var _map : Array<string>;
				
		/**
		 * 
		 */
		export var None : number;
				
		/**
		 * 
		 */
		export var Pending : number;
				
		/**
		 * 
		 */
		export var Started : number;
	}
	
	/**
	 * 
	 */
	interface Synthesis {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 */
		pending : boolean;
				
		/**
		 * 
		 */
		speaking : boolean;
				
		/**
		 * 
		 * @param utterance 
		 */
		speak(utterance : any): void;
				
		/**
		 * 
		 */
		cancel(): void;
				
		/**
		 * 
		 */
		pause(): void;
				
		/**
		 * 
		 */
		resume(): void;
				
		/**
		 * 
		 * @return  
		 */
		getVoices(): GetVoicesRet;
				
		/**
		 * 
		 * @param type 
		 * @param target 
		 * @return  
		 */
		createEvent(type : string, target : any): CreateEventRet;
	}
	
	/**
	 * 
	 */
	interface Speech {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		removeEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		addEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param evt 
		 * @return  
		 */
		dispatchEvent(evt : any): boolean;
				
		/**
		 * 
		 */
		start(): void;
				
		/**
		 * 
		 */
		stop(): void;
				
		/**
		 * 
		 */
		abort(): void;
				
		/**
		 * 
		 */
		interface HandleError {
						
			/**
			 * 
			 * @return  
			 */
			new (): HandleError;
		}

				
		/**
		 * 
		 * @param type 
		 * @return  
		 */
		function createEvent(type : string): CreateEventRet;
				
		/**
		 * 
		 * @param source 
		 * @param cu 
		 * @param onaudioprocess 
		 * @return  
		 */
		function createRecogitionDestination(source : any, cu : any, onaudioprocess : any): CreateRecogitionDestinationRet;
				
		/**
		 * 
		 */
		export var isMicSource : boolean;
				
		/**
		 * 
		 * @return  
		 */
		function playbackAudioFiles(): /* !this.playbackAudioFilesOverride */ any;
				
		/**
		 * 
		 */
		export var _firstAudio : boolean;
				
		/**
		 * 
		 */
		export var playbackAudioFilesOverride : boolean;
				
		/**
		 * 
		 */
		export var lang : string;
				
		/**
		 * 
		 */
		export var continuous : boolean;
				
		/**
		 * 
		 */
		export var interimResults : boolean;
				
		/**
		 * 
		 */
		export var maxAlternatives : number;
				
		/**
		 * 
		 */
		export var currentSource : Bing.ArrayBufferSource;
				
		/**
		 * 
		 * @param e 
		 */
		function onresult(e : Bing.Speech.Onresult0): void;
				
		/**
		 * 
		 * @param e 
		 */
		function onerror(e : any): void;
	}
	
	/**
	 * 
	 */
	interface Task {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 */
		complete(): void;
				
		/**
		 * 
		 * @param result 
		 */
		resolve(result : any): void;
				
		/**
		 * 
		 * @param cb 
		 */
		done(cb : ((cu : any) => void) | (() => void)): void;
				
		/**
		 * 
		 */
		elapsedTime : number;
				
		/**
		 * 
		 * @param result 
		 */
		signalComplete(result : any): void;
				
		/**
		 * 
		 */
		completed : boolean;
				
		/**
		 * 
		 */
		startTime : number;
				
		/**
		 * 
		 * @param cu 
		 */
		cb(cu : any): void;
	}
	
	/**
	 * 
	 */
	interface StringAudioBuffer {
				
		/**
		 * 
		 * @param buffer 
		 */
		new (buffer : any);
				
		/**
		 * 
		 * @param channel 
		 * @return  
		 */
		getChannelData(channel : any): string;
				
		/**
		 * 
		 * @param destination 
		 * @param channelNumber 
		 * @param startInChannel 
		 */
		copyFromChannel(destination : any, channelNumber : any, startInChannel : any): void;
				
		/**
		 * 
		 * @param source 
		 * @param channelNumber 
		 * @param startInChannel 
		 */
		copyToChannel(source : any, channelNumber : any, startInChannel : any): void;
	}
		
	/**
	 * 
	 */
	interface CreateActiveXObject {
				
		/**
		 * 
		 * @param name 
		 * @return  
		 */
		new (name : string): CreateActiveXObject;
	}

	
	/**
	 * 
	 */
	namespace Platform{
				
		/**
		 * 
		 * @return  
		 */
		function isEdge(): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function isSafari(): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function supportsPPAPI(): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function supportsNPAPI(): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function supportsActiveX(): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function getCU(): Bing.Task;
	}
		
	/**
	 * 
	 */
	export var _cu : Bing.NaclClient;
		
	/**
	 * 
	 */
	function initialize(): void;
		
	/**
	 * 
	 * @param context 
	 * @param audioData 
	 * @param successCallback 
	 * @param errorCallback 
	 */
	function decodeAudioData(context : any, audioData : any, successCallback : Bing.DecodeAudioData2, errorCallback : Bing.DecodeAudioData3): void;
		
	/**
	 * 
	 * @param xhr 
	 * @return  
	 */
	function handleJSONWebResponse(xhr : Bing.HandleJSONWebResponse0):  /* error */ any;
	
	/**
	 * 
	 */
	interface LuisClient {
				
		/**
		 * 
		 * @param prefs 
		 */
		new (prefs : any);
				
		/**
		 * 
		 * @param text 
		 * @return  
		 */
		getIntent(text : any): Bing.Task;
				
		/**
		 * 
		 */
		kServiceUrl : string;
	}
	
	/**
	 * 
	 */
	interface HttpClient {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		removeEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		addEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param evt 
		 * @return  
		 */
		dispatchEvent(evt : any): boolean;
				
		/**
		 * 
		 * @param destination 
		 * @param output 
		 * @param input 
		 */
		connect(destination : any, output : any, input : any): void;
				
		/**
		 * 
		 */
		disconnect(): void;
				
		/**
		 * 
		 * @param inputText 
		 */
		sendText(inputText : any): void;
				
		/**
		 * 
		 * @param buffer 
		 */
		audioprocess(buffer : any): void;
				
		/**
		 * 
		 * @param text 
		 * @param contentType 
		 * @param outputFormat 
		 */
		tts(text : string, contentType : string, outputFormat : string): void;
				
		/**
		 * 
		 */
		ttsStop(): void;
				
		/**
		 * 
		 * @return  
		 */
		getToken(): Bing.Task;
				
		/**
		 * 
		 */
		send(): void;
				
		/**
		 * 
		 * @param statusCode 
		 */
		dispatchError(statusCode : number): void;
				
		/**
		 * 
		 * @param result 
		 */
		dispatchResult(result : Bing.HttpClient.prototype.DispatchResult0): void;
				
		/**
		 * 
		 * @param a 
		 */
		appendAsUInt8(a : any): void;
				
		/**
		 * 
		 * @param context 
		 * @param audioData 
		 */
		renderAudio(context : any, audioData : any): void;
	}
	
	/**
	 * 
	 */
	interface NaclClient {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 * @param arg 
		 * @param undefined 
		 */
		postMessage(arg : Bing.NaclClient.prototype.PostMessage0, param2 : /* ?] */ any): void;
				
		/**
		 * 
		 * @param arg 
		 */
		handleMessage(arg : any): void;
				
		/**
		 * 
		 * @param arg 
		 */
		log(arg : any): void;
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		removeEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		addEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param evt 
		 * @return  
		 */
		dispatchEvent(evt : any): boolean;
				
		/**
		 * 
		 * @param destination 
		 * @param output 
		 * @param input 
		 */
		connect(destination : any, output : any, input : any): void;
				
		/**
		 * 
		 */
		disconnect(): void;
				
		/**
		 * 
		 * @param inputText 
		 */
		sendText(inputText : any): void;
				
		/**
		 * 
		 * @param buffer 
		 */
		audioprocess(buffer : any): void;
				
		/**
		 * 
		 * @param text 
		 * @param contentType 
		 * @param outputFormat 
		 */
		tts(text : any, contentType : any, outputFormat : any): void;
				
		/**
		 * 
		 */
		ttsStop(): void;
				
		/**
		 * 
		 */
		kKeyId : string;
		
		/**
		 * 
		 */
		_module : {
						
			/**
			 * 
			 * @param arg 
			 */
			onConnect(arg : any): void;
		}
				
		/**
		 * 
		 */
		preferences : /*no type*/{};
				
		/**
		 * 
		 * @param intent 
		 */
		onintent(intent : Bing.NaclClient.Onintent0): void;
	}
		
	/**
	 * 
	 * @return  
	 */
	function shouldCreateHttp(): boolean;
		
	/**
	 * 
	 * @return  
	 */
	function createSpeech(): CreateSpeechRet;
	
	/**
	 * 
	 */
	interface WebAudioSource {
				
		/**
		 * 
		 * @param url 
		 * @param context 
		 */
		new (url : any, context : any);
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		removeEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		addEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param evt 
		 * @return  
		 */
		dispatchEvent(evt : any): boolean;
				
		/**
		 * 
		 * @param destination 
		 * @param output 
		 * @param input 
		 */
		connect(destination : any, output : any, input : any): void;
				
		/**
		 * 
		 */
		disconnect(): void;
				
		/**
		 * 
		 * @param when 
		 * @param offset 
		 * @param duration 
		 */
		start(when : any, offset : any, duration : any): void;
				
		/**
		 * 
		 * @param when 
		 */
		stop(when : any): void;
				
		/**
		 * 
		 * @param buffer 
		 */
		setBuffer(buffer : any): void;
				
		/**
		 * 
		 */
		bufferReceived(): void;
				
		/**
		 * 
		 * @param err 
		 */
		handleEnd(err : any): void;
				
		/**
		 * 
		 */
		onBufferLoaded(): void;
	}
	
	/**
	 * 
	 */
	interface ArrayBufferSource {
				
		/**
		 * 
		 * @param context 
		 */
		new (context : any);
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		removeEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param type 
		 * @param listener 
		 * @param useCapture 
		 */
		addEventListener(type : any, listener : any, useCapture : any): void;
				
		/**
		 * 
		 * @param evt 
		 * @return  
		 */
		dispatchEvent(evt : any): boolean;
				
		/**
		 * 
		 * @param destination 
		 * @param output 
		 * @param input 
		 */
		connect(destination : any, output : any, input : any): void;
				
		/**
		 * 
		 */
		disconnect(): void;
				
		/**
		 * 
		 * @param when 
		 * @param offset 
		 * @param duration 
		 */
		start(when : any, offset : any, duration : any): void;
				
		/**
		 * 
		 * @param when 
		 */
		stop(when : any): void;
				
		/**
		 * 
		 * @param buffer 
		 */
		setBuffer(buffer : any): void;
				
		/**
		 * 
		 */
		bufferReceived(): void;
				
		/**
		 * 
		 * @param err 
		 */
		handleEnd(err : any): void;
				
		/**
		 * 
		 */
		onBufferLoaded(): void;
				
		/**
		 * 
		 */
		numberOfInputs : number;
				
		/**
		 * 
		 */
		numberOfOutputs : number;
				
		/**
		 * 
		 */
		channelCount : number;
				
		/**
		 * 
		 */
		_started : boolean;
	}
}
