/// <reference types="angular" />

import * as angular from "angular";

declare module "angular" {
    export namespace growl {
        /**
         * Global Time-To-Leave configuration.
         */
        interface IGrowlTTLConfig {
            success?: number | undefined;
            error?: number | undefined;
            warning?: number | undefined;
            info?: number | undefined;
        }

        /**
         * Custom configuration used in single message call.
         */
        interface IGrowlMessageConfig {
            title?: string | undefined;
            ttl?: number | undefined;
            disableCountDown?: boolean | undefined;
            disableIcons?: boolean | undefined;
            disableCloseButton?: boolean | undefined;
            onclose?: Function | undefined;
            onopen?: Function | undefined;
            position?: string | undefined;
            referenceId?: number | undefined;
            translateMessage?: boolean | undefined;
            variables?: { [variable: string]: any } | undefined;
        }

        /**
         * Growl message with configuration.
         */
        interface IGrowlMessage extends IGrowlMessageConfig {
            text: string;

            /**
             * Destroy the message.
             */
            destroy(): void;
            /**
             * Update the message body.
             * @param newText new message body
             */
            setText(newText: string): void;
        }

        /**
         * Growl service provider.
         */
        interface IGrowlProvider extends angular.IServiceProvider {
            /**
             * Pre-defined server error interceptor.
             */
            serverMessagesInterceptor: (string | IHttpInterceptorFactory)[];

            /**
             * Set default TTL settings.
             * @param ttl configuration of TTL for different type of message
             */
            globalTimeToLive(ttl: IGrowlTTLConfig): IGrowlProvider;
            /**
             * Set default TTL settings.
             * @param ttl ttl in milliseconds
             */
            globalTimeToLive(ttl: number): IGrowlProvider;
            /**
             * Set default setting for disabling close button.
             * @param disableCloseButton
             */
            globalDisableCloseButton(disableCloseButton: boolean): IGrowlProvider;
            /**
             * Set default setting for disabling icons.
             * @param disableIcons
             */
            globalDisableIcons(disableIcons: boolean): IGrowlProvider;
            /**
             * Set reversing order of displaying new messages.
             * @param reverseOrder
             */
            globalReversedOrder(reverseOrder: boolean): IGrowlProvider;
            /**
             * Set default setting for displaying message disappear countdown.
             * @param disableCountDown
             */
            globalDisableCountDown(disableCountDown: boolean): IGrowlProvider;
            /**
             * Set default allowance for inline messages.
             * @param inline
             */
            globalInlineMessages(inline: boolean): IGrowlProvider;
            /**
             * Set default message position.
             * @param position
             */
            globalPosition(position: string): IGrowlProvider;
            /**
             * Enable/disable displaying only unique messages.
             * @param onlyUniqueMessages
             */
            onlyUniqueMessages(onlyUniqueMessages: boolean): IGrowlProvider;

            /**
             * Set key where messages are stored (for http interceptor).
             * @param messageVariableKey
             */
            messagesKey(messageKey: string): IGrowlProvider;
            /**
             * Set key where message text is stored (for http interceptor).
             * @param messageVariableKey
             */
            messageTextKey(messageTextKey: string): IGrowlProvider;
            /**
             * Set key where title of message is stored (for http interceptor).
             * @param messageVariableKey
             */
            messageTitleKey(messageTitleKey: string): IGrowlProvider;
            /**
             * Set key where severity of message is stored (for http interceptor).
             * @param messageVariableKey
             */
            messageSeverityKey(messageSeverityKey: string): IGrowlProvider;
            /**
             * Set key where variables for message are stored (for http interceptor).
             * @param messageVariableKey
             */
            messageVariableKey(messageVariableKey: string): IGrowlProvider;
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

        /**
         * GrowlMessages service.
         */
        interface IGrowlMessagesService {
            /**
             * Initialize a directive
             * We look at the preloaded directive and use this else we
             * create a new blank object
             * @param referenceId
             * @param limitMessages
             */
            initDirective(referenceId: number, limitMessages: number): angular.IDirective;

            /**
             * Get current messages
             */
            getAllMessages(referenceId?: number): IGrowlMessage[];

            /**
             * Destroy all messages
             */
            destroyAllMessages(referenceId?: number): void;

            /**
             * Add a message
             */
            addMessage(message: IGrowlMessage): IGrowlMessage;

            /**
             * Delete a message
             */
            deleteMessage(message: IGrowlMessage): void;
        }
    }
}
