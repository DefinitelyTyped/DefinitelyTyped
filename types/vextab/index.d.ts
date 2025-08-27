import Vex = require("vexflow");

export { Vex };

type Articulation = "b" | "s" | "h" | "p" | "t" | "T" | "v" | "V";

type Decorator = "v" | "V" | "u" | "d";

interface ABC {
    key: any;
    accidental: null | "" | "#" | "##" | "b" | "bb" | "n" | undefined;
    accidental_type: null | "c";
}

interface StaveOptions {
    notation?: "true" | "false";
    tablature?: "true" | "false";
    key?: string;
    clef?: "treble" | "bass" | "tenor" | "alto" | "percussion" | "none";
    voice?: "top" | "bottom" | "new";
    time?: string;
    tuning?: string;
    strings?: number;
}

interface ArtistCustomizations {
    "font-size"?: string;
    "font-face"?: string;
    "font-style"?: string;
    "annotation-position"?: string;
    scale?: number;
    width?: number;
    "stave-distance"?: number;
    space?: number;
    player?: string;
    tempo?: number;
    instrument?: string;
    accidentals?: string;
    "tab-stems"?: string;
    "tab-stem-direction"?: string;
    "beam-rests"?: string;
    "beam-stemlets"?: string;
    "beam-middle-only"?: string;
    "connector-space"?: number;
}

interface ArtistStaveNoteParams {
    is_rest: boolean;
    play_note: Vex.Flow.Note;
    spec: string[];
    accidentals: Array<null | string>;
}

interface VexTabNote {
    command?: "bar" | "tuplet" | "annotations" | "rest" | "command";
    time?: number;
    dot?: boolean;
    fret?: string;
    articulation?: string;
    decorator?: string;
    abc?: ABC;
    octave?: string;
    string?: string;
}

export class Artist {
    customizations: ArtistCustomizations;

    constructor(
        x: number,
        y: number,
        width: number,
        options?: {
            font_face?: string;
            font_size?: number;
            font_style?: any;
            bottom_spacing?: number;
            tab_stave_lower_spacing?: number;
            note_stave_lower_spacing?: number;
            scale?: number;
        },
    );

    reset(): void;

    attachPlayer(player: any): void;

    setOptions(options: ArtistCustomizations): void;

    getPlayerData(): {
        voices: [];
        context: CanvasRenderingContext2D;
        scale: number;
    };

    render(renderer: Vex.Flow.Renderer): void;

    isRendered(): boolean;

    draw(renderer: Vex.Flow.Renderer): void;

    getNoteForFret(fret: string, string: string): [string, number, string | null];

    getNoteForABC(abc: ABC, string: string): [any, string, any];

    addStaveNote(note_params: ArtistStaveNoteParams): void;

    addTabNote(spec: Array<{ str: number; fret: number }>, play_note: Vex.Flow.TabNote | null): void;

    setDuration(time: string, dot: boolean): void;

    addBar(type: Vex.Flow.Barline.type): void;

    openBends(
        first_note: Vex.Flow.TabNote,
        last_note: Vex.Flow.TabNote,
        first_indices: number[],
        last_indices: number[],
    ): void;

    closeBends(offset: number): void;

    makeTuplets(tuplets: number, notes?: any): void;

    makeFingering(text: string):
        | null
        | Array<{
            num: number;
            modifier: Vex.Flow.FretHandFinger | Vex.Flow.StringNumber | null;
        }>;

    makeStroke(text: string): Vex.Flow.Stroke | null;

    makeScoreArticulation(text: string): Vex.Flow.Articulation | null;

    makeAnnotation(text: string): Vex.Flow.Annotation | null;

    addAnnotations(annotations: VexTabNote[]): void;

    addTabArticulation(
        type: Articulation,
        first_note: Vex.Flow.TabNote,
        last_note: Vex.Flow.TabNote,
        first_indices: number[],
        last_indices: number[],
    ): void;

    addStaveArticulation(
        type: Articulation,
        first_note: Vex.Flow.TabNote,
        last_note: Vex.Flow.TabNote,
        first_indices: number[],
        last_indices: number[],
    ): void;

    getPreviousNoteIndex(): number;

    addDecorator(decorator?: Decorator): void;

    addArticulations(articulations: Articulation[]): void;

    addRest(params: { position: number }): void;

    addChord(chord: VexTabNote[], chord_articulation?: Articulation, chord_decorator?: Decorator): void;

    addNote(note: VexTabNote): void;

    addTextVoice(): void;

    setTextFont(font: string): void;

    addTextNote(
        text: string,
        position: number,
        justification: "center" | "left" | "right",
        smooth: boolean,
        ignore_ticks: boolean,
    ): void;

    addVoice(options: "tabstave" | "stave"): void;

    addStave(element: "tabstave" | "stave", options?: StaveOptions): void;

    runCommand(line: string, _l: number, _c: number): void;
}

export class VexTab {
    constructor(artist: Artist);

    reset(): void;

    isValid(): boolean;

    getArtist(): Artist;

    parseStaveOptions<T extends {}>(options: T): T;

    parseCommand(note: VexTabNote): void;

    parseChord(note: VexTabNote): void;

    parseFret(note: VexTabNote): void;

    parseABC(note: VexTabNote): void;

    parseStaveElements(notes: VexTabNote[]): void;

    parseStaveText(text_line: string[]): void;

    generate(): void;

    parse(code: string): string[];
}

export class Div {
    constructor(selector: string);

    redraw(): Div;

    drawInternal(): Div;

    parseInternal(): Div;

    parse(): Div;

    draw(): Div;
}
