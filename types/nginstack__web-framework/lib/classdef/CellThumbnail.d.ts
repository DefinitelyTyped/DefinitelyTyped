export = CellThumbnail;
declare function CellThumbnail(): void;
declare class CellThumbnail {
    onGetImages: Adapter;
    width: number | string;
    private width_;
    height: number | string;
    private height_;
    zoomMaxWidth: number | string;
    private zoomMaxWidth_;
    zoomMaxHeight: number | string;
    private zoomMaxHeight_;
    visible: boolean;
    visible_: boolean;
    zoomOnHover: boolean;
    private assignProperties_;
    assignFrom(obj: any): void;
    clone(): CellThumbnail;
    getImages(key: number | null): string[];
}
import Adapter = require("@nginstack/engine/lib/event/Adapter.js");
