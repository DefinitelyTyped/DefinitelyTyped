import { Subscription } from 'rxjs/Subscription';

import { Service } from './service';

export function next(channels: string[], event: string, data: any, id: string): void;
export function attachSubject(object: Service): Subscription;
