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

    strOrUndefined = event.Details.ContactData.Attributes[num];
    channel = event.Details.ContactData.Channel;
    str = event.Details.ContactData.ContactId;
    endpoint = event.Details.ContactData.CustomerEndpoint;
    str = event.Details.ContactData.InitialContactId;
    initiationMethod = event.Details.ContactData.InitiationMethod;
    str = event.Details.ContactData.InstanceARN;
    strOrUndefined = event.Details.ContactData.MediaStreams.Customer.Audio.StartFragmentNumber;
    strOrUndefined = event.Details.ContactData.MediaStreams.Customer.Audio.StartTimestamp;
    strOrUndefined = event.Details.ContactData.MediaStreams.Customer.Audio.StreamARN;
    str = event.Details.ContactData.PreviousContactId;
    queue = event.Details.ContactData.Queue;
    endpoint = event.Details.ContactData.SystemEndpoint;
    strOrUndefined = event.Details.Parameters[num];
    str = event.Name;

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
