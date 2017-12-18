import nodeCleanup = require('node-cleanup');

function cleanupHandler(exitCode: number | null, signal: string | null): boolean | undefined {
  return true;
}
const stderrMessages = { ctrl_C: 'ctrl_c', uncaughtException: 'UncaughtException' };

nodeCleanup();
nodeCleanup(cleanupHandler);
nodeCleanup(cleanupHandler, undefined);
nodeCleanup(cleanupHandler, stderrMessages);
nodeCleanup(undefined, stderrMessages);
nodeCleanup.uninstall();
