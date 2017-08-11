// Type definitions for node-statsd 0.1
// Project: https://github.com/sivy/node-statsd
// Definitions by: Alex Turek <https://github.com/alexturek>
//                 Convoy <https://github.com/convoyinc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Comments copied with modifications from
// https://github.com/sivy/node-statsd/blob/master/lib/statsd.js
/// <reference types="node" />

import * as dgram from 'dgram';

export interface StatsDConfig {
  host?: string;
  port?: number;
  prefix?: string;
  suffix?: string;
  globalize?: boolean;
  cacheDns?: boolean;
  mock?: boolean;
  global_tags?: string[];
}

export type Callback = (error?: Error, bytes?: Buffer) => void;

export class StatsD {
  /**
   * The UDP Client for StatsD
   *   @option {string} host         The host to connect to default: localhost
   *   @option port        {String|Integer} The port to connect to default: 8125
   *   @option {string} prefix       An optional prefix to assign to each stat name sent
   *   @option {string} suffix       An optional suffix to assign to each stat name sent
   *   @option globalize   {boolean} An optional boolean to add "statsd" as an object in the global namespace
   *   @option cacheDns    {boolean} An optional option to only lookup the hostname -> ip address once
   *   @option mock        {boolean} An optional boolean indicating this Client is a mock object, no stats are sent.
   *   @option {string[]} global_tags Optional tags that will be added to every metric
   * @param {StatsDConfig} options
   * @constructor
   */
  constructor(config: StatsDConfig);
  constructor(
    host?: string,
    port?: number,
    prefix?: string,
    suffix?: string,
    globalize?: boolean,
    cacheDns?: boolean,
    mock?: boolean,
    global_tags?: string[],
  );

  socket: dgram.Socket;

  host: string;
  port: number;
  prefix: string;
  suffix: string;
  cacheDns: boolean;
  mock: boolean;
  global_tags: string[];

  /**
   * Close the underlying socket and stop listening for data on it.
   */
  close(): void;

  /**
   * Decrements a stat by a specified amount
   * @param {string|string[]} stat The stat(s) to send
   * @param {number} value The value to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  decrement(stat: string | string[], value?: number, sampleRate?: number, tags?: string[], callback?: Callback): void;
  decrement(stat: string | string[], value?: number, sampleRateOrTags?: number | string[], callback?: Callback): void;
  decrement(stat: string | string[], value?: number, callback?: Callback): void;

  /**
   * Gauges a stat by a specified amount
   * @param {string|string[]} stat The stat(s) to send
   * @param {number} value The value to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  gauge(stat: string | string[], value: number, sampleRate?: number, tags?: string[], callback?: Callback): void;
  gauge(stat: string | string[], value: number, sampleRateOrTags?: number | string [], callback?: Callback): void;
  gauge(stat: string | string[], value: number, callback?: Callback): void;

  /**
   * Represents the histogram stat
   * @param {string|string[]} stat The stat(s) to send
   * @param {any} value The value to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  histogram(stat: string | string[], value: any, sampleRate?: number, tags?: string[], callback?: Callback): void;
  histogram(stat: string | string[], value: any, sampleRateOrTags?: number | string [], callback?: Callback): void;
  histogram(stat: string | string[], value: any, callback?: Callback): void;

  /**
   * Increments a stat by a specified amount
   * @param {string|string[]} stat The stat(s) to send
   * @param {any} value The value to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  increment(stat: string | string[], value?: number, sampleRate?: number, tags?: string[], callback?: Callback): void;

  /**
   * Sends a stat across the wire
   * @param {string|string[]} stat The stat(s) to send
   * @param {any} value The value to send
   * @param {string} type The type of message to send to statsd
   * @param {number} sampleRate The Number of times to sample (0 to 1)
   * @param {string[]} tags The Array of tags to add to metrics
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  send(stat: string | string[], value: any, type: string, sampleRate?: number, tags?: string[], callback?: Callback): void;
  send(stat: string | string[], value: any, type: string, sampleRateOrTags?: number | string [], callback?: Callback): void;
  send(stat: string | string[], value: any, type: string, callback?: Callback): void;

  /**
   * Checks if stats is an array and sends all stats calling back once all have sent
   * @param {string|string[]} stat The stat(s) to send
   * @param {any} value The value to send
   * @param {string} type The type of metric to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  sendAll(stat: string | string[], value: any, type: string, sampleRate?: number, tags?: string[], callback?: Callback): void;
  sendAll(stat: string | string[], value: any, type: string, sampleRateOrTags?: number | string [], callback?: Callback): void;
  sendAll(stat: string | string[], value: any, type: string, callback?: Callback): void;

  /**
   * See StatsD.unique
   */
  set(stat: string | string[], value: any, sampleRate?: number, tags?: string[], callback?: Callback): void;
  set(stat: string | string[], value: any, sampleRateOrTags?: number | string [], callback?: Callback): void;
  set(stat: string | string[], value: any, callback?: Callback): void;

  /**
   * Represents the timing stat
   * @param {string|string[]} stat The stat(s) to send
   * @param {number} time The time in milliseconds to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  timing(stat: string | string[], time: number, sampleRate?: number, tags?: string[], callback?: Callback): void;
  timing(stat: string | string[], time: number, sampleRateOrTags?: number | string [], callback?: Callback): void;
  timing(stat: string | string[], time: number, callback?: Callback): void;

  /**
   * Counts unique values by a specified amount
   * @param {string|string[]} stat The stat(s) to send
   * @param {any} value The value to send
   * @param {number} sampleRate The Number of times to sample (0 to 1). Optional.
   * @param {string[]} tags The Array of tags to add to metrics. Optional.
   * @param {Callback} callback Callback when message is done being delivered. Optional.
   */
  unique(stat: string | string[], value: any, sampleRate?: number, tags?: string[], callback?: Callback): void;
  unique(stat: string | string[], value: any, sampleRateOrTags?: number | string [], callback?: Callback): void;
  unique(stat: string | string[], value: any, callback?: Callback): void;
}
