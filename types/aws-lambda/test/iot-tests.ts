import { IoTEvent, IoTHandler } from "aws-lambda";

// TODO: Update test to read all event properties, like the user will.

const handler: IoTHandler = async (event, context, callback) => { };

// See https://docs.aws.amazon.com/lambda/latest/dg/eventsources.html#eventsources-sqs
const eventObject: IoTEvent = {
  row: "10",
  pos: "23",
  moisture: "75"
};

const eventString: IoTEvent = "AWS Lambda IoT Event";

const eventNumber: IoTEvent = 100;

const eventArray: IoTEvent = [eventObject, eventString, eventNumber];
