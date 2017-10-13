import * as base64 from "sdk/base64";
base64.decode("jesus", "abc");
base64.decode(base64.encode("easy"));

import * as panel from "sdk/panel";
let p = panel.Panel({width: 10, height: 20, onError: (e) => e.message});
p.port.on("damn", () => console.log("damn"));
p.on("show", () => console.log("panel shown"));
p.destroy();

import * as passwords from "sdk/passwords";
passwords.search({onComplete: (credentials) => credentials.forEach((cred) => passwords.remove(cred)),
                  username: "mhamdy"});
passwords.store({username: "mhamdy", password: "secret", onError: (error) => console.error(error.toString())});

import * as pageMod from "sdk/page-mod";
import * as privateBrowsing from "sdk/private-browsing";
pageMod.PageMod({include: "http://example.com", onAttach: (worker) => privateBrowsing.isPrivate(worker)});

import * as requests from "sdk/request";
requests.Request<{value: string}>({url: "http://example.com", onComplete: (response) => console.log(response.json["value"])}).get();

import * as selection from "sdk/selection";
selection.on("select", () => {
  console.log(selection.text);
  selection.html == "<h1>Hello There!</h1>";
  if (selection.isContiguous) {
    console.log("selection is not not contiguous");
  }
});

import * as self from "sdk/self";
p.contentScriptFile = self.data.url("./hello.js");
p.show();

import * as prefs from "sdk/simple-prefs";
type prefType = {pref1: string};
(prefs.prefs as prefType)["pref1"] = "value";
prefs.on("pref1", () => console.log("pref1 changed"));
prefs.removeListener("pref1", new Function());

import * as storage from "sdk/simple-storage";
storage.storage.value = 10;
storage.storage.x = "hello";
delete storage.storage.value;
storage.on("OverQuota", () => {
  if (storage.quotaUsage > 1) {
    console.log("you no longer have shelves to store anything. Successful!");
  }
});

import * as system from "sdk/system";
console.log(system.env.PATH);
system.env.PATH = "/path/to/my/virus";

import * as tabs from "sdk/tabs";
tabs.open({url: "http://example.com", onOpen: (tab) => tab.close()});
tabs.open("http://example.com");
console.info(tabs.length);

import * as timers from "sdk/timers";
timers.clearTimeout(timers.setInterval(() => console.log("hello"), 100));
timers.clearInterval(timers.setTimeout(() => console.log("hello again"), 100));

import * as action from "sdk/ui/button/action";
let button = action.ActionButton({id: "my button", label: "my button", icon: "./myicon.png"});
button.on("click", (state) => {
  if (state.label == "destroy") {
    button.destroy();
  }
});

import * as toggle from "sdk/ui/button/toggle";
let toggleButton = toggle.ToggleButton({id: "my button", label: "my button", icon: "./hello.png",
  onChange: (state) => {
    if (state.disabled) {
      toggleButton.state("window", null);
    }
  }});


import * as frame from "sdk/ui/frame";
let frm = frame.Frame({url: "./frame.html", onMessage: (message) => {
  frm.postMessage("hello", message.origin);
}});

import * as toolbar from "sdk/ui/toolbar";
let tlbr = toolbar.Toolbar({title: "my toolbar", items: [button, toggleButton, frm], onShow: (toolbar) => {
  toolbar.on("detach", () => console.info("toolbar detached"));
}});

import * as sidebar from "sdk/ui/sidebar";
let sdbr = sidebar.Sidebar({url: "./sidebar.html", title: "my sidebar"});
sdbr.on("attach", (worker) => {
  worker.port.emit("hello sidebar");
});

import * as urls from "sdk/url";
console.log(urls.toFilename(urls.URL("http://example.com")));
console.log(urls.DataURL("file:///my/path/file.txt").mimeType);

import * as windows from "sdk/windows";
import { stringify } from "sdk/querystring";
for (let window of windows.browserWindows) {
  console.info(window.title);
}
console.info(windows.browserWindows.length);
windows.browserWindows.open("http://example.com");
