// Type definitions for naughty-words 1.2
// Project: https://github.com/LDNOOBW/naughty-words-js
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ar = require('./ar.json');
import cs = require('./cs.json');
import da = require('./da.json');
import de = require('./de.json');
import en = require('./en.json');
import eo = require('./eo.json');
import es = require('./es.json');
import fa = require('./fa.json');
import fi = require('./fi.json');
import fil = require('./fil.json');
import fr = require('./fr.json');
import frCA = require('./fr-CA-u-sd-caqc.json');
import hi = require('./hi.json');
import hu = require('./hu.json');
import it = require('./it.json');
import ja = require('./ja.json');
import kab = require('./kab.json');
import ko = require('./ko.json');
import nl = require('./nl.json');
import no = require('./no.json');
import pl = require('./pl.json');
import pt = require('./pt.json');
import ru = require('./ru.json');
import sv = require('./sv.json');
import th = require('./th.json');
import tlh = require('./tlh.json');
import tr = require('./tr.json');
import zh = require('./zh.json');

export = naughtyWords;

declare const naughtyWords: Readonly<{
    ar: typeof ar;
    cs: typeof cs;
    da: typeof da;
    de: typeof de;
    en: typeof en;
    eo: typeof eo;
    es: typeof es;
    fa: typeof fa;
    fi: typeof fi;
    fil: typeof fil;
    fr: typeof fr;
    'fr-CA-u-sd-caqc': typeof frCA;
    hi: typeof hi;
    hu: typeof hu;
    it: typeof it;
    ja: typeof ja;
    kab: typeof kab;
    ko: typeof ko;
    nl: typeof nl;
    no: typeof no;
    pl: typeof pl;
    pt: typeof pt;
    ru: typeof ru;
    sv: typeof sv;
    th: typeof th;
    tlh: typeof tlh;
    tr: typeof tr;
    zh: typeof zh;
}>;
