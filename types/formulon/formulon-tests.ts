import { ast, extract, parse } from "formulon";

parse("IF(TRUE, \"True String\", \"False String\")");

parse("IF(TRUE)");

parse("IF(Variable__c, \"True String\", \"False String\")", {
    Variable__c: { type: "literal", dataType: "checkbox", value: true },
});

extract("Some Formula Text");

ast("IF(Variable__c, \"True String\", \"False String\")");
