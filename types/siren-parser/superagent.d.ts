import { Response, SuperAgentRequest } from "superagent";
import { Action, Entity } from "./index";

export function parse(res: string): Entity;
export function parse(res: Response, fn: (err: Error | null, body: any) => void): void;
export function perform(request: any, action: Action): SuperAgentRequest;
