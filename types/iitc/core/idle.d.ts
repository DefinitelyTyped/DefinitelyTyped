export {};

declare global {
    var idleTime: number; // in seconds

    /** default MAX_IDLE_TIME */
    var _idleTimeLimit: number;
    var IDLE_POLL_TIME: number;

    function idlePoll(): void;
    function idleReset(): void;
    function idleSet(): void;
    function setupIdle(): void;

    /**
     * add your function here if you want to be notified when the user
     * resumes from being idle
     */
    function addResumeFunction(fct: () => void): void;
}
