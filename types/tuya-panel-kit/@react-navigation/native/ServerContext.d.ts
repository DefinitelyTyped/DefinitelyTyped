import * as React from 'react';
export declare type ServerContextType = {
    location?: {
        pathname: string;
        search: string;
    };
};
declare const ServerContext: React.Context<ServerContextType | undefined>;
export default ServerContext;
