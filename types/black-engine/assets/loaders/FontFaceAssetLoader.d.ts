export class FontFaceAssetLoader extends AssetLoader {
    constructor(name: string, url: string, isLocal: boolean);
    private mName;
    private mTestingFontName;
    private mIsLocal;
    private mTestingString;
    private mCheckDelay;
    private mTestingElement;
    private metrics;
    private mLoaderElement;
    private mDefaultFontWidth;
    private mTimeoutHandle;
    private __getLoaderElement;
    private __getTestingElement;
    private __checkLoadingStatus;
}
import { AssetLoader } from './AssetLoader';
