import {OSTSDK, ActionResponse} from "ost-sdk-js";

let ostsdk = new OSTSDK({apiKey: "", apiEndpoint: "", apiSecret: ""});

let services = ostsdk.services;

let user = services.users;
let actions = services.actions;

user.list().then((result)=>{
    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.err);
    }
});


actions.get({id: 0}).then((result)=>{
    if (result.success) {
        let data = result.data as ActionResponse;
        console.log(data.action.name);
    } else {
        console.log(result.err);
    }
});