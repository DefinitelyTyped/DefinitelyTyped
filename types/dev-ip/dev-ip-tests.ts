import devIp = require("dev-ip");

const ips = devIp();

function main() {
    if (typeof ips === "boolean") {
        return;
    }

    ips.map(ip => `ip: ${ip}`);
}

main();
