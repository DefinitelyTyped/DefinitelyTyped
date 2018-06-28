// Type definitions for deluge 1.7
// Project: https://github.com/ginman86/deluge
// Definitions by: Felix Plymouth <https://github.com/Diasiare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as http from "http";

export = deluge;

declare function deluge(deluge_url: string, password: string): deluge.Deluge;

declare namespace deluge {
    interface Host {
        id: string;
        ip: string;
        port: number;
        status: string;
    }

    interface DelugeStats {
        upload_protocol_rate: number;
        max_upload: number;
        download_protocol_rate: number;
        download_rate: number;
        has_incoming_connections: boolean;
        num_connections: number;
        max_download: number;
        upload_rate: number;
        dht_nodes: number;
        free_space: number;
        max_num_connections: number;
    }

    interface Torrent {
        max_download_speed: number;
        upload_payload_rate: number;
        download_payload_rate: number;
        num_peers: number;
        ratio: number;
        total_peers: number;
        state: string;
        max_upload_speed: number;
        eta: number;
        save_path: string;
        progress: number;
        time_added: number;
        tracker_host: string;
        total_uploaded: number;
        total_done: number;
        total_wanted: number;
        total_seeds: number;
        seeds_peers_ratio: number;
        num_seeds: number;
        name: string;
        is_auto_managed: boolean;
        queue: number;
        distributed_copies: number;
    }

    interface TorrentRecord {
        stats: DelugeStats;
        connected: boolean;
        torrents: {
            [key: string]: Torrent;
        };
        filters: {
            state: Array<[string, number]>;
            tracker_host: Array<[string, number]>;
        };
    }

    interface DownloadOptions {
        file_priorities: any[];
        add_paused: boolean;
        compact_allocation: boolean;
        download_location: string;
        max_connections: number;
        max_download_speed: number;
        max_upload_slots: number;
        max_upload_speed: number;
        prioritize_first_last_pieces: boolean;
    }

    interface Deluge {
        /**
         * Add the torrent to Deluge
         * @param magnet
         * @param dlPath
         * @param callback
         */
        add(magnet: string, dlPath: string | DownloadOptions, callback: (error: string, result: boolean, response: http.ServerResponse) => void): void;
        /**
         * Connect the WebUI to the wanted daemon
         * @param hostID
         * @param callback
         */
        connect(hostID: string, callback: (error: string, result: boolean, response: http.ServerResponse) => void): void;
        /**
         * Get the list of all the hosts that the WebUI can connect to
         * @param callback
         */
        getHosts(callback: (error: string, result: Host[], response: http.ServerResponse) => void): void;
        /**
         * Get the list of all torrents and changing data that represents their status in the WebUI
         * @param callback
         */
        getTorrentRecord(callback: (error: string, result: TorrentRecord, response: http.ServerResponse) => void): void;
        /**
         * Check if the WebUI is connected to a deamon. Return true or false as result of the callback.
         * @param callback
         */
        isConnected(callback: (error: string, result: boolean, response: http.ServerResponse) => void): void;
        /**
         * Set cookies in COOKIE_JAR, cookies is an object with urls as keys, example:
         * {'http://example.org/': 'uid=1234;pass=xxxx;'}
         * @object cookies
         */
        setCookies(cookies: { [key: string]: string }, callback: (error: string, result: boolean, response: http.ServerResponse) => void): void;
    }
}
