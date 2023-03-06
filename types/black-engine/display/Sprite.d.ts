export class Sprite extends DisplayObject {
    constructor(texture?: Texture | string | null, useTextureProps?: boolean);
    private mTexture;
    private mTextureName;
    private mTiling;
    private mSlice9grid;
    private mUseTextureProps;
    set texture(arg: Texture);
    get texture(): Texture;
    onGetLocalBounds(outRect?: Rectangle): Rectangle;
    set slice9grid(arg: Rectangle);
    get slice9grid(): Rectangle;
    set textureName(arg: string);
    get textureName(): string;
    set tiling(arg: any);
    get tiling(): any;
}
import { DisplayObject } from './DisplayObject';
import { Texture } from '../textures/Texture';
import { Rectangle } from '../geom/Rectangle';
