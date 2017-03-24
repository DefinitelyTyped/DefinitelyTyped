
import nunjucks = require("nunjucks");


nunjucks.configure({ autoescape: false });

let rendered = nunjucks.render("./noexists.html");

let ctx = { items: ["Hello", "this", "is", "for", "testing"] };
let src = "{% for item in items %}{{item}}{% endfor %}";

rendered = nunjucks.renderString(src, ctx);

let compiled = nunjucks.compile(src);
rendered = compiled.render(ctx);

rendered = nunjucks.precompileString(src, {
    name: "TestyWesty"
});

let template = new nunjucks.Template(src);
rendered = template.render(ctx);

let env = nunjucks.configure({ autoescape: false });
rendered = env.renderString(src, ctx);

env.addExtension("SpawnGlitter", {
    tags: ["glitter", "star wars", "Age of Empires"],
    parse(parser, nodes, lexer) {
        return "The parser api is complicated";
    }
});

nunjucks.installJinjaCompat();

class MyLoader extends nunjucks.Loader implements nunjucks.ILoader {
    getSource(name: string): nunjucks.LoaderSource {
        return {
            src: "Amadala",
            path: "The Right One",
            noCache: false
        };
    }
}

env = new nunjucks.Environment(new MyLoader());
