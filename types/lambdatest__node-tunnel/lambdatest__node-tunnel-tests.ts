import lambdaTunnel from '@lambdatest/node-tunnel';

// Creates an instance of Tunnel
const tunnelInstance = new lambdaTunnel();

// Replace <lambdatest-user> with your user and <lambdatest-accesskey> with your key.
const tunnelArguments = {
  user: '<lambdatest-user>',
  key: '<lambdatest-accesskey>'
};

// Async/Await Style
(async () => {
  const isTunnelStarted = await tunnelInstance.start(tunnelArguments);
  isTunnelStarted; // $ExpectType number

  const name = await tunnelInstance.getTunnelName();
  name; // $ExpectType string

  const running = tunnelInstance.isRunning();
  running; // $ExpectType boolean
})();
