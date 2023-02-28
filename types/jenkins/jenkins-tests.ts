import J = require('jenkins');

const jenkins = J({ baseUrl: 'http://user:pass@localhost:8080', crumbIssuer: true });

jenkins.info((err, data) => {
  if (err) throw err;

  console.log('info', data);
});

jenkins.build.get('example', 1, (err, data) => {
  if (err) throw err;

  console.log('build', data);
});

jenkins.build.log('example', 1, (err, data) => {
  if (err) throw err;

  console.log('log', data);
});

const log = jenkins.build.logStream('example', 1);

log.on('data', (text: string) => {
  process.stdout.write(text);
});

log.on('error', (err: Error) => {
  console.log('error', err);
});

log.on('end', () => {
  console.log('end');
});

const log2 = jenkins.build.logStream('example', 1, { type: 'html', delay: 2 * 1000 });

log2.on('data', (text: string) => {
    process.stdout.write(text);
});

log2.on('error', (err: Error) => {
    console.log('error', err);
});

log2.on('end', () => {
    console.log('end');
});

jenkins.build.stop('example', 1, (err) => {
  if (err) throw err;
});

jenkins.build.term('example', 1, (err) => {
  if (err) throw err;
});

jenkins.job.build('example', (err, data) => {
  if (err) throw err;

  console.log('queue item number', data);
});

jenkins.job.build({ name: 'example', parameters: { name: 'value' } }, (err) => {
  if (err) throw err;
});

jenkins.job.config('example', (err, data) => {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.job.config('example', '<xml></xml>', (err) => {
  if (err) throw err;
});

jenkins.job.copy('fromJob', 'example', (err) => {
  if (err) throw err;
});

jenkins.job.create('example', '<xml></xml>', (err) => {
  if (err) throw err;
});

jenkins.job.destroy('example', (err) => {
  if (err) throw err;
});

jenkins.job.disable('example', (err) => {
  if (err) throw err;
});

jenkins.job.enable('example', (err) => {
  if (err) throw err;
});

jenkins.job.exists('example', (err, exists) => {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.job.get('example', (err, data) => {
  if (err) throw err;

  console.log('job', data);
});

jenkins.job.list((err, data) => {
  if (err) throw err;

  console.log('jobs', data);
});

jenkins.node.config('example', (err, data) => {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.node.create('slave', (err) => {
  if (err) throw err;
});

jenkins.node.destroy('slave', (err) => {
  if (err) throw err;
});

jenkins.node.disconnect('slave', 'no longer used', (err) => {
  if (err) throw err;
});

jenkins.node.disable('slave', 'network failure', (err) => {
  if (err) throw err;
});

jenkins.node.enable('slave', (err) => {
  if (err) throw err;
});

jenkins.node.exists('slave', (err, exists) => {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.node.get('slave', (err, data) => {
  if (err) throw err;

  console.log('node', data);
});

jenkins.node.list((err, data) => {
  if (err) throw err;

  console.log('nodes', data);
});

jenkins.queue.list((err, data) => {
  if (err) throw err;

  console.log('queues', data);
});

jenkins.queue.item(130, (err, data) => {
  if (err) throw err;

  console.log('item', data);
});

jenkins.queue.cancel(23, (err) => {
  if (err) throw err;
});

jenkins.view.config('example', (err, data) => {
  if (err) throw err;

  console.log('xml', data);
});

jenkins.view.config('example', '<xml></xml>', (err) => {
  if (err) throw err;
});

jenkins.view.create('example', 'list', (err) => {
  if (err) throw err;
});

jenkins.view.destroy('example', (err) => {
  if (err) throw err;
});

jenkins.view.exists('example', (err, exists) => {
  if (err) throw err;

  console.log('exists', exists);
});

jenkins.view.get('example', (err, data) => {
  if (err) throw err;

  console.log('view', data);
});

jenkins.view.list((err, data) => {
  if (err) throw err;

  console.log('views', data);
});

jenkins.view.add('example', 'jobExample', (err) => {
  if (err) throw err;
});

jenkins.view.remove('example', 'jobExample', (err) => {
  if (err) throw err;
});

const jenkins2 = J({ baseUrl: 'http://user:pass@localhost:8080', crumbIssuer: true, promisify: true });
jenkins2.info().then(info => console.log(info));
jenkins2.job.exists('example').then(exists => { const b: boolean = exists; });
jenkins2.job.list().then(jobs => console.log(jobs));
jenkins2.job.list('parent').then(jobs => console.log(jobs));
