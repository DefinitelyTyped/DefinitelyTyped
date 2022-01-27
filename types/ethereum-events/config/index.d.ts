export interface EthereumEventsConfig {
  /** period between polls in milliseconds (default: 13000) */
  pollInterval?: number;
  /** n° of confirmation blocks (default: 12) */
  confirmations?: number;
  /** n° of blocks to fetch at a time (default: 10000) */
  chunkSize?: number;
  /** maximum n° of concurrent web3 requests (default: 10) */
  concurrency?: number;
  /** retry back-off in milliseconds (default: 1000) */
  backoff?: number;
}
