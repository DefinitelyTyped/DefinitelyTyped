import * as localDynamo from 'local-dynamo';

// From launch_test.js
localDynamo.launch({
  port: 8676,
  heap: '512m',
  stdio: 'pipe'
});
localDynamo.launch({
  port: 8676,
  sharedDb: true,
  stdio: 'pipe'
});
localDynamo.launch({
  port: 8676,
  cors: 'medium.com',
  stdio: 'pipe'
});
