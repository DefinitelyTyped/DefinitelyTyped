// Type definitions for (actually non-npm package littledata:synced-cron 1.5, but still compatible with this old unmaintained fork:) meteor-synced-cron 1.0
// Project: https://github.com/percolatestudio/meteor-synced-cron#readme
// Definitions by: ghybs <https://github.com/ghybs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='later' />

// tslint:disable-next-line no-single-declare-module
declare module 'meteor/littledata:synced-cron' {
    /**
     * A simple cron system for Meteor.
     * It supports syncronizing jobs between multiple processes.
     * In other words, if you add a job that runs every hour
     * and your deployment consists of multiple app servers,
     * only one of the app servers will execute the job each time
     * (whichever tries first).
     *
     * - Meteor Atmosphere package: `littledata:synced-cron` https://atmospherejs.com/littledata/synced-cron
     * - Repository on GitHub: https://github.com/percolatestudio/meteor-synced-cron
     */
    namespace SyncedCron {
        /**
         * add a scheduled job
         *
         * https://github.com/percolatestudio/meteor-synced-cron#basics
         */
        function add(addOptions: {
            /**
             * *required* unique name of the job
             */
            name: string;
            /**
             * *required* when to run the job
             *
             * @param parser is a later.parse object
             */
            schedule: (parser: later.ParseStatic) => later.ScheduleData;
            /**
             * *required* the code to run
             */
            job: () => void;
        }): void;

        /**
         * Start processing added jobs
         *
         * https://github.com/percolatestudio/meteor-synced-cron#basics
         */
        function start(): void;

        /**
         * find the date that the job referenced by `jobName` will run next.
         *
         * https://github.com/percolatestudio/meteor-synced-cron#advanced
         *
         * @param jobName to find the next valid instance Date for
         */
        function nextScheduledAtDate(jobName: string): Date;

        /**
         * remove and stop running the job referenced by jobName.
         *
         * https://github.com/percolatestudio/meteor-synced-cron#advanced
         *
         * @param jobName to be removed
         */
        function remove(jobName: string): void;

        /**
         * remove and stop all jobs.
         *
         * https://github.com/percolatestudio/meteor-synced-cron#advanced
         */
        function stop(): void;

        /**
         * stop all jobs without removing them.
         * The existing jobs can be rescheduled (i.e. restarted)
         * with `SyncedCron.start()`.
         *
         * https://github.com/percolatestudio/meteor-synced-cron#advanced
         */
        function pause(): void;
    }
}
