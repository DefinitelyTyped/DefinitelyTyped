import {
    IoTCustomAuthorizerEvent,
    IoTCustomAuthorizerHandler,
    IoTCustomAuthorizerResult,
    IoTProtocolDataHTTP,
    IoTProtocolDataMQTT,
    IoTProtocolDataTLS,
    IoTProtocolType,
    PolicyDocument,
    Statement,
} from "aws-lambda";

// IoT Custom Authorizer
// https://docs.aws.amazon.com/iot/latest/developerguide/config-custom-auth.html#custom-auth-lambda

// prettier-ignore
const iotCustomAuthorizerEvent: IoTCustomAuthorizerEvent = {
    "token": "aToken",
    "signatureVerified": true, // Indicates whether the device gateway has validated the signature.
    "protocols": ["tls", "http", "mqtt"], // Indicates which protocols to expect for the request.
    "protocolData": {
        "tls": {
            "serverName": "serverName", // The server name indication (SNI) host_name string.
        },
        "http": {
            "headers": {
                "#{name}": "#{value}",
            },
            "queryString": "?#{name}=#{value}",
        },
        "mqtt": {
            "username": "myUserName",
            "password": "myPassword", // A base64-encoded string.
            "clientId": "myClientId", // Included in the event only when the device sends the value.
        },
    },
    "connectionMetadata": {
        "id": "UUID", // The connection ID. You can use this for logging.
    },
};

const iotCustomAuthorizerResult: IoTCustomAuthorizerResult = {
    isAuthenticated: true, // A Boolean that determines whether client can connect.
    principalId: "xxxxxxxx", // A string that identifies the connection in logs.
    disconnectAfterInSeconds: 86400,
    refreshAfterInSeconds: 300,
    policyDocuments: [
        {
            Version: "2012-10-17",
            Statement: [
                {
                    Action: "iot:Publish",
                    Effect: "Allow",
                    Resource: "arn:aws:iot:us-east-1:<your_aws_account_id>:topic/customauthtesting",
                },
            ],
        },
    ],
};

const iotCustomAuthorizerHandler: IoTCustomAuthorizerHandler = async (event, context, callback) => {
    strOrUndefined = event.token;
    bool = event.signatureVerified;
    const protocols: IoTProtocolType[] = event.protocols;
    obj = event.protocolData;
    const protocolDataTLS: IoTProtocolDataTLS | undefined = event.protocolData.tls;
    const protocolDataHTTP: IoTProtocolDataHTTP | undefined = event.protocolData.http;
    const protocolDataMQTT: IoTProtocolDataMQTT | undefined = event.protocolData.mqtt;
    obj = event.connectionMetadata;
    str = event.connectionMetadata.id;

    let result: IoTCustomAuthorizerResult;

    result = {
        isAuthenticated: bool,
        principalId: str,
        disconnectAfterInSeconds: num,
        refreshAfterInSeconds: num,
        policyDocuments: [],
    };

    result = {
        isAuthenticated: bool,
        principalId: str,
        disconnectAfterInSeconds: num,
        refreshAfterInSeconds: num,
        policyDocuments: [createPolicyDocument()],
    };

    // check reasonable result-returning styles
    callback(new Error());
    callback(null, result);
    return result;
};

function createPolicyDocument(): PolicyDocument {
    let statement: Statement = {
        Action: str,
        Effect: str,
        Resource: str,
    };

    // @ts-expect-error
    statement = { Effect: str, Action: str, Principal: 123 };

    // Bad Resource
    // @ts-expect-error
    statement = { Effect: str, Action: str, Resource: 123 };

    // Bad Resource with valid Principal
    // @ts-expect-error
    statement = { Effect: str, Action: str, Principal: { Service: str }, Resource: 123 };

    // Bad principal with valid Resource
    // @ts-expect-error
    statement = { Effect: str, Action: str, Principal: 123, Resource: str };

    // No Effect
    // @ts-expect-error
    statement = { Action: str, Principal: str };

    statement = {
        Sid: str,
        Action: [str, str],
        Effect: str,
        Resource: [str, str],
        Condition: {
            condition1: { key: "value" },
            condition2: [
                {
                    key1: "value",
                    key2: "value",
                },
                {
                    key3: "value",
                },
            ],
        },
        Principal: [str, str],
        NotPrincipal: [str, str],
    };

    statement = { Action: str, Principal: str, Effect: str };

    statement = { Action: str, NotPrincipal: { Service: str }, Effect: str };

    statement = { Effect: str, NotAction: str, NotResource: str };

    let policyDocument: PolicyDocument = { Version: str, Statement: [statement] };

    policyDocument = { Version: str, Statement: [statement, statement] };

    return policyDocument;
}
