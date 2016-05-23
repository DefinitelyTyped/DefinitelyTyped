

var canvas = document.getElementById("canvas");
var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);
var ctx = renderer.getContext();

// Add a treble clef and time signature
var stave = new Vex.Flow.Stave(10, 0, 550);
stave.setContext(ctx).
    addClef("treble").
    addKeySignature("A").
    addTimeSignature("4/4");

// Dotted eighth E##, sixteenth Eb, half D, quarter Cm#5
var notes1 = [
    new Vex.Flow.StaveNote({keys: ["e##/5"], duration: "8d"}).
        addAccidental(0, new Vex.Flow.Accidental("##")).
        addDotToAll(),
    new Vex.Flow.StaveNote({keys: ["eb/5"], duration: "16"}).
        addAccidental(0, new Vex.Flow.Accidental("b")),
    new Vex.Flow.StaveNote({keys: ["d/5"], duration: "h"}),
    new Vex.Flow.StaveNote({keys: ["c/5", "eb/5", "g#/5"], duration: "q"}).
        addAccidental(1, new Vex.Flow.Accidental("b")).
        addAccidental(2, new Vex.Flow.Accidental("#"))
];

// Create a beam for the first two notes
var beam = new Vex.Flow.Beam(notes1.slice(0, 2));

// Add a grace note to the half D
var gracenote = new Vex.Flow.GraceNote({keys: ["e/5"], duration: "16", slash: true});
notes1[2].addModifier(0, new Vex.Flow.GraceNoteGroup([gracenote], true).beamNotes());

// Color the chord
notes1[3].setStyle({fillStyle: "blue", strokeStyle: "blue"});

// Create a voice in 4/4 and add notes
var voice1 = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
}).addTickables(notes1);

// Create a second voice with just one whole note
var voice2 = new Vex.Flow.Voice(Vex.Flow.TIME4_4).
    addTickables([new Vex.Flow.StaveNote({keys: ["c/4"], duration: "w"})]);

// Format and justify the notes to 550 pixels
var formatter = new Vex.Flow.Formatter().
    joinVoices([voice1, voice2]).format([voice1, voice2], 550);

// Render stave
stave.draw();

// Render voices
voice1.draw(ctx, stave);
voice2.draw(ctx, stave);

// Render beam
beam.setContext(ctx).draw();

// Create and draw a tablature stave
var tabstave = new Vex.Flow.TabStave(10, 200, 550);
tabstave.addTabGlyph();
tabstave.setContext(ctx).draw();

// Create some TabNotes
var notes = [
    // A single note
    new Vex.Flow.TabNote({
        positions: [{str: 3, fret: 7}],
        duration: "q"}),

    // A chord with the note on the 3rd string bent
    new Vex.Flow.TabNote({
        positions: [{str: 2, fret: 10}, {str: 3, fret: 9}],
        duration: "q"}).
        addModifier(new Vex.Flow.Bend("Full"), 1),

    // A single note with a harsh vibrato
    new Vex.Flow.TabNote({
        positions: [{str: 2, fret: 5}],
        duration: "h"}).
        addModifier(new Vex.Flow.Vibrato().setHarsh(true).setVibratoWidth(70), 0)
];

// Format ad draw the notes
Vex.Flow.Formatter.FormatAndDraw(ctx, tabstave, notes);