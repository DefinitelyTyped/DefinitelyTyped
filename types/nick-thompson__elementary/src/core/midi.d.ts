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
 * @property {string} type
 * type of MIDI Event
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
    /**
     * Type of MIDI Event.
     */
    type: string;

    /**
     * Source of the MIDI event like a keyboard, control surface or even a
     * virtual MIDI device.
     */
    source: string;

    /**
     * The raw MIDI payload used for further deserialization.
     */
    bytes: string;
}


/**
 * Base type for MIDI note events.
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
    /**
     * Frequency of the note being played which doesn't have to match the
     * 'noteName' and 'noteNumber' properties to express motions like
     * portamento and vibrato.
     * - please refer to http://midi.teragonaudio.com/tutr/notenum.htm
     */
    noteFrequency: number;

    /**
     * Name of the note being played.
     * - please refer to http://midi.teragonaudio.com/tutr/notenum.htm
     */
    noteName: string;

    /**
     * Number of the note being played.
     * - please refer to http://midi.teragonaudio.com/tutr/notenum.htm
     */
    noteNumber: number;
}

/**
 * A stricter type for 'noteOn' MIDI event types.
 *
 * @property {'noteOn'} type
 * since this is a 'noteOn' event it can only be a 'noteOn' value
 *
 * @see core
 * @see MidiNoteEventBase
 */
export declare interface MidiNoteOnEvent extends MidiNoteEventBase
{
    /**
     * Since this is a 'noteOn' event it can only be a 'noteOn' value.
     */
    type: 'noteOn';
}

/**
 * A stricter type for 'noteOff' MIDI event types.
 *
 * @property {'noteOff'} type
 * since this is a 'noteOff' event it can only be a 'noteOff' value
 *
 * @see core
 * @see MidiNoteEventBase
 */
export declare interface MidiNoteOffEvent extends MidiNoteEventBase
{
    /**
     * Since this is a 'noteOff' event it can only be a 'noteOff' value.
     */
    type: 'noteOff';
}

/**
 * A stricter type for MIDI note events.
 * Unlike the base type, this one does not allow for types of note events
 * other than 'noteOn' and 'noteOff'.
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
    /**
     * Since this is a 'controller' event the only possible value of this field
     * is 'controller'.
     */
    type: 'controller',

    /**
     * One of the 16 available MIDI channels where each one represents a
     * separate 'instrument'.
     */
    channel: number,

    /**
     * The property of the channel to target; volume, pan and such.
     */
    target: number,

    /**
     * The value of the target property.
     */
    value: number
}


/**
 * @todo document more
 *
 * More information is needed to document this type of event.
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
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiMetaEventEvent extends MidiEventBase
{
}


/**
 * Raw MIDI event that is emitted when Elementary does not know which type
 * of event is appropriate for the given MIDI message.
 *
 * @property {'raw'} type
 * the type can only be 'raw' for this type of event
 *
 * @see core
 * @see MidiEventBase
 */
export declare interface MidiRawEvent extends MidiEventBase
{
    /**
     * The type can only be 'raw' for this type of event.
     */
    type: 'raw';
}


/**
 * A stricter type for MIDI events.
 * The base type is a lot looser and does not allow for fields that are
 * specific to certain types.
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
