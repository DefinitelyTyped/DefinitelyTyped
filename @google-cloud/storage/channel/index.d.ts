// Type definitions for @google-cloud/storage v0.7.0
// Project: https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/packages/storage/src/channel.js
// Definitions by: Brian Love <http://brianflove.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IApiResponse } from "../storage";

declare module "@google-cloud/storage/channel" {

  /**
   * This class allows you interact with Google Cloud Storage.
   * @class Channel
   */
  export class Channel {
    stop(): Promise<[IApiResponse]>;
  }

  /**
   * Channel configuration.
   * @interface IChannelConfig
   */
  export interface IChannelConfig {
    address: string;
  }
}