import { ApiResponse } from "./storage";

/**
 * This class allows you interact with Google Cloud Storage.
 */
export class Channel {
  stop(): Promise<[ApiResponse]>;
}

/**
 * Channel configuration.
 */
export interface ChannelConfig {
  address: string;
}
