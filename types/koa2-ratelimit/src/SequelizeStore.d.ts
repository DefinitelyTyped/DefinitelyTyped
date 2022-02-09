import { Model, Sequelize } from 'sequelize';

import { RateLimitOptions } from '..';
import Store = require('./Store');

export = SequelizeStore;

declare class SequelizeStore extends Store {
    sequelize: Sequelize;
    tableName: string;
    tableAbguseName: string;
    table: Model<any, any> | null;
    tableAbuses: Model<any, any> | null;

    constructor(sequelize: Sequelize, options?: SequelizeStore.SequelizeStoreOptions);

    incr(key: string, options: RateLimitOptions, weight: number): Promise<{ counter: number; dateEnd: number }>;
    decrement(key: string, options: RateLimitOptions, weight: number): Promise<void>;
    saveAbuse(options: RateLimitOptions & { key: string; ip: string; user_id: any }): Promise<void>;
}

declare namespace SequelizeStore {
    interface SequelizeStoreOptions {
        tableName: string;
        tableAbuseName: string;
    }
}
