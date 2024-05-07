import Commerce = require("../");
import { Category } from "../types/category";
import { PaginationMeta } from "../types/pagination";

export interface CategoryCollection {
    data: Category[];
    meta: PaginationMeta;
}

export class Categories {
    constructor(commerce: Commerce);

    list(params?: any): Promise<CategoryCollection>;
    retrieve(id: string, params?: { type: string }): Promise<Category>;
}
