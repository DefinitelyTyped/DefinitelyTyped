export interface Settings {
    /**
     * The MySQL host to connect to.
     */
    host: string;
    /**
     * The MySQL port to connect to.
     */
    port?: number | undefined;
    /**
     * The MySQL user to connect with.
     */
    user: string;
    /**
     * The password for the user.
     */
    password: string;
    /**
     * The database to connect to.
     */
    database: string;
    /**
     * Function to handle errors. The function will receive the Error. If not provided the error will be thrown.
     */
    onerror?(error: any): void;
}

export interface Importer {
    /**
     * Import an .sql file to the database.
     */
    import(filename: string): Promise<void>;
}

export function config(settings: Settings): Importer;
