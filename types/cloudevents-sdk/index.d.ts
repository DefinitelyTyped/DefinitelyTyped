// Type definitions for cloudevents-sdk 0.3
// Project: https://github.com/cloudevents/sdk-javascript (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Andy Cunningham <https://github.com/andycmaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-declare-current-package no-single-declare-module cloudevents-sdk/v03 is the documented way to import the cloudevent builder
declare module 'cloudevents-sdk/v03' {
    // Cloudevent fluent builder
    // https://github.com/cloudevents/sdk-javascript/blob/master/lib/cloudevent.js
    interface CloudEventBuilder {
        type: (type: string) => CloudEventBuilder;
        dataContentType: (contentType: string) => CloudEventBuilder;
        id: (id: string) => CloudEventBuilder;
        time: (timestamp: Date) => CloudEventBuilder;
        source: (source: string) => CloudEventBuilder;
        data: (data: any) => CloudEventBuilder;

        format: () => CloudEvent;
        toString: () => string;
    }

    // Cloudevent.event() static constructor
    // https://github.com/cloudevents/sdk-javascript#an-easy-way-to-create-events
    const Cloudevent: {
        event: () => CloudEventBuilder;
    };

    export default Cloudevent;
}

// v03 CloudEvent payload
// https://github.com/cloudevents/sdk-javascript/blob/master/lib/specs/spec_0_3.js#L11
interface CloudEvent {
    id: string;
    datacontenttype: 'application/json';
    time: string;
    type: string;
    source: string;
    data: {};
}
