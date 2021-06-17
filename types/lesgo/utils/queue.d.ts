import SQS = require("aws-sdk/clients/sqs");
import SQSService from "Services/SQSService";

export function dispatch(payload: any, queueName: string): Promise<SQS.SendMessageResult>;

declare const queue: SQSService;

export default queue;
