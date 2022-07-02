import {
    ConnectContactFlowChannel,
    ConnectContactFlowEndpoint,
    ConnectContactFlowEvent,
    ConnectContactFlowHandler,
    ConnectContactFlowInitiationMethod,
    ConnectContactFlowQueue,
    ConnectContactFlowResult,
} from 'aws-lambda';

const contactFlowHandler: ConnectContactFlowHandler = async (event, context, callback) => {
    let endpoint: ConnectContactFlowEndpoint | null;
    let channel: ConnectContactFlowChannel;
    let initiationMethod: ConnectContactFlowInitiationMethod;
    let queue: ConnectContactFlowQueue | null;
    let audio: ConnectContactFlowEvent['Details']['ContactData']['MediaStreams']['Customer']['Audio'];

    strOrUndefined = event.Details.ContactData.Attributes[num];
    channel = event.Details.ContactData.Channel;
    str = event.Details.ContactData.ContactId;
    endpoint = event.Details.ContactData.CustomerEndpoint;
    str = event.Details.ContactData.InitialContactId;
    initiationMethod = event.Details.ContactData.InitiationMethod;
    str = event.Details.ContactData.InstanceARN;
    str = event.Details.ContactData.PreviousContactId;
    queue = event.Details.ContactData.Queue;
    endpoint = event.Details.ContactData.SystemEndpoint;
    strOrUndefined = event.Details.Parameters[num];
    str = event.Name;

    audio = null;
    audio = {
        StartFragmentNumber: '12345678901234567890123456789012345678901234567',
        StartTimestamp: '1234567890123',
        StreamARN: 'arn:aws:kinesisvideo:[region]:[account]:stream/.../...'
    };
    audio = {
        StartFragmentNumber: '12345678901234567890123456789012345678901234567',
        StartTimestamp: '1234567890123',
        StopFragmentNumber: '12345678901234567890123456789012345678901234568',
        StopTimestamp: '1234567890124',
        StreamARN: 'arn:aws:kinesisvideo:[region]:[account]:stream/.../...'
    };

    let result: ConnectContactFlowResult;

    result = {
        Name: str,
        Address: str,
        CallerType: str,
    };

    callback(new Error());
    callback(null, result);
    return result;
};
