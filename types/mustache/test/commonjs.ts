import mustache = require("mustache");

mustache.tags = ['<%', '%>'];
mustache.render("this is a <%test%>", { test: "" });
