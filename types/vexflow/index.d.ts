// Type definitions for VexFlow v3.0.9
// Project: http://vexflow.com
// Definitions by: Roman Quiring <https://github.com/rquiring>
//                 Sebastian Haas <https://github.com/sebastianhaas>
//                 Basti Hoffmann <https://github.com/bohoffi>
//                 Simon Schmid <https://github.com/sschmidTU>
//                 Benjamin Giesinger <https://github.com/bneumann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//inconsistent namespace: this is a helper funtion from tables.js and should not pollute the global namespace!
declare function sanitizeDuration(duration: string): string;

declare namespace Vex {
    function L(block: string, args: any[]): void;
    function Merge<T extends Object>(destination: T, source: Object): T;
    function Min(a: number, b: number): number;
    function Max(a: number, b: number): number;
    function RoundN(x: number, n: number): number;
    function MidLine(a: number, b: number): number;
    function SortAndUnique<T extends any[]>(arr: T, cmp: Function, eq: Function): T;
    function Contains(a: any[], obj: any): boolean;
    function getCanvasContext(canvas_sel: string): CanvasRenderingContext2D;
    function drawDot(ctx: IRenderContext, x: number, y: number, color?: string): void;
    function BM(s: number, f: Function): void;
    function Inherit<T extends Object>(child: T, parent: Object, object: Object): T;

    class RuntimeError {
        constructor(code: string, message: string);
    }

    class RERR {
        constructor(code: string, message: string);
    }

    /**
     * Helper interface for handling the different rendering contexts (i.e. CanvasContext, RaphaelContext, SVGContext). Not part of VexFlow!
     */
    interface IRenderContext {
        clear(): void;
        setFont(family: string, size: number, weight?: number): IRenderContext;
        setRawFont(font: string): IRenderContext;
        setFillStyle(style: string): IRenderContext;
        setBackgroundFillStyle(style: string): IRenderContext;
        setStrokeStyle(style: string): IRenderContext;
        setShadowColor(color: string): IRenderContext;
        setShadowBlur(blur: string): IRenderContext;
        setLineWidth(width: number): IRenderContext;
        setLineCap(cap_type: string): IRenderContext;
        setLineDash(dash: string): IRenderContext;
        scale(x: number, y: number): IRenderContext;
        resize(width: number, height: number): IRenderContext;
        fillRect(x: number, y: number, width: number, height: number): IRenderContext;
        clearRect(x: number, y: number, width: number, height: number): IRenderContext;
        beginPath(): IRenderContext;
        moveTo(x: number, y: number): IRenderContext;
        lineTo(x: number, y: number): IRenderContext;
        bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): IRenderContext;
        quadraticCurveTo(x1: number, y1: number, x2: number, y2: number): IRenderContext;
        arc(
            x: number,
            y: number,
            radius: number,
            startAngle: number,
            endAngle: number,
            antiClockwise: boolean,
        ): IRenderContext;
        glow(): IRenderContext;
        fill(): IRenderContext;
        stroke(): IRenderContext;
        closePath(): IRenderContext;
        fillText(text: string, x: number, y: number): IRenderContext;
        save(): IRenderContext;
        restore(): IRenderContext;
        openGroup(): Node | undefined;
        closeGroup(): void;

        /**
         * canvas returns TextMetrics, SVG returns SVGRect, Raphael returns {width : number, height : number}. Only width is used throughout VexFlow.
         */
        measureText(text: string): { width: number };
    }

    /**
     * Helper interface for handling the Vex.Flow.Font object in Vex.Flow.Glyph. Not part of VexFlow!
     */
    interface IFont {
        glyphs: { x_min: number; x_max: number; ha: number; o: string[] }[];
        cssFontWeight: string;
        ascender: number;
        underlinePosition: number;
        cssFontStyle: string;
        boundingBox: { yMin: number; xMin: number; yMax: number; xMax: number };
        resolution: number;
        descender: number;
        familyName: string;
        lineHeight: number;
        underlineThickness: number;

        /**
         * This property is missing in vexflow_font.js, but present in gonville_original.js and gonville_all.js.
         */
        original_font_information?: {
            postscript_name: string;
            version_string: string;
            vendor_url: string;
            full_font_name: string;
            font_family_name: string;
            copyright: string;
            description: string;
            trademark: string;
            designer: string;
            designer_url: string;
            unique_font_identifier: string;
            license_url: string;
            license_description: string;
            manufacturer_name: string;
            font_sub_family_name: string;
        };
    }

    namespace Flow {
        const RESOLUTION: number;

        // from tables.js:
        const STEM_WIDTH: number;
        const STEM_HEIGHT: number;
        const STAVE_LINE_THICKNESS: number;
        const TIME4_4: { num_beats: number; beat_value: number; resolution: number };
        const unicode: { [name: string]: string }; //inconsistent API: this should be private and have a wrapper function like the other tables
        const DEFAULT_NOTATION_FONT_SCALE: number;
        function clefProperties(clef: string): { line_shift: number };
        function keyProperties(
            key: string,
            clef: string,
            params: { octave_shift?: number },
        ): {
            key: string;
            octave: number;
            line: number;
            int_value: number;
            accidental: string;
            code: number;
            stroke: number;
            shift_right: number;
            displaced: boolean;
        };
        function integerToNote(integer: number): string;
        function tabToGlyph(fret: string): { text: string; code: number; width: number; shift_y: number };
        function textWidth(text: string): number;
        function articulationCodes(
            artic: string,
        ): {
            code: string;
            width: number;
            shift_right: number;
            shift_up: number;
            shift_down: number;
            between_lines: boolean;
        };
        function accidentalCodes(
            acc: string,
        ): { code: string; width: number; gracenote_width: number; shift_right: number; shift_down: number };
        function ornamentCodes(
            acc: string,
        ): { code: string; shift_right: number; shift_up: number; shift_down: number; width: number };
        function keySignature(spec: string): { type: string; line: number }[];
        function parseNoteDurationString(durationString: string): { duration: string; dots: number; type: string };
        function parseNoteData(noteData: {
            duration: string;
            dots: number;
            type: string;
        }): { duration: string; type: string; dots: number; ticks: number };
        function durationToFraction(duration: string): Fraction;
        function durationToNumber(duration: string): number;
        function durationToTicks(duration: string): number;
        function durationToGlyph(
            duration: string,
            type: string,
        ): {
            head_width: number;
            stem: boolean;
            stem_offset: number;
            flag: boolean;
            stem_up_extension: number;
            stem_down_extension: number;
            gracenote_stem_up_extension: number;
            gracenote_stem_down_extension: number;
            tabnote_stem_up_extension: number;
            tabnote_stem_down_extension: number;
            dot_shiftY: number;
            line_above: number;
            line_below: number;
            code_head?: string;
            rest?: boolean;
            position?: string;
        };

        // from glyph.js:
        function renderGlyph(
            ctx: IRenderContext,
            x_pos: number,
            y_pos: number,
            point: number,
            val: string,
            nocache: boolean,
        ): void;

        // from vexflow_font.js / gonville_original.js / gonville_all.js
        var Font: {
            glyphs: { x_min: number; x_max: number; ha: number; o: string[] }[];
            cssFontWeight: string;
            ascender: number;
            underlinePosition: number;
            cssFontStyle: string;
            boundingBox: { yMin: number; xMin: number; yMax: number; xMax: number };
            resolution: number;
            descender: number;
            familyName: string;
            lineHeight: number;
            underlineThickness: number;

            //inconsistent member : this is missing in vexflow_font.js, but present in gonville_original.js and gonville_all.js
            original_font_information: {
                postscript_name: string;
                version_string: string;
                vendor_url: string;
                full_font_name: string;
                font_family_name: string;
                copyright: string;
                description: string;
                trademark: string;
                designer: string;
                designer_url: string;
                unique_font_identifier: string;
                license_url: string;
                license_description: string;
                manufacturer_name: string;
                font_sub_family_name: string;
            };
        };

        class Accidental extends Modifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            setNote(note: Note): Modifier;

            constructor(type: string);
            static DEBUG: boolean;
            static format(
                accidentals: Accidental[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): void;
            setNote(note: StaveNote): void;
            setAsCautionary(): Accidental;
            draw(): void;
            static applyAccidentals(voices: Voice[], keySignature?: string): void;
        }

        namespace Accidental {
            const CATEGORY: string;
        }

        class Annotation extends Modifier {
            constructor(text: string);
            static DEBUG: boolean;
            static format(
                annotations: Annotation[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            setTextLine(line: number): Annotation;
            setFont(family: string, size: number, weight: string): Annotation;
            setVerticalJustification(just: Annotation.VerticalJustify): Annotation;
            getJustification(): Annotation.Justify;
            setJustification(justification: Annotation.Justify): Annotation;
            draw(): void;
        }

        namespace Annotation {
            enum Justify {
                LEFT = 1,
                CENTER,
                RIGHT,
                CENTER_STEM,
            }
            enum VerticalJustify {
                TOP = 1,
                CENTER,
                BOTTOM,
                CENTER_STEM,
            }
            const CATEGORY: string;
        }

        class Articulation extends Modifier {
            constructor(type: string);
            static DEBUG: boolean;
            static format(
                articulations: Articulation[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            draw(): void;
        }

        namespace Articulation {
            const CATEGORY: string;
        }

        class BarNote extends Note {
            static DEBUG: boolean;
            constructor();
            getType(): Barline.type;
            setType(type: Barline.type): BarNote;
            getBoundingBox(): BoundingBox;
            addToModifierContext(): BarNote;
            preFormat(): BarNote;
            draw(): void;
        }

        namespace Barline {
            enum type {
                SINGLE = 1,
                DOUBLE,
                END,
                REPEAT_BEGIN,
                REPEAT_END,
                REPEAT_BOTH,
                NONE,
            }
        }

        class Barline extends StaveModifier {
            constructor(type: Barline.type, x: number);
            getCategory(): string;
            setX(x: number): Barline;
            draw(stave: Stave, x_shift?: number): void;
            drawVerticalBar(stave: Stave, x: number, double_bar?: boolean): void;
            drawVerticalEndBar(stave: Stave, x: number): void;
            drawRepeatBar(stave: Stave, x: number, begin: boolean): void;
        }

        class Beam {
            constructor(notes: StemmableNote[], auto_stem?: boolean);
            setStyle(style: {
                shadowColor?: string;
                shadowBlur?: string;
                fillStyle?: string;
                strokeStyle?: string;
            }): Beam;
            setContext(context: IRenderContext): Beam;
            getNotes(): StemmableNote[];
            getBeamCount(): number;
            breakSecondaryAt(indices: number[]): Beam;
            getSlopeY(): number;
            calculateSlope(): void;
            applyStemExtensions(): void;
            getBeamLines(duration: string): { start: number; end: number }[];
            drawStems(): void;
            drawBeamLines(): void;
            preFormat(): Beam;
            postFormat(): Beam;
            draw(): boolean;
            calculateStemDirection(notes: Note): number;
            static getDefaultBeamGroups(time_sig: string): Fraction[];
            static applyAndGetBeams(voice: Voice, stem_direction: number, groups: Fraction[]): Beam[];
            static generateBeams(
                notes: StemmableNote[],
                config?: {
                    groups?: Fraction[];
                    stem_direction?: number;
                    beam_rests?: boolean;
                    beam_middle_only?: boolean;
                    show_stemlets?: boolean;
                    maintain_stem_directions?: boolean;
                },
            ): Beam[];
        }

        class Bend extends Modifier {
            constructor(text: string, release?: boolean, phrase?: { type: number; text: string; width: number }[]);
            static UP: number;
            static DOWN: number;
            static format(
                bends: Bend[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            setXShift(value: number): void;
            setFont(font: string): Bend;
            getText(): string;
            updateWidth(): Bend;
            draw(): void;
        }

        namespace Bend {
            const CATEGORY: string;
        }

        class BoundingBox {
            constructor(x: number, y: number, w: number, h: number);
            static copy(that: BoundingBox): BoundingBox;
            getX(): number;
            getY(): number;
            getW(): number;
            getH(): number;
            setX(x: number): BoundingBox;
            setY(y: number): BoundingBox;
            setW(w: number): BoundingBox;
            setH(h: number): BoundingBox;
            move(x: number, y: number): void;
            clone(): BoundingBox;
            mergeWith(boundingBox: BoundingBox, ctx?: IRenderContext): BoundingBox;
            draw(ctx: IRenderContext, x: number, y: number): void;
        }

        class CanvasContext implements IRenderContext {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes or type inconsistencies mentioned below are fixed
            setLineDash(dash: string): CanvasContext;
            scale(x: number, y: number): CanvasContext;
            resize(width: number, height: number): CanvasContext;
            fillRect(x: number, y: number, width: number, height: number): CanvasContext;
            clearRect(x: number, y: number, width: number, height: number): CanvasContext;
            beginPath(): CanvasContext;
            moveTo(x: number, y: number): CanvasContext;
            lineTo(x: number, y: number): CanvasContext;
            bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): CanvasContext;
            quadraticCurveTo(x1: number, y1: number, x2: number, y2: number): CanvasContext;
            arc(
                x: number,
                y: number,
                radius: number,
                startAngle: number,
                endAngle: number,
                antiClockwise: boolean,
            ): CanvasContext;
            glow(): CanvasContext;
            fill(): CanvasContext;
            stroke(): CanvasContext;
            closePath(): CanvasContext;
            fillText(text: string, x: number, y: number): CanvasContext;
            save(): CanvasContext;
            restore(): CanvasContext;

            constructor(context: CanvasRenderingContext2D);
            static WIDTH: number;
            static HEIGHT: number;
            clear(): void;
            setFont(family: string, size: number, weight?: number): CanvasContext;
            setRawFont(font: string): CanvasContext;
            setFillStyle(style: string): CanvasContext;
            setBackgroundFillStyle(style: string): CanvasContext;
            setStrokeStyle(style: string): CanvasContext;
            setShadowColor(style: string): CanvasContext; //inconsistent name: style -> color
            setShadowBlur(blur: string): CanvasContext;
            setLineWidth(width: number): CanvasContext;
            setLineCap(cap_type: string): CanvasContext;

            //inconsistent type: void -> CanvasContext
            setLineDash(dash: string): void;
            scale(x: number, y: number): void;
            resize(width: number, height: number): void;
            fillRect(x: number, y: number, width: number, height: number): void;
            clearRect(x: number, y: number, width: number, height: number): void;
            beginPath(): void;
            moveTo(x: number, y: number): void;
            lineTo(x: number, y: number): void;
            bezierCurveToTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
            quadraticCurveToTo(x1: number, y1: number, x: number, y: number): void; //inconsistent name: x -> x2, y -> y2
            arc(
                x: number,
                y: number,
                radius: number,
                startAngle: number,
                endAngle: number,
                antiClockwise: boolean,
            ): void;
            glow(): void;
            fill(): void;
            stroke(): void;
            closePath(): void;
            measureText(text: string): TextMetrics;
            fillText(text: string, x: number, y: number): void;
            save(): void;
            restore(): void;
            openGroup(): undefined;
            closeGroup(): void;
        }

        class Clef extends StaveModifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            addModifier(): void;
            addEndModifier(): void;

            constructor(clef: string, size?: string, annotation?: string);
            static DEBUG: boolean;
            addModifier(stave: Stave): void;
            addEndModifier(stave: Stave): void;
        }

        class ClefNote extends Note {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            setStave(stave: Stave): Note;

            constructor(clef: string, size?: string, annotation?: string);
            setClef(clef: string, size?: string, annotation?: string): ClefNote;
            getClef(): string;
            setStave(stave: Stave): void;
            getBoundingBox(): BoundingBox;
            addToModifierContext(): ClefNote;
            getCategory(): string;
            preFormat(): ClefNote;
            draw(): void;
        }

        class Crescendo extends Note {
            constructor(note_struct: { duration: number; line?: number });
            static DEBUG: boolean;
            setLine(line: number): Crescendo;
            setHeight(height: number): Crescendo;
            setDecrescendo(decresc: boolean): Crescendo;
            preFormat(): Crescendo;
            draw(): void;
        }

        class Curve {
            constructor(
                from: Note,
                to: Note,
                options?: {
                    spacing?: number;
                    thickness?: number;
                    x_shift?: number;
                    y_shift: number;
                    position: Curve.Position;
                    invert: boolean;
                    cps?: { x: number; y: number }[];
                },
            );
            static DEBUG: boolean;
            setContext(context: IRenderContext): Curve;
            setNotes(from: Note, to: Note): Curve;
            isPartial(): boolean;
            renderCurve(params: {
                first_x: number;
                first_y: number;
                last_x: number;
                last_y: number;
                direction: number;
            }): void;
            draw(): boolean;
        }

        namespace Curve {
            enum Position {
                NEAR_HEAD = 1,
                NEAR_TOP,
            }
        }

        class Dot extends Modifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes or type inconsistencies mentioned below are fixed
            setNote(note: Note): Dot;

            static format(dots: number, state: { left_shift: number; right_shift: number; text_line: number }): void;
            setNote(note: Note): void; //inconsistent type: void -> Dot
            setDotShiftY(y: number): Dot;
            draw(): void;
        }

        namespace Dot {
            const CATEGORY: string;
        }

        class Formatter {
            static DEBUG: boolean;
            constructor(options?: {
                softmaxFactor?: number,
                maxIterations?: number
            });
            static FormatAndDraw(
                ctx: IRenderContext,
                stave: Stave,
                notes: Note[],
                params?: { auto_beam: boolean; align_rests: boolean },
            ): BoundingBox;
            static FormatAndDraw(ctx: IRenderContext, stave: Stave, notes: Note[], params?: boolean): BoundingBox;
            static FormatAndDrawTab(
                ctx: IRenderContext,
                tabstave: TabStave,
                stave: Stave,
                tabnotes: TabNote[],
                notes: Note[],
                autobeam?: boolean,
                params?: { auto_beam: boolean; align_rests: boolean },
            ): void;
            static FormatAndDrawTab(
                ctx: IRenderContext,
                tabstave: TabStave,
                stave: Stave,
                tabnotes: TabNote[],
                notes: Note[],
                autobeam?: boolean,
                params?: boolean,
            ): void;
            static AlignRestsToNotes(notes: Note[], align_all_notes?: boolean, align_tuplets?: boolean): Formatter;
            alignRests(voices: Voice[], align_all_notes: boolean): void;
            preCalculateMinTotalWidth(voices: Voice[]): number;
            getMinTotalWidth(): number;
            createModifierContexts(voices: Voice[]): ModifierContext[];
            createTickContexts(voices: Voice[]): TickContext[];
            preFormat(justifyWidth?: number, rendering_context?: IRenderContext, voices?: Voice[], stave?: Stave): void;
            postFormat(): Formatter;
            joinVoices(voices: Voice[]): Formatter;
            format(
                voices: Voice[],
                justifyWidth: number,
                options?: { align_rests?: boolean; context: IRenderContext },
            ): Formatter;
            formatToStave(
                voices: Voice[],
                stave: Stave,
                options?: { align_rests?: boolean; context: IRenderContext },
            ): Formatter;
        }

        class Fraction {
            constructor(numerator: number, denominator: number);
            static GCD(a: number, b: number): number;
            static LCM(a: number, b: number): number;
            static LCMM(a: number, b: number): number;
            set(numerator: number, denominator: number): Fraction;
            value(): number;
            simplify(): Fraction;
            add(param1: Fraction, param2: Fraction): Fraction;
            add(param1: number, param2: number): Fraction;
            subtract(param1: Fraction, param2: Fraction): Fraction;
            subtract(param1: number, param2: number): Fraction;
            multiply(param1: Fraction, param2: Fraction): Fraction;
            multiply(param1: number, param2: number): Fraction;
            divide(param1: Fraction, param2: Fraction): Fraction;
            divide(param1: number, param2: number): Fraction;
            equals(compare: Fraction): boolean;
            greaterThan(compare: Fraction): boolean;
            greaterThanEquals(compare: Fraction): boolean;
            lessThan(compare: Fraction): boolean;
            lessThanEquals(compare: Fraction): boolean;
            clone(): Fraction;
            copy(copy: Fraction): Fraction;
            quotient(): number;
            fraction(): number;
            abs(): Fraction;
            toString(): string;
            toSimplifiedString(): string;
            toMixedString(): string;
            parse(str: string): Fraction;
        }

        class FretHandFinger extends Modifier {
            constructor(number: number | string);
            static format(
                nums: FretHandFinger[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): void;
            finger: number | string;
            getNote(): Note;
            setNote(note: Note): FretHandFinger;
            getIndex(): number;
            setIndex(index: number): FretHandFinger;
            getPosition(): Modifier.Position;
            setPosition(position: Modifier.Position): FretHandFinger;
            setFretHandFinger(number: number): FretHandFinger;
            setOffsetX(x: number): FretHandFinger;
            setOffsetY(y: number): FretHandFinger;
            draw(): void;
        }

        namespace FretHandFinger {
            const CATEGORY: string;
        }

        class GhostNote extends StemmableNote {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes or type inconsistencies mentioned below are fixed
            setStave(stave: Stave): Note;

            constructor(duration: string);
            constructor(note_struct: { type?: string; dots?: number; duration: string }); //inconsistent name : init struct is called 'duration', should be 'params'/'options' (may be string or Object)
            isRest(): boolean;
            setStave(stave: Stave): void; //inconsistent type: void -> GhostNote
            addToModifierContext(): GhostNote;
            preFormat(): GhostNote;
            draw(): void;
        }

        class Glyph {
            constructor(code: string, point: number, options?: { cache?: boolean; font?: IFont });
            setOptions(options: { cache?: boolean; font?: IFont }): void;
            setStave(stave: Stave): Glyph;
            setXShift(x_shift: number): Glyph;
            setYShift(y_shift: number): Glyph;
            setContext(context: IRenderContext): Glyph;
            getContext(): IRenderContext;
            reset(): void;
            setWidth(width: number): Glyph;
            getMetrics(): { x_min: number; x_max: number; width: number; height: number };
            render(ctx: IRenderContext, x_pos: number, y_pos: number): void;
            renderToStave(x: number): void;
            static loadMetrics(
                font: IFont,
                code: string,
                cache: boolean,
            ): { x_min: number; x_max: number; ha: number; outline: number[] };
            static renderOutline(
                ctx: IRenderContext,
                outline: number[],
                scale: number,
                x_pos: number,
                y_pos: number,
            ): void;
        }

        class GraceNote extends StaveNote {
            constructor(note_struct: {
                slash?: boolean;
                type?: string;
                dots?: number;
                duration: string;
                clef?: string;
                keys: string[];
                octave_shift?: number;
                auto_stem?: boolean;
                stem_direction?: number;
            });
            static LEDGER_LINE_OFFSET: number;
            getStemExtension(): number;
            getCategory(): string;
            draw(): void;
        }

        namespace GraceNote {
            const SCALE: number;
        }

        class GraceNoteGroup extends Modifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes or type inconsistencies mentioned below are fixed
            setWidth(width: number): Modifier;
            setNote(note: StaveNote): Modifier;

            constructor(grace_notes: GraceNote[], show_slur?: boolean); //inconsistent name: 'show_slur' is called 'config', suggesting object (is boolean)
            static DEBUG: boolean;
            static format(
                gracenote_groups: GraceNoteGroup[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            preFormat(): void;
            beamNotes(): GraceNoteGroup;
            setNote(note: Note): void; //inconsistent type: void -> GraceNoteGroup
            setWidth(width: number): void; //inconsistent type: void -> GraceNoteGroup
            getWidth(): number;
            setXShift(x_shift: number): void;
            draw(): void;
        }

        namespace GraceNoteGroup {
            const CATEGORY: string;
        }

        class KeyManager {
            constructor(key: string);
            setKey(key: string): KeyManager;
            getKey(): string;
            reset(): KeyManager;
            getAccidental(key: string): { note: string; accidental: string };
            selectNote(note: string): { note: string; accidental: string; change: boolean };
        }

        class KeySignature extends StaveModifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            addModifier(): void;

            constructor(key_spec: string);
            addAccToStave(
                stave: Stave,
                acc: { type: string; line: number },
                next?: { type: string; line: number },
            ): void;
            cancelKey(spec: string): KeySignature;
            addModifier(stave: Stave): KeySignature;
            addToStave(stave: Stave, firstGlyph?: boolean): KeySignature;
            convertAccLines(clef: string, type: string): void;
        }

        class Modifier {
            static DEBUG: boolean;
            getCategory(): string;
            getWidth(): number;
            setWidth(width: number): Modifier;
            getNote(): Note;
            setNote(note: Note): Modifier;
            getIndex(): number;
            setIndex(index: number): Modifier;
            getContext(): IRenderContext;
            setContext(context: IRenderContext): Modifier;
            getModifierContext(): ModifierContext;
            setModifierContext(c: ModifierContext): Modifier;
            getPosition(): Modifier.Position;
            setPosition(position: Modifier.Position): Modifier;
            setTextLine(line: number): Modifier;
            setYShift(y: number): Modifier;
            setXShift(x: number): void; //inconsistent type: void -> Modifier
            draw(): void;
            alignSubNotesWithNote(subNotes: Note[], note: Note): void;
        }

        namespace Modifier {
            enum Position {
                LEFT = 1,
                RIGHT,
                ABOVE,
                BELOW,
            }
            const CATEGORY: string;
        }

        class ModifierContext {
            static DEBUG: boolean;
            addModifier(modifier: Modifier): ModifierContext;
            getModifiers(type: string): Modifier[];
            getWidth(): number;
            getExtraLeftPx(): number;
            getExtraRightPx(): number;
            getState(): { left_shift: number; right_shift: number; text_line: number };
            getMetrics(): { width: number; spacing: number; extra_left_px: number; extra_right_px: number };
            preFormat(): void;
            postFormat(): void;
        }

        class Music {
            isValidNoteValue(note: number): boolean;
            isValidIntervalValue(interval: number): boolean;
            getNoteParts(noteString: string): { root: string; accidental: string };
            getKeyParts(noteString: string): { root: string; accidental: string; type: string };
            getNoteValue(noteString: string): number;
            getIntervalValue(intervalString: string): number;
            getCanonicalNoteName(noteValue: number): string;
            getCanonicalIntervalName(intervalValue: number): string;
            getRelativeNoteValue(noteValue: number, intervalValue: number, direction?: number): number;
            getRelativeNoteName(root: string, noteValue: number): string;
            getScaleTones(key: string, intervals: number[]): number;
            getIntervalBetween(note1: number, note2: number, direction?: number): number;
            createScaleMap(keySignature: string): { [rootName: string]: string };
        }

        namespace Music {
            const NUM_TONES: number;
            const roots: string[];
            const root_values: number[];
            const root_indices: { [root: string]: number };
            const canonical_notes: string[];
            const diatonic_intervals: string[];
            const diatonic_accidentals: { [diatonic_interval: string]: { note: number; accidental: number } };
            const intervals: { [interval: string]: number };
            const scales: { [scale: string]: number[] };
            const accidentals: string[];
            const noteValues: { [value: string]: { root_index: number; int_val: number } };
        }

        class Note implements Tickable {
            //from tickable interface:
            getTicks(): Fraction;
            getCenterXShift(): number;
            isCenterAligned(): boolean;
            setCenterAlignment(align_center: boolean): Note;
            getTuplet(): Tuplet;
            setTuplet(tuplet: Tuplet): Note;
            addToModifierContext(mc: ModifierContext): void;
            preFormat(): void;
            postFormat(): Note;
            getIntrinsicTicks(): Fraction;
            setIntrinsicTicks(intrinsicTicks: Fraction): void;
            getTickMultiplier(): Fraction;
            applyTickMultiplier(numerator: number, denominator: number): void;
            setDuration(duration: Fraction): void;
            preFormatted: boolean;

            constructor(note_struct: { type?: string; dots?: number; duration: string });
            getPlayNote(): any;
            setPlayNote(note: any): Note;
            isRest(): boolean;
            addStroke(index: number, stroke: Stroke): Note;
            getStave(): Stave;
            setStave(stave: Stave): Note;
            getCategory(): string;
            setContext(context: IRenderContext): Note;
            getExtraLeftPx(): number;
            getExtraRightPx(): number;
            setExtraLeftPx(x: number): Note;
            setExtraRightPx(x: number): Note;
            shouldIgnoreTicks(): boolean;
            getLineNumber(): number;
            getLineForRest(): number;
            getGlyph(): Glyph;
            setYs(ys: number[]): Note;
            getYs(): number[];
            getYForTopText(text_line: number): number;
            getBoundingBox(): BoundingBox;
            getVoice(): Voice;
            setVoice(voice: Voice): Note;
            getTickContext(): TickContext;
            setTickContext(tc: TickContext): Note;
            getDuration(): string;
            isDotted(): boolean;
            hasStem(): boolean;
            getDots(): number;
            getNoteType(): string;
            setBeam(): Note;
            setModifierContext(mc: ModifierContext): Note;
            addModifier(modifier: Modifier, index?: number): Note;
            getModifierStartXY(): { x: number; y: number };
            getMetrics(): {
                width: number;
                noteWidth: number;
                left_shift: number;
                modLeftPx: number;
                modRightPx: number;
                extraLeftPx: number;
                extraRightPx: number;
            };
            setWidth(width: number): void;
            getWidth(): number;
            setXShift(x: number): Note;
            getX(): number;
            getAbsoluteX(): number;
            setPreFormatted(value: boolean): void;
        }

        namespace Note {
            const CATEGORY: string;
        }

        class NoteHead extends Note {
            constructor(head_options: {
                x?: number;
                y?: number;
                note_type?: string;
                duration: string;
                displaced?: boolean;
                stem_direction?: number;
                line: number;
                x_shift: number;
                custom_glyph_code?: string;
                style?: string;
                slashed?: boolean;
                glyph_font_scale?: number;
            });
            static DEBUG: boolean;
            getCategory(): string;
            setContext(context: IRenderContext): NoteHead;
            getWidth(): number;
            isDisplaced(): boolean;
            getStyle(): { shadowColor?: string; shadowBlur?: string; fillStyle?: string; strokeStyle?: string };
            setStyle(style: {
                shadowColor?: string;
                shadowBlur?: string;
                fillStyle?: string;
                strokeStyle?: string;
            }): NoteHead;
            getGlyph(): Glyph;
            setX(x: number): NoteHead;
            getY(): number;
            setY(y: number): NoteHead;
            getLine(): number;
            setLine(line: number): NoteHead;
            getAbsoluteX(): number;
            getBoundingBox(): BoundingBox;
            applyStyle(context: IRenderContext): NoteHead;
            setStave(stave: Stave): NoteHead;
            preFormat(): NoteHead;
            draw(): void;
        }

        class NoteSubGroup extends Modifier {
            constructor(subnotes: Note[]);
            preFormat(): void;
        }

        class Ornament extends Modifier {
            constructor(type: string);
            static DEBUG: boolean;
            static format(
                ornaments: Ornament[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            setDelayed(delayed: boolean): Ornament;
            setUpperAccidental(acc: string): Ornament;
            setLowerAccidental(acc: string): Ornament;
            draw(): void;
        }

        namespace Ornament {
            const CATEGORY: string;
        }

        class PedalMarking {
            constructor(notes: Note[]); //inconsistent name: 'notes' is called 'type', suggesting string (is Note[])
            static DEBUG: boolean;
            static createSustain(notes: Note[]): PedalMarking;
            static createSostenuto(notes: Note[]): PedalMarking;
            static createUnaCorda(notes: Note[]): PedalMarking;
            setCustomText(depress?: string, release?: string): PedalMarking;
            setStyle(style: PedalMarking.Styles): PedalMarking;
            setLine(line: number): PedalMarking;
            setContext(context: IRenderContext): PedalMarking;
            drawBracketed(): void;
            drawText(): void;
            draw(): void;
        }

        namespace PedalMarking {
            enum Styles {
                TEXT = 1,
                BRACKET,
                MIXED,
            }
            const GLYPHS: { [name: string]: { code: string; x_shift: number; y_shift: number } };
        }

        class RaphaelContext implements IRenderContext {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes or type inconsistencies mentioned below are fixed
            setLineWidth(width: number): RaphaelContext;
            glow(): RaphaelContext;

            constructor(element: HTMLElement);
            setFont(family: string, size: number, weight?: number): RaphaelContext;
            setRawFont(font: string): RaphaelContext;
            setFillStyle(style: string): RaphaelContext;
            setBackgroundFillStyle(style: string): RaphaelContext;
            setStrokeStyle(style: string): RaphaelContext;
            setShadowColor(style: string): RaphaelContext; //inconsistent name: style -> color
            setShadowBlur(blur: string): RaphaelContext;
            setLineWidth(width: number): void; //inconsistent type: void -> RaphaelContext
            setLineDash(dash: string): RaphaelContext;
            setLineCap(cap_type: string): RaphaelContext;
            scale(x: number, y: number): RaphaelContext;
            clear(): void;
            resize(width: number, height: number): RaphaelContext;
            setViewBox(viewBox: string): void;
            rect(x: number, y: number, width: number, height: number): void;
            fillRect(x: number, y: number, width: number, height: number): RaphaelContext;
            clearRect(x: number, y: number, width: number, height: number): RaphaelContext;
            beginPath(): RaphaelContext;
            moveTo(x: number, y: number): RaphaelContext;
            lineTo(x: number, y: number): RaphaelContext;
            bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): RaphaelContext;
            quadraticCurveTo(x1: number, y1: number, x: number, y: number): RaphaelContext; //inconsistent name: x, y -> x2, y2
            arc(
                x: number,
                y: number,
                radius: number,
                startAngle: number,
                endAngle: number,
                antiClockwise: boolean,
            ): RaphaelContext;
            glow(): { width: number; fill: boolean; opacity: number; offsetx: number; offsety: number; color: string }; //inconsistent type : Object -> RaphaelContext
            fill(): RaphaelContext;
            stroke(): RaphaelContext;
            closePath(): RaphaelContext;
            measureText(text: string): { width: number; height: number };
            fillText(text: string, x: number, y: number): RaphaelContext;
            save(): RaphaelContext;
            restore(): RaphaelContext;
            openGroup(): undefined;
            closeGroup(): void;
        }

        class Renderer {
            constructor(sel: HTMLElement, backend: Renderer.Backends);
            static USE_CANVAS_PROXY: boolean;
            static buildContext(
                sel: HTMLElement,
                backend: Renderer.Backends,
                width?: number,
                height?: number,
                background?: string,
            ): IRenderContext;
            static getCanvasContext(
                sel: HTMLElement,
                backend: Renderer.Backends,
                width?: number,
                height?: number,
                background?: string,
            ): CanvasContext;
            static getRaphaelContext(
                sel: HTMLElement,
                backend: Renderer.Backends,
                width?: number,
                height?: number,
                background?: string,
            ): RaphaelContext;
            static getSVGContext(
                sel: HTMLElement,
                backend: Renderer.Backends,
                width?: number,
                height?: number,
                background?: string,
            ): SVGContext;
            static bolsterCanvasContext(ctx: CanvasRenderingContext2D): CanvasContext;
            static drawDashedLine(
                context: IRenderContext,
                fromX: number,
                fromY: number,
                toX: number,
                toY: number,
                dashPattern: number[],
            ): void;
            resize(width: number, height: number): Renderer;
            getContext(): IRenderContext;
        }

        namespace Renderer {
            enum Backends {
                CANVAS = 1,
                RAPHAEL,
                SVG,
                VML,
            }
            enum LineEndType {
                NONE = 1,
                UP,
                DOWN,
            }
        }

        class Repetition extends StaveModifier {
            constructor(type: Repetition.type, x: number, y_shift: number);
            getCategory(): string;
            setShiftX(x: number): Repetition;
            setShiftY(y: number): Repetition;
            draw(stave: Stave, x: number): Repetition;
            drawCodaFixed(stave: Stave, x: number): Repetition;
            drawSignoFixed(stave: Stave, x: number): Repetition; //inconsistent name: drawSignoFixed -> drawSegnoFixed
            drawSymbolText(stave: Stave, x: number, text: string, draw_coda: boolean): Repetition;
        }

        namespace Repetition {
            enum type {
                NONE = 1,
                CODA_LEFT,
                CODA_RIGHT,
                SEGNO_LEFT,
                SEGNO_RIGHT,
                DC,
                DC_AL_CODA,
                DC_AL_FINE,
                DS,
                DS_AL_CODA,
                DS_AL_FINE,
                FINE,
            }
        }

        class Stave {
            constructor(
                x: number,
                y: number,
                width: number,
                options?: {
                    vertical_bar_width?: number;
                    glyph_spacing_px?: number;
                    num_lines?: number;
                    fill_style?: string;
                    spacing_between_lines_px?: number;
                    space_above_staff_ln?: number;
                    space_below_staff_ln?: number;
                    top_text_position?: number;
                },
            );
            options: {
                vertical_bar_width?: number;
                glyph_spacing_px?: number;
                num_lines?: number;
                fill_style?: string;
                left_bar?: boolean;
                right_bar?: boolean;
                spacing_between_lines_px?: number;
                space_above_staff_ln?: number;
                space_below_staff_ln?: number;
                top_text_position?: number;
            };
            resetLines(): void;
            setNoteStartX(x: number): Stave;
            getNoteStartX(): number;
            getNoteEndX(): number;
            getTieStartX(): number;
            getTieEndX(): number;
            setContext(context: IRenderContext): Stave;
            getContext(): IRenderContext;
            getX(): number;
            getNumLines(): number;
            setX(x: number): Stave;
            setY(y: number): Stave;
            setWidth(width: number): Stave;
            getWidth(): number;
            setMeasure(measure: number): Stave;
            setBegBarType(type: Barline.type): Stave;
            setEndBarType(type: Barline.type): Stave;
            getModifierXShift(index: number): number;
            setRepetitionTypeLeft(type: Repetition.type, y: number): Stave;
            setRepetitionTypeRight(type: Repetition.type, y: number): Stave;
            setVoltaType(type: Volta.type, number_t: number, y: number): Stave;
            setSection(section: string, y: number): Stave;
            setTempo(tempo: { name?: string; duration: string; dots: boolean; bpm: number }, y: number): Stave;
            setText(
                text: string,
                position: Modifier.Position,
                options?: { shift_x?: number; shift_y?: number; justification?: TextNote.Justification },
            ): Stave;
            getHeight(): number;
            getSpacingBetweenLines(): number;
            getBoundingBix(): BoundingBox;
            getBottomY(): number;
            getBottomLineY(): number;
            getYForLine(line: number): number;
            getYForTopText(line?: number): number;
            getYForBottomText(line?: number): number;
            getYForNote(line?: number): number;
            getYForGlyphs(): number;
            addGlyph(glypg: Glyph): Stave;
            addEndGlyph(glypg: Glyph): Stave;
            addModifier(modifier: StaveModifier, position?: StaveModifier.Position): Stave;
            addEndModifier(modifier: StaveModifier): Stave;
            addKeySignature(keySpec: string): Stave;
            setKeySignature(keySpec: string, cancelKeySpec: string, position?: StaveModifier.Position): Stave;
            addClef(clef: string, size?: string, annotation?: string, position?: StaveModifier.Position): Stave;
            addEndClef(clef: string, size?: string, annotation?: string): Stave;
            setEndClef(clef: string, size?: string, annotation?: string): Stave;
            addTimeSignature(timeSpec: string, customPadding?: number): void; //inconsistent type: void -> Stave
            addTrebleGlyph(): Stave;
            draw(): void;
            drawVertical(x: number, isDouble: boolean): void;
            drawVerticalFixed(x: number, isDouble: boolean): void;
            drawVerticalBar(x: number): void;
            drawVerticalBarFixed(x: number): void;
            getConfigForLines(): { visible: boolean }[];
            setConfigForLine(line_number: number, line_config: { visible: boolean }): Stave;
            setConfigForLines(lines_configuration: { visible: boolean }[]): Stave;
            getModifiers(position?: number, category?: string): StaveModifier[];
        }

        class StaveConnector {
            constructor(top_stave: Stave, bottom_stave: Stave);
            top_stave: Stave;
            bottom_stave: Stave;
            thickness: number;
            x_shift: number;
            setContext(ctx: IRenderContext): StaveConnector;
            setType(type: StaveConnector.type): StaveConnector;
            setText(text: string, text_options?: { shift_x?: number; shift_y?: number }): StaveConnector;
            setFont(font: { family?: string; size?: number; weight?: string }): void; //inconsistent type: void -> StaveConnector
            setXShift(x_shift: number): StaveConnector;
            draw(): void;
            drawBoldDoubleLine(ctx: Object, type: StaveConnector.type, topX: number, topY: number, botY: number): void;
        }

        namespace StaveConnector {
            enum type {
                SINGLE_RIGHT = 0,
                SINGLE_LEFT = 1,
                SINGLE = 1,
                DOUBLE = 2,
                BRACE = 3,
                BRACKET = 4,
                BOLD_DOUBLE_LEFT = 5,
                BOLD_DOUBLE_RIGHT = 6,
                THIN_DOUBLE = 7,
                NONE = 8,
            }
        }

        class StaveHairpin {
            constructor(notes: { first_note: Note; last_note: Note }, type: StaveHairpin.type);
            static FormatByTicksAndDraw(
                ctx: IRenderContext,
                formatter: Formatter,
                notes: { first_note: Note; last_note: Note },
                type: StaveHairpin.type,
                position: Modifier.Position,
                options?: { height: number; y_shift: number; left_shift_ticks: number; right_shift_ticks: number },
            ): void;
            setContext(context: IRenderContext): StaveHairpin;
            setPosition(position: Modifier.Position): StaveHairpin;
            setRenderOptions(options: {
                height?: number;
                y_shift: number;
                left_shift_px: number;
                right_shift_px: number;
            }): StaveHairpin;
            setNotes(notes: { first_note: Note; last_note: Note }): StaveHairpin;
            renderHairpin(params: {
                first_x: number;
                last_x: number;
                first_y: number;
                last_y: number;
                staff_height: number;
            }): void;
            draw(): boolean;
        }

        namespace StaveHairpin {
            enum type {
                CRESC = 1,
                DECRESC,
            }
        }

        class StaveLine {
            constructor(notes: { first_note: Note; last_note: Note; first_indices: number[]; last_indices: number[] });
            setContext(context: Object): StaveLine;
            setFont(font: { family: string; size: number; weight: string }): StaveLine;
            setText(text: string): StaveLine;
            setNotes(notes: {
                first_note: Note;
                last_note: Note;
                first_indices?: number[];
                last_indices?: number[];
            }): StaveLine;
            applyLineStyle(): void;
            applyFontStyle(): void;
            draw(): StaveLine;

            //inconsistent API: this should be set via an options object in the constructor
            render_options: {
                padding_left: number;
                padding_right: number;
                line_width: number;
                line_dash: number[];
                rounded_end: boolean;
                color: string;
                draw_start_arrow: boolean;
                draw_end_arrow: boolean;
                arrowhead_length: number;
                arrowhead_angle: number;
                text_position_vertical: StaveLine.TextVerticalPosition;
                text_justification: StaveLine.TextJustification;
            };
        }

        namespace StaveLine {
            enum TextVerticalPosition {
                TOP = 1,
                BOTTOM,
            }
            enum TextJustification {
                LEFT = 1,
                CENTER,
                RIGHT,
            }
        }

        class StaveModifier {
            getCategory(): string;
            makeSpacer(
                padding: number,
            ): { getContext: Function; setStave: Function; renderToStave: Function; getMetrics: Function };
            placeGlyphOnLine(glyph: Glyph, stave: Stave, line: number): void;
            setPadding(padding: number): void;
            addToStave(stave: Stave, firstGlyph: boolean): StaveModifier;
            addToStaveEnd(stave: Stave, firstGlyph: boolean): StaveModifier;
            addModifier(): void;
            addEndModifier(): void;
            getPosition(): number;
            getWidth(): number;
            getPadding(index: number): number;
        }

        namespace StaveModifier {
            // @see https://github.com/0xfe/vexflow/blob/master/src/stavemodifier.js#L9
            enum Position {
                LEFT = 1,
                RIGHT = 2,
                ABOVE = 3,
                BELOW = 4,
                BEGIN = 5,
                END = 6,
            }
        }

        class StaveNote extends StemmableNote {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes and/or inconsistencies mentioned below are fixed
            buildStem(): StemmableNote;
            setStave(stave: Stave): Note;
            //TODO: vexflow actualy managed to have Note use modifier, index and stavenote index,modifier. To use the function in
            // Typescript we need to allow both. The name is the correct type :(
            addModifier(index: any, modifier?: any): Note;
            getModifierStartXY(): { x: number; y: number };
            getDots(): number;
            x_shift: number;

            constructor(note_struct: {
                type?: string;
                dots?: number;
                duration: string;
                clef?: string;
                keys: string[];
                octave_shift?: number;
                auto_stem?: boolean;
                stem_direction?: number;
            });
            static DEBUG: boolean;
            static format(
                notes: StaveNote[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            static formatByY(
                notes: StaveNote[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): void;
            static postFormat(notes: StaveNote[]): boolean;
            buildStem(): void; //inconsistent type: void -> StaveNote
            buildNoteHeads(): void;
            autoStem(): void;
            calculateKeyProps(): void;
            getBoundingBox(): BoundingBox;
            getLineNumber(): number;
            isRest(): boolean;
            isChord(): boolean;
            hasStem(): boolean;
            getYForTopText(text_line: number): number;
            getYForBottomText(text_line: number): number;
            setStave(stave: Stave): StaveNote;
            getKeys(): string[];
            getKeyProps(): {
                key: string;
                octave: number;
                line: number;
                int_value: number;
                accidental: string;
                code: number;
                stroke: number;
                shift_right: number;
                displaced: boolean;
            }[];
            isDisplaced(): boolean;
            setNoteDisplaced(displaced: boolean): StaveNote;
            getTieRightX(): number;
            getTieLeftX(): number;
            getLineForRest(): number;
            getModifierStartXY(position: Modifier.Position, index: number): { x: number; y: number };
            setStyle(style: {
                shadowColor?: string;
                shadowBlur?: string;
                fillStyle?: string;
                strokeStyle?: string;
            }): void; // inconsistent type: void -> StaveNote
            setStemStyle(style: {
                shadowColor?: string;
                shadowBlur?: string;
                fillStyle?: string;
                strokeStyle?: string;
            }): void;
            setKeyStyle(
                index: number,
                style: { shadowColor?: string; shadowBlur?: string; fillStyle?: string; strokeStyle?: string },
            ): StaveNote;
            setKeyLine(index: number, line: number): StaveNote;
            getKeyLine(index: number): number;
            addToModifierContext(mContext: ModifierContext): StaveNote;
            addAccidental(index: number, accidental: Accidental): StaveNote;
            addArticulation(index: number, articulation: Articulation): StaveNote;
            addAnnotation(index: number, annotation: Annotation): StaveNote;
            addDot(index: number): StaveNote;
            addDotToAll(): StaveNote;
            getAccidentals(): Accidental[];
            getDots(): Dot[];
            getVoiceShiftWidth(): number;
            calcExtraPx(): void;
            preFormat(): void;
            getNoteHeadBounds(): { y_top: number; y_bottom: number; highest_line: number; lowest_line: number };
            getNoteHeadBeginX(): number;
            getNoteHeadEndX(): number;
            drawLedgerLines(): void;
            drawModifiers(): void;
            drawFlag(): void;
            drawNoteHeads(): void;
            drawStem(struct: {
                x_begin?: number;
                x_end?: number;
                y_top?: number;
                y_bottom?: number;
                y_extend?: number;
                stem_extension?: number;
                stem_direction?: number;
            }): void;
            draw(): void;
        }

        namespace StaveNote {
            const STEM_UP: number;
            const STEM_DOWN: number;
            const CATEGORY: string;
        }

        class StaveSection extends Modifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            draw(): void;

            constructor(section: string, x: number, shift_y: number);
            getCategory(): string;
            setStaveSection(section: string): StaveSection;
            setShiftX(x: number): StaveSection;
            setShiftY(y: number): StaveSection;
            draw(stave: Stave, shift_x: number): StaveSection;
        }

        class StaveTempo extends StaveModifier {
            constructor(
                tempo: { name?: string; duration: string; dots: number; bpm: number },
                x: number,
                shift_y: number,
            );
            getCategory(): string;
            setTempo(tempo: { name?: string; duration: string; dots: number; bpm: number }): StaveTempo;
            setShiftX(x: number): StaveTempo;
            setShiftY(y: number): StaveTempo;
            draw(stave: Stave, shift_x: number): StaveTempo;
        }

        class StaveText extends Modifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            draw(): void;

            constructor(
                text: string,
                position: Modifier.Position,
                options?: { shift_x?: number; shift_y?: number; justification?: TextNote.Justification },
            );
            getCategory(): string;
            setStaveText(text: string): StaveText;
            setShiftX(x: number): StaveText;
            setShiftY(y: number): StaveText;
            setFont(font: { family?: string; size?: number; weight?: number }): void;
            setText(text: string): void;
            draw(stave: Stave): StaveText;
        }

        class StaveTie {
            /**
             * @see https://github.com/0xfe/vexflow/blob/master/src/stavetie.js#L12
             *
             * Notes is a struct that has:
             *
             *  {
             *    first_note: Note,
             *    last_note: Note,
             *    first_indices: [n1, n2, n3],
             *    last_indices: [n1, n2, n3]
             *  }
             * All properties are optional, since ties can span line breaks in which case
             * two ties can be used, each with either "first_note" or "last_note" missing.
             *
             **/
            constructor(
                notes: { first_note?: Note; last_note?: Note; first_indices?: number[]; last_indices?: number[] },
                text?: string,
            );
            setContext(context: IRenderContext): StaveTie;
            setFont(font: { family: string; size: number; weight: string }): StaveTie;
            setNotes(notes: {
                first_note?: Note;
                last_note?: Note;
                first_indices?: number[];
                last_indices?: number[];
            }): StaveTie;
            isPartial(): boolean;
            renderTie(params: {
                first_ys: number[];
                last_ys: number[];
                last_x_px: number;
                first_x_px: number;
                direction: number;
            }): void;
            renderText(first_x_px: number, last_x_px: number): void;
            draw(): boolean;
        }

        class Stem {
            constructor(options: {
                x_begin?: number;
                x_end?: number;
                y_top?: number;
                y_bottom?: number;
                y_extend?: number;
                stem_extension?: number;
                stem_direction?: number;
            });
            static DEBUG: boolean;
            setNoteHeadXBounds(x_begin: number, x_end: number): Stem;
            setDirection(direction: number): void;
            setExtension(extension: number): void;
            setYBounds(y_top: number, y_bottom: number): void;
            getCategory(): string;
            setContext(context: IRenderContext): Stem;
            getHeight(): number;
            getBoundingBox(): BoundingBox;
            getExtents(): { topY: number; baseY: number };
            setStyle(style: {
                shadowColor?: string;
                shadowBlur?: string;
                fillStyle?: string;
                strokeStyle?: string;
            }): void;
            getStyle(): { shadowColor?: string; shadowBlur?: string; fillStyle?: string; strokeStyle?: string };
            applyStyle(context: IRenderContext): Stem;
            draw(): void;

            //inconsistent API: this should be set via the options object in the constructor
            hide: boolean;
        }

        namespace Stem {
            const UP: number;
            const DOWN: number;
        }

        class StemmableNote extends Note {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            setBeam(): Note;

            constructor(note_struct: { type?: string; dots?: number; duration: string });
            static DEBUG: boolean;
            flag: Glyph;
            getAttribute(attr: string): any;
            setFlagStyle(style_struct: {
                shadowColor?: string;
                shadowBlur?: string;
                fillStyle?: string;
                strokeStyle?: string;
            }): void;
            getStem(): Stem;
            setStem(stem: Stem): StemmableNote;
            buildStem(): StemmableNote;
            getStemLength(): number;
            getBeamCount(): number;
            getStemMinumumLength(): number; //inconsistent name: getStemMinumumLength -> getStemMinimumLength
            getStemDirection(): number;
            setStemDirection(direction: number): StemmableNote;
            getStemX(): number;
            getCenterGlyphX(): number;
            getStemExtension(): number;
            setStemLength(): number;
            getStemExtents(): { topY: number; baseY: number };
            setBeam(beam: Beam): StemmableNote;
            getYForTopText(text_line: number): number;
            getYForBottomText(text_line: number): number;
            postFormat(): StemmableNote;
            drawStem(stem_struct: {
                x_begin?: number;
                x_end?: number;
                y_top?: number;
                y_bottom?: number;
                y_extend?: number;
                stem_extension?: number;
                stem_direction?: number;
            }): void;
        }

        class StringNumber extends Modifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            setNote(note: Note): StringNumber;

            // actually this is not really consistent in the vexflow code "ctx.measureText(this.string_number).width" looks
            // like it is a string. But from the use of it it might be a number ?!
            constructor(number: number | string);
            static format(
                nums: StringNumber[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            string_number: number | string;
            getNote(): Note;
            setNote(note: StemmableNote): StringNumber;
            getIndex(): number;
            setIndex(index: number): StringNumber;
            setLineEndType(leg: Renderer.LineEndType): StringNumber;
            getPosition(): Modifier.Position;
            setPosition(position: Modifier.Position): StringNumber;
            setStringNumber(number: number): StringNumber;
            setOffsetX(x: number): StringNumber;
            setOffsetY(y: number): StringNumber;
            setLastNote(note: StemmableNote): StringNumber;
            setDashed(dashed: boolean): StringNumber;
            draw(): void;
        }

        namespace StringNumber {
            const CATEGORY: string;
        }

        class Stroke extends Modifier {
            constructor(type: Stroke.Type, options?: { all_voices?: boolean });
            static format(
                strokes: Stroke[],
                state: { left_shift: number; right_shift: number; text_line: number },
            ): boolean;
            getPosition(): Modifier.Position;
            addEndNote(note: Note): Stroke;
            draw(): void;
        }

        namespace Stroke {
            enum Type {
                BRUSH_DOWN = 1,
                BRUSH_UP,
                ROLL_DOWN,
                ROLL_UP,
                RASQUEDO_DOWN,
                RASQUEDO_UP,
                ARPEGGIO_DIRECTIONLESS,
            }
            const CATEGORY: string;
        }

        class SVGContext implements IRenderContext {
            constructor(element: HTMLElement);
            svg: SVGElement;
            state: any;
            attributes: any;
            lineWidth: number;
            iePolyfill(): boolean;
            setFont(family: string, size: number, weight?: number | string): SVGContext;
            setRawFont(font: string): SVGContext;
            setFillStyle(style: string): SVGContext;
            setBackgroundFillStyle(style: string): SVGContext;
            setStrokeStyle(style: string): SVGContext;
            setShadowColor(style: string): SVGContext; //inconsistent name: style -> color
            setShadowBlur(blur: string): SVGContext;
            setLineWidth(width: number): SVGContext;
            setLineDash(dash: string): SVGContext;
            setLineCap(cap_type: string): SVGContext;
            resize(width: number, height: number): SVGContext;
            scale(x: number, y: number): SVGContext;
            setViewBox(xMin: number, yMin: number, width: number, height: number): void;
            clear(): void;
            rect(x: number, y: number, width: number, height: number): SVGContext;
            fillRect(x: number, y: number, width: number, height: number): SVGContext;
            clearRect(x: number, y: number, width: number, height: number): SVGContext;
            beginPath(): SVGContext;
            moveTo(x: number, y: number): SVGContext;
            lineTo(x: number, y: number): SVGContext;
            bezierCurveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): SVGContext;
            quadraticCurveTo(x1: number, y1: number, x: number, y: number): SVGContext; //inconsistent: x, y -> x2, y2
            arc(
                x: number,
                y: number,
                radius: number,
                startAngle: number,
                endAngle: number,
                antiClockwise: boolean,
            ): SVGContext;
            closePath(): SVGContext;
            glow(): SVGContext;
            fill(): SVGContext;
            stroke(): SVGContext;
            measureText(text: string): SVGRect;
            ieMeasureTextFix(bbox: SVGRect, text: string): { x: number; y: number; width: number; height: number };
            fillText(text: string, x: number, y: number): SVGContext;
            save(): SVGContext;
            restore(): SVGContext;
            openGroup(): Node;
            closeGroup(): void;
        }

        class TabNote extends StemmableNote {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            setStave(stave: Stave): Note;
            getModifierStartXY(): { x: number; y: number };

            constructor(
                tab_struct: {
                    positions: { str: number; fret: number }[];
                    type?: string;
                    dots?: number;
                    duration: string;
                    stem_direction?: number;
                },
                draw_stem?: boolean,
            );
            getCategory(): string;
            setGhost(ghost: boolean): TabNote;
            hasStem(): boolean;
            getStemExtension(): number;
            addDot(): TabNote;
            updateWidth(): void;
            setStave(stave: Stave): TabNote;
            getPositions(): { str: number; fret: number }[];
            addToModifierContext(mc: ModifierContext): TabNote;
            getTieRightX(): number;
            getTieLeftX(): number;
            getModifierStartXY(position: Modifier.Position, index: number): { x: number; y: number };
            getLineForRest(): number;
            preFormat(): void;
            getStemX(): number;
            getStemY(): number;
            getStemExtents(): { topY: number; baseY: number };
            drawFlag(): void;
            drawModifiers(): void;
            drawStemThrough(): void;
            draw(): void;
        }

        class TabSlide extends TabTie {
            constructor(
                notes: { first_note: Note; last_note: Note; first_indices: number[]; last_indices: number[] },
                direction?: number,
            );
            static createSlideUp(notes: {
                first_note: Note;
                last_note: Note;
                first_indices: number[];
                last_indices: number[];
            }): TabSlide;
            static createSlideDown(notes: {
                first_note: Note;
                last_note: Note;
                first_indices: number[];
                last_indices: number[];
            }): TabSlide;
            renderTie(params: {
                first_ys: number[];
                last_ys: number[];
                last_x_px: number;
                first_x_px: number;
                direction: number;
            }): void;
        }

        namespace TabSlide {
            const SLIDE_UP: number;
            const SLIDE_DOWN: number;
        }

        class TabStave extends Stave {
            constructor(
                x: number,
                y: number,
                width: number,
                options?: {
                    vertical_bar_width?: number;
                    glyph_spacing_px?: number;
                    num_lines?: number;
                    fill_style?: string;
                    spacing_between_lines_px?: number;
                    space_above_staff_ln?: number;
                    space_below_staff_ln?: number;
                    top_text_position?: number;
                },
            );
            getYForGlyphs(): number;
            addTabGlyph(): TabStave;
        }

        class TabTie extends StaveTie {
            constructor(
                notes: { first_note: Note; last_note: Note; first_indices: number[]; last_indices: number[] },
                text?: string,
            );
            createHammeron(notes: {
                first_note: Note;
                last_note: Note;
                first_indices: number[];
                last_indices: number[];
            }): TabTie;
            createPulloff(notes: {
                first_note: Note;
                last_note: Note;
                first_indices: number[];
                last_indices: number[];
            }): TabTie;
            draw(): boolean;
        }

        class TextBracket {
            constructor(bracket_data: {
                start: Note;
                stop: Note;
                text?: string;
                superscript?: string;
                position?: TextBracket.Positions;
            });
            static DEBUG: boolean;
            start: Note;
            stop: Note;
            position: TextBracket.Positions;
            applyStyle(context: IRenderContext): TextBracket;
            setDashed(dashed: boolean, dash?: number[]): TextBracket;
            setFont(font: { family: string; size: number; weight: string }): TextBracket;
            setContext(context: IRenderContext): TextBracket;
            setLine(line: number): TextBracket;
            draw(): void;
        }

        namespace TextBracket {
            enum Positions {
                TOP = 1,
                BOTTOM = -1,
            }
        }

        class TextDynamics extends Note {
            constructor(text_struct: { duration: string; text: string; line?: number });
            static DEBUG: boolean;
            setLine(line: number): TextDynamics;
            preFormat(): TextDynamics;
            draw(): void;
        }

        class TextNote extends Note {
            constructor(text_struct: {
                duration: string;
                text?: string;
                superscript?: boolean;
                subscript?: boolean;
                glyph?: string;
                font?: { family: string; size: number; weight: string };
                line?: number;
                smooth?: boolean;
                ignore_ticks?: boolean;
            });
            setJustification(just: TextNote.Justification): TextNote;
            setLine(line: number): TextNote;
            preFormat(): void;
            draw(): void;
        }

        namespace TextNote {
            enum Justification {
                LEFT = 1,
                CENTER,
                RIGHT,
            }
            const GLYPHS: { [name: string]: { code: string; point: number; x_shift: number; y_shift: number } };
        }

        interface Tickable {
            setContext(context: IRenderContext): void;
            getBoundingBox(): BoundingBox;
            getTicks(): Fraction;
            shouldIgnoreTicks(): boolean;
            getWidth(): number;
            setXShift(x: number): Tickable;
            getCenterXShift(): number;
            isCenterAligned(): boolean;
            setCenterAlignment(align_center: boolean): Tickable;
            getVoice(): Voice;
            setVoice(voice: Voice): void;
            getTuplet(): Tuplet;
            setTuplet(tuplet: Tuplet): Tickable;
            addToModifierContext(mc: ModifierContext): void;
            addModifier(mod: Modifier): Tickable;
            setTickContext(tc: TickContext): void;
            preFormat(): void;
            postFormat(): Tickable;
            getIntrinsicTicks(): Fraction;
            setIntrinsicTicks(intrinsicTicks: Fraction): void;
            getTickMultiplier(): Fraction;
            applyTickMultiplier(numerator: number, denominator: number): void;
            setDuration(duration: Fraction): void;
        }

        class TickContext {
            setContext(context: IRenderContext): void;
            getContext(): IRenderContext;
            shouldIgnoreTicks(): boolean;
            getWidth(): number;
            getX(): number;
            setX(x: number): TickContext;
            getXBase(): number;
            setXBase(xBase: number): void;
            getXOffset(): number;
            setXOffset(xOffset: number): void;
            getPixelsUsed(): number;
            setPixelsUsed(pixelsUsed: number): TickContext;
            setPadding(padding: number): TickContext;
            getMaxTicks(): number;
            getMinTicks(): number;
            getTickables(): Tickable[];
            getCenterAlignedTickables(): Tickable[];
            getMetrics(): { width: number; notePx: number; extraLeftPx: number; extraRightPx: number };
            getCurrentTick(): Fraction;
            setCurrentTick(tick: Fraction): void;
            getExtraPx(): { left: number; right: number; extraLeft: number; extraRight: number };
            addTickable(tickable: Tickable): TickContext;
            preFormat(): TickContext;
            postFormat(): TickContext;
            static getNextContext(tContext: TickContext): TickContext;
        }

        class TimeSignature extends StaveModifier {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes
            addModifier(): void;
            addEndModifier(): void;

            constructor(timeSpec: string, customPadding?: number);
            parseTimeSpec(timeSpec: string): { num: number; glyph: Glyph };
            makeTimeSignatureGlyph(topNums: number[], botNums: number[]): Glyph;
            getTimeSig(): { num: number; glyph: Glyph };
            addModifier(stave: Stave): void;
            addEndModifier(stave: Stave): void;
        }

        namespace TimeSignature {
            const glyphs: { [name: string]: { code: string; point: number; line: number } };
        }

        class TimeSigNote extends Note {
            //TODO remove the following lines once TypeScript allows subclass overrides with type changes or type inconsistencies mentioned below are fixed
            setStave(stave: Stave): Note;

            constructor(timeSpec: string, customPadding: number);
            setStave(stave: Stave): void; //inconsistent type: void -> TimeSignote
            getBoundingBox(): BoundingBox;
            addToModifierContext(): TimeSigNote;
            preFormat(): TimeSigNote;
            draw(): void;
        }

        class Tremolo extends Modifier {
            constructor(num: number);
            getCategory(): string;
            draw(): void;
        }

        class Tuning {
            constructor(tuningString?: string);
            noteToInteger(noteString: string): number;
            setTuning(tuningString: string): void;
            getValueForString(stringNum: string): number;
            getValueForFret(fretNum: string, stringNum: string): number;
            getNoteForFret(fretNum: string, stringNum: string): string;
        }

        namespace Tuning {
            const names: { [name: string]: string };
        }

        class Tuplet {
            constructor(
                notes: StaveNote[],
                options?: {
                    location?: number;
                    bracketed?: boolean;
                    ratioed: boolean;
                    num_notes?: number;
                    notes_occupied?: number;
                    y_offset?: number;
                },
            );
            attach(): void;
            detach(): void;
            setContext(context: IRenderContext): Tuplet;
            setBracketed(bracketed: boolean): Tuplet;
            setRatioed(ratioed: boolean): Tuplet;
            setTupletLocation(location: number): Tuplet;
            getNotes(): StaveNote[];
            getNoteCount(): number;
            getBeatsOccupied(): number;
            setBeatsOccupied(beats: number): void;
            resolveGlyphs(): void;
            draw(): void;
        }

        namespace Tuplet {
            const LOCATION_TOP: number;
            const LOCATION_BOTTOM: number;
        }

        class Vibrato extends Modifier {
            static format(
                vibratos: Vibrato[],
                state: { left_shift: number; right_shift: number; text_line: number },
                context: ModifierContext,
            ): boolean;
            setHarsh(harsh: boolean): Vibrato;
            setVibratoWidth(width: number): Vibrato;
            draw(): void;
        }

        namespace Vibrato {
            const CATEGORY: string;
        }

        class Voice {
            constructor(time: { num_beats?: number; beat_value?: number; resolution?: number });
            getTotalTicks(): Fraction;
            getTicksUsed(): Fraction;
            getLargestTickWidth(): number;
            getSmallestTickCount(): Fraction;
            getTickables(): Tickable[];
            getMode(): Voice.Mode;
            setMode(mode: Voice.Mode): Voice;
            getResolutionMultiplier(): number;
            getActualResolution(): number;
            setStave(stave: Stave): Voice;
            getBoundingBox(): BoundingBox;
            getVoiceGroup(): VoiceGroup;
            setVoiceGroup(g: VoiceGroup): Voice;
            setStrict(strict: boolean): Voice;
            isComplete(): boolean;
            addTickable(tickable: Tickable): Voice;
            addTickables(tickables: Tickable[]): Voice;
            preFormat(): Voice;
            draw(context: IRenderContext, stave?: Stave): void;
        }

        namespace Voice {
            enum Mode {
                STRICT = 1,
                SOFT,
                FULL,
            }
        }

        class VoiceGroup {
            getVoices(): Voice[];
            getModifierContexts(): ModifierContext[];
            addVoice(voice: Voice): void;
        }

        class Volta extends StaveModifier {
            constructor(type: Volta.type, number: number, x: number, y_shift: number);
            getCategory(): string;
            setShiftY(y: number): Volta;
            draw(stave: Stave, x: number): Volta;
        }

        namespace Volta {
            enum type {
                NONE = 1,
                BEGIN,
                MID,
                END,
                BEGIN_END,
            }
        }

        class Parser {
            constructor(grammar: any);
            grammar: any;
            parse(line: any): any;
            line: any;
            pos: any;
            errorPos: any;
            matchFail(returnPos: any): void;
            matchSuccess(): void;
            matchToken(
                token: any,
                noSpace?: boolean,
            ):
                | {
                      success: boolean;
                      matchedString: any;
                      incrementPos: any;
                      pos: any;
                  }
                | {
                      success: boolean;
                      pos: any;
                      matchedString?: undefined;
                      incrementPos?: undefined;
                  };
            expectOne(rule: any, maybe?: boolean): any;
            expectOneOrMore(rule: any, maybe?: boolean): any;
            expectZeroOrMore(rule: any): any;
            expect(rules: any): any;
        }

        class EasyScore {
            constructor(options?: {});
            defaults: {
                clef: string;
                time: string;
                stem: string;
            };
            set(defaults: any): EasyScore;
            setOptions(options: any): EasyScore;
            options: any;
            factory: any;
            builder: any;
            grammar: any;
            parser: Parser;
            setContext(context: any): EasyScore;
            parse(line: any, options?: {}): any;
            beam(notes: any, options?: {}): any;
            tuplet(notes: any, options?: {}): any;
            notes(line: any, options?: {}): any;
            voice(notes: any, voiceOptions: any): any;
            addCommitHook(commitHook: any): any;
        }
        class System {
            constructor(params?: any);
            setOptions(options?: any): void;
            addConnector(type?: string): any;
            addStave(params: any): Stave;
            format(): any;
            draw(): any;
        }

        class Factory {
            static newFromElementId(elementId: any, width?: number, height?: number): Factory;
            constructor(options: any);
            options: {
                stave: {
                    space: number;
                };
                renderer: {
                    context: any;
                    elementId: string;
                    backend: number;
                    width: number;
                    height: number;
                    background: string;
                };
                font: {
                    face: string;
                    point: number;
                    style: string;
                };
            };
            reset(): void;
            renderQ: any[];
            systems: any[];
            staves: any[];
            voices: any[];
            stave: Stave;
            getOptions(): {
                stave: {
                    space: number;
                };
                renderer: {
                    context: any;
                    elementId: string;
                    backend: number;
                    width: number;
                    height: number;
                    background: string;
                };
                font: {
                    face: string;
                    point: number;
                    style: string;
                };
            };
            setOptions(options: any): void;
            initRenderer(): void;
            context: any;
            getContext(): any;
            setContext(context: any): Factory;
            getStave(): Stave;
            getVoices(): any[];
            space(spacing: any): number;
            Stave(params: any): Stave;
            TabStave(params: any): TabStave;
            StaveNote(noteStruct: any): StaveNote;
            GlyphNote(glyph: any, noteStruct: any, options: any): GlyphNote;
            RepeatNote(type: any, noteStruct: any, options: any): RepeatNote;
            GhostNote(noteStruct: any): GhostNote;
            TextNote(textNoteStruct: any): TextNote;
            BarNote(params: any): BarNote;
            ClefNote(params: any): ClefNote;
            TimeSigNote(params: any): TimeSigNote;
            KeySigNote(params: any): KeySigNote;
            TabNote(noteStruct: any): TabNote;
            GraceNote(noteStruct: any): GraceNote;
            GraceNoteGroup(params: any): GraceNoteGroup;
            Accidental(params: any): Accidental;
            Annotation(params: any): Annotation;
            Articulation(params: any): Articulation;
            TextDynamics(params: any): TextDynamics;
            Fingering(params: any): FretHandFinger;
            StringNumber(params: any): StringNumber;
            TickContext(): TickContext;
            ModifierContext(): ModifierContext;
            MultiMeasureRest(params: any): MultiMeasureRest;
            Voice(params: any): Voice;
            StaveConnector(params: any): StaveConnector;
            Formatter(): Formatter;
            Tuplet(params: any): Tuplet;
            Beam(params: any): Beam;
            Curve(params: any): Curve;
            StaveTie(params: any): StaveTie;
            StaveLine(params: any): StaveLine;
            VibratoBracket(params: any): VibratoBracket;
            TextBracket(params: any): TextBracket;
            System(params?: {}): System;
            EasyScore(params?: {}): EasyScore;
            PedalMarking(params?: {}): PedalMarking;
            NoteSubGroup(params?: {}): NoteSubGroup;
            draw(): void;
        }

        class VibratoBracket extends Element {
            constructor(bracket_data: any);
            start: any;
            stop: any;
            line: number;
            render_options: {
                harsh: boolean;
                wave_height: number;
                wave_width: number;
                wave_girth: number;
            };
            setLine(line: any): VibratoBracket;
            setHarsh(harsh: any): VibratoBracket;
            draw(): void;
        }

        class GlyphNote extends Note {
            constructor(glyph: any, noteStruct: any, options: any);
            options: any;
            setGlyph(glyph: any): GlyphNote;
            draw(): void;
        }

        class KeySigNote extends Note {
            constructor(keySpec: any, cancelKeySpec: any, alterKeySpec: any);
            keySignature: KeySignature;
            draw(): void;
        }

        class MultiMeasureRest extends Element {
            constructor(number_of_measures: any, options: any);
            render_options: {
                show_number: boolean;
                number_line: number;
                number_glyph_point: any;
                padding_left: any;
                padding_right: any;
                line: number;
                spacing_between_lines_px: number;
                line_thickness: any;
                serif_thickness: number;
                use_symbols: boolean;
                symbol_spacing: any;
                semibrave_rest_glyph_scale: number;
            };
            number_of_measures: any;
            xs: {
                left: number;
                right: number;
            };
            getXs(): {
                left: number;
                right: number;
            };
            setStave(stave: any): MultiMeasureRest;
            stave: any;
            getStave(): any;
            drawLine(ctx: any, left: any, right: any, sbl: any): void;
            drawSymbols(ctx: any, left: any, right: any, sbl: any): void;
            draw(): void;
        }

        class RepeatNote extends GlyphNote {
            constructor(type: any, noteStruct: any, options: any);
        }
    }
}

declare module 'vexflow' {
    export = Vex;
}
