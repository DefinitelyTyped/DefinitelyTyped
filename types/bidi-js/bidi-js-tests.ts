import bidiFactory, { Bidi, EmbeddingLevelsResult } from "bidi-js"

// Create bidi instance from factory
const bidi: bidiFactory.Bidi = bidiFactory();
const anotherBidi: Bidi = bidiFactory(); // test also the import

// Test getEmbeddingLevels
const result: bidiFactory.EmbeddingLevelsResult = bidi.getEmbeddingLevels("Hello שלום");
const resultDirectImport: EmbeddingLevelsResult = bidi.getEmbeddingLevels("Hello שלום");
const resultLtr: bidiFactory.EmbeddingLevelsResult = bidi.getEmbeddingLevels("Hello שלום", "ltr");
const resultRtl: bidiFactory.EmbeddingLevelsResult = bidi.getEmbeddingLevels("Hello שלום", "rtl");
const resultAuto: bidiFactory.EmbeddingLevelsResult = bidi.getEmbeddingLevels("Hello שלום", "auto");

// Test result structure
const paragraphs: Array<{ start: number; end: number; level: number }> = result.paragraphs;
const levels: Uint8Array = result.levels;
const firstParagraph = result.paragraphs[0];
const start: number = firstParagraph.start;
const end: number = firstParagraph.end;
const level: number = firstParagraph.level;

// Test getReorderSegments
const segments: number[][] = bidi.getReorderSegments("Hello שלום", result);
const segmentsWithRange: number[][] = bidi.getReorderSegments("Hello שלום", result, 0, 5);

// Test getReorderedIndices
const indices: number[] = bidi.getReorderedIndices("Hello שלום", result);
const indicesWithRange: number[] = bidi.getReorderedIndices("Hello שלום", result, 0, 5);

// Test getReorderedString
const reordered: string = bidi.getReorderedString("Hello שלום", result);
const reorderedWithRange: string = bidi.getReorderedString("Hello שלום", result, 0, 5);

// Test getBidiCharType
const charType: number = bidi.getBidiCharType("A");
const charTypeHebrew: number = bidi.getBidiCharType("א");

// Test getBidiCharTypeName
const typeName: string = bidi.getBidiCharTypeName("A");
const typeNameHebrew: string = bidi.getBidiCharTypeName("א");

// Test getMirroredCharacter
const mirrored: string | null = bidi.getMirroredCharacter("(");
const notMirrored: string | null = bidi.getMirroredCharacter("A");

// Test getMirroredCharactersMap
const mirrorMap: Map<number, string> = bidi.getMirroredCharactersMap("(Hello)", result.levels);
const mirrorMapWithRange: Map<number, string> = bidi.getMirroredCharactersMap("(Hello)", result.levels, 0, 5);

// Test bracket functions
const opening: string | null = bidi.closingToOpeningBracket(")");
const closing: string | null = bidi.openingToClosingBracket("(");
const canonical: string | null = bidi.getCanonicalBracket("(");
