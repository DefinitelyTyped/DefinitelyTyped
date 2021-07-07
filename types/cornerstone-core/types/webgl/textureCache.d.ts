declare namespace _default {
    export { purgeCache };
    export { getImageTexture };
    export { putImageTexture };
    export { removeImageTexture };
    export { setMaximumSizeBytes };
}
export default _default;
declare function purgeCache(): void;
declare function getImageTexture(imageId: any): any;
declare function putImageTexture(image: any, imageTexture: any): void;
declare function removeImageTexture(imageId: any): any;
declare function setMaximumSizeBytes(numBytes: any): void;
