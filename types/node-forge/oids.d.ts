declare module "node-forge" {
    const oids: typeof pki.oids;

    namespace pki {
        interface oids {
            [key: string]: string;
        }
        var oids: oids;
    }
}
