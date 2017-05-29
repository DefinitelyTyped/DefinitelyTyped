import * as strftime from "strftime";

strftime('%B %d, %Y %H:%M:%S');
strftime('%F %T', new Date(1307472705067));

var it_IT = {
    days: ['domenica', 'lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato'],
    shortDays: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
    months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
    shortMonths: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
    AM: 'AM',
    PM: 'PM',
    am: 'am',
    pm: 'pm',
    formats: {
        D: '%m/%d/%y',
        F: '%Y-%m-%d',
        R: '%H:%M',
        X: '%T',
        c: '%a %b %d %X %Y',
        r: '%I:%M:%S %p',
        T: '%H:%M:%S',
        v: '%e-%b-%Y',
        x: '%D'
    }
};

var strftimeIT = strftime.localize(it_IT);
strftimeIT('%B %d, %Y %H:%M:%S');
strftimeIT('%B %d, %Y %H:%M:%S', new Date(1307472705067));

var strftimePDT = strftime.timezone(-420);
var strftimeCEST = strftime.timezone(120);
strftimePDT('%B %d, %y %H:%M:%S', new Date(1307472705067));
strftimeCEST('%F %T', new Date(1307472705067));