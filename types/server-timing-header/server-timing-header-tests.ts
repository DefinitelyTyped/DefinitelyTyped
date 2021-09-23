import express = require('express');
import serverTimingMiddleware = require('server-timing-header');

const port = 3000;
const app = express();
app.use(serverTimingMiddleware({ sendHeaders: process.env.NODE_ENV !== 'production' }));
app.get('/', (req, res, next) => {
    req.serverTiming.from('db');
    req.serverTiming.to('db');
    // You got time metric from the external source
    req.serverTiming.add('cache', 'Cache Read', 23.2);
    req.serverTiming.from('render');
    req.serverTiming.from('data');
    // fetching data from database
    req.serverTiming.to('data');
    req.serverTiming.to('render');
});
app.use((req, res, next) => {
    // If one measurement include other inside you may substract times
    req.serverTiming.addHook('substractDataTimeFromRenderTime', metrics => {
        const updated = { ...metrics };
        if (updated.data && updated.render) {
            const renderDuration = req.serverTiming.calculateDurationSmart(updated.render);
            const dataDuration = req.serverTiming.calculateDurationSmart(updated.data);
            updated.render.duration = Math.abs(renderDuration - dataDuration);
        }
        return updated;
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
