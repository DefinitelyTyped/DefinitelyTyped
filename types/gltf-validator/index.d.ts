// derived from: https://www.npmjs.com/package/gltf-validator#api
export interface ValidationOptions {
    /**
     * Absolute or relative asset URI that will be copied to the validation report.
     */
    uri?: string;

    /**
     * Set to "glb" or "gltf" to skip auto-detection of the asset format based on
     * the first byte; any other value will be ignored.
     *
     * This option has no effect on validateString.
     */
    format?: "glb" | "gltf";

    /**
     * Function for loading external resources.
     * If omitted, external resources are not validated.
     */
    externalResourceFunction?: ExternalResourceFunction;

    /**
     * Set to false to omit timestamp from the validation report.
     * Default is true.
     */
    writeTimestamp?: boolean;

    /**
     * Max number of reported issues. Use 0 for unlimited output.
     */
    maxIssues?: number;

    /**
     * Array of ignored issue codes.
     */
    ignoredIssues?: string[];

    /**
     * Array of only issues to consider.
     * Cannot be used along with ignoredIssues.
     */
    onlyIssues?: string[];

    /**
     * Object with overridden severities for issue codes.
     * Keys are issue codes, values are severity identifiers.
     */
    severityOverrides?: Record<string, number>;
}

/**
 * Function for loading external resources.
 * Receives a relative URI and returns a Promise with the resource bytes.
 */
export type ExternalResourceFunction = (uri: string) => Promise<Uint8Array>;

/**
 * Validation result in object form.
 * The exact structure depends on the validator implementation.
 */
export type ValidationResult = Record<string, string | number | boolean | Record<string, string | number | boolean>>;

/**
 * Returns a version string.
 */
export function version(): string;

/**
 * Returns an array of supported extension names.
 */
export function supportedExtensions(): string[];

/**
 * Validates an asset from bytes.
 *
 * @param data    Byte array containing glTF or GLB data.
 * @param options Object with validation options.
 * @returns       Promise with validation result in object form.
 */
export function validateBytes(data: Uint8Array, options?: ValidationOptions): Promise<ValidationResult>;

/**
 * Validates an asset from JSON string.
 *
 * @param json    String containing glTF JSON.
 * @param options Object with validation options.
 * @returns       Promise with validation result in object form.
 */
export function validateString(json: string, options?: ValidationOptions): Promise<ValidationResult>;
