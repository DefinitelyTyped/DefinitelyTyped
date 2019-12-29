import express = require("express");
import VitalSigns = require("vitalsigns");

var vitals = new VitalSigns();

vitals.monitor('cpu');
vitals.monitor('mem', { units: 'MB' });
vitals.monitor('tick');

vitals.unhealthyWhen('cpu', 'usage').equals(100);
vitals.unhealthyWhen('tick', 'maxMs').greaterThan(500);

vitals.monitor({
    connections: () => new Object()
}, { name: 'game' });

var vitals = new VitalSigns({
    autoCheck: 5000,
    httpHealthy: 200,
    httpUnhealthy: 503
});

vitals.monitor('cpu', { name: 'foo' });
vitals.unhealthyWhen('foo', 'bar').not.greaterThan(5);

var app = express();
app.get('/health', vitals.express);
