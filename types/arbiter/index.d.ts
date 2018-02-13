// Type definitions for Arbiter.js 1.0
// Project: http://arbiterjs.com/
// Definitions by: Arash Shakery <https://github.com/arash16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// May 22 2013


declare namespace ArbiterDef {
    export interface SubscribeHandler {
        (data: any, message: string, subscriber_context: any): void;
    }

    export interface SubscribeOptions {
        /**
          * By default, all subscribers have a priority of 0. Higher values get higher
          * priority and are executed first. Negative values are allowed.
          */
        priority?: number;

        /**
          * A subscriber can be set to execute asynchronously, even if the message wasn't published as async.
          */
        async?: boolean;

        /**
          * If your subscriber is not interested in any past messages that may have been
          * persisted, you can force them to be ignored.
          */
        persist?: boolean;
    }

    export interface PublishOptions {
        /**
          * By default, subscribers can return "false" to prevent subsequent subscribers from
          * receiving the message. By passing cancelable:false in the options, the publisher
          * can prevent canceling.
          */
        cancelable?: boolean;

        /**
          * If the publishers wants subscribers to be notified even if they subscribe later,
          * setting the persist flag will do that.
          */
        persist?: boolean;

        /**
          * If you wish to notify the subscribers but return from the publish() call before
          * the subscriber functions execute, use asynchronous mode
          */
        async?: boolean;
    }

    export interface ArbiterStatic {
        version: string;
        updated_on: string;

        /**
          * Creates a separate Arbiter instance.
          */
        create(): ArbiterStatic;


        /**
          * Publishes a message to all subscribers.
          * Returns: true on success, false if any subscriber has thrown a js exception.
          *
          * @param msg Message may be in any format, but may not contain [ ,*]. A structure like a/b/c is recommended by convention, to allow messages to be categorized.
          * @param data Pass data to subscribers that contains details about the message.
          */
        publish(msg: string, data?: any, options?: PublishOptions): boolean;


        /**
          * Subscribes to messages.
          * Returns: subscription id or [id1,id2] if subscribing to multiple messages
          *
          * @param msg comma separated messages or use wildcard like a/b/*
          */
        subscribe(msg: string, func: SubscribeHandler): any;

        /**
          * Subscribes to messages.
          * Returns: subscription id or [id1,id2] if subscribing to multiple messages
          *
          * @param msg comma separated messages or use wildcard like a/b/*
          */
        subscribe(msg: string, options: SubscribeOptions, func: SubscribeHandler): any;

        /**
          * Subscribes to messages. Can use comma separated or wildcards in message.
          * Returns: subscription id or [id1,id2] if subscribing to multiple messages
          */
        subscribe(msg: string, options: SubscribeOptions, context: any, func: SubscribeHandler): any;


        /**
          * Subscribes to messages.
          * Returns: subscription id or [id1,id2] if subscribing to multiple messages
          *
          * @param msg comma separated messages or use wildcard like a/b/*
          */
        subscribe(msg: string[], func: SubscribeHandler): any;

        /**
          * Subscribes to messages.
          * Returns: subscription id or [id1,id2] if subscribing to multiple messages
          *
          * @param msg comma separated messages or use wildcard like a/b/*
          */
        subscribe(msg: string[], options: SubscribeOptions, func: SubscribeHandler): any;

        /**
          * Subscribes to messages.
          * Returns: subscription id or [id1,id2] if subscribing to multiple messages
          *
          * @param msg comma separated messages or use wildcard like a/b/*
          */
        subscribe(msg: string[], options: SubscribeOptions, context: any, func: SubscribeHandler): any;


        /**
          * Unsubscribing simply sets a flag which prevents the subscriber from executing, in case you want to re-subscribe later.
          */
        unsubscribe(subscription_id: number): boolean;

        /**
          * After unsubscribing, you can later re-subscribe to begin receiving messages again.
          */
        resubscribe(subscription_id: number): boolean;
    }
}

declare var Arbiter: ArbiterDef.ArbiterStatic;
