export interface LanguageDetectionResult {
    lang: string;
    prob: number;
}

/**
 * Detects the language of the input text and returns an array of possible language detections
 * along with their probabilities.
 * @param text The input text for language detection.
 * @returns An array of language detection results.
 */
export function detect(text: string): LanguageDetectionResult[];

/**
 * Detects the most probable language of the input text and returns the ISO 639-1 language code.
 * @param text The input text for language detection.
 * @returns The ISO 639-1 language code of the most probable language.
 */
export function detectOne(text: string): string;
