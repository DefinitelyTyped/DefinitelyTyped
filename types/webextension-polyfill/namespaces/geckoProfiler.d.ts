//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.geckoProfiler
 *
 * Exposes the browser's profiler.
 * Permissions: "geckoProfiler"
 */
import { Events } from "./events";

export namespace GeckoProfiler {
    type ProfilerFeature =
        | "java"
        | "js"
        | "mainthreadio"
        | "fileio"
        | "fileioall"
        | "nomarkerstacks"
        | "screenshots"
        | "seqstyle"
        | "stackwalk"
        | "jsallocations"
        | "nostacksampling"
        | "nativeallocations"
        | "ipcmessages"
        | "audiocallbacktracing"
        | "cpu"
        | "notimerresolutionchange"
        | "cpuallthreads"
        | "samplingallthreads"
        | "markersallthreads"
        | "unregisteredthreads"
        | "processcpu"
        | "power"
        | "responsiveness";

    type supports = "windowLength";

    interface StartSettingsType {
        /**
         * The maximum size in bytes of the buffer used to store profiling data. A larger value allows capturing a profile that
         * covers a greater amount of time.
         */
        bufferSize: number;

        /**
         * The length of the window of time that's kept in the buffer. Any collected samples are discarded as soon as they are
         * older than the number of seconds specified in this setting. Zero means no duration restriction.
         * Optional.
         */
        windowLength?: number;

        /**
         * Interval in milliseconds between samples of profiling data. A smaller value will increase the detail of the profiles
         * captured.
         */
        interval: number;

        /**
         * A list of active features for the profiler.
         */
        features: ProfilerFeature[];

        /**
         * A list of thread names for which to capture profiles.
         * Optional.
         */
        threads?: string[];
    }

    interface Static {
        /**
         * Starts the profiler with the specified settings.
         *
         * @param settings
         */
        start(settings: StartSettingsType): void;

        /**
         * Stops the profiler and discards any captured profile data.
         */
        stop(): void;

        /**
         * Pauses the profiler, keeping any profile data that is already written.
         */
        pause(): void;

        /**
         * Resumes the profiler with the settings that were initially used to start it.
         */
        resume(): void;

        /**
         * Gathers the profile data from the current profiling session, and writes it to disk.
         * The returned promise resolves to a path that locates the created file.
         *
         * @param fileName The name of the file inside the profile/profiler directory
         */
        dumpProfileToFile(fileName: string): void;

        /**
         * Gathers the profile data from the current profiling session.
         */
        getProfile(): void;

        /**
         * Gathers the profile data from the current profiling session. The returned promise resolves to an array buffer that
         * contains a JSON string.
         */
        getProfileAsArrayBuffer(): void;

        /**
         * Gathers the profile data from the current profiling session. The returned promise resolves to an array buffer that
         * contains a gzipped JSON string.
         */
        getProfileAsGzippedArrayBuffer(): void;

        /**
         * Gets the debug symbols for a particular library.
         *
         * @param debugName The name of the library's debug file. For example, 'xul.pdb
         * @param breakpadId The Breakpad ID of the library
         */
        getSymbols(debugName: string, breakpadId: string): void;

        /**
         * Fires when the profiler starts/stops running.
         *
         * @param isRunning Whether the profiler is running or not. Pausing the profiler will not affect this value.
         */
        onRunning: Events.Event<(isRunning: boolean) => void>;
    }
}
