import { PaymentSettings } from './checkout';
import { SEO, Brand, Domain, Image } from './common';
import { HasMetafields, OnlineStorePublishable, DateTime, ID, MenuItemType, CountryCode, Node, URL } from './graphql';

export interface Article extends Node, HasMetafields, OnlineStorePublishable {
    authorV2?: ArticleAuthor;
    blog: Blog;
    content: string;
    contentHtml: string;
    excerpt?: string;
    excerptHtml?: string;
    handle: string;
    image?: Image;
    publishedAt: DateTime;
    seo?: SEO;
    tags: string[];
    title: string[];
    /**
     * @deprecated
     */
    author: ArticleAuthor;
    comments: Comment[];
}

export interface ArticleAuthor {
    bio?: string;
    email: string;
    firstName: string;
    lastName: string;
    name: string;
}

export interface Blog extends Node, HasMetafields, OnlineStorePublishable {
    articleByHandle?: Article;
    authors: ArticleAuthor[];
    handle: string;
    seo?: SEO;
    title: string;
    articles: Article[];
}

export interface Comment extends Node {
    author: CommentAuthor;
    content: string;
    contentHtml: string;
}

export interface CommentAuthor {
    email: string;
    name: string;
}

export interface LocationAddress {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    formatted: string[];
    latitude?: number;
    longitude?: number;
    phone?: string;
    province?: string;
    provinceCode?: string;
    zip?: string;
}

export interface Menu extends Node {
    handle: string;
    items: MenuItem[];
    itemsCount: number;
    title: string;
}

export interface MenuItem extends Node {
    items: MenuItem[];
    resourceId?: ID;
    tags: string[];
    type: MenuItemType;
    url: URL;
}

export interface Page extends Node, HasMetafields, OnlineStorePublishable {
    body: string;
    bodySummary: string;
    createdAt: DateTime;
    handle: string;
    seo: SEO;
    title: string;
    updatedAt: DateTime;
}

export interface Shop extends Node, HasMetafields {
    brand?: Brand;
    description?: string;
    moneyFormat: string;
    name: string;
    paymentSettings: PaymentSettings;
    primaryDomain: Domain;
    privacyPolicy?: ShopPolicy;
    refundPolicy?: ShopPolicy;
    shippingPolicy?: ShopPolicy;
    shipsToCountries: CountryCode;
    subscriptionPolicy?: ShopPolicyWithDefault;
    termsOfService?: ShopPolicy;
}

export interface ShopPolicy extends Node {
    body: string;
    handle: string;
    title: string;
    url: URL;
}

export interface ShopPolicyWithDefault {
    body: string;
    handle: string;
    id?: ID;
    title: string;
    url: URL;
}

export interface UrlRedirect extends Node {
    path: string;
    target: string;
}
