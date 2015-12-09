// Type definitions for Web MIDI API
// Project: http://www.w3.org/TR/webmidi/
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

interface Navigator {
    /**
     * When invoked, returns a Promise object representing a request for access to MIDI devices on the user's system.
     * @param options settings that may be provided to the requestMIDIAccess request.
     */
    requestMIDIAccess (options?: WebMidi.MidiOptions): Promise<WebMidi.MIDIAccess>;
}

declare module WebMidi{
    /**
     * optional settings that may be provided to the requestMIDIAccess request.
     */
    export interface MidiOptions{
        sysex: boolean;
    }

    export interface IteratorItem<S>{
        value: S;
        done: boolean;
    }

    export interface Iterator<S>{
        next(): IteratorItem<S>;
    }

    interface Tuple2<A,B> {
        fst: A
        snd: B
    }

    /**
     * This type is used to represent all the currently available MIDI input ports as a MapClass-like interface
     */
    export interface MIDIInputMap{
        size: number;
        keys: ()=>Iterator<string>;
        entries: ()=>Iterator<Tuple2<string, MIDIInput>>;
        values(): Iterator<MIDIInput>;
        get(key: string): MIDIInput;
        has(key: string): boolean;
    }

    /**
     * This type is used to represent all the currently available MIDI output ports as a MapClass-like interface.
     */
    export interface MIDIOutputMap{
        size: number;
        keys: ()=>Iterator<string>;
        entries: ()=>Iterator<Tuple2<string, MIDIOutput>>;
        values(): Iterator<MIDIOutput>;
        get(key: string): MIDIOutput;
        has(key: string): boolean;
    }

    /**
     * This interface provides the methods to list MIDI input and output devices, and obtain access to an individual device.
     */
    export interface MIDIAccess extends EventTarget{
        inputs: MIDIInputMap;
        outputs: MIDIOutputMap;
        onconnect: (event: MIDIConnectionEvent)=>void;
        ondisconnect: (event: MIDIConnectionEvent)=>void;
        sysexEnabled: boolean;
    }

    /**
     * This interface represents a MIDI input or output port.
     */
    export enum MIDIPortType{
        input,
        output
    }

    /**
     * This interface represents a MIDI input or output port.
     */
    export interface MIDIPort extends EventTarget {
        id: string;
        manufacture?: string;
        name?: string;
        type: MIDIPortType;
        version?: string;
        ondisconnect: Function;
    }

    /**
     * Interface for midi inputs
     */
    export interface MIDIInput{
        onmidimessage: (event: MIDIMessageEvent)=>void;
    }

    /**
     * Interface for midi outputs
     */
    export interface MIDIOutput{
        send(data: Array<number>, timestamp?: number): void;
    }

    /**
     * An event object implementing this interface is passed to a MIDIInput's onmidimessage handler when MIDI messages are received.
     */
    export interface MIDIMessageEvent extends Event{
        receivedTime: number;
        data: Uint8Array;
    }

    export interface MIDIMessageEventInit{
        receivedTime: number;
        data: Uint8Array;
    }

    /**
     * An event object implementing this interface is passed to a MIDIAccess' ondisconnect handler
     */
    export interface MIDIConnectionEvent extends Event{
        port: MIDIPort;
    }

    export interface MIDIConnectionEventInit{
        port: MIDIPort;
    }
}

