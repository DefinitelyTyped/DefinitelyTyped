import { Subscription } from 'rxjs/Subscription';

import Service = require('./service');

declare function next(channels: ReadonlyArray<string>, event: string, data: any, id: string): void;
declare function attachSubject(object: Service): Subscription;

export { next, attachSubject };
