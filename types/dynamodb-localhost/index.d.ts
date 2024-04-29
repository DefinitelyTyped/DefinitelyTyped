export function install(callback?: () => unknown, path?: string): void;
export function start(options: Options): void;
export function stop(port: number): void;
export function restart(port: number): void;
export function remove(callback?: () => unknown): void;

export interface Options {
    /**
     * Port to listen on.
     * Default: 8000
     */
    port?: number;

    /**
     * Enables CORS support (cross-origin resource sharing) for JavaScript.
     * Must be a comma-separated allowlist of specific domains, or an asterisk (which allows all access).
     * Default: "*"
     */
    cors?: string;

    /**
     * Whether DynamoDB local should run in memory, instead of using a database file.
     * If true, when you stop DynamoDB local the data saved in it will be lost.
     * You cannot specify both dbPath and inMemory at once.
     */
    inMemory?: boolean;

    /**
     * If not running in memory, the directory where DynamoDB local should write database files.
     * Note that you cannot specify both dbPath and inMemory at once.
     * For the path, current working directory is <projectroot>/node_modules/dynamodb-localhost/dynamodb.
     * For example to create <projectroot>/node_modules/dynamodb-localhost/dynamodb/<mypath> you should
     * specify '<mypath>/' with a forwardslash at the end.
     * Default: "."
     */
    dbPath?: string;

    /**
     * If true, starts DynamoDB using docker, e.g.
     * docker run -d -p 8000:8000 amazon/dynamodb-local -jar DynamoDBLocal.jar -port 8000 -sharedDb -inMemory
     * The docker executable may be customized using process.env.DOCKER_PATH, and the docker image through
     * process.env.DOCKER_IMAGE.
     * Default: false
     */
    docker?: boolean;

    /**
     * If true, DynamoDB local will use a single database file and all DynamoDB clients will interact
     * with the same set of tables regardless of their region and credential configuration.
     * If false, it will use separate files for each credential and region.
     */
    sharedDb?: boolean;

    /**
     * If true, will introduce delays for certain operations.
     * DynamoDB local can perform some tasks almost instantaneously, such as create/update/delete operations
     * on tables and indexes; however, the actual DynamoDB service requires more time for these tasks.
     * Setting this parameter helps DynamoDB local simulate the behavior of the real DynamoDB more closely.
     * (Currently, this parameter introduces delays only for global secondary indexes that are in either
     * CREATING or DELETING status.)
     */
    delayTransientStatuses?: boolean;

    /**
     * If this and dbPath are true, optimizes the database tables before starting DynamoDB local.
     */
    optimizeDbBeforeStartup?: boolean;

    /**
     * A string which sets the initial heap size e.g., '2048m'. This is input to the java -Xms argument
     */
    heapInitial?: string;

    /**
     * A string which sets the maximum heap size e.g., '1g'. This is input to the java -Xmx argument
     */
    heapMax?: string;
}
