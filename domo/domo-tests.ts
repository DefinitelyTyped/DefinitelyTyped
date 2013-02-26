/// <reference path="domo.d.ts" />

function opacity(pct) {
    return { opacity: String(pct / 100), filter: "alpha(opacity=" + pct + ")" }
}

HTML({ lang: "en" },
    HEAD(
        TITLE("Welcome to d?mo"),
        STYLE({ type: "text/css" },
            STYLE.on("body", { textAlign: "center", fontSize: 50 }),
            STYLE.on("h1", opacity(50), { background: "#000", color: "#fff" })
        )
    ),
    BODY(H1("Welcome to d?mo"))
);

var withDomo = A({ href: "http://domo-js.com" }, "Learn about d?mo");

var withoutDomo = document.createElement("a");
withoutDomo.setAttribute("href", "http://domo-js.com");
withoutDomo.appendChild(document.createTextNode("Learn about d?mo"));

var styleSheet =
    STYLE({ type: "text/css" },
        STYLE.on("a", { color: "red" }),
        STYLE.on("*", { margin: 0, padding: 0 })
    );

var blue = "#3B5998";
var gray = "#3B3B3B";
var defaultRadius = 10;

function roundedCorners(radius) {
    return {
        borderRadius: radius,
        WebkitBorderRadius: radius,
        MozBorderRadius: radius
    }
};

var styleSheet2 =
    STYLE({ type: "text/css" },
        STYLE.on("h2", { color: gray }, roundedCorners(defaultRadius)),
        STYLE.on("h1", { color: blue }, roundedCorners(defaultRadius * 2))
    );

var nestedStyles =
    STYLE({ type: "text/css" },
        STYLE.on("a", { color: "red" },
            STYLE.on("img", { borderWidth: 0 })
        )
    );

var normalStyles =
    STYLE({ type: "text/css" },
        STYLE.on("a", { color: "red" }),
        STYLE.on("a img", { borderWidth: 0 })
    );

var domo = domo.global(false);

domo.HTML(
  domo.HEAD(domo.TITLE("Hello, world.")),
  domo.BODY("Hello, world.")
);