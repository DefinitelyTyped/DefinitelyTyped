declare global {
    const Clerk: Clerk;

    interface Window {
        /**
         * @link https://docs.clerk.io/docs
         */
        Clerk?: Clerk;
    }
}

/**
 * Util for making a list of items partials fram a generic
 */
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface Clerk {
    <T extends ClerkEndpoints>(
        method: "call",
        endpoint: T,
        config?: ConfigType<T>,
    ): Promise<ClerkResponseType<T>>;
    (method: "click", attribute: string): void;
}

interface ClerkProductAttributes {
    age: number;
    categories: number[];
    created_at: number;
    description: string;
    handle: string;
    id: number;
    image: string;
    images: string[];
    name: string;
    on_sale: boolean;
    price: number;
    price_min: number;
    price_max: number;
    published: boolean;
    sku: string[];
    status: boolean;
    stock: number;
    tags: string[];
    type: string;
    url: string;
    variant_inventory_policy: Array<"deny" | "continue">;
    variant_list_prices: number[];
    variant_names: string[];
    variant_prices: number[];
    variant_stocks: number[];
    variant_weight: number[];
    variant_weight_unit: string[];
    variants: string[];
    vendor: string;
}

interface ClerkCategory {
    children: unknown[];
    description: string;
    id: number;
    image: string;
    name: string;
    parent: unknown;
    subcategories: unknown[];
    url: string;
}

interface ClerkPage {
    id: number;
    type: string;
    title: string;
    url: string;
    created_at: number;
    image: string;
    tags: string[];
    text: string;
}

interface ClerkArticle extends ClerkPage {
    author: string;
    blog: string;
}

interface ClerkBaseConfig {
    /**
     * Limit amount of results
     */
    limit: number;

    /**
     * @description Required for tracking
     */
    labels?: string[];

    /**
     * @link https://docs.clerk.io/docs/filters
     */
    filter?: string;
}

interface ClerkFacets {
    /**
     * @description Facets are most known in searches to narrow down results to eg a single category, brand or price range but can be used with any API endpoint that takes the facets parameter.
     * @link https://docs.clerk.io/docs/facets
     */
    facets?: string[];
}

interface ClerkConfigProducts extends ClerkBaseConfig {
    products: Array<number | string>;
    attributes: Array<keyof ClerkProductAttributes>;
    offset?: number;
    exclude?: string[];
}

interface ClerkConfigSearch extends ClerkBaseConfig {
    query: string;
    language?: string;
}

interface ClerkConfigSearchResults extends ClerkConfigSearch, ClerkFacets {
    longtail?: boolean;
    offset?: number;
    order?: "asc" | "desc";
    orderby?: keyof ClerkProductAttributes;
    attributes?: Array<keyof ClerkProductAttributes>;
}

interface ClerkConfigSearchPages extends ClerkConfigSearch {
    type?: "blog" | "page";
}

interface ClerkConfigSearchPredictive extends ClerkConfigSearch, ClerkFacets {
    exclude?: string[];
    attributes?: Array<keyof ClerkProductAttributes>;
}

type ClerkEndpointsSearch =
    | "search/search"
    | "search/popular"
    | "search/predictive"
    | "search/categories"
    | "search/pages"
    | "search/suggestions";

type ClerkEndpointsProducts =
    | "recommendations/popular"
    | "recommendations/trending"
    | "recommendations/new"
    | "recommendations/currently_watched"
    | "recommendations/recently_bought"
    | "recommendations/keywords"
    | "recommendations/complementary"
    | "recommendations/substituting";

type ClerkEndpoints = ClerkEndpointsProducts | ClerkEndpointsSearch;

interface ConfigTypes {
    "search/search": ClerkConfigSearchResults;
    "search/pages": ClerkConfigSearchPages;
    "search/predictive": ClerkConfigSearchPredictive;
    "search/categories": ClerkConfigSearch;
    "search/suggestions": Omit<ClerkConfigSearch, "labels", "filter">;

    "recommendations/popular": Omit<ClerkConfigProducts, "products"> & ClerkFacets;
    "recommendations/trending": ClerkConfigProducts & ClerkFacets;
    "recommendations/new": Omit<ClerkConfigProducts, "offset" | "filter">;
    "recommendations/currently_watched": Omit<ClerkConfigProducts, "offset" | "filter">;
    "recommendations/recently_bought": Omit<Optional<ClerkConfigProducts, "limit">, "offset">;
    "recommendations/keywords": Omit<ClerkConfigProducts, "offset">;
    "recommendations/complementary": ClerkConfigProducts;
    "recommendations/substituting": ClerkConfigProducts;
}

type ConfigType<T extends ClerkEndpoints> = T extends keyof ConfigTypes ? ConfigTypes[T] : never;

interface ClerkBaseResponse {
    status: "ok";
    results: number[];
}

interface ClerkResponseProducts extends ClerkBaseResponse {
    count: number;
    product_data: ClerkProductAttributes[];
}

interface ClerkResponseSearchCategory extends ClerkBaseResponse {
    categories: ClerkCategory[];
}

interface ClerkResponseSearchSuggestions extends ClerkBaseResponse {
    results: string[];
}

interface ClerkResponseSearchPredictive extends ClerkResponseProducts {
    hits: number;
}

interface ClerkResponseSearchPages extends Omit<ClerkBaseResponse, "results"> {
    pages: Array<ClerkPage | ClerkArticle>;
    results: Array<ClerkPage | ClerkArticle>;
}

interface ClerkResponseSearchPage extends ClerkBaseResponse {
    count: number;
    hits: number;
    product_data: ClerkProductAttributes[];
}

interface ClerkResponseTypes {
    "search/search": ClerkResponseSearchPage;
    "search/pages": ClerkResponseSearchPages;
    "search/predictive": ClerkResponseSearchPredictive;
    "search/categories": ClerkResponseSearchCategory;
    "search/suggestions": ClerkResponseSearchSuggestions;

    "recommendations/popular": ClerkResponseProducts;
    "recommendations/trending": ClerkResponseProducts;
    "recommendations/new": ClerkResponseProducts;
    "recommendations/currently_watched": ClerkResponseProducts;
    "recommendations/recently_bought": ClerkResponseProducts;
    "recommendations/keywords": ClerkResponseProducts;
    "recommendations/complementary": ClerkResponseProducts;
    "recommendations/substituting": ClerkResponseProducts;
}

type ClerkResponseType<T extends ClerkEndpoints> = T extends keyof ClerkResponseTypes ? ClerkResponseTypes[T]
    : never;

export {};
