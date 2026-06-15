export = GetImagesEvent;
declare function GetImagesEvent(): void;
declare class GetImagesEvent {
    imageUrls: string[];
    target: import('./CellThumbnail.js');
    value: (number | (string | null)) | null;
}
