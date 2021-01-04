import { Handler } from "../handler";

export type IoTHandler = Handler<IoTEvent, void>;

// IoT
// https://docs.aws.amazon.com/lambda/latest/dg/services-iot.html

export type IoTEvent = string | number | { [key: string]: any } | any[];