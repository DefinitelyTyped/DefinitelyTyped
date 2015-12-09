// Type definitions for Backbone.Radio v0.8.3
// Project: https://github.com/marionettejs/backbone.radio
// Definitions by: Peter Palotas <https://github.com/alphaleonis/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../backbone/backbone.d.ts" />

declare module Backbone {
    interface Radio {
        tuneIn(channelName: string): Radio;
        tuneOut(channelName: string): Radio;
        log(channelName: string, eventName: string, ...args: any[]): void;
        channel(channelName: string): Radio.Channel;
    }

    module Radio {
        var VERSION: string;
        var DEBUG: boolean;

        function log(channelName: string, eventName: string, ...args: any[]): void;
        function tuneIn(channelName: string): Radio;
        function tuneOut(channelName: string): Radio;
        function channel(channelName: string): Channel;

        // Proxy functions for Commands
        function command(channelName: string, commandName: string, ...args: any[]): void;
        function comply(channelName: string, commandName: string, callback: (...args: any[]) => void, context?: any): Commands;
        function comply(channelName: string, commands: { [key: string]: (...args: any[]) => any }, context?: any): Commands;
        function complyOnce(channelName: string, commandName: string, callback: (...args: any[]) => void, context?: any): Commands;
        function complyOnce(channelName: string, commands: { [key: string]: (...args: any[]) => any }, context?: any): Commands;
        function stopComplying(channelName: string, commandName?: string, callback?: (...args: any[]) => void, context?: any): Commands;

        // Proxy functions for Requests
        function request(channelName: string, requestName: string, ...args: any[]): any;
        function reply(channelName: string, requestName: string, callback: (...args: any[]) => any, context?: any): Requests;
        function reply(channelName: string, commands: { [key: string]: (...args: any[]) => any }, context?: any): Requests;
        function replyOnce(channelName: string, requestName: string, callback: (...args: any[]) => any, context?: any): Requests;
        function replyOnce(channelName: string, commands: { [key: string]: (...args: any[]) => any }, context?: any): Requests;
        function stopReplying(channelName: string, commandName?: string, callback?: (...args: any[]) => any, context?: any): Requests;

        // Proxy functions for Backbone.Events
        function on(channelName: string, eventName: string, callback?: Function, context?: any): any;
        function off(channelName: string, eventName?: string, callback?: Function, context?: any): any;
        function trigger(channelName: string, eventName: string, ...args: any[]): any;
        function bind(channelName: string, eventName: string, callback: Function, context?: any): any;
        function unbind(channelName: string, eventName?: string, callback?: Function, context?: any): any;

        function once(channelName: string, events: string, callback: Function, context?: any): any;
        function listenTo(channelName: string, object: any, events: string, callback: Function): any;
        function listenToOnce(channelName: string, object: any, events: string, callback: Function): any;
        function stopListening(channelName: string, object?: any, events?: string, callback?: Function): any;

        class Commands {
            command(commandName: string, ...args: any[]): void;
            comply(commandName: string, callback: (...args: any[]) => void, context?: any): Commands;
            comply(commands: { [key: string]: (...args: any[]) => any }, context?: any): Commands;
            complyOnce(commands: { [key: string]: (...args: any[]) => any }, context?: any): Commands;
            complyOnce(commandName: string, callback: (...args: any[]) => void, context?: any): Commands;
            stopComplying(commandName?: string, callback?: (...args: any[]) => void, context?: any): Commands;
        }

        class Requests {
            request(requestName: string, ...args: any[]): any;
            reply(requestName: string, callback: (...args: any[]) => any, context?: any): Requests;
            reply(commands: { [key: string]: (...args: any[]) => any }, context?: any): Requests;
            replyOnce(requestName: string, callback: (...args: any[]) => any, context?: any): Requests;
            replyOnce(commands: { [key: string]: (...args: any[]) => any }, context?: any): Requests;
            stopReplying(commandName?: string, callback?: (...args: any[]) => any, context?: any): Requests;
        }

        class Channel extends Backbone.Events implements Commands, Requests {
            channelName: string;
            reset(): Channel;

            // Radio.Commands
            command(commandName: string, ...args: any[]): void;
            comply(commandName: string, callback: (...args: any[]) => void, context?: any): Commands;
            comply(commands: { [key: string]: (...args: any[]) => any }, context?: any): Commands;
            complyOnce(commandName: string, callback: (...args: any[]) => void, context?: any): Commands;
            complyOnce(commands: { [key: string]: (...args: any[]) => any }, context?: any): Commands;
            stopComplying(commandName?: string, callback?: (...args: any[]) => void, context?: any): Commands;

            // Radio.Requests
            request(requestName: string, ...args: any[]): any;
            reply(requestName: string, callback: (...args: any[]) => any, context?: any): Requests;
            reply(commands: { [key: string]: (...args: any[]) => any }, context?: any): Requests;
            replyOnce(requestName: string, callback: (...args: any[]) => any, context?: any): Requests;
            replyOnce(commands: { [key: string]: (...args: any[]) => any }, context?: any): Requests;
            stopReplying(commandName?: string, callback?: (...args: any[]) => any, context?: any): Requests;
        }
    }
} 
