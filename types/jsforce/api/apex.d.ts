import { Connection, Callback, RestApiOptions } from '../connection';

export class Apex {
    constructor(conn: Connection);

    get<T>(path: string, options: RestApiOptions, callback?: Callback<T>): Promise<T>;
    get<T>(path: string, callback?: Callback<T>): Promise<T>;

    post<T>(path: string, body: object, options: RestApiOptions, callback?: Callback<T>): Promise<T>;
    post<T>(path: string, body: object, callback?: Callback<T>): Promise<T>;
    post<T>(path: string, callback?: Callback<T>): Promise<T>;

    put<T>(path: string, body: object, options: RestApiOptions, callback?: Callback<T>): Promise<T>;
    put<T>(path: string, body: object, callback?: Callback<T>): Promise<T>;
    put<T>(path: string, callback?: Callback<T>): Promise<T>;

    patch<T>(path: string, body: object, options: RestApiOptions, callback?: Callback<T>): Promise<T>;
    patch<T>(path: string, body: object, callback?: Callback<T>): Promise<T>;
    patch<T>(path: string, callback?: Callback<T>): Promise<T>;

    del<T>(path: string, options: RestApiOptions, callback?: Callback<T>): Promise<T>;
    del<T>(path: string, callback?: Callback<T>): Promise<T>;
    delete<T>(path: string, options: RestApiOptions, callback?: Callback<T>): Promise<T>;
    delete<T>(path: string, callback?: Callback<T>): Promise<T>;
}
