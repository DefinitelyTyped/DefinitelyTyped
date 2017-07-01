import * as NsApi from "ns-api";

declare var console: { log(msg: any): string };

const ns: NsApi = NsApi({
    username: "",
    password: "",
    timeout: 1500
});

ns.vertrektijden("", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Get travel advise
ns.reisadvies ({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.prijzen({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.stations("code", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.stations((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

ns.storingen({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
