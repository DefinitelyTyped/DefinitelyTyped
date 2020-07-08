import { Tunnel } from './Tunnel';

/**
 * Guacamole Tunnel which replays a Guacamole protocol dump from a static file
 * received via HTTP. Instructions within the file are parsed and handled as
 * quickly as possible, while the file is being downloaded.
 */
export class StaticHTTPTunnel extends Tunnel {
    /**
     * @param url The URL of a Guacamole protocol dump.
     * @param [crossDomain=false] Whether tunnel requests will be cross-domain, and thus must use CORS
     * mechanisms and headers. By default, it is assumed that tunnel requests will be made to the same domain.
     * @param [extraTunnelHeaders={}] Key value pairs containing the header names and values of any additional
     * headers to be sent in tunnel requests. By default, no extra headers will be added.
     */
    constructor(url: string, crossDomain?: boolean, extraTunnelHeaders?: Record<string, string>);
}
