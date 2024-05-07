import { Artist, Div, Vex, VexTab } from "vextab";

const artist = new Artist(10, 10, 600, { scale: 0.8 });
const renderer = new Vex.Flow.Renderer(document.createElement("div"), Vex.Flow.Renderer.Backends.SVG);

// $ExpectType void
artist.reset();

// $ExpectType void
artist.attachPlayer({});

// $ExpectType void
artist.setOptions({});

// $ExpectType { voices: []; context: CanvasRenderingContext2D; scale: number; }
artist.getPlayerData();

// $ExpectType void
artist.render(renderer);

// $ExpectType boolean
artist.isRendered();

// $ExpectType void
artist.draw(renderer);

// $ExpectType [string, number, string | null]
artist.getNoteForFret("5", "6");

// $ExpectType [any, string, any]
artist.getNoteForABC({ key: "C", accidental: "#", accidental_type: "c" }, "6");

// $ExpectType void
artist.addStaveNote({
    is_rest: false,
    play_note: new Vex.Flow.Note({ type: "", duration: "", dots: 2 }),
    spec: ["6"],
    accidentals: ["#"],
});

// $ExpectType void
artist.addTabNote([{ str: 6, fret: 3 }], null);

// $ExpectType void
artist.setDuration("C", true);

// $ExpectType void
artist.addBar(Vex.Flow.Barline.type.SINGLE);

// $ExpectType void
artist.openBends(
    new Vex.Flow.TabNote({ positions: [{ str: 3, fret: 4 }], duration: "w" }),
    new Vex.Flow.TabNote({ positions: [{ str: 3, fret: 4 }], duration: "w" }),
    [0],
    [0],
);

// $ExpectType void
artist.closeBends(1);

// $ExpectType void
artist.makeTuplets(2);

// $ExpectType { num: number; modifier: FretHandFinger | StringNumber | null; }[] | null
artist.makeFingering(".fingering/a.");

// $ExpectType Stroke | null
artist.makeStroke(".stroke/bu.");

// $ExpectType Articulation | null
artist.makeScoreArticulation(".aabc/txyz.");

// $ExpectType Annotation | null
artist.makeAnnotation("Text");

// $ExpectType void
artist.addAnnotations([{ command: "bar" }]);

// $ExpectType void
artist.addTabArticulation(
    "v",
    new Vex.Flow.TabNote({ positions: [{ str: 3, fret: 4 }], duration: "w" }),
    new Vex.Flow.TabNote({ positions: [{ str: 3, fret: 4 }], duration: "w" }),
    [0],
    [0],
);

// $ExpectType void
artist.addStaveArticulation(
    "v",
    new Vex.Flow.TabNote({ positions: [{ str: 3, fret: 4 }], duration: "w" }),
    new Vex.Flow.TabNote({ positions: [{ str: 3, fret: 4 }], duration: "w" }),
    [0],
    [0],
);

// $ExpectType number
artist.getPreviousNoteIndex();

// $ExpectType void
artist.addDecorator("v");

// $ExpectType void
artist.addArticulations(["b"]);

// $ExpectType void
artist.addRest({ position: 3 });

// $ExpectType void
artist.addChord([{ command: "bar" }], "b", "v");

// $ExpectType void
artist.addNote({ command: "bar" });

// $ExpectType void
artist.addTextVoice();

// $ExpectType void
artist.setTextFont("arial-12-italic");

// $ExpectType void
artist.addTextNote("Text", 3, "center", true, false);

// $ExpectType void
artist.addVoice("tabstave");

// $ExpectType void
artist.addStave("tabstave");

// $ExpectType void
artist.runCommand("octave-shift 2 3", 1, 3);

const vexTab = new VexTab(artist);

// $ExpectType void
vexTab.reset();

// $ExpectType boolean
vexTab.isValid();

// $ExpectType Artist
vexTab.getArtist();

// ExpectType<T>(options: T)
vexTab.parseStaveOptions({});

// $ExpectType void
vexTab.parseCommand({ command: "bar" });

// $ExpectType void
vexTab.parseChord({ command: "bar" });

// $ExpectType void
vexTab.parseABC({ command: "bar" });

// $ExpectType void
vexTab.parseStaveElements([{ command: "bar" }]);

// $ExpectType void
vexTab.parseStaveText(["q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |"]);

// $ExpectType void
vexTab.generate();

// $ExpectType string[]
vexTab.parse(`width=680 scale=1.0 editor="true"
    editor-width=680 editor-height=330>
    options space=20
    tabstave notation=true key=A time=4/4

    notes :q =|: (5/2.5/3.7/4) :8 7-5h6/3 ^3^ 5h6-7/5 ^3^ :q 7V/4 |
    notes :8 t12p7/4 s5s3/4 :8 3s:16:5-7/5 :h p5/4
    text :w, |#segno, ,|, :hd, , #tr

    options space=25`);

// @ts-expect-error
new Div();

// $ExpectType Div
const div = new Div("div");

// $ExpectType Div
div.redraw();

// $ExpectType Div
div.drawInternal();

// $ExpectType Div
div.parse();

// $ExpectType Div
div.draw();
