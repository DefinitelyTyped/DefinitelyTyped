export declare interface MidiEventBase
{
    type: string;
    source: string;
    bytes: string;
}


export declare interface MidiNoteEventBase extends MidiEventBase
{
    noteFrequency: number;
    noteName: string;
    noteNumber: number;
}

export declare interface MidiNoteOnEvent extends MidiNoteEventBase
{
    type: 'noteOn';
}

export declare interface MidiNoteOffEvent extends MidiNoteEventBase
{
    type: 'noteOff';
}

export declare type MidiNoteEvent =
    MidiNoteOnEvent |
    MidiNoteOffEvent;


export declare interface MidiControllerEvent extends MidiEventBase
{
    type: 'controller',
    channel: number,
    target: number,
    value: number
}


export declare type MidiEvent =
    MidiNoteOnEvent |
    MidiNoteOffEvent |
    MidiControllerEvent;
