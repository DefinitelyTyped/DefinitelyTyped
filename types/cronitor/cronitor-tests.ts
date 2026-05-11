import cronitor = require("cronitor");

const cron = cronitor("api_key", {
    apiVersion: "2020-10-01",
    environment: "env",
    timeout: 5000,
});

cron.readConfig("./cronitor.yaml");

cron.validateConfig();

cron.applyConfig();

cron.generateConfig();

cron.schedule("JobName", "*/5 * * * *", () => {});

const asyncWorker = cron.wrap("background-worker", async function() {
    // do some async work
});

asyncWorker();

const event = new cron.Event("monitor-key");

const monitor = new cron.Monitor("heartbeat-monitor");

monitor.ping();

monitor.ping({
    state: "run",
    env: "",
    message: "",
    metrics: {
        duration: 100,
        count: 4500,
        error_count: 10,
    },
});

monitor.pause(24);
monitor.unpause();
monitor.ok();
monitor.delete();

cron.Monitor.put({
    type: "job",
    key: "send-customer-invoices",
    schedule: "0 0 * * *",
    assertions: [
        "metric.duration < 5 min",
    ],
    notify: ["devops-alerts-slack"],
});

cron.Monitor.put({
    type: "check",
    key: "Cronitor Homepage",
    schedule: "every 45 seconds",
    request: {
        url: "https://cronitor.io",
    },
    assertions: [
        "response.code = 200",
        "response.time < 600ms",
    ],
});

const state = cron.Monitor.State;
