import * as Koji from 'koji-tools';

Koji.pageLoad();
Koji.getConfig();
Koji.on("test", () => {});
Koji.callEvent("test");
