import convict = require("convict");

declare var validators: {
    email: convict.Format;
    ipaddress: convict.Format;
    url: convict.Format;
};

export = validators;
