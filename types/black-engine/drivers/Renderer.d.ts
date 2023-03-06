export class Renderer {
    static getColoredTexture(texture: Texture, color: number | null): Texture;
    gameObject: DisplayObject | null;
    parent: Renderer | null;
    skipChildren: boolean;
    skipSelf: boolean;
    endPassRequired: boolean;
    endPassRequiredAt: number;
    alpha: number;
    blendMode: BlendMode;
    color: number | null;
    preRender(driver: VideoNullDriver, session: RenderSession): void;
    begin(driver: VideoNullDriver, session: RenderSession): void;
    upload(driver: VideoNullDriver, session: RenderSession): void;
    render(driver: VideoNullDriver, session: RenderSession): void;
    end(driver: VideoNullDriver, session: RenderSession): void;
}
export namespace Renderer {
    const __colorCache: MapMap;
    const __dirty: boolean;
    const skipUnchangedFrames: boolean;
}
import { BlendMode } from './BlendMode';
import { Texture } from '../textures/Texture';
import { MapMap } from '../utils/MapMap';
import { RenderSession } from './RenderSession';
import { VideoNullDriver } from './VideoNullDriver';
import { DisplayObject } from '../display/DisplayObject';
