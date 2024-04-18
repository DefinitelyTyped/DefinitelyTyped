export = ClerkIO;
export as namespace ClerkIO;

declare global {
    const Clerk: ClerkIO.Clerk;

    interface Window {
        Clerk?: ClerkIO.Clerk;
    }
}

declare namespace ClerkIO {
    interface Clerk {
        <T extends ClerkIO.ClerkEndpoint>(
            method: "call",
            endpoint: T,
            config?: ClerkIO.ConfigType<T>,
        ): Promise<ClerkIO.ClerkResponseType<T>>;
        (method: "click", attribute: string): void;
    }

    type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

    interface ClerkProductAttributes {
        age: number;
        categories: string[];
        created_at: number;
        description: string;
        handle: string;
        id: number | string;
        image: string;
        images: string[];
        name: string;
        on_sale: boolean;
        price: number;
        price_min: number;
        price_max: number;
        published: boolean;
        sku: string[];
        stock: number;
        type: string;
        url: string;
        variant_list_prices: number[];
        variant_names: string[];
        variant_prices: number[];
        variants: string[];
        varient_stocks: number[];
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

    type ClerkArticle = {
        author: string;
        blog: string;
    } & ClerkPage;

    interface ClerkBaseConfig {
        limit: number;
        labels?: string[];
        filter?: string;
    }

    type ClerkConfigProducts = {
        products: Array<number | string>;
        attributes: Array<keyof ClerkProductAttributes>;
        offset?: number;
        exclude?: string[];
    } & ClerkBaseConfig;

    type ClerkConfigSearch = {
        query: string;
        limit: number;
        language?: string;
    } & ClerkBaseConfig;

    type ClerkConfigSearchResults = {
        longtail?: boolean;
        facets?: string[];
        offset?: number;
        order?: "asc" | "desc";
        orderby?: keyof ClerkProductAttributes;
        attributes?: Array<keyof ClerkProductAttributes>;
    } & ClerkConfigSearch;

    type ClerkConfigSearchPages = {
        type?: "blog" | "page";
    } & ClerkConfigSearch;

    type ClerkConfigSearchProducts = {
        attributes?: Array<keyof ClerkProductAttributes>;
    } & ClerkConfigSearch;

    type ClerkEndpointsSearch =
        | "search/search"
        | "search/popular"
        | "search/predictive"
        | "search/categories"
        | "search/pages";

    type ClerkEndpointsProducts =
        | "recommendations/popular"
        | "recommendations/trending"
        | "recommendations/new"
        | "recommendations/currently_watched"
        | "recommendations/recently_bought"
        | "recommendations/keywords"
        | "recommendations/complementary"
        | "recommendations/substituting";

    type ClerkEndpoint = ClerkEndpointsProducts | ClerkEndpointsSearch;

    interface ConfigTypes {
        "search/search": ClerkConfigSearchResults;
        "search/pages": ClerkConfigSearchPages;
        "search/predictive": ClerkConfigSearchProducts;
        "search/categories": ClerkConfigSearch;

        "recommendations/popular": ClerkConfigProducts;
        "recommendations/trending": ClerkConfigProducts;
        "recommendations/new": Omit<ClerkConfigProducts, "offset" | "filter">;
        "recommendations/currently_watched": Omit<ClerkConfigProducts, "offset" | "filter">;
        "recommendations/recently_bought": Omit<Optional<ClerkConfigProducts, "limit">, "offset">;
        "recommendations/keywords": Omit<ClerkConfigProducts, "offset">;
        "recommendations/complementary": ClerkConfigProducts;
        "recommendations/substituting": ClerkConfigProducts;
    }

    type ConfigType<T extends ClerkEndpoint> = T extends keyof ConfigTypes ? ConfigTypes[T] : never;

    interface ClerkBaseResponse {
        status: "ok";
        results: number[];
    }

    type ClerkResponseProducts = {
        count: number;
        product_data: ClerkProductAttributes[];
    } & ClerkBaseResponse;

    type ClerkResponseSearchCategory = {
        categories: ClerkCategory[];
    } & ClerkBaseResponse;

    type ClerkResponseSearchPredictive = {
        hits: number;
    } & ClerkResponseProducts;

    type ClerkResponseSearchPages = {
        pages: ClerkPage[] | ClerkArticle[];
        results: ClerkPage[] | ClerkArticle[];
    } & ClerkBaseResponse;

    type ClerkResponseSearchPage = {
        count: number;
        hits: number;
        product_data: ClerkProductAttributes[];
    } & ClerkBaseResponse;

    interface ClerkResponseTypes {
        "search/search": ClerkResponseSearchPage;
        "search/pages": ClerkResponseSearchPages;
        "search/predictive": ClerkResponseSearchPredictive;
        "search/categories": ClerkResponseSearchCategory;

        "recommendations/popular": ClerkResponseProducts;
        "recommendations/trending": ClerkResponseProducts;
        "recommendations/new": ClerkResponseProducts;
        "recommendations/currently_watched": ClerkResponseProducts;
        "recommendations/recently_bought": ClerkResponseProducts;
        "recommendations/keywords": ClerkResponseProducts;
        "recommendations/complementary": ClerkResponseProducts;
        "recommendations/substituting": ClerkResponseProducts;
    }

    type ClerkResponseType<T extends ClerkIO.ClerkEndpoint> = T extends keyof ClerkIO.ClerkResponseTypes
        ? ClerkIO.ClerkResponseTypes[T]
        : never;
}
