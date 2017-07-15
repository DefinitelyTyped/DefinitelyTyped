// Type definitions for jquery-ajax-chain v 1.0.4
// Project: https://github.com/humana-fragilitas/jQuery-Ajax-Chain/
// Definitions by: Andrea Blasio <https://github.com/humana-fragilitas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace ajaxChain {

    /**
     * Static members of JQueryAjaxChain
     */
    interface JQueryAjaxChainStatic {

        new (): JQueryAjaxChain

    }

    /**
     * Instance members of JQueryAjaxChain
     */
    interface JQueryAjaxChain extends JQueryPromise<any> {

        /**
         * Enqueues one or more configuration objects for later processing.
         */
        enqueue(confObj: AjaxChainConfiguration | AjaxChainConfiguration[]): JQueryAjaxChain;
        /**
         * Sequentially and synchronously dequeues the configuration objects enqueued via enqueue() method
         * in the order they were added, triggering the related Ajax calls.
         */
        dequeue(): JQueryAjaxChain;
        /**
         * Clears the currently queued configuration objects.
         */
        clearQueue(): JQueryAjaxChain;

    }

    /**
     * A set of key/value pairs that configure the AjaxChain request; 'ajaxSettings' is mandatory.
     */
    interface AjaxChainConfiguration {

        /**
         * jQuery $.ajax method settings (required).
         */
        ajaxSettings: JQueryAjaxSettings;
        /**
         * Configuration object label (optional).
         */
        label?: String;
        /**
         * Returning a truthy value (Object) allows to arbitrarily overwrite the next queued Ajax call
         * 'data' property value specified in the original jQuery $.ajax method configuration
         * object ('ajaxSettings') (optional).
         */
        transform?: (response: any) => String | Object | Object[];
        /**
         * Returning a truthy value (String) allows to append a string to the next queued
         * Ajax call 'url' property value specified in original jQuery $.ajax method configuration
         * object ('ajaxSettings') (optional).
         */
        appendToUrl?: (response: any) => String;
        /**
         * Returning a truthy value determines any registered fail callback(s) to be called immediately,
         * passing the former as an argument to the latter; the queue is then rejected (optional).
         */
        hasErrors?: (response: any) => any;
        /**
         * Returning a truthy value allows to prevent the related Ajax call from being executed,
         * passing the former as a parameter to any registered handler(s); useful to create
         * caching mechanisms (optional).
         */
        hasCache?: (response: any) => any;
        /**
         * Returning a truthy value prevents the queue from further progressing to the succeeding
         * Ajax calls; the queue is then resolved (optional).
         */
        hasHaltingCapabilities?: (response: any) => Boolean;
        /**
         * Returning a truthy value prevents the queue from being halted in case of Ajax error (optional).
         */
        isSkippable?: (response: any) => Boolean;

    }

}

interface JQueryStatic {

    /**
     * JQueryAjaxChain constructor
     */
    AjaxChain: ajaxChain.JQueryAjaxChainStatic;

}
