import Tag = require('./Tag');

export default class Transformer {
    id: number;
    name: string | null;
    tag: Tag | null;
    path: string | null;
    priority: any;
    properties: any;
    taglibId: string;

    constructor();
    getFunc(): any;
}
