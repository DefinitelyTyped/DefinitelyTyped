import { Event, File, MetaEvent, Track, Util } from 'jsmidgen';

// Event tests
{
    new Event();
    new Event({
        type: Event.NOTE_ON,
        channel: 0,
        param1: 0,
    });
    new Event({
        type: Event.NOTE_ON,
        // @ts-expect-error
        channel: -1,
        param1: 0,
    });
    new Event({
        type: Event.NOTE_ON,
        channel: 0,
        // @ts-expect-error
        param1: 256,
    });

    const event = new Event({
        time: 123,
        type: Event.NOTE_ON,
        channel: 0,
        param1: 0,
        param2: 255,
    });

    event.setChannel(15);
    event.setParam1(90);
    event.setParam2(90);
    event.setTime(456);
    event.setType(Event.NOTE_OFF);
    event.toBytes();
}

// File and Track tests
{
    const file = new File();
    const track = new Track();

    file.addTrack(track);

    track.addNote(0, 'c4', 64);
    track.addNote(0, 'd4', 64);
    track.addNote(0, 'e4', 64);
    track.addNote(0, 'f4', 64);
    track.addNote(0, 'g4', 64);
    track.addNote(0, 'a4', 64);
    track.addNote(0, 'b4', 64);
    track.addNote(0, 'c5', 64);

    track.setInstrument(0, 0x13);

    track.addNoteOn(0, 'c4', 64);
    track.addNoteOn(0, 'e4');
    track.addNoteOn(0, 'g4');
    track.addNoteOff(0, 'c4', 47);
    track.addNoteOff(0, 'e4');
    track.addNoteOff(0, 'g4');

    track.addNoteOn(0, 'c4', 1);
    track.addNoteOn(0, 'e4');
    track.addNoteOn(0, 'g4');
    track.addNoteOff(0, 'c4', 384);
    track.addNoteOff(0, 'e4');
    track.addNoteOff(0, 'g4');

    const file2 = new File();

    file2
        .addTrack()
        .addNote(0, 'c4', 32)
        .addNote(0, 'd4', 32)
        .addNote(0, 'e4', 32)
        .addNote(0, 'f4', 32)
        .addNote(0, 'g4', 32)
        .addNote(0, 'a4', 32)
        .addNote(0, 'b4', 32)
        .addNote(0, 'c5', 32)
        .setInstrument(0, 0x13)
        .addNoteOn(0, 'c4', 64)
        .addNoteOn(0, 'e4')
        .addNoteOn(0, 'g4')
        .addNoteOff(0, 'c4', 47)
        .addNoteOff(0, 'e4')
        .addNoteOff(0, 'g4')
        .addNoteOn(0, 'c4', 1)
        .addNoteOn(0, 'e4')
        .addNoteOn(0, 'g4')
        .addNoteOff(0, 'c4', 384)
        .addNoteOff(0, 'e4')
        .addNoteOff(0, 'g4');

    new File({
        ticks: 1000,
    }).ticks === 1000;

    try {
        new File({
            // @ts-expect-error
            ticks: 'not a number',
        });
    } catch (e) {}
}

// MetaEvent tests
{
    new MetaEvent();
    new MetaEvent({
        type: MetaEvent.SMPTE,
    });

    const metaEvent = new MetaEvent({
        time: 123,
        type: MetaEvent.SMPTE,
        data: 'example data',
    });

    metaEvent.setData('foo');
    metaEvent.setTime(321);
    metaEvent.setType(MetaEvent.MARKER);
    metaEvent.toBytes();
}

// Util tests
{
    Util.bpmFromMpqn(123);
    Util.codes2Str([0]);
    Util.ensureMidiPitch('a');
    Util.ensureMidiPitch(21);
    Util.midiPitchFromNote('a');
    Util.mpqnFromBpm(120);
    Util.noteFromMidiPitch(21);
    Util.noteFromMidiPitch(21, true);
    Util.str2Bytes('097B8A');
    Util.str2Bytes('097B8A', 1);
    Util.translateTickTime(123);
}
