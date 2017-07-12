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
  keepalive: 10,
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
      .on("error", function(error) {
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
    keepalive: 10,
    protocol: "mqtts",
    port: 0,
    host: "",
    debug: false
 });

 thingShadows.register(
   "thingName",
   { ignoreDeltas: false },
   (err: Error, failedTopics: mqtt.Granted[]) => { }
 );

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

  thingShadows.on("error", function(error) {
     console.log("error", error);
  });

  thingShadows.on("message", function(topic: string, payload: any) {
     console.log("message", topic, payload.toString());
  });

  thingShadows.on("status", function(thingName: string, stat: "accepted" | "rejected", clientToken: string, stateObject: any) {
  });

  thingShadows.on("delta", function(thingName, stateObject) {
  });

  thingShadows.on("timeout", function(thingName, clientToken) {
  });
