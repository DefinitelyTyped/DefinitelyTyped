import { ApiResponse } from "../storage";

declare module "@google-cloud/storage/channel" {

  /**
   * This class allows you interact with Google Cloud Storage.
   * @class Channel
   */
  export class Channel {
    stop(): Promise<[ApiResponse]>;
  }

  /**
   * Channel configuration.
   * @interface ChannelConfig
   */
  export interface ChannelConfig {
    address: string;
  }
}