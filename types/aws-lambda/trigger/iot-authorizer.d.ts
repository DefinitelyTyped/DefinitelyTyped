import { Handler } from "../handler";
import { PolicyDocument } from "./api-gateway-authorizer";

export type IoTProtocolType = "http" | "mqtt" | "tls";

export type IoTCustomAuthorizerHandler = Handler<IoTCustomAuthorizerEvent, IoTCustomAuthorizerResult>;

export interface IoTProtocolDataTLS {
    serverName: string; // The server name indication (SNI) host_name string.
}

export interface IoTProtocolDataHTTP {
    headers: Record<string, string>;
    queryString: string;
}

export interface IoTProtocolDataMQTT {
    username?: string;
    password?: string; // A base64-encoded string.
    clientId: string; // Included in the event only when the device sends the value.
}

export interface IoTCustomAuthorizerEvent {
    token?: string;
    signatureVerified: boolean; // Indicates whether the device gateway has validated the signature.
    protocols: IoTProtocolType[]; // Indicates which protocols to expect for the request.
    protocolData: {
        tls?: IoTProtocolDataTLS;
        http?: IoTProtocolDataHTTP;
        mqtt?: IoTProtocolDataMQTT;
    };
    connectionMetadata: {
        id: string; // The connection ID. You can use this for logging.
    };
}

/**
 * IoT CustomAuthorizer AuthResponse.PolicyDocument.
 * https://docs.aws.amazon.com/iot/latest/developerguide/config-custom-auth.html#custom-auth-lambda
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#Condition
 */
export interface IoTCustomAuthorizerResult {
    isAuthenticated: boolean; // A Boolean that determines whether client can connect.
    principalId: string; // A string that identifies the connection in logs.
    disconnectAfterInSeconds: number;
    refreshAfterInSeconds: number;
    policyDocuments: PolicyDocument[];
}
