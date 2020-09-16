// Type definitions for server-timing-header 1.9
// Project: https://github.com/SilentImp/express-middleware-headers-server-timing#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { RequestHandler } from 'express';

/**
 * Express middleware add serverTiming to request and
 * make sure that we will send this headers before express finish request
 * @example <caption>How to add middleware</caption>
 * import express = require('express');
 * import serverTimingMiddleware = require('server-timing-header');
 * const port = 3000;
 * const app = express();
 * app.use(serverTimingMiddleware());
 * app.get('/', function (req, res, next) {
 *   req.serverTiming.from('db');
 *   // fetching data from database
 *   req.serverTiming.to('db');
 * });
 * app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 */
declare function serverTimingMiddleware(options?: serverTimingMiddleware.Options): RequestHandler;

declare namespace serverTimingMiddleware {
    /**
     * middleware options
     */
    interface Options {
        /**
         * should middleware send headers (may be disabled for some environments
         * @default false
         */
        sendHeaders?: boolean;
    }

    class ServerTiming {
        /**
         * Build server-timing header value by old specification
         * @param name - metric name
         * @param description - metric description
         * @param duration - metric duration
         * @return — server-timing header value
         */
        static oldStyle(name: string, description: string, duration: string): string;

        /**
         * Build server-timing header value by current specification
         * @param name - metric name
         * @param description - metric description
         * @param duration - metric duration
         * @return — server-timing header value
         */
        static newStyle(name: string, description: string, duration: string): string;

        readonly oldSpecification: boolean;

        /**
         * Create server timing controller
         * @param [userAgent=''] — string that contain user agent description
         * @param [sendHeaders=true] - you may send or don't send headers depending on environment
         */
        constructor(userAgent: string, sendHeaders: boolean);

        /**
         * Add callback to modify data before create and send headers
         * @param name — hook name
         * @param callback — function that may modify data before send headers
         * @param callbackIndex - index that will be used to sort callbacks before execution
         * @example <caption>Add hook to mutate the metrics</caption>
         * import express = require('express');
         * import serverTimingMiddleware = require('server-timing-header');
         * const port = 3000;
         * const app = express();
         * app.use(serverTimingMiddleware());
         * app.use(function (req, res, next) {
         *   // If one measurement include other inside you may substract times
         *   req.serverTiming.addHook('substractDataTimeFromRenderTime', function (metrics) {
         *      const updated = { ...metrics };
         *      if (updated.data && updated.render) {
         *        const renderDuration  = req.serverTiming.calculateDurationSmart(updated.render);
         *        const dataDuration  = req.serverTiming.calculateDurationSmart(updated.data);
         *        updated.render.duration = Math.abs(renderDuration - dataDuration);
         *      }
         *      return updated;
         *   });
         * });
         * app.listen(port, () => console.log(`Example app listening on port ${port}!`));
         */
        addHook(name: string, callback: (metrics: Metrics) => void, callbackIndex?: number): void;

        /**
         * Remove callback with specific name
         * @param name — hook name
         */
        removeHook(name: string): void;

        /**
         * Set start time for metric
         * @param name — metric name
         * @param [description] — description of the metric
         * @throw {Error} throw an error if name is not valid
         * @example <caption>You may define only start time for metric</caption>
         * import express = require('express');
         * import serverTimingMiddleware = require('server-timing-header');
         * const port = 3000;
         * const app = express();
         * app.use(serverTimingMiddleware());
         * app.get('/', function (req, res, next) {
         *   // If you define only start time for metric,
         *   // then as the end time will be used header sent time
         *   req.serverTiming.from('metric', 'metric description');
         *   // fetching data from database
         * });
         * app.listen(port, () => console.log(`Example app listening on port ${port}!`));
         */
        from(name: string, description?: string): void;

        /**
         * Set end time for metric
         * @param name — metric name
         * @param [description] — description of the metric
         * @throw {Error} — throw an error if name is not valid
         * @example <caption>You may define only end time for metric</caption>
         * import express = require('express');
         * import serverTimingMiddleware = require('server-timing-header');
         * const port = 3000;
         * const app = express();
         * app.use(serverTimingMiddleware());
         * app.get('/', function (req, res, next) {
         *   // fetching data from database
         *   // If you define only end time for metric,
         *   // then as the start time will be used middleware initialization time
         *   req.serverTiming.to('metric');
         * });
         * app.listen(port, () => console.log(`Example app listening on port ${port}!`));
         */
        to(name: string, description?: string): void;

        /**
         * Add description to specific metric
         * @param name — metric name
         * @param description — description of the metric
         * @throw {Error} — throw an error if name is not valid
         */
        description(name: string, description: string): void;

        /**
         * Add duration to specific metric
         * @param name — metric name
         * @param duration — duration of the metric
         * @throw {Error} — throw an error if name is not valid
         */
        duration(name: string, duration: number): void;

        /**
         * Add metric
         * @param name - metric name
         * @param description — metric description
         * @param duration — metric duration
         * @throw {Error} — throw an error if name contains invalid characters
         * @example <caption>Add metric</caption>
         * import express = require('express');
         * import serverTimingMiddleware = require('server-timing-header');
         * const port = 3000;
         * const app = express();
         * app.use(serverTimingMiddleware());
         * app.get('/', function (req, res, next) {
         *   // You got time metric from the external source
         *   req.serverTiming.add('metric', 'metric description', 52.3);
         * });
         * app.listen(port, () => console.log(`Example app listening on port ${port}!`));
         */
        add(name: string, description: string, duration: number): void;

        /**
         * Calculate duration between two timestamps, if from or two is undefined — will use initialization time and current time to replace
         * @param metric — object that contain metric information
         * @return - duration in milliseconds
         */
        calculateDurationSmart(metric: Metric): number;
    }

    /**
     * object that contain metric information
     */
    interface Metric {
        /** metric name */
        name: string;
        /** metric description */
        description: string;
        /** start time [seconds, nanoseconds], if undefined, initialization time will be used */
        from: [number, number];
        /**  end time [seconds, nanoseconds], if undefined, current timestamp will be used */
        to: [number, number];
        /** time in milliseconds, if not undefined method will just return durations */
        duration: number;
    }

    /**
     * Object with hashed metrics information
     */
    interface Metrics {
        [key: string]: Metric;
    }
}

declare module 'express-serve-static-core' {
    interface Request {
        readonly serverTiming: serverTimingMiddleware.ServerTiming;
    }
}

export = serverTimingMiddleware;
