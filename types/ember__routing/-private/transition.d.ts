export default interface Transition {
    /**
     * Aborts the Transition. Note you can also implicitly abort a transition
     * by initiating another transition while a previous one is underway.
     */
    abort(): Transition;
    /**
     * Retries a previously-aborted transition (making sure to abort the
     * transition if it's still active). Returns a new transition that
     * represents the new attempt to transition.
     */
    retry(): Transition;
}
