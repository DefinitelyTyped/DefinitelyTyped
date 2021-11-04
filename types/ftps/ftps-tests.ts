import FTP = require('ftps');

const options: FTP.FTPOptions = {
    host: '',
    port: 21
};

const ftp = new FTP(options);

ftp.ls().getFile('.', '.').exec((err, data) => {
    if (err) {
        throw err;
    }

    const error = data.error;
    const rawData = data.data;
    if (error) {
        return error;
    }

    if (rawData) {
        return rawData;
    }
});
