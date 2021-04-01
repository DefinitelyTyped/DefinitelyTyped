import { Callback, Handler } from '../handler';

export type ConnectContactFlowHandler = Handler<ConnectContactFlowEvent, ConnectContactFlowResult>;
export type ConnectContactFlowCallback = Callback<ConnectContactFlowResult>;

// Connect
// https://docs.aws.amazon.com/connect/latest/adminguide/connect-lambda-functions.html
export interface ConnectContactFlowEvent {
    Details: {
        ContactData: {
            Attributes: { [key: string]: string };
            Channel: ConnectContactFlowChannel;
            ContactId: string;
            CustomerEndpoint: ConnectContactFlowEndpoint | null;
            InitialContactId: string;
            InitiationMethod: ConnectContactFlowInitiationMethod;
            InstanceARN: string;
            PreviousContactId: string;
            Queue: ConnectContactFlowQueue | null;
            SystemEndpoint: ConnectContactFlowEndpoint | null;
            MediaStreams: {
                Customer: {
                    Audio: {
                        StartFragmentNumber?: string;
                        StartTimestamp?: string;
                        StreamARN?: string;
                    };
                };
            };
        };
        Parameters: { [key: string]: string };
    };
    Name: 'ContactFlowEvent';
}

export type ConnectContactFlowChannel = 'VOICE' | 'CHAT';

export type ConnectContactFlowInitiationMethod = 'INBOUND' | 'OUTBOUND' | 'TRANSFER' | 'CALLBACK' | 'API';

export interface ConnectContactFlowEndpoint {
    Address: string;
    Type: 'TELEPHONE_NUMBER';
}

export interface ConnectContactFlowQueue {
    ARN: string;
    Name: string;
}

export interface ConnectContactFlowResult {
    [key: string]: string | null;
}
