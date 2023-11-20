import * as convict from "convict";

declare var validators: {
    email: convict.Format;
    ipaddress: convict.Format;
    url: convict.Format;
};

export = validators;
