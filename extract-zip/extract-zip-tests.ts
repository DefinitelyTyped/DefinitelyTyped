import * as extract from 'extract-zip';

const str = 'str';
const num = 0;

let options: extract.Options = {
    dir: str,
};
options = {
    dir: str,
    defaultFileMode: num,
};

extract(str, options, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('done');
});
