import * as datadog from 'node-dogstatsd';

function test_statsd_client() {
  // can create client with defaults
  let client = new datadog.StatsD('localhost');
  let options: datadog.StatsDOptions = { global_tags: ['environment:definitely_typed']};

  // can create client with all params
  client = new datadog.StatsD('localhost', 8125, null, options);

  let key: string = 'key';
  let timeValue: number = 99;
  let sampleRate: number = 0.85;
  let incrementBy: number = 7;
  let decrementBy: number = 5;
  let gaugeValue: number = 199;
  let tags: string[] = ['tag1', 'tag2'];

  client.timing(key, timeValue);
  client.timing(key, timeValue, sampleRate);
  client.timing(key, timeValue, sampleRate, tags);

  client.increment(key);
  client.increment(key, sampleRate);
  client.increment(key, sampleRate, tags);

  client.incrementBy(key, incrementBy);
  client.incrementBy(key, incrementBy, tags);

  client.decrement(key);
  client.decrement(key, sampleRate);
  client.decrement(key, sampleRate, tags);

  client.decrementBy(key, decrementBy);
  client.decrementBy(key, decrementBy, tags);

  client.gauge(key, gaugeValue);
  client.gauge(key, gaugeValue, sampleRate);
  client.gauge(key, gaugeValue, sampleRate, tags);

  client.histogram(key, timeValue);
  client.histogram(key, timeValue, sampleRate);
  client.histogram(key, timeValue, sampleRate, tags);

  client.close();
}
