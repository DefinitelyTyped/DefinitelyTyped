

import inflection = require("inflection");

inflection.indexOf(["hi", "there"], "guys");

inflection.pluralize("person");
inflection.pluralize("person", "guys");

inflection.singularize("Hats");
inflection.singularize("guys", "person");

inflection.inflect("Hats", 1);
inflection.inflect("guys", 1, "person");

inflection.camelize("message_properties");
inflection.camelize("message_properties", true);

inflection.underscore("MP");
inflection.underscore("MP", true);

inflection.humanize("message_properties");
inflection.humanize("message_properties", true);

inflection.capitalize("message_properties");

inflection.dasherize("message_properties");

inflection.titleize("message_properties");

inflection.demodulize("Message::Bus::Properties");

inflection.tableize("MessageBusProperty");

inflection.classify("message_bus_properties");

inflection.foreign_key("MessageBusProperty");
inflection.foreign_key("MessageBusProperty", true);

inflection.ordinalize("the 1 pitch");

inflection.transform("all job", [ "pluralize", "capitalize", "dasherize" ]);
