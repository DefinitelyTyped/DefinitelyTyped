/// <reference path="aurelia-logging" />


declare module 'aurelia-event-aggregator' {
  import * as LogManager from 'aurelia-logging';
  class Handler {
    constructor(messageType: any, callback: any);
    handle(message: any): any;
  }
  export class EventAggregator {
    constructor();
    publish(event: string | any, data?: any): any;
    subscribe(event: any, callback: any): any;
    subscribeOnce(event: any, callback: any): any;
  }
  export function includeEventsIn(obj: any): any;
  export function configure(aurelia: any): any;
}