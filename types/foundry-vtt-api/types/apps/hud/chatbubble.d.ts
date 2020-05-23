// @TODO:

/**
 * The Chat Bubble Class
 * This application displays a temporary message sent from a particular Token in the active Scene.
 * The message is displayed on the HUD layer just above the Token.
 */
declare class ChatBubbles {
    /**
     * Track active Chat Bubbles
     */
    bubbles: object;

    constructor();

    /**
     * A reference to the chat bubbles HTML container in which rendered bubbles should live
     */
    get container(): JQuery;

    /**
     * Speak a message as a particular Token, displaying it as a chat bubble
     * @param token		The speaking Token
     * @param message	The spoken message text
     * @param emote		Whether to style the speech bubble as an emote
     * @return			A Promise which resolves once the chat bubble has been created
     */
    say(token: Token, message: string, { emote }: { emote: boolean }): Promise<void>;
}
