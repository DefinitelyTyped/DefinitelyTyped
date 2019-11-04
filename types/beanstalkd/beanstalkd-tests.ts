import Beanstalkd from 'beanstalkd';

const host = '127.0.0.1';
const port = 11300;
const tube = 'TestTube';

const beanstalkd = new Beanstalkd(host, port);

beanstalkd.connect().then(beanstalkd => {
    const priority = 1;
    const delay = 10 * 60;
    const ttr = 5 * 60;

    // Verbosely put a new job
    beanstalkd.use(tube).then(() => beanstalkd.put(priority, delay, ttr));

    // Or use fancy bluebird features
    beanstalkd.call('use', tube).call('put', priority, delay, ttr);

    // Close when done
    beanstalkd.quit();
});
