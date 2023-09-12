import * as React from "react";
// tslint:disable-next-line strict-export-declare-modifiers interface-over-type-literal
export declare type ServerContextType = {
    location?: {
        pathname: string;
        search: string;
    } | undefined;
};
declare const ServerContext: React.Context<ServerContextType | undefined>;
export default ServerContext;
