import * as Handlebars from "handlebars";
import helpers from "handlebars-helpers";

const handlebars = Handlebars.create();

helpers();
helpers("helper");
helpers(["helper"]);
helpers({ handlebars });
helpers("helper", { handlebars });
helpers(["helper"], { handlebars });
