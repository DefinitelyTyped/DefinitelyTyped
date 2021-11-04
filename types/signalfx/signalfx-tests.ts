import * as signalfx from 'signalfx';

const sgnlfx = new signalfx.Ingest('1');
sgnlfx.send({
  gauges: [{
    metric: "metric",
    value: 1,
    dimensions: {}
  }]
});
