import Context = require("./Context");

export const ON_SCENARIO: "__ON_SCENARIO__";
export const ON_STEP: "__ON_STEP__";
export const ON_EXECUTE: "__ON_EXECUTE__";
export const ON_DEFINE: "__ON_DEFINE__";

export interface ScenarioEventData {
    scenario: string[];
    ctx: Context.Properties;
}

export interface ScenarioEvent {
    name: "__ON_SCENARIO__";
    data: ScenarioEventData;
}

export interface StepEventData {
    step: string;
    ctx: Context.Properties;
}

export interface StepEvent {
    name: "__ON_STEP__";
    data: StepEventData;
}

export interface ExecuteEventData {
    step: string;
    ctx: Context.Properties;
    pattern: string;
    args: string[];
}

export interface ExecuteEvent {
    name: "__ON_EXECUTE__";
    data: ExecuteEventData;
}

export interface DefineEventData {
    signature: string;
    pattern: string;
}

export interface DefineEvent {
    name: "__ON_DEFINE__";
    data: DefineEventData;
}

export class EventBus {
    send(event_name: "__ON_SCENARIO__", event_data: ScenarioEventData, next?: (err?: Error) => void): void;
    send(event_name: "__ON_STEP__", event_data: StepEvent, next?: (err?: Error) => void): void;
    send(event_name: "__ON_EXECUTE__", event_data: ExecuteEvent, next?: (err?: Error) => void): void;
    send(event_name: "__ON_DEFINE__", event_data: DefineEvent, next?: (err?: Error) => void): void;

    on(event_pattern: "__ON_SCENARIO__", callback: (event: ScenarioEvent) => void): this;
    on(event_pattern: "__ON_STEP__", callback: (event: StepEvent) => void): this;
    on(event_pattern: "__ON_EXECUTE__", callback: (event: ExecuteEvent) => void): this;
    on(event_pattern: "__ON_DEFINE__", callback: (event: DefineEvent) => void): this;
    on(event_pattern: RegExp, callback: (event: ScenarioEvent|StepEvent|ExecuteEvent|DefineEvent) => void): this;
}

export function instance(): EventBus;
