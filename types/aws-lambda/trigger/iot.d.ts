import { Handler } from "../handler";

export type IoTHandler = Handler<IoTEvent, void>;

// IoT
// https://docs.aws.amazon.com/lambda/latest/dg/services-iot.html
// IoT payload is not restriced to JSON, but JSON is highly recommended. Types as string, number or array are possible to use.

export type IoTEvent<T = never> = string | number | T;
