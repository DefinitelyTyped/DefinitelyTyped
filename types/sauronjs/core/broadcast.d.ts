import { Subscription } from 'rxjs/Subscription';

import { Service } from './service';

declare function next(channels: string[], event: string, data: any, id: string): void;
declare function attachSubject(object: Service): Subscription;

export { next, attachSubject };
