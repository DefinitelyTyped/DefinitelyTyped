import * as Config from './types/config';
import * as Response from './types/response';

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

export type SearchEndpoints = Extract<keyof ConfigTypes, `search/${string}`>;
export type RecommendationsEndpoints = Extract<keyof ConfigTypes, `recommendations/${string}`>;
export type ClerkEndpoints = keyof ConfigTypes;

export type ClerkObject = Record<string, unknown>;

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
    'search/search': Config.searchSearchConfig
    'search/predictive': Config.searchPredictiveConfig
    'search/suggestions': Config.searchSuggestionsConfig
    'search/categories': Config.searchCategoriesConfig
    'search/pages': Config.searchPagesConfig
    'search/popular': Config.searchPopularConfig
    'recommendations/popular': Config.recommendationsPopularConfig
    'recommendations/trending': Config.recommendationsTrendingConfig
    'recommendations/new': Config.recommendationsNewConfig
    'recommendations/currently_watched': Config.recommendationsCurrentlyWatchedConfig
    'recommendations/recently_bought': Config.recommendationsRecentlyBoughtConfig
    'recommendations/keywords': Config.recommendationsKeywordsConfig
    'recommendations/complementary': Config.recommendationsComplementaryConfig
    'recommendations/substituting': Config.recommendationsSubstitutingConfig
    'recommendations/most_sold_with': Config.recommendationsMostSoldWithConfig
    'recommendations/category/popular': Config.recommendationsCategoryPopularConfig
    'recommendations/category/trending': Config.recommendationsCategoryTrendingConfig
    'recommendations/category/new': Config.recommendationsCategoryNewConfig
    'recommendations/category/popular_subcategories': Config.recommendationsCategoryPopularSubcategoriesConfig
    'recommendations/visitor/history': Config.recommendationsVisitorHistoryConfig
    'recommendations/visitor/complementary': Config.recommendationsVisitorComplementaryConfig
    'recommendations/visitor/substituting': Config.recommendationsVisitorSubstitutingConfig
    'recommendations/customer/history': Config.recommendationsCustomerHistoryConfig
    'recommendations/customer/complementary': Config.recommendationsCustomerComplementaryConfig
    'recommendations/customer/substituting': Config.recommendationsCustomerSubstitutingConfig
    'recommendations/page/substituting': Config.recommendationsPageSubstitutingConfig
    'recommendations/page/product': Config.recommendationsPageProductConfig
    'recommendations/page/category': Config.recommendationsPageCategoryConfig
    'recommendations/page/related_products': Config.recommendationsPageRelatedProductsConfig
    'recommendations/page/related_categories': Config.recommendationsPageRelatedCategoriesConfig
}

export interface ResponseTypes {
    'search/search': Response.searchSearchResponse
    'search/predictive': Response.searchPredictiveResponse
    'search/suggestions': Response.searchSuggestionsResponse
    'search/categories': Response.searchCategoriesResponse
    'search/pages': Response.searchPagesResponse
    'search/popular': Response.searchPopularResponse
    'recommendations/popular': Response.recommendationsPopularResponse
    'recommendations/trending': Response.recommendationsTrendingResponse
    'recommendations/new': Response.recommendationsNewResponse
    'recommendations/currently_watched': Response.recommendationsCurrentlyWatchedResponse
    'recommendations/recently_bought': Response.recommendationsRecentlyBoughtResponse
    'recommendations/keywords': Response.recommendationsKeywordsResponse
    'recommendations/complementary': Response.recommendationsComplementaryResponse
    'recommendations/substituting': Response.recommendationsSubstitutingResponse
    'recommendations/most_sold_with': Response.recommendationsMostSoldWithResponse
    'recommendations/category/popular': Response.recommendationsCategoryPopularResponse
    'recommendations/category/trending': Response.recommendationsCategoryTrendingResponse
    'recommendations/category/new': Response.recommendationsCategoryNewResponse
    'recommendations/category/popular_subcategories': Response.recommendationsCategoryPopularSubcategoriesResponse
    'recommendations/visitor/history': Response.recommendationsVisitorHistoryResponse
    'recommendations/visitor/complementary': Response.recommendationsVisitorComplementaryResponse
    'recommendations/visitor/substituting': Response.recommendationsVisitorSubstitutingResponse
    'recommendations/customer/history': Response.recommendationsCustomerHistoryResponse
    'recommendations/customer/complementary': Response.recommendationsCustomerComplementaryResponse
    'recommendations/customer/substituting': Response.recommendationsCustomerSubstitutingResponse
    'recommendations/page/substituting': Response.recommendationsPageSubstitutingResponse
    'recommendations/page/product': Response.recommendationsPageProductResponse
    'recommendations/page/category': Response.recommendationsPageCategoryResponse
    'recommendations/page/related_products': Response.recommendationsPageRelatedProductsResponse
    'recommendations/page/related_categories': Response.recommendationsPageRelatedCategoriesResponse
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
