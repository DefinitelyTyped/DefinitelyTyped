/* =================== USAGE ===================
    import * as profiler from "v8-profiler";
    profiler.startProfiling();
 =============================================== */

/// <reference types="node" />

declare module "v8-profiler" {
    import * as fs from "fs";

    namespace V8Profiler {
        type Profiler = {
            /**
             * returns new HEAP Snapshot instance.
             * name is optional argument, by default snapshot name will be constructed from its uid.
             */
            takeSnapshot: (name?: string) => Snapshot;
            deleteAllSnapshots: () => void;
            /**
             * start CPU profiling.
             * name is optional argument, by default profile name will be constructed from its uid.
             * recsamples is true by default.
             */
            startProfiling: (name?: string, recsamples?: boolean) => void;
            /**
             * returns new CPU Profile instance.
             * There is no strictly described behavior for usage without name argument.
             */
            stopProfiling: (name?: string) => Profile;
            /**
             * Changes default CPU profiler sampling interval to the specified number of microseconds.
             * Default interval is 1000us.
             * This method must be called when there are no profiles being recorded.
             * If called without arguments it resets interval to default.
             */
            setSamplingInterval: (ms?: number) => void;
            deleteAllProfiles: () => void;
        };
        type Snapshot = {
            /**
             * provides short information about snapshot.
             */
            getHeader: () => any;
            /**
             * creates HEAP diff for two snapshots.
             */
            compare: (snapshot: Snapshot) => void;
            /**
             * removes snapshot from memory.
             */
            delete: () => any;
            /**
             * provides simple export API for snapshot.
             * callback(error, data) receives serialized snapshot as second argument. (Serialization is not equal to JSON.stringify result).
             * If callback will not be passed, export returns transform stream.
             */
            export(callback: (error: Error, data: any) => void): void;
            /**
             * provides simple export API for snapshot.
             * callback(error, data) receives serialized snapshot as second argument. (Serialization is not equal to JSON.stringify result).
             * If callback will not be passed, export returns transform stream.
             */
            export(): fs.ReadStream;
            /**
             * low level serialization method.
             * Look Snapshot.export source for usage example.
             */
            serialize: Function;
        };

        type Profile = {
            /**
             * provides short information about profile.
             */
            getHeader: () => any;
            /**
             * removes profile from memory.
             */
            delete: () => any;
            /**
             * provides simple export API for profile.
             * callback(error, data) receives serialized profile as second argument. (Serialization is equal to JSON.stringify result).
             */
            export(callback: (error: Error, data: any) => void): void;
            /**
             * provides simple export API for profile.
             * callback(error, data) receives serialized profile as second argument. (Serialization is equal to JSON.stringify result).
             */
            export(): fs.ReadStream;
        };
    }

    var V8Profiler: V8Profiler.Profiler;
    export = V8Profiler;
}
