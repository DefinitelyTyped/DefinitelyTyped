import { MatchType } from "./MatchType";

/**
 * Provides match-type settings.
 */
export interface MatchTypeSettings {
    /**
     * The match-type for `input`-controls.
     */
    input?: MatchType | undefined;

    /**
     * The match-type for `select`-controls.
     */
    select?: MatchType | undefined;
}
