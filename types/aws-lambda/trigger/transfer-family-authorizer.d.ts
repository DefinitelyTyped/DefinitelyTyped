import { Handler } from "../handler";

/**
 * Use this only if you want to use callbacks. AWS [recommends against](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) using those,
 * so you might want to use async/await instead, like this:
 *
 * ```typescript
 * const handler = async (event: TransferFamilyAuthorizerEvent): Promise<TransferFamilyAuthorizerResult> => {
 *     ... add your logic here
 * }
 * ```
 */
export type TransferFamilyAuthorizerHandler = Handler<TransferFamilyAuthorizerEvent, TransferFamilyAuthorizerResult>;

/**
 * Transfer Family Authorizer Event. This is the event that will be passed to the Lambda function.
 * Event message structure can be found here: https://docs.aws.amazon.com/transfer/latest/userguide/custom-lambda-idp.html
 * While the documentation is not explicit, for key based auth, password will be undefined
 */
export interface TransferFamilyAuthorizerEvent {
    username: string;
    password?: string;
    protocol: "SFTP" | "FTP" | "FTPS";
    serverId: string;
    sourceIp: string;
}

/**
 * The values that Transfer Family accepts for Lambda functions that are used for custom identity providers.
 * For some examples, see https://docs.aws.amazon.com/transfer/latest/userguide/custom-lambda-idp.html#lambda-auth-examples
 */
export interface TransferFamilyAuthorizerResult {
    /**
     * [**Required if authentication was successful. The user is authenticated if and only if the Role field is not blank**]
     *
     * Specifies the Amazon Resource Name (ARN) of the IAM role that controls your users' access to your Amazon S3 bucket or Amazon EFS file system.
     * The policies attached to this role determine the level of access that you want to provide your users when transferring files into and out of your Amazon S3 or Amazon EFS file system.
     * The IAM role should also contain a trust relationship that allows the server to access your resources when servicing your users' transfer requests.
     *
     * For details on establishing a trust relationship, see [To establish a trust relationship](https://docs.aws.amazon.com/transfer/latest/userguide/requirements-roles.html#establish-trust-transfer).
     */
    Role?: string;

    /**
     * [**Required for Amazon EFS backing storage**]
     *
     * The full POSIX identity, including user ID (`Uid`), group ID (`Gid`), and any secondary group IDs (`SecondaryGids`), that controls your users' access to your Amazon EFS file systems.
     * The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
     */
    PosixProfile?: {
        /**
         * User ID (UID) for the POSIX profile.
         */
        Uid: number;
        /**
         * Group ID (GID) for the POSIX profile.
         */
        Gid: number;
        /**
         * Secondary group IDs for the POSIX profile, if any.
         */
        SecondaryGids?: number[];
    } | undefined;

    /**
     * [**Optional**]
     *
     * A list of SSH public key values that are valid for this user.
     * An empty list implies that this is not a valid login.
     * Must not be returned during password authentication.
     */
    PublicKeys?: string[] | undefined;

    /**
     * [**Optional**]
     *
     * A session policy for your user so that you can use the same IAM role across multiple users.
     * This policy scopes down user access to portions of their Amazon S3 bucket.
     */
    Policy?: string | undefined;

    /**
     * [**Optional**]
     *
     * The type of landing directory (folder) that you want your users' home directory to be when they log in to the server.
     *
     * - If you set it to `PATH`, the user sees the absolute Amazon S3 bucket or Amazon EFS paths as is in their file transfer protocol clients.
     * - If you set it to `LOGICAL`, you must provide mappings in the `HomeDirectoryDetails` parameter to make Amazon S3 or Amazon EFS paths visible to your users.
     */
    HomeDirectoryType?: "PATH" | "LOGICAL" | undefined;

    /**
     * [**Required if `HomeDirectoryType` has a value of `LOGICAL`**]
     *
     * Logical directory mappings that specify which Amazon S3 or Amazon EFS paths and keys should be visible to your user and how you want to make them visible.
     * You must specify the Entry and Target pair, where Entry shows how the path is made visible and Target is the actual Amazon S3 or Amazon EFS path.
     *
     * **Note**: `HomeDirectoryDetails` is a string representation of a JSON map.
     * This is in contrast to `PosixProfile`, which is an actual JSON map object, and `PublicKeys` which is a JSON array of strings.
     * See the [code examples](https://docs.aws.amazon.com/transfer/latest/userguide/custom-lambda-idp.html#lambda-auth-examples).
     */
    HomeDirectoryDetails?: string | undefined;

    /**
     * [**Optional**]
     *
     * The landing directory for a user when they log in to the server using the client.
     */
    HomeDirectory?: string | undefined;
}
