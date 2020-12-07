/// <reference types="node" />
import { ODataParser } from "../../odata";
import { PassThrough } from "stream";
export interface IResponseBodyStream {
    body: PassThrough;
    knownLength: number;
}
export declare class StreamParser extends ODataParser<IResponseBodyStream> {
    protected parseImpl(r: Response, resolve: (value: any) => void): void;
}
declare module "pnpjs/sp/files/types" {
    /**
     * Gets a PassThrough stream representing the file
     */
    interface IFile {
        getStream(): Promise<IResponseBodyStream>;
    }
}
//# sourceMappingURL=stream.d.ts.map