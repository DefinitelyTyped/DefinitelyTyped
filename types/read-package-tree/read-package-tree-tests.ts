import * as readPackageTree from "read-package-tree";

readPackageTree("../", (error, data) => {
    // done
});

readPackageTree("../", (node, kidName) => {
    // filter
}, (error, data) => {
    // done
});
