import * as J from 'jenkins';

const jenkins = J({ baseUrl: 'http://user:pass@localhost:8080', crumbIssuer: true });

jenkins.info(function(err, data) {
  if (err) throw err;

  console.log('info', data);
});

jenkins.build.get('example', 1, function(err, data) {
  if (err) throw err;

  console.log('build', data);
});

jenkins.build.log('example', 1, function(err, data) {
  if (err) throw err;

  console.log('log', data);
});

var log = jenkins.build.logStream('example', 1);

log.on('data', function(text: string) {
  process.stdout.write(text);
});

log.on('error', function(err: Error) {
  console.log('error', err);
});

log.on('end', function() {
  console.log('end');
});

jenkins.build.stop('example', 1, function(err) {
  if (err) throw err;
});

jenkins.job.build('example', function(err, data) {
  if (err) throw err;

  console.log('queue item number', data);
});

jenkins.job.build({ name: 'example', parameters: { name: 'value' } }, function(err) {
  if (err) throw err;
});

jenkins.job.config('example', function(err, data) {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.job.config('example', '<xml></xml>', function(err) {
  if (err) throw err;
});

jenkins.job.copy('fromJob', 'example', function(err) {
  if (err) throw err;
});

jenkins.job.create('example', '<xml></xml>', function(err) {
  if (err) throw err;
});

jenkins.job.destroy('example', function(err) {
  if (err) throw err;
});

jenkins.job.disable('example', function(err) {
  if (err) throw err;
});

jenkins.job.enable('example', function(err) {
  if (err) throw err;
});

jenkins.job.exists('example', function(err, exists) {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.job.get('example', function(err, data) {
  if (err) throw err;

  console.log('job', data);
});

jenkins.job.list(function(err, data) {
  if (err) throw err;

  console.log('jobs', data);
});

jenkins.node.config('example', function(err, data) {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.node.create('slave', function(err) {
  if (err) throw err;
});

jenkins.node.destroy('slave', function(err) {
  if (err) throw err;
});

jenkins.node.disconnect('slave', 'no longer used', function(err) {
  if (err) throw err;
});

jenkins.node.disable('slave', 'network failure', function(err) {
  if (err) throw err;
});

jenkins.node.enable('slave', function(err) {
  if (err) throw err;
});

jenkins.node.exists('slave', function(err, exists) {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.node.get('slave', function(err, data) {
  if (err) throw err;

  console.log('node', data);
});

jenkins.node.list(function(err, data) {
  if (err) throw err;

  console.log('nodes', data);
});

jenkins.queue.list(function(err, data) {
  if (err) throw err;

  console.log('queues', data);
});

jenkins.queue.item(130, function(err, data) {
  if (err) throw err;

  console.log('item', data);
});

jenkins.queue.cancel(23, function(err) {
  if (err) throw err;
});

jenkins.view.config('example', function(err, data) {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.view.config('example', '<xml></xml>', function(err) {
  if (err) throw err;
});

jenkins.view.create('example', 'list', function(err) {
  if (err) throw err;
});

jenkins.view.destroy('example', function(err) {
  if (err) throw err;
});

jenkins.view.exists('example', function(err, exists) {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.view.get('example', function(err, data) {
  if (err) throw err;

  console.log('view', data);
});

jenkins.view.list(function(err, data) {
  if (err) throw err;

  console.log('views', data);
});

jenkins.view.add('example', 'jobExample', function(err) {
  if (err) throw err;
});

jenkins.view.remove('example', 'jobExample', function(err) {
  if (err) throw err;
});

const jenkins2 = J({ baseUrl: 'http://user:pass@localhost:8080', crumbIssuer: true, promisify: true });
jenkins2.info().then(info => console.log(info));
jenkins2.job.exists('example').then(exists => { var b: boolean = exists; });
