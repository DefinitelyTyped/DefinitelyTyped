/**
 * Result object from getEmbeddingLevels containing bidi analysis.
 */
export interface EmbeddingLevelsResult {
    /**
     * Array of paragraph objects with start/end indices and resolved base level.
     */
    paragraphs: Array<{
        /** Start index of the paragraph */
        start: number;
        /** End index of the paragraph */
        end: number;
        /** Resolved base embedding level (0 for LTR, 1 for RTL) */
        level: number;
    }>;
    /**
     * Uint8Array containing the resolved embedding level for each character.
     */
    levels: Uint8Array;
}

/**
 * Applies the Unicode Bidirectional Algorithm to a string, returning the resolved
 * embedding levels and paragraph information.
 *
 * @param string - The input string
 * @param baseDirection - Use "ltr" or "rtl" to force a base direction, or "auto" to detect
 * @returns Object containing paragraphs array and levels Uint8Array
 *
 * @example
 * ```javascript
 * import { getEmbeddingLevels } from 'bidi-js';
 * const result = getEmbeddingLevels('Hello שלום');
 * console.log(result.levels); // Uint8Array with embedding levels
 * ```
 */
export function getEmbeddingLevels(string: string, baseDirection?: "ltr" | "rtl" | "auto"): EmbeddingLevelsResult;

/**
 * Returns a list of segments that should be visually reordered for proper bidi display.
 *
 * @param string - The full input string
 * @param embeddingLevelsResult - The result from getEmbeddingLevels
 * @param start - Optional start index for a substring
 * @param end - Optional end index for a substring
 * @returns Array of [start, end] segment pairs to be flipped
 */
export function getReorderSegments(
    string: string,
    embeddingLevelsResult: EmbeddingLevelsResult,
    start?: number,
    end?: number,
): number[][];

/**
 * Returns an array of character indices in their proper visual bidi order.
 *
 * @param string - The full input string
 * @param embeddingLevelsResult - The result from getEmbeddingLevels
 * @param start - Optional start index for a substring
 * @param end - Optional end index for a substring
 * @returns Array of character indices in visual order
 */
export function getReorderedIndices(
    string: string,
    embeddingLevelsResult: EmbeddingLevelsResult,
    start?: number,
    end?: number,
): number[];

/**
 * Returns the string with bidi segments reordered for visual display.
 *
 * @param string - The full input string
 * @param embeddingLevelsResult - The result from getEmbeddingLevels
 * @param start - Optional start index for a substring
 * @param end - Optional end index for a substring
 * @returns The reordered string
 */
export function getReorderedString(
    string: string,
    embeddingLevelsResult: EmbeddingLevelsResult,
    start?: number,
    end?: number,
): string;

/**
 * Returns the Unicode bidi character type for a character as a bitmask integer.
 *
 * @param char - A single character
 * @returns The bidi character type as a bitmask
 */
export function getBidiCharType(char: string): number;

/**
 * Returns the Unicode bidi character type name for a character.
 *
 * @param char - A single character
 * @returns The bidi character type name (e.g., "L", "R", "AL", "EN", etc.)
 */
export function getBidiCharTypeName(char: string): string;

/**
 * Returns the mirrored character for characters that have one defined in Unicode.
 *
 * @param char - A single character
 * @returns The mirrored character, or null if none defined
 */
export function getMirroredCharacter(char: string): string | null;

/**
 * Builds a map of character indices to their mirrored replacements
 * for characters in right-to-left segments.
 *
 * @param string - The input string
 * @param embeddingLevels - The levels Uint8Array from getEmbeddingLevels
 * @param start - Optional start index
 * @param end - Optional end index
 * @returns Map from character index to mirrored character
 */
export function getMirroredCharactersMap(
    string: string,
    embeddingLevels: Uint8Array,
    start?: number,
    end?: number,
): Map<number, string>;

/**
 * Returns the opening bracket character for a given closing bracket.
 *
 * @param char - A closing bracket character
 * @returns The corresponding opening bracket, or null if not a closing bracket
 */
export function closingToOpeningBracket(char: string): string | null;

/**
 * Returns the closing bracket character for a given opening bracket.
 *
 * @param char - An opening bracket character
 * @returns The corresponding closing bracket, or null if not an opening bracket
 */
export function openingToClosingBracket(char: string): string | null;

/**
 * Returns the canonical bracket form for a bracket character.
 *
 * @param char - A bracket character
 * @returns The canonical form, or null if not a bracket
 */
export function getCanonicalBracket(char: string): string | null;
