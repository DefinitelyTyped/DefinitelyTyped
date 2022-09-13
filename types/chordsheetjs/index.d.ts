// Type definitions for chordsheetjs 2.8
// Project: https://github.com/martijnversluis/ChordSheetJS
// Definitions by: Adam Bloom <https://github.com/adamsbloom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Represents a chord with the corresponding (partial) lyrics
 */
export class ChordLyricsPair {
    /**
     * Initialises a ChordLyricsPair
     * @param chords The chords
     * @param lyrics The lyrics
     */
    constructor(chords: string, lyrics: string);

    chords: string;
    lyrics: string;

    /**
     * Indicates whether a ChordLyricsPair should be visible in a formatted chord sheet (except for ChordPro sheets)
     */
    isRenderable: () => boolean;

    /**
     * Returns a deep copy of the ChordLyricsPair, useful when programmatically transforming a song
     */
    clone: () => ChordLyricsPair;

    toString: () => string;
}

/**
 * Represents a tag/directive. See https://www.chordpro.org/chordpro/ChordPro-Directives.html
 */
export class Tag {
    constructor(name: string, value: string | null);

    /**
     * The tag full name. When the original tag used the short name, `name` will return the full name.
     */
    name: string;

    /**
     * The tag value
     */
    value: string | null;

    static parse(tag: string): Tag | null;
    static parseWithRegex(tag: string, regex: string): Tag | null;

    /**
     * The original tag name that was used to construct the tag.
     */
    originalName: string;

    /**
     * Checks whether the tag value is a non-empty string.
     */
    hasValue(): boolean;

    /**
     * Checks whether the tag is usually rendered inline. It currently only applies to comment tags.
     */
    isRenderable(): boolean;

    /**
     * Checks whether the tag is either a standard meta tag or a custom meta directive (`{x_some_name}`)
     */
    isMetaTag(): boolean;

    /**
     * Returns a clone of the tag.
     */
    clone(): Tag;

    toString(): string;
}

/**
 * Represents a line in a chord sheet, consisting of items of type ChordLyricsPair or Tag
 */
export class Line {
    constructor();

    /**
     * The items (ChordLyricsPair or Tag) of which the line consists
     */
    items: Array<ChordLyricsPair | Tag>;

    /**
     * The line type, This is set by the ChordProParser when it read tags like {start_of_chorus} or {start_of_verse}
     * Values can be 'verse', 'chorus' or 'none'
     */
    type: 'verse' | 'chorus' | 'none';

    /**
     * Indicates whether the line contains any items
     */
    isEmpty(): boolean;

    /**
     * Adds an item to the line
     * @param item The item to be added
     */
    addItem(item: ChordLyricsPair | Tag): void;

    /**
     * Indicates whether the line contains items that are renderable
     */
    hasRenderableItems(): boolean;

    /**
     * Returns a deep copy of the line and all of its items
     */
    clone(): Line;

    /**
     * Indicates whether the line type is 'verse'
     */
    isVerse(): boolean;

    /**
     * Indicates whether the line type is 'chorus'
     */
    isChorus(): boolean;

    /**
     * Indicates whether the line contains items that are renderable. Please use hasRenderableItems
     * @deprecated
     */
    hasContent(): boolean;

    addChordLyricsPair(
        chords: ChordLyricsPair | string,
        lyrics: string
    ): ChordLyricsPair;
    ensureChordLyricsPair(): void;
    chords(chr: string): void;
    lyrics(chr: string): void;
    addTag(name: Tag | string, value: string | null): Tag;
}

/**
 * Represents a paragraph of lines in a chord sheet
 */
export class Paragraph {
    constructor();

    /**
     * The Line items of which the paragraph consists
     */
    lines: Line[];

    addLine(line: Line): void;

    /**
     * Tries to determine the common type for all lines. If the types for all lines are equal, it returns that type.
     * If not, it returns 'indeterminate'.
     */
    type: string;
}

/**
 * Represents a song in a chord sheet. Currently a chord sheet can only have one song.
 */
export class Song {
    constructor(metadata: object);

    /**
     * The Line items of which the song consists
     */
    lines: Line[];

    /**
     * The Paragraph items of which the song consists
     */
    paragraphs: Paragraph[];

    currentLine: Line;
    currentParagraph: Paragraph;
    assignMetaData(metadata: object): void;

    /**
     * Returns the song lines, skipping the leading empty lines (empty as in not rendering any content). This is useful
     * if you want to skip the "header lines": the lines that only contain meta data.
     */
    bodyLines: Line[];

    chords(chr: string): void;
    lyrics(chr: string): void;
    addLine(): Line;
    setCurrentLineType(type: string): void;
    flushLine(): void;
    finish(): void;
    addChordLyricsPair(): ChordLyricsPair;
    ensureLine(): void;
    addParagraph(): Paragraph;
    ensureParagraph(): void;
    addTag(tagContents: string): Tag;

    /**
     * Returns a deep clone of the song
     */
    clone(): Song;

    setMetaData(name: string, value: string): void;
    metaData: object;
    optimizedMetaData: object;
    getOptimizedMetaData(): object;
    optimizeMetaDataValue(
        valueSet: string[] | undefined
    ): string | string[] | null;
    getMetaData(name: string): string | null;
}

/**
 * Represents a parser warning, currently only used by ChordProParser.
 */
export class ParserWarning {
    /**
     * The warning message
     */
    message: string;

    /**
     * The line number on which the warning occurred
     */
    lineNumber: string;

    toString(): string;
}

/**
 * Parses a ChordPro chord sheet
 */
export class ChordProParser {
    /**
     * Parses a ChordPro chord sheet into a song
     * @param chordProChordSheet The ChordPro chord sheet
     */
    parse(chordProChordSheet: string): Song;

    song: Song;
    lineNumber: number;
    sectionType: string;
    warnings: ParserWarning[];

    parseDocument(document: string): void;
    readLyrics(chr: string): void;
    readChords(chr: string): void;
    readTag(chr: string): void;
    readComment(chr: string): void;
    finishTag(): void;
    resetTag(): void;
    applyTag(tag: Tag): void;
    startSection(sectionType: string, tag: Tag): void;
    endSection(sectionType: string, tag: Tag): void;
    checkCurrentSectionType(sectionType: string, tag: Tag): void;
    addWarning(message: string): void;
}

export interface ChordSheetParserProps {
    preserveWhitespace: boolean;
}

/**
 * Formats a song into a plain text chord sheet
 */
export class ChordSheetParser {
    constructor(props: ChordSheetParserProps);

    song: Song;
    lines: Line[];
    songLine: Line;
    chordLyricsPair: ChordLyricsPair;
    currentLine: number;
    lineCount: number;
    processingText: string;
    preserveWhitespace: boolean;

    /**
     * Parses a chord sheet into a song
     * @param chordSheet The ChordPro chord sheet
     */
    parse(chordSheet: string): Song;

    parseLine(line: string): void;
    parseNonEmptyLine(line: string): void;
    initialize(document: string): void;
    readLine(): Line;
    hasNextLine(): boolean;
    parseLyricsWithChords(chordsLine: string, lyricsLine: string): void;
    processCharacters(chordsLine: string, lyricsLine: string): void;
    addCharacter(chr: string, nextChar: string): void;
    shouldAddCharacterToChords(nextChar: string): boolean;
    ensureChordLyricsPairInitialized(): void;
}

export interface SongHeader {
    title: string;
    subtitle: string;
}

export class TextFormatter {
    constructor();
    /**
     * Formats a song into a plain text chord sheet
     * @param song The song to be formatted
     */
    format(song: Song): string;
    formatHeader(header: SongHeader): string;
    formatParagraphs(song: Song): string;
    formatParagraph(paragraph: Paragraph): string;
    formatLine(line: Line): string;
    formatTitle(title: string): string;
    formatSubtitle(subtitle: string): string;
    formatTopLine(line: Line): string | null;
    chordLyricsPairLength(chordLyricsPair: ChordLyricsPair): number;
    formatItemTop(item: Tag | ChordLyricsPair | Line): string;
    formatLineBottom(line: Line): string;
    formatLineWithFormatter(
        line: Line,
        formatter: (x: string) => string
    ): string;
    formatItemBottom(item: Tag | ChordLyricsPair | Line): string;
}

/**
 * Formats a song into HTML. It uses TABLEs to align lyrics with chords, which makes the HTML for things like
 * PDF conversion.
 */
export class HtmlTableFormatter {
    constructor();
    /**
     * Formats a song into HTML.
     * @param song The song to be formatted
     */
    format(song: Song): string;
}

/**
 * Formats a song into HTML. It uses DIVs to align lyrics with chords, which makes it useful for responsive web pages.
 */
export class HtmlDivFormatter {
    constructor();
    /**
     * Formats a song into HTML.
     * @param song The song to be formatted
     */
    format(song: Song): string;
}

/**
 * Formats a song into a ChordPro chord sheet
 */
export class ChordProFormatter {
    constructor();
    /**
     * Formats a song into a ChordPro chord sheet.
     * @param song The song to be formatted
     */
    format(song: Song): string;

    formatLine(line: Line): string;
    formatItem(item: Tag | ChordLyricsPair | Line): string;
    formatTag(tag: Tag): string;
    formatChordLyricsPair(chordLyricsPair: ChordLyricsPair): string;
    formatChordLyricsPairChords(chordLyricsPair: ChordLyricsPair): string;
    formatChordLyricsPairLyrics(chordLyricsPair: ChordLyricsPair): string;
}
