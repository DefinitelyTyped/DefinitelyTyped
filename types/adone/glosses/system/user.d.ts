declare namespace adone.system {
    /**
     * Utils for uid/gid
     */
    namespace user {
        /**
         * Returns uid by the given username
         */
        function uid(username: string): { uid: number, gid: number };

        /**
         * Returns gid by the given groupname
         */
        function gid(groupname: string): number;

        /**
         * Returns gids the given user belongs
         */
        function gids(username: string): number[];

        /**
         * Returns username by the given uid
         */
        function username(uid: number): string;

        /**
         * Returns groupname by the given gid
         */
        function groupname(gid: number): string;
    }
}
