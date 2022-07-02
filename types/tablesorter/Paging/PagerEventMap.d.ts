/**
 * Represents an event which uses pager-settings for processing.
 */
export type PagerEventMap =
    /**
     * Indicates the `pagerInitialized`-event.
     */
    "pagerInitialized" |

    /**
     * Indicates the `pageMoved`-event.
     */
    "pageMoved" |

    /**
     * Indicates the `pagerChange`-event.
     */
    "pagerChange" |

    /**
     * Indicates the `pagerComplete`-event.
     */
    "pagerComplete" |

    /**
     * Indicates the `pagerBeforeInitialized`-event.
     */
    "pagerBeforeInitialized";
