import Config = require("./types/config");
import Helpers = require("./types/helpers");
import Response = require("./types/response");

// Re-export all types from submodules for direct access
export * from "./types/config";
export * from "./types/helpers";
export * from "./types/response";

export {};

export interface InitConfig {
    key: string;
    visitor?: "auto" | "persistent" | null | string;
    language?: string;
    collect_email?: boolean;
    formatters?: {
        [key: string]: CallableFunction;
    };
    globals?: {
        [key: string]: unknown;
    };
    debug?: {
        enable?: boolean;
        level?: "warn" | "log" | "error";
        collect?: boolean;
    };

    [key: string]: unknown;
}

export type SearchEndpoints = Extract<keyof ConfigTypes, `search/${string}`>;
export type RecommendationsEndpoints = Extract<keyof ConfigTypes, `recommendations/${string}`>;
export type ClerkEndpoints = keyof ConfigTypes;

export type ClerkObject = Record<string, unknown>;

export interface ClerkErrorResponse {
    status: string;
    message: string;
    type: string;
}

export interface ClerkContent {
    more: (param: number) => void;
    param: (param: string) => void;
    element: HTMLElement;
    id: string;
}

export interface ConfigTypes {
    "search/search": Config.searchSearchConfig;
    "search/predictive": Config.searchPredictiveConfig;
    "search/suggestions": Config.searchSuggestionsConfig;
    "search/categories": Config.searchCategoriesConfig;
    "search/pages": Config.searchPagesConfig;
    "search/popular": Config.searchPopularConfig;
    "recommendations/popular": Config.recommendationsPopularConfig;
    "recommendations/trending": Config.recommendationsTrendingConfig;
    "recommendations/new": Config.recommendationsNewConfig;
    "recommendations/currently_watched": Config.recommendationsCurrentlyWatchedConfig;
    "recommendations/recently_bought": Config.recommendationsRecentlyBoughtConfig;
    "recommendations/keywords": Config.recommendationsKeywordsConfig;
    "recommendations/complementary": Config.recommendationsComplementaryConfig;
    "recommendations/substituting": Config.recommendationsSubstitutingConfig;
    "recommendations/most_sold_with": Config.recommendationsMostSoldWithConfig;
    "recommendations/category/popular": Config.recommendationsCategoryPopularConfig;
    "recommendations/category/trending": Config.recommendationsCategoryTrendingConfig;
    "recommendations/category/new": Config.recommendationsCategoryNewConfig;
    "recommendations/category/popular_subcategories": Config.recommendationsCategoryPopularSubcategoriesConfig;
    "recommendations/visitor/history": Config.recommendationsVisitorHistoryConfig;
    "recommendations/visitor/complementary": Config.recommendationsVisitorComplementaryConfig;
    "recommendations/visitor/substituting": Config.recommendationsVisitorSubstitutingConfig;
    "recommendations/customer/history": Config.recommendationsCustomerHistoryConfig;
    "recommendations/customer/complementary": Config.recommendationsCustomerComplementaryConfig;
    "recommendations/customer/substituting": Config.recommendationsCustomerSubstitutingConfig;
    "recommendations/page/substituting": Config.recommendationsPageSubstitutingConfig;
    "recommendations/page/product": Config.recommendationsPageProductConfig;
    "recommendations/page/category": Config.recommendationsPageCategoryConfig;
    "recommendations/page/related_products": Config.recommendationsPageRelatedProductsConfig;
    "recommendations/page/related_categories": Config.recommendationsPageRelatedCategoriesConfig;
}

export interface ResponseTypes {
    "search/search": Response.searchSearchResponse;
    "search/predictive": Response.searchPredictiveResponse;
    "search/suggestions": Response.searchSuggestionsResponse;
    "search/categories": Response.searchCategoriesResponse;
    "search/pages": Response.searchPagesResponse;
    "search/popular": Response.searchPopularResponse;
    "recommendations/popular": Response.recommendationsPopularResponse;
    "recommendations/trending": Response.recommendationsTrendingResponse;
    "recommendations/new": Response.recommendationsNewResponse;
    "recommendations/currently_watched": Response.recommendationsCurrentlyWatchedResponse;
    "recommendations/recently_bought": Response.recommendationsRecentlyBoughtResponse;
    "recommendations/keywords": Response.recommendationsKeywordsResponse;
    "recommendations/complementary": Response.recommendationsComplementaryResponse;
    "recommendations/substituting": Response.recommendationsSubstitutingResponse;
    "recommendations/most_sold_with": Response.recommendationsMostSoldWithResponse;
    "recommendations/category/popular": Response.recommendationsCategoryPopularResponse;
    "recommendations/category/trending": Response.recommendationsCategoryTrendingResponse;
    "recommendations/category/new": Response.recommendationsCategoryNewResponse;
    "recommendations/category/popular_subcategories": Response.recommendationsCategoryPopularSubcategoriesResponse;
    "recommendations/visitor/history": Response.recommendationsVisitorHistoryResponse;
    "recommendations/visitor/complementary": Response.recommendationsVisitorComplementaryResponse;
    "recommendations/visitor/substituting": Response.recommendationsVisitorSubstitutingResponse;
    "recommendations/customer/history": Response.recommendationsCustomerHistoryResponse;
    "recommendations/customer/complementary": Response.recommendationsCustomerComplementaryResponse;
    "recommendations/customer/substituting": Response.recommendationsCustomerSubstitutingResponse;
    "recommendations/page/substituting": Response.recommendationsPageSubstitutingResponse;
    "recommendations/page/product": Response.recommendationsPageProductResponse;
    "recommendations/page/category": Response.recommendationsPageCategoryResponse;
    "recommendations/page/related_products": Response.recommendationsPageRelatedProductsResponse;
    "recommendations/page/related_categories": Response.recommendationsPageRelatedCategoriesResponse;
}

/**
 * @see https://docs.clerk.io/docs/clerkjs-custom-api-calls
 * @description Calls a Clerk.js endpoint
 */
export function Clerk<T extends ClerkEndpoints>(
    method: "call",
    endpoint: T,
    config: ConfigTypes[T],
    callback?: (response: ResponseTypes[T]) => void,
    error?: (error: ClerkErrorResponse) => void,
): void;
/**
 * @see https://docs.clerk.io/docs/clerkjs-configuration
 */
export function Clerk(method: "config", config: InitConfig): void;
/**
 * @see https://docs.clerk.io/docs/clerkjs-shopping-cart#customising-add-to-cart-functionality
 * @description Defines a custom callback for the cart updates
 */
export function Clerk(method: "config", config: string, callback: (...args: unknown[]) => void): void;
/**
 * @see https://docs.clerk.io/docs/chat
 * @description Similar to the shopping cart API, the Chat API allows you to configure hooks for chat events and perform various actions through simple commands
 */
export function Clerk(method: "chat", action: "open" | "close" | "toggle" | "clear" | "enable" | "disable"): void;
/**
 * @see https://docs.clerk.io/docs/chat
 * @description Displays toast notification with supplied arguments
 */
export function Clerk(method: "chat", action: "toast", text: string, emoji?: string): void;
/**
 * @see https://docs.clerk.io/docs/chat
 * @description Sends message as user or assistant
 */
export function Clerk(method: "chat", action: "user_message" | "assistant_message", text: string): void;
/**
 * @see https://docs.clerk.io/docs/chat
 * @description Listens to Chat events and adds a callback for specified event
 */
export function Clerk(
    method: "chat",
    action: "on",
    event: "message" | "open" | "enable" | "support",
    callback: () => void,
): void;
/**
 * @see https://docs.clerk.io/docs/ui
 * @description Displays a popup or slider UI element
 */
export function Clerk(method: "ui", ui: "popup" | "slider", css_selector: string, action?: "show" | "hide"): void;
export function Clerk(
    method: "on",
    event: "live_search_update" | "rendered" | "render" | "response" | "update" | "model",
    callback: (content: ClerkContent, data?: any) => void,
): void;
export function Clerk(
    method: "on",
    event: "live_search_update" | "rendered" | "render" | "response" | "update" | "model",
    css_selector: string,
    callback: (content: ClerkContent, data: any) => void,
): void;
/**
 * @description Load more results
 * @see https://docs.clerk.io/docs/clerkjs-content
 */
export function Clerk(method: "content", selector: string, action: "more", number: number): void;
/**
 * @description JavaScript interface for interacting with Clerk.js Content
 * @see https://docs.clerk.io/docs/clerkjs-content
 */
export function Clerk(
    method: "content",
    selector: string,
    config?: unknown,
    content?: (content: ClerkContent) => void,
): void;
/**
 * Clerk uses Shopping Cart tracking for two purposes:
 * 1. Adding products to the cart through Clerk elements
 * 2. Tracking the content of the cart for use in Abandon Cart emails
 *
 * @see https://docs.clerk.io/docs/clerkjs-shopping-cart
 * @description Adds, sets, or removes an item from the shopping cart
 */
export function Clerk(
    method: "cart",
    action: "add" | "set" | "remove",
    id: string | number | string[] | number[],
): void;
/**
 * @see https://docs.clerk.io/docs/clerkjs-click-tracking
 * @description Adds click tracking to elements with the data-clerk-product-id attribute
 */
export function Clerk(method: "click", selector: "*[data-clerk-product-id]" | string): void;
/**
 * @description Product view tracking
 */
export function Clerk(method: "product", productId: string): void;

declare global {
    interface Window {
        /**
         * @link https://docs.clerk.io/
         */
        Clerk?: typeof Clerk;
    }
}
