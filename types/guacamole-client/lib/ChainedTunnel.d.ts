import { Tunnel } from './Tunnel';

/**
 * Guacamole Tunnel which cycles between all specified tunnels until
 * no tunnels are left. Another tunnel is used if an error occurs but
 * no instructions have been received. If an instruction has been
 * received, or no tunnels remain, the error is passed directly out
 * through the onerror handler (if defined).
 */
export class ChainedTunnel extends Tunnel {
    /**
     * @param tunnelChain The tunnels to use, in order of priority.
     */
    constructor(...tunnels: Tunnel[]);
}
