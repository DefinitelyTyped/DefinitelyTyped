// Type definitions for Angular Growl 2 v.0.7.3
// Project: http://janstevens.github.io/angular-growl-2
// Definitions by: Tadeusz Hucal <https://github.com/mkp05>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.growl {

    /**
     * Global Time-To-Leave configuration.
     */
    interface IGrowlTTLConfig {
        success?: number;
        error?: number;
        warning?: number;
        info?: number;
    }

    /**
     * Custom configuration used in single message call.
     */
    interface IGrowlMessageConfig {
        title?: string;
        ttl?: number;
        disableCountDown?: boolean;
        disableIcons?: boolean;
        disableCloseButton?: boolean;
        onclose?: Function;
        onopen?: Function;
        position?: string;
        referenceId?: number;
        translateMessage?: boolean;
        variables?: { [variable: string]: any; };
    }

    /**
     * Growl message with configuration.
     */
    interface IGrowlMessage extends IGrowlMessageConfig {
        text: string;
    }

    /**
     * Growl service provider.
     */
    interface IGrowlProvider extends angular.IServiceProvider {
        /**
         * Pre-defined server error interceptor.
         */
        serverMessagesInterceptor: (string|IHttpInterceptorFactory)[];

        /**
         * Set default TTL settings.
         * @param ttl configuration of TTL for different type of message
         */
        globalTimeToLive(ttl: IGrowlTTLConfig): void;
        /**
         * Set default TTL settings.
         * @param ttl ttl in milliseconds
         */
        globalTimeToLive(ttl: number): void;
        /**
         * Set default setting for disabling close button.
         * @param disableCloseButton
         */
        globalDisableCloseButton(disableCloseButton: boolean): void;
        /**
         * Set default setting for disabling icons.
         * @param disableIcons
         */
        globalDisableIcons(disableIcons: boolean): void;
        /**
         * Set reversing order of displaying new messages.
         * @param reverseOrder
         */
        globalReversedOrder(reverseOrder: boolean): void
        /**
         * Set default setting for displaying message disappear countdown.
         * @param disableCountDown
         */
        globalDisableCountDown(disableCountDown: boolean): void;
        /**
         * Set default allowance for inline messages.
         * @param inline
         */
        globalInlineMessages(inline: boolean): void;
        /**
         * Set default message position.
         * @param position
         */
        globalPosition(position: string): void;
        /**
         * Enable/disable displaying only unique messages.
         * @param onlyUniqueMessages
         */
        onlyUniqueMessages(onlyUniqueMessages: boolean): void;

        /**
         * Set key where messages are stored (for http interceptor).
         * @param messageVariableKey
         */
        messagesKey(messageKey: string): void;
        /**
         * Set key where message text is stored (for http interceptor).
         * @param messageVariableKey
         */
        messageTextKey(messageTextKey: string): void;
        /**
         * Set key where title of message is stored (for http interceptor).
         * @param messageVariableKey
         */
        messageTitleKey(messageTitleKey: string): void;
        /**
         * Set key where severity of message is stored (for http interceptor).
         * @param messageVariableKey
         */
        messageSeverityKey(messageSeverityKey: string): void;
        /**
         * Set key where variables for message are stored (for http interceptor).
         * @param messageVariableKey
         */
        messageVariableKey(messageVariableKey: string): void;
    }

    /**
     * Growl service.
     */
    interface IGrowlService {
        /**
         * Show warning message.
         * @param message text to display (or code for angular-translate)
         */
        warning(message: string): IGrowlMessage;
        /**
         * Show warning message.
         * @param message text to display (or code for angular-translate)
         * @param config additional message configuration
         */
        warning(message: string, config: IGrowlMessageConfig): IGrowlMessage;

        /**
         * Show error message.
         * @param message text to display (or code for angular-translate)
         */
        error(message: string): IGrowlMessage;
        /**
         * Show error message.
         * @param message text to display (or code for angular-translate)
         * @param config additional message configuration
         */
        error(message: string, config: IGrowlMessageConfig): IGrowlMessage;

        /**
         * Show information message.
         * @param message text to display (or code for angular-translate)
         */
        info(message: string): IGrowlMessage;
        /**
         * Show information message.
         * @param message text to display (or code for angular-translate)
         * @param config additional message configuration
         */
        info(message: string, config: IGrowlMessageConfig): IGrowlMessage;

        /**
         * Show success message.
         * @param message text to display (or code for angular-translate)
         * @param config additional message configuration
         */
        success(message: string): IGrowlMessage;
        /**
         * Show success message.
         * @param message text to display (or code for angular-translate)
         */
        success(message: string, config: IGrowlMessageConfig): IGrowlMessage;

        /**
         * Show message (generic).
         * @param message text to display (or code for angular-translate)
         */
        general(message: string): IGrowlMessage;
        /**
         * Show message (generic).
         * @param message text to display (or code for angular-translate)
         * @param config additional message configuration
         */
        general(message: string, config: IGrowlMessageConfig): IGrowlMessage;
        /**
         * Show message (generic).
         * @param message text to display (or code for angular-translate)
         * @param config additional message configuration
         * @param severity message severity (error, warning, success, info).
         */
        general(message: string, config: IGrowlMessageConfig, severity: string): IGrowlMessage;

        /**
         * Get current setting for displaying only unique messages.
         */
        onlyUnique(): boolean;
        /**
         * Get current setting for reversing messages order.
         */
        reverseOrder(): boolean;
        /**
         * Get current allowance for inline messages.
         */
        inlineMessages(): boolean;
        /**
         * Get current messages position.
         */
        position(): string;
    }
}
