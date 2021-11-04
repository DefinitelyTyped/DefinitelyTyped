declare enum RelayRecordState {
    /**
     * Record exists (either fetched from the server or produced by a local,
     * optimistic update).
     */
    EXISTENT = 'EXISTENT',

    /**
     * Record is known not to exist (either as the result of a mutation, or
     * because the server returned `null` when queried for the record).
     */
    NONEXISTENT = 'NONEXISTENT',

    /**
     * Record State is unknown because it has not yet been fetched from the
     * server.
     */
    UNKNOWN = 'UNKNOWN',
}
export type RecordState = keyof typeof RelayRecordState;
export default RelayRecordState;
