import { IoTEvent, IoTHandler } from "aws-lambda";

const handler: IoTHandler = async (event, context, callback) => { };

// See https://docs.aws.amazon.com/lambda/latest/dg/services-iot.html

const eventObject: IoTEvent<{ [key: string]: string }> = {
  row: "10",
  pos: "23",
  moisture: "75"
};

const eventString: IoTEvent = "AWS Lambda IoT Event";

const eventNumber: IoTEvent = 100;

const eventArray: IoTEvent<any[]> = [eventObject, eventString, eventNumber];
