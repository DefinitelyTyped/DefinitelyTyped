import packlist = require("npm-packlist");
import Arborist = require("@npmcli/arborist");

(async () => {
    const arborist = new Arborist({ path: "foo" });
    const tree = await arborist.loadActual();
    const files = await packlist(tree);
    let result: string[] = [];
    result = await packlist(tree);
    result = await packlist(tree, {});
    result = await packlist(tree, { path: "foo" });
    packlist(tree, undefined, r => (result = r));
    packlist(tree, { path: "foo" }, r => (result = r));
})();
