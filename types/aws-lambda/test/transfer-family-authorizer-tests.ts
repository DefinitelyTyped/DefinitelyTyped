import {
    TransferFamilyAuthorizerEvent,
    TransferFamilyAuthorizerHandler,
    TransferFamilyAuthorizerResult,
} from "../trigger/transfer-family-authorizer";

/**
 * ============== ASYNC/AWAIT TESTS =================
 * AWS [recommends](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-async) using these.
 * Prefer this over callbacks.
 */
const transferFamilyAuthorizerLogicalHomeDirectory = async (
    event: TransferFamilyAuthorizerEvent,
): Promise<TransferFamilyAuthorizerResult> => {
    return getHomeDirectoryResponse(event);
};

const transferFamilyAuthorizerPathBasedHomeDirectory = async (
    event: TransferFamilyAuthorizerEvent,
): Promise<TransferFamilyAuthorizerResult> => {
    return getPathBasedDirectoryResponse(event);
};

/**
 * ============== CALLBACK TESTS =================
 * AWS [recommends against](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html#nodejs-handler-callback) using these.
 * Consider using async/await instead.
 */

/**
 * Example that provides the details for a user that has a logical home directory.
 * Source: https://docs.aws.amazon.com/transfer/latest/userguide/custom-lambda-idp.html#lambda-auth-examples
 */
const transferFamilyAuthorizerLogicalHomeDirectoryCallback: TransferFamilyAuthorizerHandler = (
    event,
    context,
    callback,
) => {
    const response = getHomeDirectoryResponse(event);

    callback(null, response);
};

/**
 * Example that provides the details for a user that has a path-based home directory.
 * Source: https://docs.aws.amazon.com/transfer/latest/userguide/custom-lambda-idp.html#lambda-auth-examples
 */
const transferFamilyAuthorizerPathBasedHomeDirectoryCallback: TransferFamilyAuthorizerHandler = (
    event,
    context,
    callback,
) => {
    const response = getPathBasedDirectoryResponse(event);

    callback(null, response);
};

/**
 * ============== Shared responses =================
 */
const getHomeDirectoryResponse = (event: TransferFamilyAuthorizerEvent): TransferFamilyAuthorizerResult => {
    let response: TransferFamilyAuthorizerResult;

    // Check if the username presented for authentication is correct. This doesn't check the value of the server ID, only that it is provided.
    if (event.serverId !== "" && event.username == "example-user") {
        const homeDirectoryDetails = [
            {
                Entry: "/",
                Target: "/fs-faa1a123",
            },
        ];
        response = {
            Role: "arn:aws:iam::123456789012:role/transfer-access-role", // The user is authenticated if and only if the Role field is not blank
            PosixProfile: { "Gid": 65534, "Uid": 65534 }, // Required for EFS access, but not needed for S3
            HomeDirectoryDetails: JSON.stringify(homeDirectoryDetails),
            HomeDirectoryType: "LOGICAL",
        };
        // Check if password is provided
        if (!event.password) {
            // If no password provided, return the user's SSH public key
            response["PublicKeys"] = ["ssh-rsa abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789"];
            // Check if password is correct
        } else if (event.password !== "Password1234") {
            // Return HTTP status 200 but with no role in the response to indicate authentication failure
            response = {};
        }
    } else {
        // Return HTTP status 200 but with no role in the response to indicate authentication failure
        response = {};
    }

    return response;
};

const getPathBasedDirectoryResponse = (event: TransferFamilyAuthorizerEvent): TransferFamilyAuthorizerResult => {
    let response: TransferFamilyAuthorizerResult;

    // Check if the username presented for authentication is correct. This doesn't check the value of the server ID, only that it is provided.
    // There is also event.protocol (one of "FTP", "FTPS", "SFTP") and event.sourceIp (e.g., "127.0.0.1") to further restrict logins.
    if (event.serverId !== "" && event.username == "example-user") {
        response = {
            Role: "arn:aws:iam::123456789012:role/transfer-access-role", // The user is authenticated if and only if the Role field is not blank
            Policy: "", // Optional, JSON stringified blob to further restrict this user's permissions
            HomeDirectory: "/fs-faa1a123", // Not required, defaults to '/'
        };

        // Check if password is provided
        if (!event.password) {
            // If no password provided, return the user's SSH public key
            response["PublicKeys"] = ["ssh-rsa abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123456789"];
            // Check if password is correct
        } else if (event.password !== "Password1234") {
            // Return HTTP status 200 but with no role in the response to indicate authentication failure
            response = {};
        }
    } else {
        // Return HTTP status 200 but with no role in the response to indicate authentication failure
        response = {};
    }

    return response;
};

/**
 * Example that constructs test event for an undefined password for key based auth
 */
const testEvent: TransferFamilyAuthorizerEvent = {
    username: "testinguser",
    protocol: "SFTP",
    serverId: "10.10.10.10.10",
    sourceIp: "0.0.0.0.0",
};
const getPathBasedDirectoryResponseResult = getPathBasedDirectoryResponse(testEvent);
