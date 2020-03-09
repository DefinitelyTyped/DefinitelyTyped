import Cloudevent from 'cloudevents-sdk/v03';

function testEventBuilder() {
    const event = Cloudevent.event()
        .dataContentType('application/json')
        .id('43')
        .time(new Date())
        .type('pull_request')
        .source('github')
        .data({ action: 'created' })
        .format();

    const { id, datacontenttype, time, type, source, data } = event;
}
