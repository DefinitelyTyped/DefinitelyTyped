import createClient = require('hafas-client');

import avvProfile = require('hafas-client/p/avv');
import bartProfile = require('hafas-client/p/bart');
import blsProfile = require('hafas-client/p/bls');
import bvgProfile = require('hafas-client/p/bvg');
import cflProfile = require('hafas-client/p/cfl');
import cmtaProfile = require('hafas-client/p/cmta');
import dartProfile = require('hafas-client/p/dart');
import dbProfile = require('hafas-client/p/db');
import dbbusradarnrwProfile = require('hafas-client/p/db-busradar-nrw');
import hvvProfile = require('hafas-client/p/hvv');
import insaProfile = require('hafas-client/p/insa');
import invgProfile = require('hafas-client/p/invg');
import irishrailProfile = require('hafas-client/p/irish-rail');
import ivbProfile = require('hafas-client/p/ivb');
import kvbProfile = require('hafas-client/p/kvb');
import mobilnrwProfile = require('hafas-client/p/mobil-nrw');
import mobiliteitluProfile = require('hafas-client/p/mobiliteit-lu');
import nahshProfile = require('hafas-client/p/nahsh');
import nvvProfile = require('hafas-client/p/nvv');
import oebbProfile = require('hafas-client/p/oebb');
import ooevvProfile = require('hafas-client/p/ooevv');
import pkpProfile = require('hafas-client/p/pkp');
import rejseplanenProfile = require('hafas-client/p/rejseplanen');
import rmvProfile = require('hafas-client/p/rmv');
import rsagProfile = require('hafas-client/p/rsag');
import saarfahrplanProfile = require('hafas-client/p/saarfahrplan');
import salzburgProfile = require('hafas-client/p/salzburg');
import sbahnmuenchenProfile = require('hafas-client/p/sbahn-muenchen');
import sbbProfile = require('hafas-client/p/sbb');
import sncbProfile = require('hafas-client/p/sncb');
import stvProfile = require('hafas-client/p/stv');
import svvProfile = require('hafas-client/p/svv');
import tpgProfile = require('hafas-client/p/tpg');
import vbbProfile = require('hafas-client/p/vbb');
import vbnProfile = require('hafas-client/p/vbn');
import vkgProfile = require('hafas-client/p/vkg');
import vmtProfile = require('hafas-client/p/vmt');
import vorProfile = require('hafas-client/p/vor');
import vosProfile = require('hafas-client/p/vos');
import vrnProfile = require('hafas-client/p/vrn');
import vsnProfile = require('hafas-client/p/vsn');
import vvtProfile = require('hafas-client/p/vvt');
import vvvProfile = require('hafas-client/p/vvv');
import zvvProfile = require('hafas-client/p/zvv');

const choose = (p: string): createClient.Profile => {
    switch (p) {
        case 'bvgProfile': return bvgProfile;
        case 'cflProfile': return cflProfile;
        case 'cmtaProfile': return cmtaProfile;
        case 'dbProfile': return dbProfile;
        case 'dbbusradarnrwProfile': return dbbusradarnrwProfile;
        case 'hvvProfile': return hvvProfile;
        case 'insaProfile': return insaProfile;
        case 'invgProfile': return invgProfile;
        case 'mobiliteitProfile': return mobiliteitluProfile;
        case 'nahshProfile': return nahshProfile;
        case 'nvvProfile': return nvvProfile;
        case 'oebbProfile': return oebbProfile;
        case 'pkpProfile': return pkpProfile;
        case 'rmvProfile': return rmvProfile;
        case 'rsagProfile': return rsagProfile;
        case 'saarfahrplanProfile': return saarfahrplanProfile;
        case 'sbahnmuenchenProfile': return sbahnmuenchenProfile;
        case 'sncbProfile': return sncbProfile;
        case 'svvProfile': return svvProfile;
        case 'vbbProfile': return vbbProfile;
        case 'vbnProfile': return vbnProfile;
        case 'vmtProfile': return vmtProfile;
        case 'vrnProfile': return vrnProfile;
        case 'vsnProfile': return vsnProfile;
        case 'zvvProfile': return zvvProfile;
        case 'rejseplanenProfile': return rejseplanenProfile;
        default: return dbProfile;
    }
};

const client: createClient.HafasClient = createClient(choose('dbProfile'), 'client');

client.locations("", { results: 1 })
    .then(locations => { /* ... */ })
    .catch(() => { /* ... */ });

client.journeys("", "", { results: 1, subStops: true, age: 65 })
    .then(journeys => {
        if (journeys.journeys && journeys.journeys[0].legs.length > 0) {
            if (journeys.journeys[0].legs[0].prognosedArrival === 'prognosed') { /* ... */ }
        }
    })
    .catch(() => { /* ... */ });

if (client.radar) {
    client.radar({ north: 0, south: 0, west: 0, east: 0 }, { results: 1, duration: 10 })
        .then(movements => { /* ... */ })
        .catch(() => { /* ... */ });
}

if (client.lines) {
    client.lines('x', {})
        .then(lines => { /* ... */ })
        .catch(() => { /* ... */ });
}

if (client.serverInfo) {
    client.serverInfo({ versionInfo: true })
        .then(serverInfo => { /* ... */ })
        .catch(() => { /* ... */ });
}

if (client.journeysFromTrip) {
    client.journeysFromTrip('x', { stop: { type: 'stop' } }, 'y', {})
        .then(journeys => { /* ... */ })
        .catch(() => { /* ... */ });
}
