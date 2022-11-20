import { Cart } from './cart';
import { Customer } from './customers';
import {
    Color,
    DateTime,
    CurrencyCode,
    UnitSystem,
    FilterType,
    ID,
    LanguageCode,
    CountryCode,
    MetafieldParentResource,
    MetafieldReference,
    Node,
    URL,
} from './graphql';
import { Blog, Menu, Page, Shop } from './online_store';
import { Collection, Product, MediaImage } from './products';

export interface ApiVersion {
    displayName: string;
    handle: string;
    supported: boolean;
}

export interface Attribute {
    key: string;
    value?: string;
}

export interface Brand {
    colors: BrandColors;
    coverImage?: MediaImage;
    logo?: MediaImage;
    shortDescription?: string;
    slogan?: string;
    squareLogo?: MediaImage;
}

export interface BrandColorGroup {
    background: Color;
    foreground: Color;
}

export interface BrandColors {
    primary: BrandColorGroup[];
    secondary: BrandColorGroup[];
}

export interface ContentEntry extends Node {
    field?: Metafield;
    handle: string;
    type: string;
    updatedAt: DateTime;
}

export interface Country {
    availableLanguages: Language[];
    currency: Currency;
    isoCode: CurrencyCode;
    name: string;
    unitSystem: UnitSystem;
}

export interface Currency {
    isoCode: CurrencyCode;
    name: string;
    symbol: string;
}

export interface Domain {
    host: string;
    sslEnabled: boolean;
    url: URL;
}

export interface Filter {
    id: string;
    label: string;
    type: FilterType;
    values: FilterValue[];
}

export interface FilterValue {
    count: number;
    id: string;
    input: JSON;
    label: string;
}

export interface Image {
    altText?: string;
    height?: number;
    id?: ID;
    url: URL;
    width?: number;
    /**
     * @deprecated
     */
    originalSrc: URL;
    /**
     * @deprecated
     */
    src: URL;
    /**
     * @deprecated
     */
    transformedSrc: URL;
}

export interface Language {
    endonymName: string;
    isoCode: LanguageCode;
    name: string;
}

export interface Localization {
    availableCountries: Country[];
    availableLanguages: Language[];
    country: Country;
    language: Language;
}

export interface MailingAddress extends Node {
    address1?: string;
    address2?: string;
    city?: string;
    company?: string;
    country?: string;
    countryCodeV2?: CountryCode;
    firstName?: string;
    formatted: string[];
    formattedArea?: string;
    lastName?: string;
    latitude?: number;
    longitude?: number;
    name?: string;
    phone?: string;
    province?: string;
    provinceCode?: string;
    zip?: string;
    /**
     * @deprecated
     */
    countryCode?: string;
}

export interface Metafield extends Node {
    createdAt: DateTime;
    description?: string;
    key: string;
    namespace: string;
    parentResource: MetafieldParentResource;
    reference?: MetafieldReference;
    type: string;
    updatedAt: DateTime;
    value: string;
}

export interface MoneyV2 {
    amount: number;
    currencyCode: CurrencyCode;
}

export interface PageInfo {
    endCursor?: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
}

export interface QueryRoot {
    blog?: Blog;
    cart?: Cart;
    collection?: Collection;
    contentEntry?: ContentEntry;
    customer?: Customer;
    localization: Localization;
    menu?: Menu;
    node?: Node;
    nodes: Node[];
    page?: Page;
    product?: Product;
    productRecommendations?: Product[];
    publicApiVersions: ApiVersion[];
    shop: Shop;
    /**
     * @deprecated
     */
    blogByHandle?: Blog;
    /**
     * @deprecated
     */
    collectionByHandle?: Collection;
    /**
     * @deprecated
     */
    pageByHandle?: Page;
    /**
     * @deprecated
     */
    productByHandle?: Product;
}

export interface SEO {
    description?: string;
    title?: string;
}
