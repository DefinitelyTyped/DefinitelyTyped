import {
    closingToOpeningBracket,
    EmbeddingLevelsResult,
    getBidiCharType,
    getBidiCharTypeName,
    getCanonicalBracket,
    getEmbeddingLevels,
    getMirroredCharacter,
    getMirroredCharactersMap,
    getReorderedIndices,
    getReorderedString,
    getReorderSegments,
    openingToClosingBracket,
} from "bidi-js";

// Test getEmbeddingLevels
const result: EmbeddingLevelsResult = getEmbeddingLevels("Hello שלום");
const resultLtr: EmbeddingLevelsResult = getEmbeddingLevels("Hello שלום", "ltr");
const resultRtl: EmbeddingLevelsResult = getEmbeddingLevels("Hello שלום", "rtl");
const resultAuto: EmbeddingLevelsResult = getEmbeddingLevels("Hello שלום", "auto");

// Test result structure
const paragraphs: Array<{ start: number; end: number; level: number }> = result.paragraphs;
const levels: Uint8Array = result.levels;
const firstParagraph = result.paragraphs[0];
const start: number = firstParagraph.start;
const end: number = firstParagraph.end;
const level: number = firstParagraph.level;

// Test getReorderSegments
const segments: number[][] = getReorderSegments("Hello שלום", result);
const segmentsWithRange: number[][] = getReorderSegments("Hello שלום", result, 0, 5);

// Test getReorderedIndices
const indices: number[] = getReorderedIndices("Hello שלום", result);
const indicesWithRange: number[] = getReorderedIndices("Hello שלום", result, 0, 5);

// Test getReorderedString
const reordered: string = getReorderedString("Hello שלום", result);
const reorderedWithRange: string = getReorderedString("Hello שלום", result, 0, 5);

// Test getBidiCharType
const charType: number = getBidiCharType("A");
const charTypeHebrew: number = getBidiCharType("א");

// Test getBidiCharTypeName
const typeName: string = getBidiCharTypeName("A");
const typeNameHebrew: string = getBidiCharTypeName("א");

// Test getMirroredCharacter
const mirrored: string | null = getMirroredCharacter("(");
const notMirrored: string | null = getMirroredCharacter("A");

// Test getMirroredCharactersMap
const mirrorMap: Map<number, string> = getMirroredCharactersMap("(Hello)", result.levels);
const mirrorMapWithRange: Map<number, string> = getMirroredCharactersMap("(Hello)", result.levels, 0, 5);

// Test bracket functions
const opening: string | null = closingToOpeningBracket(")");
const closing: string | null = openingToClosingBracket("(");
const canonical: string | null = getCanonicalBracket("(");
