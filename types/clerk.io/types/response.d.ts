import type { PickAttributes } from "./helpers";

// Base types
export interface BaseResponse {
    result: (string | number)[];
    status: string;
    debug?: Record<string, unknown>;
}

export type BaseProductResponse<Attributes extends string[] = string[]> = BaseResponse & {
    product_data?: PickAttributes<Attributes>[];
};

export type BaseCountedResponse<Attributes extends string[] = string[]> = BaseProductResponse<Attributes> & {
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
export type searchSearchResponse<Attributes extends string[] = string[]> = BaseCountedResponse<Attributes>;

export type searchPredictiveResponse<Attributes extends string[] = string[]> =
    & BaseProductResponse<Attributes>
    & {
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
export type recommendationsPopularResponse<Attributes extends string[] = string[]> = BaseCountedResponse<Attributes>;
export type recommendationsTrendingResponse<Attributes extends string[] = string[]> = BaseCountedResponse<
    Attributes
>;
export type recommendationsNewResponse<Attributes extends string[] = string[]> = BaseCountedResponse<Attributes>;
export type recommendationsCurrentlyWatchedResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsRecentlyBoughtResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsKeywordsResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsComplementaryResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsSubstitutingResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsMostSoldWithResponse<Attributes extends string[] = string[]> = BaseCountedResponse<
    Attributes
>;

// Category endpoints
export type recommendationsCategoryPopularResponse<Attributes extends string[] = string[]> = BaseCountedResponse<
    Attributes
>;
export type recommendationsCategoryTrendingResponse<Attributes extends string[] = string[]> =
    & BaseProductResponse<Attributes>
    & {
        count: number;
        facets?: unknown | null;
    };
export type recommendationsCategoryNewResponse<Attributes extends string[] = string[]> = BaseCountedResponse<
    Attributes
>;
export type recommendationsCategoryPopularSubcategoriesResponse<Attributes extends string[] = string[]> =
    BaseCountedResponse<Attributes>;

// Visitor endpoints
export type recommendationsVisitorHistoryResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsVisitorComplementaryResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsVisitorSubstitutingResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;

// Customer endpoints
export type recommendationsCustomerHistoryResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsCustomerComplementaryResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;
export type recommendationsCustomerSubstitutingResponse<Attributes extends string[] = string[]> = BaseProductResponse<
    Attributes
>;

// Page endpoints
export type recommendationsPageSubstitutingResponse = BaseResponse & {
    pages: Page[];
    product_data?: null[];
};

export type recommendationsPageProductResponse<Attributes extends string[] = string[]> =
    & BaseProductResponse<Attributes>
    & {
        pages: Page[];
    };

export type recommendationsPageCategoryResponse<Attributes extends string[] = string[]> =
    & BaseProductResponse<Attributes>
    & {
        pages: Page[];
    };

export type recommendationsPageRelatedProductsResponse<Attributes extends string[] = string[]> = BaseCountedResponse<
    Attributes
>;
export type recommendationsPageRelatedCategoriesResponse<Attributes extends string[] = string[]> =
    & BaseCountedResponse<Attributes>
    & {
        categories: Category[];
    };
