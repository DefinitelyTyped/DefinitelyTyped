export class Container {
    get(id: string, group: 'organizations' | 'teams' | 'workers'): Promise<OnfleetContainer>;
    update(id: string, obj: UpdateOnfleetContainer): Promise<OnfleetContainer>;
}

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

interface UpdateOnfleetContainer {
    tasks?: string[];
}