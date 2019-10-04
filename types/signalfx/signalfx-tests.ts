import * as signalfx from 'signalfx';

const sgnlfx = new signalfx.Ingest('1');
sgnlfx.send({});
