// Type definitions for minecraft-pinger 1.0.5
// Project: https://github.com/dennisbruner/node-minecraft-pinger
// Definitions by: Grayson-code <https://github.com/Grayson-code>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface pingPromiseInterface {
    /**
     * Server Description , May not exist
     */
    description?: {
      /**
       * Raw Text
       */
      text: string;
      extra?: {
        /**
         * Color of the text
         */
        color?: string;
        /**
         * Raw Text
         */
        text: string;
        /**
         * If Text is bold
         */
        bold?: boolean;
        /**
         * If Text is strikethroughed
         */
        strikethrough?: boolean;
  
        extra?: {
          /**
           * Color
           */
          color: string;
          /**
           * Raw Text
           */
          text: string;
        };
      };
    };
    players: {
      /**
       * Current Number of players online
       */
      online: number;
      /**
       * Maximum Number of players that could be online
       */
      max: number;
    };
    version: {
      /**
       * Server Software & Version Supports
       */
      name: string;
      /**
       * Protocol Version
       */
      protocol: number;
    };
    /**
     * RoundTrip Latency in milliseconds
     */
    ping: number;
    /**
     * Moderator Info
     */
    modinfo?: {
      /**
       * Mod list type
       */
      type: string;
      /**
       * Moderator List May not exist
       */
      modList: string[];
    };
    /**
     * Server Favicon , Can be more than 1000 Characters
     */
    favicon?: string;
  }
  
  export interface iCheckSrvRecord {
      /**
       * Hostname of the server
       */
      hostname:string,
      /**
       * The port
       */
      port:number,
    }
    
    /**
     * Returns basic info about the server, asynchronously.
     * The hostname is the hostname of the server you want to ping,
     * and the port is the port of the server most java servers have default of 25565.
     */
    export function pingPromise(
      /**
       * The Host Name
       */
      hostname: string,
      /**
       *  The Port of the server , most servers default to 25565
       */
      port: number
    ): Promise<pingPromiseInterface>;
    /**
     * Returns basic info about the server
     * The hostname is the hostname of the server you want to ping,
     * and the port is the port of the server most java servers have default of 25565.
     */
    export function ping(
      /**
       * The Host Name
       */
      hostname: string,
      /**
       *  The Port of the server , most servers default to 25565
       */
      port: number
    ): pingPromiseInterface;
    /**
     * Checks The Service Record
     * 
     * The URL or hostname is the hostname , eg: https://example.com
     */
    export  function checkSrvRecord(hostname:string): Promise<iCheckSrvRecord>
    
    
  
  export as namespace minecraftpinger;
  