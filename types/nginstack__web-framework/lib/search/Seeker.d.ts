export = Seeker;
declare function Seeker(): void;
declare class Seeker {
    search(
        term: any,
        resultSet: import("./SearchResultSet.js"),
        options?: {
            limit?: number;
            userKey?: number;
        },
    ): never;
    warmCache(): void;
    toString(): string;
}
