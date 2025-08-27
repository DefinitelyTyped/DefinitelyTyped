// Type definitions for eventbusjs 0.2.0
// Project: https://github.com/krasimir/EventBus

import * as EventBus from "eventbusjs";

function myFunction() {}
EventBus.addEventListener("my_function_event", myFunction);
let isEvent: boolean = EventBus.hasEventListener("my_function_event", myFunction);
let events: string = EventBus.getEvents();
EventBus.dispatch("my_function_event");
EventBus.removeEventListener("my_function_event", myFunction);
