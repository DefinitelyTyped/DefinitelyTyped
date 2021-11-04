import { JSPM } from 'jsprintmanager';

JSPM.JSPrintManager.start()
    .then(_ => {
        JSPM.JSPrintManager.getPrinters().then(e => {
            console.log(e);
        });
    })
    .catch(e => {
        console.log(e);
    });
