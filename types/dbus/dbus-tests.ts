import * as DBus from "dbus";

const dbus = DBus.getBus("system");

dbus.getInterface("org.bluez", "/org/bluez/hci0", "org.bluez.Media1", (err, iface) => {});

dbus.getInterface("org.bluez", "/org/bluez/hci0", "org.bluez.Adapter1", (err, iface) => {
	if (!err) {
		iface.setProperty("Powered", true, err => {});
	}
});

dbus.disconnect();

const agentPath = "/test/my/agent";
const agentService = DBus.registerService("system", agentPath.split("/").slice(1).join("."));
const agentObj = agentService.createObject(agentPath);
const agentIface = agentObj.createInterface("org.bluez.Agent1");
agentIface.addMethod("Release", {in: "", out: ""}, () => {});
