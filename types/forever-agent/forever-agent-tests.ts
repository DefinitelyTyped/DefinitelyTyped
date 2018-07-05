import ForeverAgent = require("forever-agent");

const agent = new ForeverAgent();
const agentSsl = new ForeverAgent.SSL();

const agentWithBaseOptions = new ForeverAgent({
    keepAlive: true,
    keepAliveMsecs: 100,
    maxFreeSockets: 500,
    maxSockets: 100,
});

const agentSslWithBaseOptions = new ForeverAgent({
    keepAlive: true,
    keepAliveMsecs: 100,
    maxFreeSockets: 500,
    maxSockets: 100,
});

const agentWithAllOptions = new ForeverAgent({
    keepAlive: true,
    keepAliveMsecs: 100,
    maxFreeSockets: 500,
    maxSockets: 100,
    minSockets: 500,
});

const agentSslWithAllOptions = new ForeverAgent({
    keepAlive: true,
    keepAliveMsecs: 100,
    maxFreeSockets: 500,
    maxSockets: 100,
    minSockets: 500,
});

const agentDefaultMinSockets = ForeverAgent.defaultMinSockets;
const agentSslDefaultMinSockets = ForeverAgent.SSL.defaultMinSockets;
