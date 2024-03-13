declare function factory(protocols: Record<string, (url: any, options?: any) => unknown>): typeof fetch;

export = factory;
