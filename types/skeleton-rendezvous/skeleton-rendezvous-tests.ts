import SRH = require("skeleton-rendezvous");

new SRH();
new SRH({});

const siteList = ["foo", "bar", "site", "bar"];
const srh = new SRH({
    sites: siteList,
    targetClusterSize: 16,
});

srh.addSites(["bar", "123"]);

const sites: string[] = srh.getSites();

const result: string = srh.findSite("somekey");

srh.removeSites(["bar", "hello"]);
srh.removeSites("site");

srh.setSites(["hello", "world"]);

const hash: string = srh.hash("somekey");
