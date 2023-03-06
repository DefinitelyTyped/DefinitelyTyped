import { hl7 } from "hl7";

// Types your Event
const message: hl7.TriggerEvent["ORM"] = {
  MSH: {
    "MSH.1": "",
    "MSH.2": "",
    "MSH.3": "",
    "MSH.4": "",
    "MSH.5": "",
    "MSH.6": "",
    "MSH.7": "",
    "MSH.8": "",
    "MSH.9": "",
    "MSH.10": "",
    "MSH.11": "",
    "MSH.12": "",
    "MSH.13": "",
    "MSH.14": "",
    "MSH.15": "",
    "MSH.16": "",
    "MSH.17": "",
    "MSH.18": "",
    "MSH.19": "",
    "MSH.20": "",
    "MSH.21": "",
  },
  PID: {
    "PID.5": {
      "PID.5.1": "Smith",
      "PID.5.2": "John",
    },
  },
  ORC: {},
  OBR: {},
  OBX: {},
  ZDS: {},
};

// Then it will types your Segment
const firstname = message.PID["PID.5"]["PID.5.1"]; // $ExpectType string | undefined
const lastname = message.PID["PID.5"]["PID.5.2"]; // $ExpectType string | undefined
