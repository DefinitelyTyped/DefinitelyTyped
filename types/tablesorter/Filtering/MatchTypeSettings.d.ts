import { MatchType } from "./MatchType";

/**
 * Provides match-type settings.
 */
export interface MatchTypeSettings {
    /**
     * The match-type for `input`-controls.
     */
    input?: MatchType;

    /**
     * The match-type for `select`-controls.
     */
    select?: MatchType;
}
