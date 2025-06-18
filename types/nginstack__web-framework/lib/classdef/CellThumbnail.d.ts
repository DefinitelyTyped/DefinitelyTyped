export = CellThumbnail;
declare function CellThumbnail(): void;
declare class CellThumbnail {
    onGetImages: LegacyEvent;
    width: number;
    height: number;
    zoomMaxWidth: number;
    zoomMaxHeight: number;
    visible: boolean;
    zoomOnHover: boolean;
    private assignProperties_;
    assignFrom(obj: any): void;
    clone(): CellThumbnail;
    getImages(key: number | null): string[];
}
import LegacyEvent = require("@nginstack/engine/lib/event/LegacyEvent.js");
