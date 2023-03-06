export class Asset extends MessageDispatcher {
    constructor(type: any, name: string);
    protected mType: string;
    protected mName: string;
    protected mData: any;
    protected mLoaders: AssetLoader[];
    private mNumLoaded;
    private mIsReady;
    addLoader(loader: AssetLoader): AssetLoader;
    onLoaderRequested(factory: LoaderFactory): void;
    private __onLoaderComplete;
    private __onLoaderError;
    protected onAllLoaded(): void;
    abort(): void;
    protected ready(data?: any): void;
    get type(): string;
    get name(): string;
    get data(): any;
    get isReady(): boolean;
    get loaders(): AssetLoader[];
}
import { MessageDispatcher } from '../messages/MessageDispatcher';
import { AssetLoader } from './loaders/AssetLoader';
import { LoaderFactory } from '../assets/LoaderFactory';
