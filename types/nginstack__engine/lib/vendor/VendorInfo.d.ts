export = VendorInfo;
declare function VendorInfo(): void;
declare class VendorInfo {
    private logger_;
    private imagesCache_;
    name: string;
    legalName: string;
    siteUrl: string;
    systemName: string;
    logoUrl: number;
    logoTitle: string;
    footerLogoUrl: number;
    footerLogoTitle: string;
    appBarLogoUrl: string;
    faviconUrl: string;
    private loadImagesSettings_;
    getImages(colorScheme: string): ColorSchemeImages;
    configureImages(images: { light: ColorSchemeImages; dark: ColorSchemeImages }): void;
}
declare namespace VendorInfo {
    export { ColorSchemeImages };
}
interface ColorSchemeImages {
    logo: number;
    footerLogo: number;
    appBarLogo: number;
    favicon: number;
}
