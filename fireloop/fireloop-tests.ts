/// <reference path="fireloop.d.ts" />

class User {
    constructor( public model: ModelConstructor) { };

    myRemote(id) {
        this.model.find({
            fields: {},
            limit: 1,
            where : { },
        }, (data) => {
            console.log(data);
        });

    }
}
