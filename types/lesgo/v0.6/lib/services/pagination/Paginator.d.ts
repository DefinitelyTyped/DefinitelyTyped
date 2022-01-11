import AuroraDbService from '../../services/AuroraDbService';

export interface PaginatorOptions {
    total: number;
}

export interface PaginatorObject<DataT> {
    count: number;
    previous_page: number | false;
    current_page: number;
    next_page: number | false;
    last_page: number;
    per_page: number;
    total: number;
    items: DataT[];
}

export default class Paginator {
    constructor(db: AuroraDbService, sql: string, sqlParams: [] | unknown, options?: PaginatorOptions);

    count(): Promise<number>;

    previousPage(): number | false;

    currentPage(): number;

    nextPage(): Promise<number | false>;

    firstItem(): Promise<any>;

    lastItem(): Promise<any>;

    perPage(): number;

    lastPage(): Promise<number>;

    total(): Promise<number | null>;

    items(): Promise<any[]>;

    toObject(): Promise<PaginatorObject<any>>;

    protected getLimitAndOffsetByPageAndContentPerPage(): {
        offset: number;
        limit: number;
    };

    protected generatePaginationSqlSnippet(): string;

    executeQuery(): Promise<any[]>;

    protected countTotalItems: Promise<number>;

    protected calculateTotalNumberOfPages: Promise<number>;
}
