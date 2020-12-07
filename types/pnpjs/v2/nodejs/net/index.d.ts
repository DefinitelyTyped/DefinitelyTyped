import { HttpsProxyAgent } from "https-proxy-agent";
export { AdalCertificateFetchClient } from "./adalcertificatefetchclient";
export { AdalFetchClient } from "./adalfetchclient";
export { BearerTokenFetchClient } from "./bearertokenfetchclient";
export { NodeFetchClient } from "./nodefetchclient";
export { SPFetchClient } from "./spfetchclient";
export { MsalFetchClient } from "./msalfetchclient";
declare module "pnpjs/common" {
    interface IConfigOptions {
        agent?: HttpsProxyAgent;
    }
}
//# sourceMappingURL=index.d.ts.map