import { OSTSDK, ActionResponse } from "ost-sdk-js";

const ostsdk = new OSTSDK({apiKey: "", apiEndpoint: "", apiSecret: ""});

const services = ostsdk.services;

const user = services.users;
const actions = services.actions;

user.list().then((result) => {
    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.err);
    }
});

actions.get({id: 0}).then((result) => {
    if (result.success) {
        const data = result.data as ActionResponse;
        console.log(data.action.name);
    } else {
        console.log(result.err);
    }
});
