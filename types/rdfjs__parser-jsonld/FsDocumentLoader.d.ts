export default class FsDocumentLoader {
    constructor(map: Map<string, string> | Record<string, string>);
    load(url: string): Promise<unknown>;
}
