import responseTime = require('response-time');


////////////////////////////////////////////////////////////////////////////////////
// expressconnect tests https://github.com/expressjs/response-time#expressconnect //
////////////////////////////////////////////////////////////////////////////////////
import express = require('express')
namespace express_connect_tests {
    const app = express()
    app.use(responseTime())
}


//////////////////////////////////////////////////////////////////////////////////////////////
// vanilla http server tests https://github.com/expressjs/response-time#vanilla-http-server //
//////////////////////////////////////////////////////////////////////////////////////////////
import http = require('http')
namespace vanilla_http_server_tests {
    // create "middleware"
    var _responseTime = responseTime()
    http.createServer(function (req, res) {
        _responseTime(req, res, function (err) {
            if (err) return console.log(err);

            // respond to request
            res.setHeader('content-type', 'text/plain')
            res.end('hello, world!')
        })
    })
}


//////////////////////////////////////////////////////////////////////////////////////////////////
// response time metrics tests https://github.com/expressjs/response-time#response-time-metrics //
//////////////////////////////////////////////////////////////////////////////////////////////////
namespace response_time_metrics_tests {
    const app = express()
    app.use(responseTime(function (req, res, time) {
        let num: number = time;
    }));
}
