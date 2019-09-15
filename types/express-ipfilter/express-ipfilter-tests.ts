import express = require('express');
import {
    IpFilter,
    IpDeniedError,
    IpFilterOptions,
} from 'express-ipfilter';

const ip           = ['127.0.0.1'];
const ipRange      = [['127.0.0.1', '127.0.0.10']];
const cidrRange    = ['127.0.0.1/24'];
const getIps       = () => ip;
const getCidrRange = () => cidrRange;
const getIpRange   = () => ipRange;

const options: IpFilterOptions = { mode : 'allow' };

// initialize express
const app = express();

// IPs
app.use(IpFilter(ip));

// IPs with options
app.use(IpFilter(ip, options));

// IP range
app.use(IpFilter(ipRange));

// IP range with options
app.use(IpFilter(ipRange, options));

// CIDR range
app.use(IpFilter(cidrRange));

// CIDR range with options
app.use(IpFilter(cidrRange, options));

// callback IPs
app.use(IpFilter(getIps));

// callback IPs with options
app.use(IpFilter(getIps, options));

// callback IP range
app.use(IpFilter(getIpRange));

// callback IP range with options
app.use(IpFilter(getIpRange, options));

// callback CIDR range
app.use(IpFilter(getCidrRange));

// callback CIDR range with options
app.use(IpFilter(getCidrRange, options));

// with `detectIp` option
const customDetection = (req: express.Request) => {
    if (req && req.connection && req.connection.remoteAddress) {
        return req.connection.remoteAddress.replace(/\//g, '.');
    }

    // a `detectIp` function must return an IP
    return '127.0.0.1';
};
IpFilter(getIps, { detectIp: customDetection });

// IP range with all default options
app.use(IpFilter(ipRange, {
    mode       : 'allow',
    log        : true,
    logLevel   : 'all',
    excluding  : [],
    detectIp   : customDetection,
    trustProxy : false,
}));

// IpDeniedError (taken from documentation)
if (app.get('env') === 'development') {
    app.use((
        err: any,
        req: express.Request,
        res: express.Response,
        _next: express.NextFunction,
    ): any => {
        console.log('Error handler', err);

        if (err instanceof IpDeniedError) {
            res.status(401);
        } else {
            res.status(err.status || 500);
        }

        res.render('error', {
            message: 'You shall not pass',
            error: err,
        });
    });
}
