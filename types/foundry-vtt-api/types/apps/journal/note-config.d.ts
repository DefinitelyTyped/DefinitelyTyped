/**
 * Placeable Note configuration sheet
 * @param note		The Note object for which settings are being configured
 * @param options	Additional Application options
 */
declare class NoteConfig extends FormApplication {
    /**
     * Extend the logic applied when the application is closed to clear any preview notes
     */
    close(): Promise<void>;
}
