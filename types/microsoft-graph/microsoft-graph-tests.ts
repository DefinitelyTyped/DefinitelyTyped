// Microsoft Graph tests
// Project: https://github.com/microsoftgraph/msgraph-typescript-typings

import { User, Event, DateTimeTimeZone, ItemBody } from "microsoft-graph";

const user: User = {
    officeLocation: "Bengaluru",
    companyName: "Microsoft",
    country: "India",
    displayName: "Muthu"
};

const startTime: DateTimeTimeZone = {
    dateTime: "2019-05-29T04:00:00.0000000"
};

const endTime: DateTimeTimeZone = {
    dateTime: "2019-05-29T05:00:00.0000000",
};

const bodyText: ItemBody = {
    contentType: "text",
    content: "Hi, Shall we meet for a cup of coffee"
};

const event: Event = {
    subject: "Meet for a coffee",
    body: bodyText,
    start: startTime,
    end: endTime
};
