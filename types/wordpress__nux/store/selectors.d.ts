export interface GuideInfo {
    /**
     * Which tips the guide contains.
     */
    tipIds: string[];
    /**
     * The guide's currently showing tip.
     */
    currentTipId?: string;
    /**
     * The guide's next tip to show.
     */
    nextTipId?: string;
}

/**
 * Returns whether or not tips are globally enabled.
 */
export function areTipsEnabled(): boolean;

/**
 * Returns an object describing the guide, if any, that the given tip is a part of.
 *
 * @param tipId - The tip to query.
 */
export function getAssociatedGuide(tipId: string): GuideInfo | undefined;

/**
 * Determines whether or not the given tip is showing. Tips are hidden if they are disabled, have
 * been dismissed, or are not the current tip in any guide that they have been added to.
 *
 * @param tipId - The tip to query.
 */
export function isTipVisible(tipId: string): boolean;
