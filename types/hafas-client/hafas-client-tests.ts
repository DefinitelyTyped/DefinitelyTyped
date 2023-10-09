import { createClient, HafasClient, Profile } from "hafas-client/index";

import { profile as avvProfile } from "hafas-client/p/avv/index";
import { profile as bartProfile } from "hafas-client/p/bart/index";
import { profile as blsProfile } from "hafas-client/p/bls/index";
import { profile as bvgProfile } from "hafas-client/p/bvg/index";
import { profile as cflProfile } from "hafas-client/p/cfl/index";
import { profile as cmtaProfile } from "hafas-client/p/cmta/index";
import { profile as dartProfile } from "hafas-client/p/dart/index";
import { profile as dbbusradarnrwProfile } from "hafas-client/p/db-busradar-nrw/index";
import { profile as dbProfile } from "hafas-client/p/db/index";
import { profile as hvvProfile } from "hafas-client/p/hvv/index";
import { profile as insaProfile } from "hafas-client/p/insa/index";
import { profile as invgProfile } from "hafas-client/p/invg/index";
import { profile as irishrailProfile } from "hafas-client/p/irish-rail/index";
import { profile as ivbProfile } from "hafas-client/p/ivb/index";
import { profile as kvbProfile } from "hafas-client/p/kvb/index";
import { profile as mobilnrwProfile } from "hafas-client/p/mobil-nrw/index";
import { profile as mobiliteitluProfile } from "hafas-client/p/mobiliteit-lu/index";
import { profile as nahshProfile } from "hafas-client/p/nahsh/index";
import { profile as nvvProfile } from "hafas-client/p/nvv/index";
import { profile as oebbProfile } from "hafas-client/p/oebb/index";
import { profile as ooevvProfile } from "hafas-client/p/ooevv/index";
import { profile as pkpProfile } from "hafas-client/p/pkp/index";
import { profile as rejseplanenProfile } from "hafas-client/p/rejseplanen/index";
import { profile as rmvProfile } from "hafas-client/p/rmv/index";
import { profile as rsagProfile } from "hafas-client/p/rsag/index";
import { profile as saarfahrplanProfile } from "hafas-client/p/saarfahrplan/index";
import { profile as salzburgProfile } from "hafas-client/p/salzburg/index";
import { profile as sbahnmuenchenProfile } from "hafas-client/p/sbahn-muenchen/index";
import { profile as sncbProfile } from "hafas-client/p/sncb/index";
import { profile as stvProfile } from "hafas-client/p/stv/index";
import { profile as svvProfile } from "hafas-client/p/svv/index";
import { profile as tpgProfile } from "hafas-client/p/tpg/index";
import { profile as vbbProfile } from "hafas-client/p/vbb/index";
import { profile as vbnProfile } from "hafas-client/p/vbn/index";
import { profile as vkgProfile } from "hafas-client/p/vkg/index";
import { profile as vmtProfile } from "hafas-client/p/vmt/index";
import { profile as vorProfile } from "hafas-client/p/vor/index";
import { profile as vosProfile } from "hafas-client/p/vos/index";
import { profile as vrnProfile } from "hafas-client/p/vrn/index";
import { profile as vsnProfile } from "hafas-client/p/vsn/index";
import { profile as vvtProfile } from "hafas-client/p/vvt/index";
import { profile as vvvProfile } from "hafas-client/p/vvv/index";
import { profile as zvvProfile } from "hafas-client/p/zvv/index";

const choose = (p: string): Profile => {
    switch (p) {
        case "bvgProfile":
            return bvgProfile;
        case "cflProfile":
            return cflProfile;
        case "cmtaProfile":
            return cmtaProfile;
        case "dbProfile":
            return dbProfile;
        case "dbbusradarnrwProfile":
            return dbbusradarnrwProfile;
        case "hvvProfile":
            return hvvProfile;
        case "insaProfile":
            return insaProfile;
        case "invgProfile":
            return invgProfile;
        case "mobiliteitProfile":
            return mobiliteitluProfile;
        case "nahshProfile":
            return nahshProfile;
        case "nvvProfile":
            return nvvProfile;
        case "oebbProfile":
            return oebbProfile;
        case "pkpProfile":
            return pkpProfile;
        case "rmvProfile":
            return rmvProfile;
        case "rsagProfile":
            return rsagProfile;
        case "saarfahrplanProfile":
            return saarfahrplanProfile;
        case "sbahnmuenchenProfile":
            return sbahnmuenchenProfile;
        case "sncbProfile":
            return sncbProfile;
        case "svvProfile":
            return svvProfile;
        case "vbbProfile":
            return vbbProfile;
        case "vbnProfile":
            return vbnProfile;
        case "vmtProfile":
            return vmtProfile;
        case "vrnProfile":
            return vrnProfile;
        case "vsnProfile":
            return vsnProfile;
        case "zvvProfile":
            return zvvProfile;
        case "rejseplanenProfile":
            return rejseplanenProfile;
        default:
            return dbProfile;
    }
};

const client: HafasClient = createClient(choose("dbProfile"), "client");

client.locations("", { results: 1 })
    .then(locations => {/* ... */})
    .catch(() => {/* ... */});

client.journeys("", "", { results: 1, subStops: true, age: 65, routingMode: "REALTIME" })
    .then(journeys => {
        if (journeys.journeys && journeys.journeys[0].legs.length > 0) {
            if (journeys.journeys[0].legs[0].prognosedArrival === "prognosed") { /* ... */ }
        }
    })
    .catch(() => {/* ... */});

if (client.radar) {
    client.radar({ north: 0, south: 0, west: 0, east: 0 }, { results: 1, duration: 10 })
        .then(movements => {/* ... */})
        .catch(() => {/* ... */});
}

if (client.lines) {
    client.lines("x", {})
        .then(lines => {/* ... */})
        .catch(() => {/* ... */});
}

if (client.serverInfo) {
    client.serverInfo({ versionInfo: true })
        .then(serverInfo => {/* ... */})
        .catch(() => {/* ... */});
}

if (client.journeysFromTrip) {
    client.journeysFromTrip("x", { stop: { type: "stop" } }, "y", {})
        .then(journeys => {/* ... */})
        .catch(() => {/* ... */});
}
