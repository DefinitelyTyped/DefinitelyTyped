import { Handler, Request, Template, Image, CardImage } from './types';
export declare const CARD_TYPES: {
    STANDARD: 'Standard',
    SIMPLE: 'Simple',
    LINK_ACCOUNT: 'LinkAccount',
    ASK_FOR_PERMISSIONS_CONSENT: 'AskForPermissionsConsent'
};

export declare const HINT_TYPES: {
    PLAIN_TEXT: 'PlainText'
};

export declare const DIRECTIVE_TYPES: {
    AUDIOPLAYER: {
        PLAY: 'AudioPlayer.Play',
        STOP: 'AudioPlayer.Stop',
        CLEAR_QUEUE: 'AudioPlayer.ClearQueue'
    },
    DISPLAY: {
        RENDER_TEMPLATE: 'Display.RenderTemplate'
    },
    HINT: 'Hint',
    VIDEOAPP: {
        LAUNCH: 'VideoApp.Launch'
    }
};

/**
 * Responsible for building JSON responses as per the Alexa skills kit interface
 * https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference#response-body-syntax
 * 
 * @class ResponseBuilder
 */
export class ResponseBuilder {
    constructor(alexaHandler: Handler<Request>);

    /**
     * Have Alexa say the provided speechOutput to the user
     * 
     * @param {string} speechOutput
     * @returns 
     * @memberof ResponseBuilder
     */
    speak(speechOutput: string): ResponseBuilder;

    /**
     * Have alexa listen for speech from the user. If the user doesn't respond within 8 seconds
     * then have alexa reprompt with the provided reprompt speech
     * @param {string} repromptSpeech
     * @returns 
     * @memberof ResponseBuilder
     */
    listen(repromptSpeech: string): ResponseBuilder;

    /**
     * Render a card with the following title, content and image
     * 
     * @param {string} cardTitle 
     * @param {string} cardContent 
     * @param {{smallImageUrl : string, largeImageUrl : string}} cardImage 
     * @returns 
     * @memberof ResponseBuilder
     */
    cardRenderer(cardTitle: string, cardContent: string, cardImage: CardImage): ResponseBuilder;

    /**
     * Render a link account card
     * 
     * @returns 
     * @memberof ResponseBuilder
     */
    linkAccountCard(): ResponseBuilder;

    /**
     * Render a askForPermissionsConsent card
     * @param {[{ [key: string]: string }]} permissions
     * @returns
     * @memberOf ResponseBuilder
     */
    askForPermissionsConsentCard(permissions: [{ [key: string]: string }]): ResponseBuilder;

    /**
     * Creates a play, stop or clearQueue audioPlayer directive depending on the directive type passed in.
     * @deprecated - use audioPlayerPlay, audioPlayerStop, audioPlayerClearQueue instead
     * @param {string} directiveType 
     * @param {string} behavior 
     * @param {string} url 
     * @param {string} token 
     * @param {string} expectedPreviousToken 
     * @param {number} offsetInMilliseconds 
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayer(directiveType: string, behavior: string, url: string, token: string, expectedPreviousToken: string, offsetInMilliseconds: number): ResponseBuilder;

    /**
     * Creates an AudioPlayer play directive
     * 
     * @param {string} behavior Describes playback behavior. Accepted values:
     * REPLACE_ALL: Immediately begin playback of the specified stream, and replace current and enqueued streams.
     * ENQUEUE: Add the specified stream to the end of the current queue. This does not impact the currently playing stream.
     * REPLACE_ENQUEUED: Replace all streams in the queue. This does not impact the currently playing stream.
     * @param {string} url Identifies the location of audio content at a remote HTTPS location.
     * The audio file must be hosted at an Internet-accessible HTTPS endpoint. HTTPS is required, and the domain hosting the 
     * files must present a valid, trusted SSL certificate. Self-signed certificates cannot be used. 
     * The supported formats for the audio file include AAC/MP4, MP3, HLS, PLS and M3U. Bitrates: 16kbps to 384 kbps.
     * @param {string} token A token that represents the audio stream. This token cannot exceed 1024 characters
     * @param {string} expectedPreviousToken A token that represents the expected previous stream.
     * This property is required and allowed only when the playBehavior is ENQUEUE. This is used to prevent potential race conditions 
     * if requests to progress through a playlist and change tracks occur at the same time.
     * @param {number} offsetInMilliseconds The timestamp in the stream from which Alexa should begin playback. 
     * Set to 0 to start playing the stream from the beginning. Set to any other value to start playback from that associated point in the stream
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayerPlay(behavior: string, url: string, token: string, expectedPreviousToken: string, offsetInMilliseconds: number): ResponseBuilder;

    /**
     * Creates an AudioPlayer Stop directive - Stops the current audio Playback
     * 
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayerStop(): ResponseBuilder;

    /**
     * Creates an AudioPlayer ClearQueue directive - clear the queue without stopping the currently playing stream,
     * or clear the queue and stop any currently playing stream.
     * 
     * @param {string} clearBehavior Describes the clear queue behavior. Accepted values:
     * CLEAR_ENQUEUED: clears the queue and continues to play the currently playing stream
     * CLEAR_ALL: clears the entire playback queue and stops the currently playing stream (if applicable).
     * @returns 
     * @memberof ResponseBuilder
     */
    audioPlayerClearQueue(clearBehavior: string): ResponseBuilder;

    /**
     * Creates a Display RenderTemplate Directive
     * 
     * Use a template builder to generate a template object
     * 
     * @param {Template} template 
     * @returns 
     * @memberof ResponseBuilder
     */
    renderTemplate(template: Template): ResponseBuilder;

    /**
     * Creates a hint directive - show a hint on the screen of the echo show
     * 
     * @param {string} hintText text to show on the hint
     * @param {string} hintType (optional) Default value : PlainText
     * @returns 
     * @memberof ResponseBuilder
     */
    hint(hintText: string, hintType: string): ResponseBuilder;

    /**
     * Creates a VideoApp play directive to play a video
     * 
     * @param {string} source Identifies the location of video content at a remote HTTPS location.
     * The video file must be hosted at an Internet-accessible HTTPS endpoint.
     * @param {{title : string, subtitle : string}} metadata (optional) Contains an object that provides the 
     * information that can be displayed on VideoApp.
     * @returns 
     * @memberof ResponseBuilder
     */
    playVideo(source: string, metadata: { title: string, subtitle: string }): ResponseBuilder;
}