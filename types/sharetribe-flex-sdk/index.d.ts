export interface ImageVariant {
    name: string;
    width: number;
    height: number;
    url: string;
}

export interface ImageVariants {
    [key: string]: ImageVariant;
}

export interface BrandingImageAttributes {
    variants: ImageVariants;
}

export interface BrandingImage {
    id: string;
    type: string;
    attributes: BrandingImageAttributes;
}

export interface MarketplaceColors {
    primaryButton: string;
    notificationPrimaryButton: string;
    mainColor: string;
}

export interface BrandingData {
    marketplaceColors: MarketplaceColors;
}

export interface Branding {
    data: BrandingData;
    included: BrandingImage[];
}

export interface UUID {
    _sdkType?: "UUID";
    uuid: string;
}

export interface MarketplaceAttributes {
    name: string;
    description: string | null;
}

export interface MarketplaceData {
    id: UUID;
    type: "marketplace";
    attributes: MarketplaceAttributes;
}

export interface MarketplaceDataResponse {
    data: MarketplaceData;
}

export interface MarketplaceSdk {
    marketplace: {
        show: () => Promise<{ status: number; statusText: string; data: MarketplaceDataResponse }>;
    };
    assetByAlias: (params: { path: string; alias: string }) => Promise<{ status?: number; data: unknown }>;
    Branding: Branding;
}

export function createInstance(config: { clientId: string }): MarketplaceSdk;
