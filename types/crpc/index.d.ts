declare namespace crpc {
    type Client = <TRes>(path: string, body: any, options?: {} | null) => Promise<TRes>;
}

export = crpc;
declare function crpc(baseUrl: string, options?: {}): crpc.Client;
