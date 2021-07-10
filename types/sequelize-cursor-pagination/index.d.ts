// Type definitions for sequelize-cursor-pagination 1.2
// Project: https://github.com/Kaltsoon/sequelize-cursor-pagination
// Definitions by: pilagod <https://github.com/pilagod>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import Sequelize = require('sequelize');

declare namespace SequelizeCursorPagination {
    interface Cursors {
        before: string | null;
        after: string | null;
        hasNext: boolean;
        hasPrevious: boolean;
    }

    interface BasicPaginateOptions<T> {
        where?: Sequelize.FindOptions<T>['where'] | undefined;
        attributes?: Sequelize.FindOptions<T>['attributes'] | undefined;
        include?: Sequelize.FindOptions<T>['include'] | undefined;
        limit?: number | undefined; // limit the number of records returned
        desc?: boolean | undefined; // [default: false]
        before?: string | undefined; // the before cursor
        after?: string | undefined; // the after cursor
        paginationField?: string | undefined; // [default: primaryKeyField]
        subQuery?: boolean | undefined; // [default: undefined]
    }

    interface PaginateRawOptions<T> extends BasicPaginateOptions<T> {
        raw: true;
    }

    interface PaginateInstOptions<T> extends BasicPaginateOptions<T> {
        raw?: boolean | undefined;
    }

    interface WithPaginationOptions<MethodName extends string> {
        methodName?: MethodName | undefined; // [default: 'paginate']
        primaryKeyField?: string | undefined; // [default: 'id']
    }

    type WithPaginationModel<MethodName extends string, Model, ModelInst, ModelAttrs> = Model & {
        [key in MethodName]: {
            (options?: PaginateRawOptions<ModelAttrs>): { results: ModelAttrs[], cursors: Cursors }
            (options?: PaginateInstOptions<ModelAttrs>): { results: ModelInst[], cursors: Cursors }
        }
    };

    function withPagination<MethodName extends string = 'paginate'>(options?: WithPaginationOptions<MethodName>): (
        <Model extends Sequelize.Model<ModelInst, ModelAttrs>, ModelInst, ModelAttrs>(model: Model) => WithPaginationModel<MethodName, Model, ModelInst, ModelAttrs>
    );
}

export = SequelizeCursorPagination.withPagination;
