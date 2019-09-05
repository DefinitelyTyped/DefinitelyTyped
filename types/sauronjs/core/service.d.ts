export class Service {
                   broadcastSubject: any;

                   constructor(pubs: string[], subs: string[]);

                   broadcast(event: string, data: any): void;
                     }
