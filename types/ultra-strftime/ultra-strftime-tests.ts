import * as strftime from "ultra-strftime";

const it_IT = {
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

strftime('%B %d, %Y %H:%M:%S');
strftime('%B %d, %Y %H:%M:%S', new Date(1307472705067));
strftime('%B %d, %Y %H:%M:%S', new Date(1307472705067), it_IT);
strftime('%B %d, %Y %H:%M:%S', new Date(1307472705067), it_IT, { timezone: -420 });
strftime('%B %d, %Y %H:%M:%S', new Date(1307472705067), it_IT, { timezone: '-0700' });
strftime('%B %d, %Y %H:%M:%S', new Date(1307472705067), it_IT, { utc: true });

const strftimeIT = strftime.localizedStrftime(it_IT);
strftimeIT('%B %d, %Y %H:%M:%S');
strftimeIT('%B %d, %Y %H:%M:%S', new Date(1307472705067));

strftime.strftimeUTC('%B %d, %y %H:%M:%S', new Date(1307472705067), it_IT);
strftime.strftimeUTC('%B %d, %y %H:%M:%S', new Date(1307472705067));
strftime.strftimeUTC('%B %d, %y %H:%M:%S');

strftime.strftimeTZ('%B %d, %y %H:%M:%S', new Date(1307472705067), it_IT, -420);
strftime.strftimeTZ('%B %d, %y %H:%M:%S', new Date(1307472705067), -420);
