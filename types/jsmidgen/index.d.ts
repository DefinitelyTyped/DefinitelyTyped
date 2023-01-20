// Type definitions for jsmidgen 0.1
// Project: https://github.com/dingram/jsmidgen#readme
// Definitions by: Jimmy Cuadra <https://github.com/jimmycuadra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

export as namespace Midi;

export type MidiEventType =
    | typeof Event.AFTER_TOUCH
    | typeof Event.CHANNEL_AFTERTOUCH
    | typeof Event.CONTROLLER
    | typeof Event.NOTE_OFF
    | typeof Event.NOTE_ON
    | typeof Event.PITCH_BEND
    | typeof Event.PROGRAM_CHANGE;

export type MidiChannel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>;

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export type MidiParameterValue = Range<0, 256>;

export namespace Event {
    const AFTER_TOUCH: 0xa0;

    const CHANNEL_AFTERTOUCH: 0xd0;

    const CONTROLLER: 0xb0;

    const NOTE_OFF: 0x80;

    const NOTE_ON: 0x90;

    const PITCH_BEND: 0xe0;

    const PROGRAM_CHANGE: 0xc0;
}

export class Event {
    constructor(params?: {
        time?: number;
        type: MidiEventType;
        channel: MidiChannel;
        param1: MidiParameterValue;
        param2?: MidiParameterValue;
    });

    setChannel(channel: MidiChannel): void;

    setParam1(p: MidiParameterValue): void;

    setParam2(p: MidiParameterValue): void;

    setTime(ticks: number): void;

    setType(type: MidiEventType): void;

    toBytes(): number[];
}

export class File {
    constructor(config?: { ticks?: number; tracks?: Track[] });

    ticks: number;

    tracks: Track[];

    addTrack(track: Track): this;
    addTrack(track?: undefined): Track;

    toBytes(): number[];

    static HDR_CHUNKID: 'MThd';

    static HDR_CHUNK_SIZE: '\x00\x00\x00\x06';

    static HDR_TYPE0: '\x00\x00';

    static HDR_TYPE1: '\x00\x01';
}

export type MetaEventType =
    | typeof MetaEvent.SEQUENCE
    | typeof MetaEvent.TEXT
    | typeof MetaEvent.COPYRIGHT
    | typeof MetaEvent.TRACK_NAME
    | typeof MetaEvent.INSTRUMENT
    | typeof MetaEvent.LYRIC
    | typeof MetaEvent.MARKER
    | typeof MetaEvent.CUE_POINT
    | typeof MetaEvent.CHANNEL_PREFIX
    | typeof MetaEvent.END_OF_TRACK
    | typeof MetaEvent.TEMPO
    | typeof MetaEvent.SMPTE
    | typeof MetaEvent.TIME_SIG
    | typeof MetaEvent.KEY_SIG
    | typeof MetaEvent.SEQ_EVENT;

export namespace MetaEvent {
    const CHANNEL_PREFIX: 0x20;

    const COPYRIGHT: 0x02;

    const CUE_POINT: 0x07;

    const END_OF_TRACK: 0x2f;

    const INSTRUMENT: 0x04;

    const KEY_SIG: 0x59;

    const LYRIC: 0x05;

    const MARKER: 0x06;

    const SEQUENCE: 0x00;

    const SEQ_EVENT: 0x7f;

    const SMPTE: 0x54;

    const TEMPO: 0x51;

    const TEXT: 0x01;

    const TIME_SIG: 0x58;

    const TRACK_NAME: 0x03;
}
export class MetaEvent {
    constructor(params?: { time?: number; type: MetaEventType; data?: string | number[] });

    setData(d: string | number[]): void;

    setTime(ticks: number): void;

    setType(t: MetaEventType): void;

    toBytes(): number[];
}

export class Track {
    constructor(config?: { events?: Array<Event | MetaEvent> });

    addChord(channel: MidiChannel, chord: Array<number | string>, dur: number, velocity: number): this;

    addEvent(event: Event | MetaEvent): this;

    addNote(channel: MidiChannel, pitch: number | string, dur: number, time?: number, velocity?: number): this;

    addNoteOff(channel: MidiChannel, pitch: number | string, time?: number, velocity?: number): this;

    addNoteOn(channel: MidiChannel, pitch: number | string, time?: number, velocity?: number): this;

    chord(channel: MidiChannel, chord: Array<number | string>, dur: number, velocity: number): this;

    instrument(channel: MidiChannel, instrument: MidiParameterValue, time?: number): this;

    note(channel: MidiChannel, pitch: number | string, dur: number, time?: number, velocity?: number): this;

    noteOff(channel: MidiChannel, pitch: number | string, time?: number, velocity?: number): this;

    noteOn(channel: MidiChannel, pitch: number | string, time?: number, velocity?: number): this;

    setInstrument(channel: MidiChannel, instrument: MidiParameterValue, time?: number): this;

    setTempo(bpm: number, time?: number): this;

    tempo(bpm: number, time?: number): this;

    toBytes(): number[];

    static END_BYTES: [0x00, 0xff, 0x2f, 0x00];

    static START_BYTES: [0x4d, 0x54, 0x72, 0x6b];
}

export const DEFAULT_CHANNEL: 0;

export const DEFAULT_DURATION: 128;

export const DEFAULT_VOLUME: 90;

export namespace Util {
    const midi_flattened_notes: {
        'a#': 'bb';
        'c#': 'db';
        'd#': 'eb';
        'f#': 'gb';
        'g#': 'ab';
    };

    const midi_letter_pitches: {
        a: 21;
        b: 23;
        c: 12;
        d: 14;
        e: 16;
        f: 17;
        g: 19;
    };

    const midi_pitches_letter: {
        '12': 'c';
        '13': 'c#';
        '14': 'd';
        '15': 'd#';
        '16': 'e';
        '17': 'f';
        '18': 'f#';
        '19': 'g';
        '20': 'g#';
        '21': 'a';
        '22': 'a#';
        '23': 'b';
    };

    function bpmFromMpqn(mpqn: number): number;

    function codes2Str(byteArray: number[]): string;

    function ensureMidiPitch(p: string | number): number;

    function midiPitchFromNote(n: string): number;

    function mpqnFromBpm(bpm: number): number;

    function noteFromMidiPitch(n: number, returnFlattened?: boolean): string;

    function str2Bytes(str: string, finalBytes?: number): number[];

    function translateTickTime(ticks: number): number;
}
