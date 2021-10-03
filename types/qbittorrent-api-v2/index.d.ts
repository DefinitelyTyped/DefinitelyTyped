// Type definitions for qbittorrent-api-v2 1.2
// Project: https://github.com/TheFlow95/node-qbittorrent-api-v2#readme
// Definitions by: Totto16 <https://github.com/Totto16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Login to qBittorrent
 * @async
 * @param host - Host name of your qBittorrent instance
 * @param username - Username used to access the WebUI
 * @param password - Password used to access the WebUI
 */
export function connect(host: string, username: string, password: string): Promise<QBittorrentApiEndpoint>;

export interface QBittorrentApiEndpoint {
    appVersion(): Promise<string>;

    apiVersion(): Promise<string>;

    buildInfo(): Promise<BuildInfo>;

    shutdown(): Promise<void>;

    preferences(): Promise<Preferences>;

    defaultSavePath(): Promise<string>;

    log(normal?: boolean, info?: boolean, warning?: boolean, critical?: boolean, lastKnownId?: number): Promise<Log[]>;

    peerLog(lastKnownId?: number): Promise<PeerLog[]>;

    syncMainData(rid?: number): Promise<MainData>;

    syncPeersData(hash: string, rid?: number): Promise<PeerData>;

    transferInfo(): Promise<TransferInfo>;

    speedLimitsMode(): Promise<number>;

    toggleSpeedLimitsMode(): Promise<void>;

    globalDownloadLimit(): Promise<number>;

    setGlobalDownloadLimit(limit: number): Promise<void>;

    globalUploadLimit(): Promise<number>;

    setGlobalUploadLimit(limit: number): Promise<void>;

    banPeers(peers: string): Promise<void>;

    torrents(
        filter?: filterString,
        category?: string,
        sort?: string,
        reverse?: boolean,
        limit?: number,
        offset?: number,
        hashes?: string,
    ): Promise<Torrent[]>;

    properties(hash: string): Promise<TorrentInfo>;

    trackers(hash: string): Promise<Tracker[]>;

    webseeds(hash: string): Promise<Webseed[]>;

    files(hash: string): Promise<Content[]>;

    pieceStates(hash: string): Promise<Array<(0 | 1 | 2)>>;

    pieceHashes(hash: string): Promise<string[]>;

    pauseTorrents(hashes: string): Promise<void>;

    resumeTorrents(hashes: string): Promise<void>;

    deleteTorrents(hashes: string, deleteFile: boolean): Promise<void>;

    recheckTorrents(hashes: string): Promise<void>;

    reannounceTorrents(hashes: string): Promise<void>;

    editTrackers(hash: string, origUrl: string, newUrl: string): Promise<void>;

    removeTrackers(hash: string, urls: string): Promise<void>;

    addPeers(hashes: string, peers: string): Promise<void>;

    addTrackers(hash: string, urls: string): Promise<void>;

    increasePriority(hashes: string): Promise<void>;

    decreasePriority(hashes: string): Promise<void>;

    maxPriority(hashes: string): Promise<void>;

    minPriority(hashes: string): Promise<void>;

    setFilePriority(hash: string, id: string, priority: 0 | 1 | 6 | 7): Promise<void>;

    downloadLimit(hashes: string): Promise<void>;

    setDownloadLimit(hashes: string, limit: string): Promise<void>;

    setShareLimit(hashes: string, ratioLimit: string, seedingTimeLimit: string): Promise<void>;

    uploadLimit(hashes: string): Promise<void>;

    setUploadLimit(hashes: string, limit: string): Promise<void>;

    setLocation(hashes: string, location: string): Promise<void>;

    rename(hash: string, name: string): Promise<void>;

    setCategory(hashes: string, category: string): Promise<void>;

    categories(): Promise<Categories>;

    createCategory(category: string, savePath: string): Promise<void>;

    editCategory(category: string, savePath: string): Promise<void>;

    removeCategories(categories: string): Promise<void>;

    addTags(hashes: string, tags: string): Promise<void>;

    removeTags(hashes: string, tags: string): Promise<void>;

    tags(): Promise<string[]>;

    createTags(tags: string): Promise<void>;

    deleteTags(tags: string): Promise<void>;

    setAutoManagement(hashes: string, enable: boolean): Promise<void>;

    toggleSequentialDownload(hashes: string): Promise<void>;

    toggleFirstLastPiecePrio(hashes: string): Promise<void>;

    setForceStart(hashes: string, value: boolean): Promise<void>;

    setSuperSeeding(hashes: string, value: boolean): Promise<void>;

    renameFile(hash: string, id: number, name: string): Promise<void>;

    startSearch(pattern: string, plugins: string, category: string): Promise<SearchJob>;

    stopSearch(id: number): Promise<void>;

    searchStatus(id?: number): Promise<SearchStatus[]>;

    searchResults(id: number, limit?: number, offset?: number): Promise<SearchResults>;

    deleteSearch(id: number): Promise<void>;

    searchCategories(pluginName?: string | 'all' | 'enabled'): Promise<string[]>;

    searchPlugins(): Promise<SearchPlugin[]>;

    installPlugin(sources: string): Promise<void>;

    uninstallPlugin(names: string): Promise<void>;

    enablePlugin(names: string, enable: boolean): Promise<void>;

    updatePlugins(): Promise<void>;
}

export interface BuildInfo {
    qt: string;
    libtorrent: string;
    boost: string;
    openssl: string;
    bitness: string;
}

export interface Preferences {
    locale: string;
    create_subfolder_enabled: boolean;
    start_paused_enabled: boolean;
    auto_delete_mode: number;
    preallocate_all: boolean;
    incomplete_files_ext: boolean;
    auto_tmm_enabled: boolean;
    torrent_changed_tmm_enabled: boolean;
    save_path_changed_tmm_enabled: boolean;
    category_changed_tmm_enabled: boolean;
    save_path: string;
    temp_path_enabled: boolean;
    temp_path: string;
    scan_dirs: object;
    export_dir: string;
    export_dir_fin: string;
    mail_notification_enabled: boolean;
    mail_notification_sender: string;
    mail_notification_email: string;
    mail_notification_smtp: string;
    mail_notification_ssl_enabled: boolean;
    mail_notification_auth_enabled: boolean;
    mail_notification_username: string;
    mail_notification_password: string;
    autorun_enabled: boolean;
    autorun_program: string;
    queueing_enabled: boolean;
    max_active_downloads: number;
    max_active_torrents: number;
    max_active_uploads: number;
    dont_count_slow_torrents: boolean;
    slow_torrent_dl_rate_threshold: number;
    slow_torrent_ul_rate_threshold: number;
    slow_torrent_inactive_timer: number;
    max_ratio_enabled: boolean;
    max_ratio: number;
    max_ratio_act: boolean;
    listen_port: number;
    upnp: boolean;
    random_port: boolean;
    dl_limit: number;
    up_limit: number;
    max_connec: number;
    max_connec_per_torrent: number;
    max_uploads: number;
    max_uploads_per_torrent: number;
    enable_utp: boolean;
    limit_utp_rate: boolean;
    limit_tcp_overhead: boolean;
    limit_lan_peers: boolean;
    alt_dl_limit: number;
    alt_up_limit: number;
    scheduler_enabled: boolean;
    schedule_from_hour: number;
    schedule_from_min: number;
    schedule_to_hour: number;
    schedule_to_min: number;
    scheduler_days: number;
    dht: boolean;
    dhtSameAsBT: boolean;
    dht_port: number;
    pex: boolean;
    lsd: boolean;
    encryption: number;
    anonymous_mode: boolean;
    proxy_type: number;
    proxy_ip: string;
    proxy_port: number;
    proxy_peer_connections: boolean;
    force_proxy: boolean;
    proxy_auth_enabled: boolean;
    proxy_username: string;
    proxy_password: string;
    ip_filter_enabled: boolean;
    ip_filter_path: string;
    ip_filter_trackers: boolean;
    web_ui_domain_list: string;
    web_ui_address: string;
    web_ui_port: number;
    web_ui_upnp: boolean;
    web_ui_username: string;
    web_ui_password: string; // writeonly
    web_ui_csrf_protection_enabled: boolean;
    web_ui_clickjacking_protection_enabled: boolean;
    bypass_local_auth: boolean;
    bypass_auth_subnet_whitelist_enabled: boolean;
    bypass_auth_subnet_whitelist: string;
    alternative_webui_enabled: boolean;
    alternative_webui_path: string;
    use_https: boolean;
    ssl_key: string;
    ssl_cert: string;
    dyndns_enabled: boolean;
    dyndns_service: number;
    dyndns_username: string;
    dyndns_password: string;
    dyndns_domain: string;
    rss_refresh_interval: number;
    rss_max_articles_per_feed: number;
    rss_processing_enabled: boolean;
    rss_auto_downloading_enabled: boolean;
}

export interface Log {
    id: number;
    message: string;
    timestamp: number;
    type: LogTypesInt;
}

export type LogTypesInt = 1 | 2 | 4 | 8;

export type LogTypesString = 'normal' | 'info' | 'warning' | 'critical';

export interface PeerLog {
    id: number;
    ip: string;
    timestamp: number;
    blocked: boolean;
    reason: string;
}

export interface MainData {
    rid: number;
    full_update: boolean;
    torrents: object;
    torrents_removed: string[];
    categories: object;
    categories_removed: string[];
    tags: string[];
    tags_removed: string[];
    server_state: object;
}

export interface TransferInfo {
    dl_info_speed: number;
    dl_info_data: number;
    up_info_speed: number;
    up_info_data: number;
    dl_rate_limit: number;
    up_rate_limit: number;
    dht_nodes: number;
    connection_status: string;
}

export interface Torrent {
    added_on: number;
    amount_left: number;
    auto_tmm: boolean;
    category: string;
    completed: number;
    completion_on: number;
    dl_limit: number;
    dlspeed: number;
    downloaded: number;
    downloaded_session: number;
    eta: number;
    f_l_piece_prio: boolean;
    force_start: boolean;
    hash: string;
    last_activity: number;
    magnet_uri: string;
    max_ratio: number;
    max_seeding_time: number;
    name: string;
    num_complete: number;
    num_incomplete: number;
    num_leechs: number;
    num_seeds: number;
    priority: number;
    progress: number;
    ratio: number;
    ratio_limit: number;
    save_path: string;
    seeding_time_limit: number;
    seen_complete: number;
    seq_dl: boolean;
    size: number;
    state: string;
    super_seeding: boolean;
    tags: string;
    time_active: number;
    total_size: number;
    tracker: string;
    up_limit: number;
    uploaded: number;
    uploaded_session: number;
    upspeed: number;
}

export interface TorrentInfo {
    save_path: string;
    creation_date: number;
    piece_size: number;
    comment: string;
    total_wasted: number;
    total_uploaded: number;
    total_uploaded_session: number;
    total_downloaded: number;
    total_downloaded_session: number;
    up_limit: number;
    dl_limit: number;
    time_elapsed: number;
    seeding_time: number;
    nb_connections: number;
    nb_connections_limit: number;
    share_ratio: number;
    addition_date: number;
    completion_date: number;
    created_by: string;
    dl_speed_avg: number;
    dl_speed: number;
    eta: number;
    last_seen: number;
    peers: number;
    peers_total: number;
    pieces_have: number;
    pieces_num: number;
    reannounce: number;
    seeds: number;
    seeds_total: number;
    total_size: number;
    up_speed_avg: number;
    up_speed: number;
}

export interface Tracker {
    url: string;
    status: number;
    tier: number;
    num_peers: number;
    num_seeds: number;
    num_leeches: number;
    num_downloaded: number;
    msg: string;
}

export interface Webseed {
    url: string;
}

export interface Content {
    name: string;
    size: number;
    progress: number;
    priority: 0 | 1 | 6 | 7;
    is_seed: boolean;
    piece_range: number;
    availability: number;
}

export interface SearchJob {
    id: number;
}

export interface SearchStatus {
    id: number;
    status: string;
    total: number;
}

export interface SearchResult {
    descrLink: string;
    fileName: string;
    fileSize: number;
    fileUrl: string;
    nbLeechers: number;
    nbSeeders: number;
    siteUrl: string;
}

export interface SearchResults {
    results: SearchResult[];
    status: string;
    total: number;
}

export interface SearchPlugin  {
    enabled: boolean;
    fullName: string;
    name: string;
    supportedCategories: string[];
    url: string;
    version: string;
}

export type filterString = 'all' | 'downloading' | 'completed' | 'paused' | 'active' | 'inactive' | 'resumed';

export type Categories = object;

export type PeerData = object;
