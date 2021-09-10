// for docs
// noinspection ES6UnusedImports
import { core } from './';


/**
 * Base MIDI event type.
 * MIDI events are emitted by MIDI devices such as keyboards, control
 * surfaces or even virtual MIDI devices.
 * By default, Elementary listens to all MIDI events from all available MIDI
 * devices.
 *
 * @memberOf core
 * @interface MidiEventBase
 *
 * @property {string} type
 * type of MIDI Event which can be 'noteOn', 'noteOff', or 'controller' for now
 *
 * @property {string} source
 * source of the MIDI event like a keyboard, control surface or even a
 * virtual MIDI device
 *
 * @property {string} bytes
 * the raw MIDI payload used for further deserialization
 *
 * @see core
 * @see MidiNoteEventBase
 * @see MidiControllerEvent
 */
export declare interface MidiEventBase
{
    type: string;
    source: string;
    bytes: string;
}


/**
 * Base type for MIDI note events.
 *
 * @memberOf core
 * @interface MidiNoteEvent
 * @extends MidiEventBase
 *
 * @property {number} noteFrequency
 * frequency of the note being played which doesn't have to match the
 * 'noteName' and 'noteNumber' properties to express motions like portamento
 * and vibrato
 * - please refer to http://midi.teragonaudio.com/tutr/notenum.htm
 *
 * @property {string} noteName
 * name of the note being played
 * - please refer to http://midi.teragonaudio.com/tutr/notenum.htm
 *
 * @property {number} noteNumber
 * number of the note being played
 * - please refer to http://midi.teragonaudio.com/tutr/notenum.htm
 *
 * @see core
 * @see MidiEventBase
 * @see MidiNoteOnEvent
 * @see MidiNoteOffEvent
 */
export declare interface MidiNoteEventBase extends MidiEventBase
{
    noteFrequency: number;
    noteName: string;
    noteNumber: number;
}

/**
 * A stricter type for 'noteOn' MIDI event types.
 *
 * @memberOf core
 * @interface MidiNoteOnEvent
 * @extends MidiNoteEventBase
 *
 * @property {'noteOn'} type
 * since this is a 'noteOn' event it can only be a 'noteOn' value
 *
 * @see core
 * @see MidiNoteEventBase
 */
export declare interface MidiNoteOnEvent extends MidiNoteEventBase
{
    type: 'noteOn';
}

/**
 * A stricter type for 'noteOff' MIDI event types.
 *
 * @memberOf core
 * @interface MidiNoteOffEvent
 * @extends MidiNoteEventBase
 *
 * @property {'noteOff'} type
 * since this is a 'noteOff' event it can only be a 'noteOff' value
 *
 * @see core
 * @see MidiNoteEventBase
 */
export declare interface MidiNoteOffEvent extends MidiNoteEventBase
{
    type: 'noteOff';
}

/**
 * A stricter type for MIDI note events.
 * Unlike the base type, this one does not allow for types of note events
 * other than 'noteOn' and 'noteOff'.
 *
 * @memberOf core
 *
 * @typedef {MidiNoteOnEvent | MidiNoteOffEvent}
 *
 * @see core
 * @see MidiNoteOnEvent
 * @see MidiNoteOffEvent
 * @see MidiNoteEventBase
 */
export declare type MidiNoteEvent =
    MidiNoteOnEvent |
    MidiNoteOffEvent;


/**
 * Base type for MIDI controller events usually emitted by control surfaces.
 *
 * @memberOf core
 * @interface MidiControllerEvent
 * @extends MidiEventBase
 *
 * @property {'controller'} type
 * since this is a 'controller' event the only possible value of this field
 * is 'controller'
 *
 * @property {number} channel
 * one of the 16 available MIDI channels where each one represents a
 * separate 'instrument'
 *
 * @property {number} target
 * the property of the channel to target; volume, pan and such
 *
 * @property {number} value
 * the value of the target property
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiControllerEvent extends MidiEventBase
{
    type: 'controller',
    channel: number,
    target: number,
    value: number
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiProgramChangeEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiProgramChangeEvent extends MidiEventBase
{
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiPitchWheelEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiPitchWheelEvent extends MidiEventBase
{
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiAftertouchEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiAftertouchEvent extends MidiEventBase
{
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiChannelPressureEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiChannelPressureEvent extends MidiEventBase
{
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiAllNotesOffEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiAllNotesOffEvent extends MidiEventBase
{
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiAllSoundOffEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiAllSoundOffEvent extends MidiEventBase
{
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
 *
 * @memberOf core
 * @interface MidiMetaEventEvent
 * @extends MidiEventBase
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiMetaEventEvent extends MidiEventBase
{
}


/**
 * @todo confirm this is it
 *
 * Raw MIDI event that is emitted when Elementary does not know which type
 * of event is appropriate for the given MIDI message.
 *
 * @memberOf core
 * @interface MidiRawEvent
 * @extends MidiEventBase
 *
 * @property {'raw'} type
 * the type can only be 'raw' for this type of event
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiRawEvent extends MidiEventBase
{
    type: 'raw';
}


/**
 * A stricter type for MIDI events.
 * The base type is a lot looser and does not allow for fields that are
 * specific to certain types.
 *
 * @memberOf core
 * @typedef {(
 *   MidiNoteOnEvent |
 *   MidiNoteOffEvent |
 *   MidiControllerEvent
 *   MidiProgramChangeEvent |
 *   MidiPitchWheelEvent |
 *   MidiAftertouchEvent |
 *   MidiChannelPressureEvent |
 *   MidiAllNotesOffEvent |
 *   MidiAllSoundOffEvent |
 *   MidiMetaEventEvent |
 *   MidiRawEvent
 * )}
 *
 * @see core
 * @see MidiNoteOnEvent
 * @see MidiNoteOffEvent
 * @see MidiControllerEvent
 * @see MidiProgramChangeEvent
 * @see MidiPitchWheelEvent
 * @see MidiAftertouchEvent
 * @see MidiChannelPressureEvent
 * @see MidiAllNotesOffEvent
 * @see MidiAllSoundOffEvent
 * @see MidiMetaEventEvent
 * @see MidiRawEvent
 */
export declare type MidiEvent =
    MidiNoteOnEvent |
    MidiNoteOffEvent |
    MidiControllerEvent |
    MidiProgramChangeEvent |
    MidiPitchWheelEvent |
    MidiAftertouchEvent |
    MidiChannelPressureEvent |
    MidiAllNotesOffEvent |
    MidiAllSoundOffEvent |
    MidiMetaEventEvent |
    MidiRawEvent;
