import { StoreAvailability } from './checkout';
import { SEO, MoneyV2, Image } from './common';
import {
    HasMetafields,
    OnlineStorePublishable,
    DateTime,
    Media,
    WeightUnit,
    SellingPlanCheckoutChargeType,
    SellingPlanCheckoutChargeValue,
    SellingPlanPriceAdjustmentValue,
    UnitPriceMeasurementMeasuredType,
    UnitPriceMeasurementMeasuredUnit,
    Node,
    URL,
} from './graphql';

export interface Collection extends Node, HasMetafields, OnlineStorePublishable {
    description: string;
    descriptionHtml: string;
    handle: string;
    image: Image;
    seo: SEO;
    title: string;
    updatedAt: DateTime;
    products: Product[];
}

// export interface ExternalVideo {}

export interface GenericFile extends Node {
    alt?: string;
    mimeType?: string;
    originalFileSize?: number;
    previewImage?: Image;
    url?: URL;
}

export interface MediaImage extends Node, Media {
    image: Image;
}

// export interface Model3d {}

// export interface Model3dSource {}

export interface Product extends Node, HasMetafields, OnlineStorePublishable {
    availableForSale: boolean;
    compareAtPriceRange: ProductPriceRange;
    createdAt: DateTime;
    description: string;
    descriptionHtml: string;
    featuredImage: Image;
    handle: string;
    isGiftCard: boolean;
    options: ProductOption[];
    priceRange: ProductPriceRange;
    productType: string;
    publishedAt: DateTime;
    requiresSellingPlan: boolean;
    seo: SEO;
    tags: string[];
    title: string;
    totalInventory?: number;
    updatedAt: DateTime;
    variantBySelectedOptions?: ProductVariant;
    vendor: string;
    collections: Collection[];
    images: Image[];
    media: Media[];
    sellingPlanGroups: SellingPlanGroup[];
    variants: ProductVariant[];
}

export interface ProductOption extends Node {
    name: string;
    values: string;
}

export interface ProductPriceRange {
    maxVariantPrice: MoneyV2;
    minVariantPrice: MoneyV2;
}

export interface ProductVariant extends Node, HasMetafields {
    availableForSale: boolean;
    barcode: string;
    compareAtPrice: MoneyV2;
    currentlyNotInStock: boolean;
    image: Image;
    price: MoneyV2;
    product: Product;
    quantityAvailable?: number;
    requiresShipping: boolean;
    selectedOptions: SelectedOption[];
    sku?: string;
    title: string;
    unitPrice?: MoneyV2;
    unitPriceMeasurement?: UnitPriceMeasurement;
    weight?: number;
    weightUnit?: WeightUnit;
    sellingPlanAllocations: SellingPlanAllocation[];
    storeAvailability: StoreAvailability[];
}

export interface SelectedOption {
    name: string;
    value: string;
}

export interface SellingPlan extends Node {
    checkoutCharge: SellingPlanCheckoutCharge;
    description?: string;
    name: string;
    options: SellingPlanOption[];
    priceAdjustments: SellingPlanPriceAdjustment[];
    recurringDeliveries: boolean;
}

export interface SellingPlanAllocation {
    checkoutChargeAmount: MoneyV2;
    priceAdjustments: SellingPlanAllocationPriceAdjustment[];
    remainingBalanceChargeAmount: MoneyV2;
    sellingPlan: SellingPlan;
}

export interface SellingPlanAllocationPriceAdjustment {
    compareAtPrice: MoneyV2;
    perDeliveryPrice: MoneyV2;
    price: MoneyV2;
    unitPrice?: MoneyV2;
}

export interface SellingPlanCheckoutCharge {
    type: SellingPlanCheckoutChargeType;
    value: SellingPlanCheckoutChargeValue;
}

export interface SellingPlanCheckoutChargePercentageValue {
    percentage: number;
}

export interface SellingPlanFixedAmountPriceAdjustment {
    adjustmentAmount: MoneyV2;
}

export interface SellingPlanFixedPriceAdjustment {
    price: MoneyV2;
}

export interface SellingPlanGroup {
    appName?: string;
    name: string;
    options: SellingPlanGroupOption[];
    sellingPlans: SellingPlan[];
}

export interface SellingPlanGroupOption {
    name: string;
    values: string[];
}

export interface SellingPlanOption {
    name: string;
    value: string;
}

export interface SellingPlanPercentagePriceAdjustment {
    adjustmentPercentage: number;
}

export interface SellingPlanPriceAdjustment {
    adjustmentValue: SellingPlanPriceAdjustmentValue;
    orderCount?: number;
}

export interface UnitPriceMeasurement {
    measuredType?: UnitPriceMeasurementMeasuredType;
    quantityUnit?: UnitPriceMeasurementMeasuredUnit;
    quantityValue: number;
    referenceUnit?: UnitPriceMeasurementMeasuredUnit;
    referenceValue: number;
}

export interface Video extends Node, Media {
    sources: VideoSource[];
}

export interface VideoSource {
    format: string;
    height: number;
    mimeType: string;
    url: string;
    width: number;
}
