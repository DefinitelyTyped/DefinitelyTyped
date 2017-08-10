import getos = require('getos');

getos((e, os) => {
    if (e) {
        return;
    }

    const thisOs: getos.Os = os;

    if (os.os === 'linux') {
        let str: string;
        let strn: string | undefined;

        str = os.dist;
        str = os.release;
        strn = os.codename;
    }
});
