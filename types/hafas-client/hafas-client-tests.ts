import createClient = require('hafas-client');

import bvgProfile = require('hafas-client/p/bvg');
import cflProfile = require('hafas-client/p/cfl');
import cmtaProfile = require('hafas-client/p/cmta');
import dbProfile = require('hafas-client/p/db');
import dbbusradarnrwProfile = require('hafas-client/p/db-busradar-nrw');
import hvvProfile = require('hafas-client/p/hvv');
import insaProfile = require('hafas-client/p/insa');
import invgProfile = require('hafas-client/p/invg');
import nahshProfile = require('hafas-client/p/nahsh');
import nvvProfile = require('hafas-client/p/nvv');
import oebbProfile = require('hafas-client/p/oebb');
import pkpProfile = require('hafas-client/p/pkp');
import rmvProfile = require('hafas-client/p/rmv');
import rsagProfile = require('hafas-client/p/rsag');
import saarfahrplanProfile = require('hafas-client/p/saarfahrplan');
import sbahnmuenchenProfile = require('hafas-client/p/sbahn-muenchen');
import sncbProfile = require('hafas-client/p/sncb');
import svvProfile = require('hafas-client/p/svv');
import vbbProfile = require('hafas-client/p/vbb');
import vbnProfile = require('hafas-client/p/vbn');
import vmtProfile = require('hafas-client/p/vmt');
import vsnProfile = require('hafas-client/p/vsn');
import zvvProfile = require('hafas-client/p/zvv');
import rejseplanenProfile = require('hafas-client/p/rejseplanen');

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

client.journeys("", "", { results: 1, subStops: true })
    .then(journeys => { /* ... */ })
    .catch(() => { /* ... */ });

if (client.radar) {
    client.radar({ north: 0, south: 0, west: 0, east: 0 }, { results: 1, duration: 10 })
        .then(movements => { /* ... */ })
        .catch(() => { /* ... */ });
}
