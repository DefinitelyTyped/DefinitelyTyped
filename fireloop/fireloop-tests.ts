/// <reference path="index.d.ts" />

import { Model } from 'fireloop';

class User {
    constructor( public model: Model) { };

    myRemote(id: any) {
        this.model.find({
            fields: {},
            limit: 1,
            where : { },
        }, (data: any) => {
            console.log(data);
        });

        this.model.on('changed', () => {
            console.log('success');
        });

    }
}
