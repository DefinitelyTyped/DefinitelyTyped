import detective = require("detective");

const opts: detective.Options = {
    parse: {
        sourceType: "module",
        allowImportExportEverywhere: true
    }
};

detective("content", opts).filter((x) => x && x.length > 0);

const detectiveFunc: detective.Detective = detective;

detectiveFunc.find("str").strings.forEach((dep) => {
    const b: boolean = dep[0] === '.';
});
