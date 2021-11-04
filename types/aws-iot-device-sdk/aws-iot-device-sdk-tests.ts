// Code adapted from
// https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d59e02e2f6a1dce321000d914cb47894/examples/device-example.js
// and
// https://github.com/aws/aws-iot-device-sdk-js/blob/97b0b468d59e02e2f6a1dce321000d914cb47894/examples/thing-example.js

import * as awsIot from "aws-iot-device-sdk";
import * as mqtt from "mqtt";

const device = new awsIot.device({
  keyPath: "",
  certPath: "",
  caPath: "",
  clientId: "",
  region: "",
  baseReconnectTimeMs: 1000,
  protocol: "wss",
  port: 443,
  host: "",
  debug: false
});

device.subscribe("topic_1");

device
      .on("connect", function() {
         console.log("connect");
      });
   device
      .on("close", function() {
         console.log("close");
      });
   device
      .on("reconnect", function() {
         console.log("reconnect");
      });
   device
      .on("offline", function() {
         console.log("offline");
      });
   device
      .on("error", function(error: Error | string) {
         console.log("error", error);
      });
   device
      .on("message", function(topic: string, payload: any) {
         console.log("message", topic, payload.toString());
      });


const thingShadows = new awsIot.thingShadow({
    keyPath: "",
    certPath: "",
    caPath: "",
    clientId: "",
    region: "",
    baseReconnectTimeMs: 1000,
    protocol: "mqtts",
    port: 0,
    host: "",
    debug: false
 });

 thingShadows.register(
   "thingName",
   { ignoreDeltas: false },
   (err: Error, failedTopics: mqtt.ISubscriptionGrant[]) => { }
 );

 thingShadows.subscribe("topic", { qos: 1 }, (error: any, granted: mqtt.ISubscriptionGrant[]) => {});

 thingShadows.on("connect", function() {
     console.log("connected to AWS IoT");
  });

  thingShadows.on("close", function() {
     console.log("close");
     thingShadows.unregister("thingName");
  });

  thingShadows.on("reconnect", function() {
     console.log("reconnect");
  });

  thingShadows.on("offline", function() {
     console.log("offline");
  });

  thingShadows.on("error", function(error: Error) {
     console.log("error", error);
  });

  thingShadows.on("message", function(topic: string, payload: any) {
     console.log("message", topic, payload.toString());
  });

  thingShadows.on("status", function(thingName: string, stat: "accepted" | "rejected", clientToken: string, stateObject: any) {
  });

  thingShadows.on("delta", function(thingName: string, stateObject: any) {
  });

  thingShadows.on("timeout", function(thingName: string, clientToken: string) {
  });

const jobs = new awsIot.jobs({
    keyPath: "",
    certPath: "",
    caPath: "",
    clientId: "",
    region: "",
    baseReconnectTimeMs: 1000,
    protocol: "wss",
    port: 443,
    host: "",
    debug: false
});

jobs.subscribeToJobs("thingname", "operationname", (err, job) => {
    console.error("Error", err);
    if (err || !job) {
        return;
    }
    console.log("job id", job.id);
    console.log("job info", job.document);
    console.log("job op", job.operation);
    console.log("job status", job.status);
    console.log("job status details", job.status.statusDetails);
    console.log(
        "job status details progress",
        job.status.statusDetails.progress
    );

    job.inProgress({ progress: "1" }, err =>
        console.error("Job progress error", err)
    );
    job.failed({ progress: "2" }, err =>
        console.error("Job failed error", err)
    );
    job.succeeded({ progress: "3" }, err =>
        console.error("Job failed error", err)
    );
});

jobs.startJobNotifications("thingname", err =>
    console.error("Start job notification error", err)
);

jobs.unsubscribeFromJobs("thingname", "operationame", err =>
    console.error("Unsubscribe from jobs error", err)
);
