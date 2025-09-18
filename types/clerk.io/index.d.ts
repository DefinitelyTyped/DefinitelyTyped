import type {
    searchCategoriesConfig,
    searchPagesConfig,
    searchPopularConfig,
    searchPredictiveConfig,
    searchSearchConfig,
    searchSuggestionsConfig,
    recommendationsPopularConfig,
    recommendationsTrendingConfig,
    recommendationsNewConfig,
    recommendationsCurrentlyWatchedConfig,
    recommendationsRecentlyBoughtConfig,
    recommendationsKeywordsConfig,
    recommendationsComplementaryConfig,
    recommendationsSubstitutingConfig,
    recommendationsMostSoldWithConfig,
    recommendationsCategoryPopularConfig,
    recommendationsCategoryTrendingConfig,
    recommendationsCategoryNewConfig,
    recommendationsCategoryPopularSubcategoriesConfig,
    recommendationsVisitorHistoryConfig,
    recommendationsVisitorComplementaryConfig,
    recommendationsVisitorSubstitutingConfig,
    recommendationsCustomerHistoryConfig,
    recommendationsCustomerComplementaryConfig,
    recommendationsCustomerSubstitutingConfig,
    recommendationsPageSubstitutingConfig,
    recommendationsPageProductConfig,
    recommendationsPageCategoryConfig,
    recommendationsPageRelatedProductsConfig,
    recommendationsPageRelatedCategoriesConfig
} from './types/config';
import type {
    searchCategoriesResponse,
    searchPagesResponse,
    searchPopularResponse,
    searchPredictiveResponse,
    searchSearchResponse,
    searchSuggestionsResponse,
    recommendationsPopularResponse,
    recommendationsTrendingResponse,
    recommendationsNewResponse,
    recommendationsCurrentlyWatchedResponse,
    recommendationsRecentlyBoughtResponse,
    recommendationsKeywordsResponse,
    recommendationsComplementaryResponse,
    recommendationsSubstitutingResponse,
    recommendationsMostSoldWithResponse,
    recommendationsCategoryPopularResponse,
    recommendationsCategoryTrendingResponse,
    recommendationsCategoryNewResponse,
    recommendationsCategoryPopularSubcategoriesResponse,
    recommendationsVisitorHistoryResponse,
    recommendationsVisitorComplementaryResponse,
    recommendationsVisitorSubstitutingResponse,
    recommendationsCustomerHistoryResponse,
    recommendationsCustomerComplementaryResponse,
    recommendationsCustomerSubstitutingResponse,
    recommendationsPageSubstitutingResponse,
    recommendationsPageProductResponse,
    recommendationsPageCategoryResponse,
    recommendationsPageRelatedProductsResponse,
    recommendationsPageRelatedCategoriesResponse
} from './types/response';

interface InitConfig {
    key: string;
    visitor?: 'auto' | 'persistent' | null | string;
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
        level?: 'warn' | 'log' | 'error';
        collect?: boolean;
    };

    [key: string]: unknown;
}

export type SearchEndpoints =
    | 'search/search'
    | 'search/predictive'
    | 'search/suggestions'
    | 'search/categories'
    | 'search/pages'
    | 'search/popular';

export type RecommendationsEndpoints =
    | 'recommendations/popular'
    | 'recommendations/trending'
    | 'recommendations/new'
    | 'recommendations/currently_watched'
    | 'recommendations/recently_bought'
    | 'recommendations/keywords'
    | 'recommendations/complementary'
    | 'recommendations/substituting'
    | 'recommendations/most_sold_with'
    | 'recommendations/category/popular'
    | 'recommendations/category/trending'
    | 'recommendations/category/new'
    | 'recommendations/category/popular_subcategories'
    | 'recommendations/visitor/history'
    | 'recommendations/visitor/complementary'
    | 'recommendations/visitor/substituting'
    | 'recommendations/customer/history'
    | 'recommendations/customer/complementary'
    | 'recommendations/customer/substituting'
    | 'recommendations/page/substituting'
    | 'recommendations/page/product'
    | 'recommendations/page/category'
    | 'recommendations/page/related_products'
    | 'recommendations/page/related_categories';

export type ClerkEndpoints = RecommendationsEndpoints | SearchEndpoints

export type ClerkObject = {
    [key: string]: unknown;
};

export type ClerkErrorResponse = {
    status: string;
    message: string;
    type: string;
};

type ClerkContent = {
    more: (param: number) => void;
    param: (param: string) => void;
    element: HTMLElement;
    id: string;
};

export interface ConfigTypes {
    'search/search': searchSearchConfig
    'search/predictive': searchPredictiveConfig
    'search/suggestions': searchSuggestionsConfig
    'search/categories': searchCategoriesConfig
    'search/pages': searchPagesConfig
    'search/popular': searchPopularConfig
    'recommendations/popular': recommendationsPopularConfig
    'recommendations/trending': recommendationsTrendingConfig
    'recommendations/new': recommendationsNewConfig
    'recommendations/currently_watched': recommendationsCurrentlyWatchedConfig
    'recommendations/recently_bought': recommendationsRecentlyBoughtConfig
    'recommendations/keywords': recommendationsKeywordsConfig
    'recommendations/complementary': recommendationsComplementaryConfig
    'recommendations/substituting': recommendationsSubstitutingConfig
    'recommendations/most_sold_with': recommendationsMostSoldWithConfig
    'recommendations/category/popular': recommendationsCategoryPopularConfig
    'recommendations/category/trending': recommendationsCategoryTrendingConfig
    'recommendations/category/new': recommendationsCategoryNewConfig
    'recommendations/category/popular_subcategories': recommendationsCategoryPopularSubcategoriesConfig
    'recommendations/visitor/history': recommendationsVisitorHistoryConfig
    'recommendations/visitor/complementary': recommendationsVisitorComplementaryConfig
    'recommendations/visitor/substituting': recommendationsVisitorSubstitutingConfig
    'recommendations/customer/history': recommendationsCustomerHistoryConfig
    'recommendations/customer/complementary': recommendationsCustomerComplementaryConfig
    'recommendations/customer/substituting': recommendationsCustomerSubstitutingConfig
    'recommendations/page/substituting': recommendationsPageSubstitutingConfig
    'recommendations/page/product': recommendationsPageProductConfig
    'recommendations/page/category': recommendationsPageCategoryConfig
    'recommendations/page/related_products': recommendationsPageRelatedProductsConfig
    'recommendations/page/related_categories': recommendationsPageRelatedCategoriesConfig
}

export interface ResponseTypes {
    'search/search': searchSearchResponse
    'search/predictive': searchPredictiveResponse
    'search/suggestions': searchSuggestionsResponse
    'search/categories': searchCategoriesResponse
    'search/pages': searchPagesResponse
    'search/popular': searchPopularResponse
    'recommendations/popular': recommendationsPopularResponse
    'recommendations/trending': recommendationsTrendingResponse
    'recommendations/new': recommendationsNewResponse
    'recommendations/currently_watched': recommendationsCurrentlyWatchedResponse
    'recommendations/recently_bought': recommendationsRecentlyBoughtResponse
    'recommendations/keywords': recommendationsKeywordsResponse
    'recommendations/complementary': recommendationsComplementaryResponse
    'recommendations/substituting': recommendationsSubstitutingResponse
    'recommendations/most_sold_with': recommendationsMostSoldWithResponse
    'recommendations/category/popular': recommendationsCategoryPopularResponse
    'recommendations/category/trending': recommendationsCategoryTrendingResponse
    'recommendations/category/new': recommendationsCategoryNewResponse
    'recommendations/category/popular_subcategories': recommendationsCategoryPopularSubcategoriesResponse
    'recommendations/visitor/history': recommendationsVisitorHistoryResponse
    'recommendations/visitor/complementary': recommendationsVisitorComplementaryResponse
    'recommendations/visitor/substituting': recommendationsVisitorSubstitutingResponse
    'recommendations/customer/history': recommendationsCustomerHistoryResponse
    'recommendations/customer/complementary': recommendationsCustomerComplementaryResponse
    'recommendations/customer/substituting': recommendationsCustomerSubstitutingResponse
    'recommendations/page/substituting': recommendationsPageSubstitutingResponse
    'recommendations/page/product': recommendationsPageProductResponse
    'recommendations/page/category': recommendationsPageCategoryResponse
    'recommendations/page/related_products': recommendationsPageRelatedProductsResponse
    'recommendations/page/related_categories': recommendationsPageRelatedCategoriesResponse
}

/**
 * @docs https://docs.clerk.io/docs/clerkjs-custom-api-calls
 * @description Calls a Clerk.js endpoint
 */
declare function Clerk<T extends ClerkEndpoints>(method: 'call', endpoint: T, config: ConfigTypes[T], callback?: (response: ResponseTypes[T]) => void, error?: (error: ClerkErrorResponse) => void): void;
/**
 * @docs https://docs.clerk.io/docs/clerkjs-configuration
 */
declare function Clerk(method: 'config', config: InitConfig): void;
/**
 * @docs https://docs.clerk.io/docs/clerkjs-shopping-cart#customising-add-to-cart-functionality
 * @description Defines a custom callback for the cart updates
 */
declare function Clerk(method: 'config', config: string, callback: (...args: unknown[]) => void): void;
/**
 * @docs https://docs.clerk.io/docs/chat
 * @description Similar to the shopping cart API, the Chat API allows you to configure hooks for chat events and perform various actions through simple commands
 */
declare function Clerk(method: 'chat', action: 'open' | 'close' | 'toggle' | 'clear' | 'enable' | 'disable'): void;
/**
 * @docs https://docs.clerk.io/docs/chat
 * @description Displays toast notification with supplied arguments
 */
declare function Clerk(method: 'chat', action: 'toast', text: string, emoji?: string): void;
/**
 * @docs https://docs.clerk.io/docs/chat
 * @description Sends message as user or assistant
 */
declare function Clerk(method: 'chat', action: 'user_message' | 'assistant_message', text: string): void;
/**
 * @docs https://docs.clerk.io/docs/chat
 * @description Listens to Chat events and adds a callback for specified event
 */
declare function Clerk(method: 'chat', action: 'on', event: 'message' | 'open' | 'enable' | 'support', callback: () => void): void;
/**
 * @docs https://docs.clerk.io/docs/ui
 * @description Displays a popup or slider UI element
 */
declare function Clerk(method: 'ui', ui: 'popup' | 'slider', css_selector: string, action?: 'show' | 'hide'): void;
declare function Clerk(method: 'on', event: 'live_search_update' | 'rendered' | 'render' | 'response' | 'update' | 'model', callback: (content: ClerkContent, data?: any) => void): void;
declare function Clerk(method: 'on', event: 'live_search_update' | 'rendered' | 'render' | 'response' | 'update' | 'model', css_selector: string, callback: (content: ClerkContent, data: any) => void): void;
/**
 * @description Load more results
 * @docs https://docs.clerk.io/docs/clerkjs-content
 */
declare function Clerk(method: 'content', selector: string, action: 'more', number: number): void;
/**
 * @description JavaScript interface for interacting with Clerk.js Content
 * @docs https://docs.clerk.io/docs/clerkjs-content
 */
declare function Clerk(method: 'content', selector: string, config?: unknown, content?: (content: ClerkContent) => void): void;
/**
 * Clerk uses Shopping Cart tracking for two purposes:
 * 1. Adding products to the cart through Clerk elements
 * 2. Tracking the content of the cart for use in Abandon Cart emails
 *
 * @docs https://docs.clerk.io/docs/clerkjs-shopping-cart
 * @description Adds, sets, or removes an item from the shopping cart
 */
declare function Clerk(method: 'cart', action: 'add' | 'set' | 'remove', id: string | number | string[] | number[]): void;
/**
 * @docs https://docs.clerk.io/docs/clerkjs-click-tracking
 * @description Adds click tracking to elements with the data-clerk-product-id attribute
 */
declare function Clerk(method: 'click', selector: '*[data-clerk-product-id]' | string): void;
/**
 * @description Product view tracking
 */
declare function Clerk(method: 'product', productId: string): void;

declare global {
    interface Window {
        /**
         * @link https://docs.clerk.io/
         */
        Clerk?: typeof Clerk;
    }
}
