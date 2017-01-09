import * as NsApi from "ns-api";

let ns: NsApi = NsApi({
    username: "",
    password: "",
    timeout: 1500
});

ns.vertrektijden("", (err: any, data: Object) => {
    // Response
});

// Get travel advise
ns.reisadvies ({}, (err: any, data: Object) => {
    // Response
});

ns.prijzen({}, (err: any, data: Object) => {
    // Response
});

ns.stations("code", (err: any, data: Object) => {
    // Response
});

ns.stations((err: any, data: Object) => {
    // Response
});

ns.storingen({}, (err: any, data: Object) => {
    // Response
});