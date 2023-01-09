import Service from "@ember/service";

export interface FastbootRequest {
  /** The cookies for the current request. */
  cookies: Record<string, unknown>;

  /** The headers for the current request. */
  headers: Pick<Headers, "has" | "get">;

  /**
   * The host of the request that the current FastBoot server is responding to
   * (`example.com` or `localhost:3000`).
   * Retrieving host will error on 2 conditions:
   * 1. you do not have a hostWhitelist defined
   * 2. the Host header does not match an entry in your hostWhitelist
   */
  host: string;

  /** The query parameters for the current request, as a key-value pair. */
  queryParams: Record<string, unknown>;

  /**
   * The path (`/` or `/some-path`) of the request that the current FastBoot
   * server is responding to.
   */
  path: string;

  /**
   * The protocol (`http:` or `https:`) of the request that the current
   * FastBoot server is responding to.
   */
  protocol: string;

  /**
   * The request type of the request that the current
   * FastBoot server is responding to.
   */
  method: string;

  /** Contains key-value pairs of data submitted in the request body. */
  body: Record<string, unknown>;
}

export interface Shoebox {
  put(key: string, value: unknown): void;
  retrieve(key: string): unknown;
}

export default class FastBoot extends Service {
  /** Allows you to check if you are running within FastBoot. */
  isFastBoot: boolean;

  /**
   * A request object which exposes details about the current request being
   * handled by FastBoot.
   */
  request: FastbootRequest;

  /**
   * You can pass application state from the FastBoot rendered application to
   * the browser rendered application using a feature called the "Shoebox".
   * This allows you to leverage server API calls made by the FastBoot rendered
   * application on the browser rendered application. Thus preventing you from
   * duplicating work that the FastBoot application is performing. This should
   * result in a performance benefit for your browser application, as it does
   * not need to issue server API calls whose results are available from the
   * Shoebox.
   */
  shoebox: Shoebox;

  /**
   * By default, FastBoot waits for the `beforeModel`, `model`, and
   * `afterModel` hooks to resolve before sending the response back to the
   * client. If you have asynchrony that runs outside of those contexts, your
   * response may not reflect the state that you want.
   * To solve this, the `fastboot` service has `deferRendering` method that
   * accepts a promise. It will chain all promises passed to it, and the
   * FastBoot server will wait until all of these promises resolve before
   * sending the response to the client. These promises must be chained before
   * the rendering is complete after the model hooks. For example, if a
   * component that is rendered into the page makes an async call for data,
   * registering a promise to be resolved in its `init` hook would allow the
   * component to defer the rendering of the page.
   */
  deferRendering(promise: Promise<unknown>): void;
}

declare module "@ember/service" {
  interface ServiceRegistry {
    fastboot: FastBoot;
  }
}
