declare class Container {
    get(id: string, group: 'organizations' | 'teams' | 'workers'): Promise<Container.OnfleetContainer>;
}

declare namespace Container {
    interface OnfleetContainer {
        id: string;
        timeCreated: number;
        timeLastModified: number;
        organization: string;
        type: 'ORGANIZATION' | 'TEAM' | 'WORKER';
        activeTask: string | null;
        tasks: string[];
        worker: string;
    }
}

export = Container;
