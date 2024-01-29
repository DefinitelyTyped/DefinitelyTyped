import C3DTilesTypes from "./C3DTilesTypes";

declare class C3DTExtensions {
    registerExtension(extensionName: string, extensionManagers: any): void; // TODO
    getExtension(extensionName: string, type: C3DTilesTypes): object; // TODO
    isExtensionRegistered(extensionName: string): boolean;
    parseExtensions(extensionsJSON: object, type: C3DTilesTypes): object; // TODO
}

export default C3DTExtensions;
