import * as React from "react";
// tslint:disable:interface-over-type-literal
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type ServerContextType = {
    location?: {
        pathname: string;
        search: string;
    } | undefined;
};
declare const ServerContext: React.Context<ServerContextType | undefined>;
export default ServerContext;
