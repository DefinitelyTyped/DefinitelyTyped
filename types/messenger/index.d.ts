interface IMessenger {
    (): Messenger;
    options: MessengerOptions;
}

interface Messenger {
    /**
     * Posts a message.
     */
    post(options: MessageOptions): Message;

    /**
     * Hides all messages.
     */
    hideAll(): void;
}

interface Message {
    /**
     * Show the message, if it's hidden.
     */
    show(): void;

    /**
     * Hide the message, if it's hidden.
     */
    hide(): void;

    /**
     * If the message is associated with an ajax request or is counting down to retry, cancel it.
     */
    cancel(): void;

    /**
     * Update the message with the provided options.
     */
    update(options: MessageOptions): void;
}

interface MessageOptions {
    /**
     * The text of the message.
     */
    message: string;

    /**
     * Hide the message after the provided number of seconds.
     */
    hideAfter?: number | undefined;

    /**
     * Hide the message if Backbone client-side navigation occurs.
     */
    hideOnNavigate?: boolean | undefined;

    /**
     * A unique id. If supplied, only one message with that ID will be shown at a time.
     */
    id?: string | undefined;

    /**
     * Should a close button be added to the message?
     */
    showCloseButton?: boolean | undefined;

    /**
     * Hide the newer message if there is an id collision, as opposed to the older message.
     */
    singleton?: boolean | undefined;

    /**
     * What theme class should be applied to the message? Defaults to the theme set for Messenger in general.
     */
    theme?: string | undefined;

    /**
     * "info", "error" or "success" are understood by the provided themes. You can also pass your own string, and that class will be added.
     */
    type?: string | undefined;
}

interface MessengerOptions {
    /**
     * Extra classes to be appended to the container.
     */
    extraClasses?: string | undefined;

    /**
     * The maximum number of messages to show at once.
     */
    maxMessages?: number | undefined;

    /**
     * Default options for created messages.
     */
    messageDefaults?: MessageOptions | undefined;

    /**
     * Which locations should be tried when inserting the message container into the page.
     * The default is ['body']. It accepts a list to allow you to try a variety of places
     * when deciding what the optimal location is on any given page. This should generally
     * not need to be changed unless you are inserting the messages into the flow of the
     * document, rather than using messenger-fixed.
     */
    parentLocations?: string[] | undefined;

    /**
     * What theme are you using? Some themes have associated javascript, specifing this allows that js to run.
     */
    theme?: string | undefined;
}

declare var Messenger: IMessenger;
