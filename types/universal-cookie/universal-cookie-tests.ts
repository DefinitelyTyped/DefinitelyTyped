import Cookies from "universal-cookie";

const cookies = new Cookies();
new Cookies("My=Cookie");
new Cookies({});

cookies.set("my", "cookie");
cookies.set("object", { some: "value" });
cookies.set("with", "options", {
    path: "/"
});

cookies.get("my");
cookies.getAll();

cookies.remove("object");
cookies.remove("object", { path: "/" });

cookies.addChangeListener((name, value) => {});
cookies.removeChangeListener((name, value) => {});
