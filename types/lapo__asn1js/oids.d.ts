declare let oids: {
    [key: string]: {
        d: string;
        c: string;
        w?: boolean | undefined;
    };
};

export = oids;

export as namespace oids;
