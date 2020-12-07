import { IConfigOptions } from "../../common";
import { HttpsProxyAgent } from "https-proxy-agent";
export declare function configureProxyOptions<T extends IConfigOptions>(opts: T): T & {
    agent: typeof HttpsProxyAgent;
};
/**
 * Sets the given url as a proxy on all requests
 *
 * @param url The url of the proxy
 */
export declare function setProxyUrl(url: string): void;
/**
 * Sets the given agent as a proxy on all requests
 *
 * @param url The proxy agent to use
 */
export declare function setProxyAgent(agent: any): void;
//# sourceMappingURL=proxy.d.ts.map