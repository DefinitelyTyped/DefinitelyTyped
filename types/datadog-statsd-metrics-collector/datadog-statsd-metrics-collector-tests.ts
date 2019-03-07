import datadog = require('node-dogstatsd');
import Collector = require('datadog-statsd-metrics-collector');

const client = new datadog.StatsD('localhost');

// constructors
let collector = new Collector(client);
collector = new Collector(client, 1000);

// interface
const key = 'key';
const timeValue = 99;
const sampleRate = 0.85;
const incrementBy = 7;
const decrementBy = 5;
const gaugeValue = 199;
const tags: string[] = ['tag1', 'tag2'];

collector.timing(key, timeValue);
collector.timing(key, timeValue, sampleRate);
collector.timing(key, timeValue, sampleRate, tags);

collector.increment(key);
collector.increment(key, sampleRate);
collector.increment(key, sampleRate, tags);

collector.incrementBy(key, incrementBy);
collector.incrementBy(key, incrementBy, tags);

collector.decrement(key);
collector.decrement(key, sampleRate);
collector.decrement(key, sampleRate, tags);

collector.decrementBy(key, decrementBy);
collector.decrementBy(key, decrementBy, tags);

collector.gauge(key, gaugeValue);
collector.gauge(key, gaugeValue, sampleRate);
collector.gauge(key, gaugeValue, sampleRate, tags);

collector.histogram(key, timeValue);
collector.histogram(key, timeValue, sampleRate);
collector.histogram(key, timeValue, sampleRate, tags);
