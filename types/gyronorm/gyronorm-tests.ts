import * as gyronorm from 'gyronorm';

const instance = new gyronorm.GyroNorm();
const options: gyronorm.Options = {
    frequency: 100
};

instance.init(options)
    .then(() => {
        instance.startLogging((data) => {
            const { message, code } = data;
        });

        instance.start((data) => {
            const motion = data.dm;
            const orientation = data.do;
        });
    })
    .catch(() => {
        // init failure
    });
