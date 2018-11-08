import * as teddy from "teddy";

teddy.compile("template.html");

const markup = teddy.render("template.html", {});

teddy.setTemplateRoot("~/");

teddy.setVerbosity(3);

teddy.cacheRenders(true);

teddy.setDefaultCaches(2);

teddy.setMaxCaches("template.html", 2);

teddy.setCacheWhitelist({ "template.html": 5 });

teddy.setCacheBlacklist(["template1.html", "template2.html"]);

teddy.setDefaultParams();

teddy.flushCache("template.html");
teddy.flushCache("template.html", {});

teddy.setMaxPasses(500);

teddy.compileAtEveryRender(true);

teddy.minify(false);
