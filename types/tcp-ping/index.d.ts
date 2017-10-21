// Type definitions for tcp-ping 0.1
// Project: https://github.com/wesolyromek/tcp-ping/issues
// Definitions by: JUNG YONG WOO <https://github.com/stegano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Option {
    address?: string;
    port?: number;
    attempts?: number;
    timeout?: number;
}

/**
 * ping
 * @param options {Object}
 * @param callback {Function}
 * @return void
 */
export function ping(options: Option,
              callback: (error: Error, result: {
                  address: string,
                  port: number,
                  attempts: number,
                  avg: number,
                  max: number,
                  min: number,
                  results: {
                      seq: number,
                      time: number,
                      error: Error
                  }
              }) => void): void;

/**
 * probe
 * @param address [string]
 * @param port [number]
 * @param callback {Function}
 * @return void
 */
export function probe(address: string, port: number,
               callback: (error: Error, result: {
                   address: string,
                   port: number,
                   attempts: number,
                   avg: number,
                   max: number,
                   min: number,
                   results: {
                       seq: number,
                       time: number,
                       error: Error
                   }
               }) => void): void;
