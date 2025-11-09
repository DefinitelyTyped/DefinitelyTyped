import type { IntRange } from "./helpers";

// Base types
export interface BaseConfig {
    key: string;
    /**
     * @description Required for tracking. Visitor ID for the given visitor. If auto, an anonymous ID is generated
     */
    visitor?: "auto" | string;
    /**
     * @description The language used for finding results. If not provided, the language configured on the Store in my.clerk.io will be used.
     */
    language?: string;
    /**
     * @description JSONP - Wraps the response as a function call with the name of the string
     */
    callback?: string;
    /**
     * @description When `true`, the response will include a JSON dictionary of the various customisations made to the results shown by Synonyms, Customized Search, Merchandising etc
     */
    debug?: boolean;
}

export type BaseLimitConfig = BaseConfig & {
    limit: number;
};

export type BaseSearchConfig = BaseLimitConfig & {
    /**
     * @description Required for tracking - A list of one or more text labels, used to track the labels performance in Analytics
     */
    labels?: string[];
    /**
     * @description Filters results based on the provided filter string
     * @see https://docs.clerk.io/docs/filters
     */
    filter?: string;
    /**
     * @description List of product IDs to exclude from the result
     */
    exclude?: string[];
    /**
     * @see https://docs.clerk.io/docs/product-metadata
     */
    attributes?: string[];
};

export type BaseFacetedConfig = BaseSearchConfig & {
    /**
     * @description List of facets to be returned for the products in the result
     * @see https://docs.clerk.io/docs/facets
     */
    facets?: string[];
};

// Search configs
export type searchSearchConfig = BaseFacetedConfig & {
    query: string;
    /**
     * @description Should all products matching any word in the query be in the result
     */
    longtail?: boolean;
    offset?: number;
    orderby?: string;
    order?: "asc" | "desc";
};

export type searchPredictiveConfig = BaseFacetedConfig & {
    query: string;
    limit: IntRange<1, 10>;
};

export type searchSuggestionsConfig = BaseConfig & {
    query: string;
    limit: IntRange<1, 10>;
};

export type searchCategoriesConfig = BaseConfig & {
    query?: string;
    limit: IntRange<1, 10>;
};

export type searchPagesConfig = BaseConfig & {
    query: string;
    limit: IntRange<1, 10>;
    type?: string;
};

export type searchPopularConfig = BaseConfig & {
    limit: IntRange<1, 10>;
};

// Recommendations configs
export type recommendationsPopularConfig = BaseFacetedConfig & {
    offset?: number;
    orderby?: string;
    order?: "asc" | "desc";
};

export type recommendationsTrendingConfig = BaseFacetedConfig & {
    offset?: number;
};

export type recommendationsNewConfig = BaseSearchConfig;

export type recommendationsCurrentlyWatchedConfig = BaseSearchConfig;

export type recommendationsRecentlyBoughtConfig = BaseSearchConfig;

export type recommendationsKeywordsConfig = BaseSearchConfig & {
    keywords: string;
};

export type recommendationsComplementaryConfig = BaseSearchConfig & {
    products: string[];
};

export type recommendationsSubstitutingConfig = BaseSearchConfig & {
    products: string[];
};

export type recommendationsMostSoldWithConfig = BaseSearchConfig & {
    products: string[];
};

// Category endpoints
export type recommendationsCategoryPopularConfig = BaseFacetedConfig & {
    category: string;
    offset?: number;
    orderby?: string;
    order?: "asc" | "desc";
};

export type recommendationsCategoryTrendingConfig = BaseFacetedConfig & {
    category: string;
    offset?: number;
};

export type recommendationsCategoryNewConfig = BaseSearchConfig & {
    category: string;
};

export type recommendationsCategoryPopularSubcategoriesConfig = BaseSearchConfig & {
    category: string;
    offset?: number;
    order?: "asc" | "desc";
};

// Visitor endpoints
export type recommendationsVisitorHistoryConfig = BaseSearchConfig & {
    email?: string;
};

export type recommendationsVisitorComplementaryConfig = BaseSearchConfig & {
    email?: string;
};

export type recommendationsVisitorSubstitutingConfig = BaseSearchConfig & {
    email?: string;
};

// Customer endpoints
export type recommendationsCustomerHistoryConfig = BaseSearchConfig & {
    email: string;
    customer?: string;
};

export type recommendationsCustomerComplementaryConfig = BaseSearchConfig & {
    email: string;
    customer?: string;
};

export type recommendationsCustomerSubstitutingConfig = BaseSearchConfig & {
    email: string;
    customer?: string;
};

// Page endpoints
export type recommendationsPageSubstitutingConfig = BaseConfig & {
    page: string;
    limit: number;
    visitor: "auto" | string;
    labels?: string[];
    type?: string;
    attributes?: string[];
};

export type recommendationsPageProductConfig = BaseConfig & {
    page: string;
    limit: number;
    visitor: "auto" | string;
    labels?: string[];
    attributes?: string[];
    type?: string;
};

export type recommendationsPageCategoryConfig = BaseConfig & {
    category: string;
    limit: number;
    visitor: "auto" | string;
    labels?: string[];
    attributes?: string[];
    type?: string;
};

export type recommendationsPageRelatedProductsConfig = BaseSearchConfig & {
    page: string;
};

export type recommendationsPageRelatedCategoriesConfig = BaseSearchConfig & {
    page: string;
};
