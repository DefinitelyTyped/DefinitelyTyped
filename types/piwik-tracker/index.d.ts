/// <reference types="node" />

import events = require("events");

export = PiwikTracker;

// refer to http://developer.piwik.org/api-reference/tracking-api
interface PiwikTrackOptions {
    // Required parameters
    url: string;

    // Recommended parameters
    action_name?: string | undefined;
    _id?: string | undefined;
    rand?: string | undefined;
    apiv?: number | undefined;

    // Optional User info
    urlref?: string | undefined;
    _cvar?: string | undefined;
    _idvc?: string | undefined;
    _viewts?: string | undefined;
    _idts?: string | undefined;
    _rcn?: string | undefined;
    _rck?: string | undefined;
    res?: string | undefined;
    h?: number | undefined;
    m?: number | undefined;
    s?: number | undefined;
    ua?: string | undefined;
    lang?: string | undefined;
    uid?: string | undefined;
    cid?: string | undefined;
    new_visit?: number | undefined;

    // Optional Action info
    cvar?: string | undefined;
    link?: string | undefined;
    download?: string | undefined;
    search?: string | undefined;
    search_cat?: string | undefined;
    search_count?: number | undefined;
    idgoal?: number | undefined;
    revenue?: number | undefined;
    gt_ms?: number | undefined;
    cs?: string | undefined;

    // Optional Event Tracking info
    e_c?: string | undefined;
    e_a?: string | undefined;
    e_n?: string | undefined;
    e_v?: string | undefined;

    // Optional Content Tracking info
    c_n?: string | undefined;
    c_p?: string | undefined;
    c_t?: string | undefined;
    c_i?: string | undefined;

    // Optional Ecommerce info
    ec_id?: string | undefined;
    ec_items?: string | undefined;
    ec_st?: number | undefined;
    ec_tx?: number | undefined;
    ec_sh?: number | undefined;
    ec_dt?: number | undefined;
    _ects?: number | undefined;

    // Other parameters (require authentication via token_auth)
    token_auth?: string | undefined;
    cip?: string | undefined;
    cdt?: string | undefined;
    country?: string | undefined;
    region?: string | undefined;
    city?: string | undefined;
    lat?: string | undefined;
    long?: string | undefined;

    // Other parameters
    send_image?: number | undefined;
}

declare class PiwikTracker extends events.EventEmitter {
    constructor(siteId: number, trackerUrl: string);
    track(options: PiwikTrackOptions): void;
}
