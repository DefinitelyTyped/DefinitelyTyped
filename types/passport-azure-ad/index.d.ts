// Type definitions for passport-azure-ad 4.0
// Project: https://github.com/AzureAD/passport-azure-ad#readme
// Definitions by: Shekhar Nain <https://github.com/ShekharNain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export { ITokenPayload, VerifyCallback } from "./common";
export {
    BearerStrategy,
    IBearerStrategyOption,
    IBearerStrategyOptionWithRequest,
    VerifyBearerFunction,
    VerifyBearerFunctionWithReq
} from "./bearer-strategy";
export {
    OIDCStrategy,
    IOIDCStrategyOption,
    IOIDCStrategyOptionWithRequest,
    IProfile,
    VerifyOIDCFunction,
    VerifyOIDCFunctionWithReq
} from "./oidc-strategy";
