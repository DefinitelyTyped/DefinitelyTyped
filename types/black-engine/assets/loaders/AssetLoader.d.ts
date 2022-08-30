export class AssetLoader extends MessageDispatcher {
    constructor(url: string);
    protected mUrl: string;
    protected mData: any;
    private mIsLoaded;
    private mNumOwners;
    load(): void;
    abort(): void;
    protected onAbort(): void;
    protected onLoad(): void;
    protected onError(): void;
    get data(): any;
    get url(): string;
}
import { MessageDispatcher } from '../../messages/MessageDispatcher';
