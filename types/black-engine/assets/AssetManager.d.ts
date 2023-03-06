export class AssetManager extends MessageDispatcher {
    constructor();
    private mDefaultPath;
    private mTotalLoaded;
    private mTotalPending;
    private mTotalErrors;
    private mIsAllLoaded;
    private mLoadingProgress;
    private mQueue;
    private mLoadersQueue;
    private mState;
    private mLoaderFactory;
    mAssets: {};
    mAssetTypeMap: {};
    mLoaderTypeMap: {};
    registerDefaultTypes(): void;
    setAssetType(name: string, type: string): void;
    setLoaderType(name: string, type: string): void;
    enqueueAsset(name: string, asset: Asset): void;
    private __getAsset;
    addTexture(name: string, texture: Texture): void;
    enqueueImage(name: string, url: string): void;
    enqueueAtlas(name: string, imageUrl: string, dataUrl: string): void;
    enqueueBitmapFont(name: string, imageUrl: string, xmlUrl: string): void;
    enqueueXML(name: string, url: string): void;
    enqueueJSON(name: string, url: string): void;
    enqueueVector(name: string, url: string): void;
    enqueueVectorTexture(
        name: string,
        url: string,
        bakeSelf?: boolean,
        bakeChildren?: boolean,
        namesToBake?: string[],
    ): void;
    enqueueSound(name: string, url: string): void;
    enqueueSoundAtlas(name: string, soundUrl: string, dataUrl: string): void;
    enqueueFont(name: string, url: string): void;
    enqueueGoogleFont(name: string): void;
    loadQueue(): void;
    protected onAssetLoaded(msg: Message): void;
    onAssetError(msg: any): void;
    getBitmapFont(name: string): BitmapFontData | null;
    getTexture(name: string): Texture | null;
    getGraphicsData(name: string): GraphicsData;
    getTextures(nameMask: string): Texture[] | null;
    getAtlas(name: string): AtlasTexture | null;
    getSound(name: string): SoundClip;
    getSoundAtlas(name: string): SoundClip;
    getJSON(name: string): any;
    getCustomAsset(type: string, name: string): any;
    __validateState(): void;
    __validateName(type: any, name: any): void;
    dispose(): void;
    set defaultPath(arg: string);
    get defaultPath(): string;
    get isAllLoaded(): boolean;
    get numErrors(): number;
    get state(): string;
}
import { MessageDispatcher } from '../messages/MessageDispatcher';
import { Asset } from './Asset';
import { Texture } from '../textures/Texture';
import { Message } from '../messages/Message';
import { BitmapFontData } from './BitmapFontAsset';
import { GraphicsData } from '../display/GraphicsData';
import { AtlasTexture } from '../textures/AtlasTexture';
import { SoundClip } from '../audio/SoundClip';
