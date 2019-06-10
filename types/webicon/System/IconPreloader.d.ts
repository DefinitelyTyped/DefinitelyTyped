/**
 * Represents an icon-preloader.
 */
export interface IconPreloader extends Promise<void> {
    /**
     * The names of the icons to download.
     */
    iconSets: string[];
}
