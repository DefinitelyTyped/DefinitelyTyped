export {};

declare global {
    /**
     * test to see if a specific player GUID is a special system account (e.g. __JARVIS__, __ADA__) that shouldn't be listed as a player
     */
    function isSystemPlayer(name: string): boolean;
}
