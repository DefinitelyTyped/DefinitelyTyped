import * as NsApi from "ns-api";

let ns: NsApi = NsApi({
    username: "",
    password: "",
    timeout: 1500
});

ns.vertrektijden("", (err: any, data: Object) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Get travel advise
ns.reisadvies ({}, (err: any, data: Object) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.prijzen({}, (err: any, data: Object) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.stations("code", (err: any, data: Object) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.stations((err: any, data: Object) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.storingen({}, (err: any, data: Object) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});