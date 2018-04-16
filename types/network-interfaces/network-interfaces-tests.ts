/// <reference types="node" />
import * as ni from "network-interfaces"
import * as os from "os"

let options = {
    internal: false, // boolean: only acknowledge internal or external addresses (undefined: both)
    ipVersion: 4     // integer (4 or 6): only acknowledge addresses of this IP address family (undefined: both)
};

function test() {
    try {
        const ifcName = os.platform() != "win32" ? "eth0" : "Ethernet"
        let ip = ni.toIp(ifcName, options)
        let ipList = ni.toIps(ifcName, options)
        let ifc = ni.getInterface(options)
        let ifcList = ni.getInterfaces(ifcName)
        ifc = ni.fromIp(ip, options)
    }
    catch(e) {
    }
}

test()

