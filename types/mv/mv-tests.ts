import mv = require('mv');

() => {
    mv('/tmp/f1.txt', '/tmp/f2.txt', error => {
        if (error) {
            throw error;
        }
    });

    mv('/tmp/f1.txt', '/tmp/f2.txt', {clobber: false}, error => {
        if (error) {
            throw error;
        }
    });

    mv('/tmp/f1.txt', '/tmp/f2.txt', {mkdirp: true}, error => {
        if (error) {
            throw error;
        }
    });
};
