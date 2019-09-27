declare class Service {
    broadcastSubject: any;

    constructor(pubs: ReadonlyArray<string>, subs: ReadonlyArray<string>);

    broadcast(event: string, data: any): void;
}

export = Service;
