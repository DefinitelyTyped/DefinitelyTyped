declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Miscellaneous information about the current script execution. */
        interface ExecutionInfo {
            /** Returns the remaining number of Google Ads entities the script is allowed to create in this execution. */
            getRemainingCreateQuota(): number;
            /** Returns the remaining number of Google Ads entities the script is allowed to fetch in this execution. */
            getRemainingGetQuota(): number;
            /** Returns the remaining time in seconds the script is allowed to execute. */
            getRemainingTime(): number;
            /** Returns true if the script is currently being previewed, or false if it is a live execution. */
            isPreview(): boolean;
        }
    }
}
