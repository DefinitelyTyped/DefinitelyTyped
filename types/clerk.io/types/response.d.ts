import type { PickAttributes } from "./helpers";

// Base types
export interface BaseResponse {
    result: (string | number)[];
    status: string;
    debug?: Record<string, unknown>;
}

export type BaseProductResponse = BaseResponse & {
    product_data?: PickAttributes<string[]>[];
};

export type BaseCountedResponse = BaseProductResponse & {
    count: number;
    facets: unknown | null;
};

// Common types
export interface Category {
    children: number[];
    description: string;
    id: number;
    image: string | null;
    name: string;
    parent: number | null;
    subcategories: number[];
    url: string;
}

export interface Page {
    author: string | null;
    blog?: string;
    created_at: number;
    id: number;
    image?: string | null;
    tags?: string[];
    preprocessed_text?: string;
    text: string;
    title: string;
    type: string;
    url: string;
    [key: string]: unknown;
}

// Search responses
export type searchSearchResponse = BaseCountedResponse;

export type searchPredictiveResponse = BaseProductResponse & {
    facets: unknown | null;
    hits: number;
    query: string;
};

export type searchSuggestionsResponse = BaseResponse;

export type searchCategoriesResponse = BaseResponse & {
    categories: Category[];
};

export type searchPagesResponse = BaseResponse & {
    pages: Page[];
    result: Page[];
};

export type searchPopularResponse = BaseResponse;

// Recommendations responses
export type recommendationsPopularResponse = BaseCountedResponse;
export type recommendationsTrendingResponse = BaseCountedResponse;
export type recommendationsNewResponse = BaseCountedResponse;
export type recommendationsCurrentlyWatchedResponse = BaseProductResponse;
export type recommendationsRecentlyBoughtResponse = BaseProductResponse;
export type recommendationsKeywordsResponse = BaseProductResponse;
export type recommendationsComplementaryResponse = BaseProductResponse;
export type recommendationsSubstitutingResponse = BaseProductResponse;
export type recommendationsMostSoldWithResponse = BaseCountedResponse;

// Category endpoints
export type recommendationsCategoryPopularResponse = BaseCountedResponse;
export type recommendationsCategoryTrendingResponse = BaseProductResponse & {
    count: number;
    facets?: unknown | null;
};
export type recommendationsCategoryNewResponse = BaseCountedResponse;
export type recommendationsCategoryPopularSubcategoriesResponse = BaseCountedResponse;

// Visitor endpoints
export type recommendationsVisitorHistoryResponse = BaseProductResponse;
export type recommendationsVisitorComplementaryResponse = BaseProductResponse;
export type recommendationsVisitorSubstitutingResponse = BaseProductResponse;

// Customer endpoints
export type recommendationsCustomerHistoryResponse = BaseProductResponse;
export type recommendationsCustomerComplementaryResponse = BaseProductResponse;
export type recommendationsCustomerSubstitutingResponse = BaseProductResponse;

// Page endpoints
export type recommendationsPageSubstitutingResponse = BaseResponse & {
    pages: Page[];
    product_data?: null[];
};

export type recommendationsPageProductResponse = BaseProductResponse & {
    pages: Page[];
};

export type recommendationsPageCategoryResponse = BaseProductResponse & {
    pages: Page[];
};

export type recommendationsPageRelatedProductsResponse = BaseCountedResponse;
export type recommendationsPageRelatedCategoriesResponse = BaseCountedResponse & {
    categories: Category[];
};
