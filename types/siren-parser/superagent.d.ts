import { Action, Entity } from './index';
import { SuperAgentRequest, Response } from 'superagent';

export function parse(res: string): Entity;
export function parse(res: Response, fn: (err: Error | null, body: Entity) => void): void;
export function perform(request: any, action: Action): SuperAgentRequest;
