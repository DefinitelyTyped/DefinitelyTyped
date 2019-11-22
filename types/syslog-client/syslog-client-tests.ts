import * as syslog from 'syslog-client';

const syslog_client = syslog.createClient("127.0.0.1", {
  port: 514,
  transport: syslog.Transport.Tcp,
  rfc3164: false,
  appName: "testapp"
});
syslog_client.log("Test message", { severity: syslog.Severity.Warning }, (error: Error | null) => {
  syslog_client.close();
});
