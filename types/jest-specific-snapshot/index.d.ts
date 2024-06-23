/// <reference types="jest" />

declare global {
    namespace jest {
        interface Matchers<R, T> {
            toMatchSpecificSnapshot(snapshotFilename: string): R;
        }
    }
}

/**
 * Specify the serializer that should be used by toMatchSpecificSnapshot.
 * Note: toMatchSpecificSnapshot ignores the existing jest snapshot serializer settings. If you want to use a custom serializer,
 * you need to set it via this addSerializer function.
 */
export function addSerializer(serializer: any): void;

/**
 * This is used to create a customized version of toMatchSpecificSnapshot.
 */
export function toMatchSpecificSnapshot(
    data: any,
    snapshotFile: string,
    testName: string,
): () => { message(): string; pass: boolean };
