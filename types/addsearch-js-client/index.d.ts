export class AddSearchClient {
    constructor(name: string);
}

interface AddSearchClient {
    search (path: string, func: Function): void;
}
