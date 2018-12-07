import PDK = require("pinterest-sdk");

// Examples from https://github.com/pinterest/pinterest-api-demo

const PIN_FIELDS = "id,name,image[small]";
const PIN_SCOPE =  "read_public, write_public";
const CALLBACK = (...args: any[]) => {};
const DATA = { board: "test", note: "test", link: "tets", image_url: "test" };

// Auth
PDK.login({ scope : PIN_SCOPE }, CALLBACK);
PDK.logout();
PDK.getSession();

// Requests
PDK.request("/pins/", "POST", DATA, CALLBACK);
PDK.me("boards", { fields: PIN_FIELDS }, CALLBACK);
