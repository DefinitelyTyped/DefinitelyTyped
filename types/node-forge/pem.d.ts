declare module "node-forge" {
    namespace pem {
        interface EncodeOptions {
            maxline?: number | undefined;
        }

        interface ObjectPEM {
            type: string;
            body: Bytes;
            procType?: any;
            contentDomain?: any;
            dekInfo?: any;
            headers?: any[] | undefined;
        }

        function encode(msg: ObjectPEM, options?: EncodeOptions): string;
        function decode(str: string): ObjectPEM[];
    }
}
