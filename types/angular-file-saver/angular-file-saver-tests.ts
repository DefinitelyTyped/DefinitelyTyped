class ExampleCtrl {
    constructor(FileSaver: angular.FileSaver) {
        var data = new Blob(["Hey ho lets go!"], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(data, "text.txt");
    }
}

angular
    .module("fileSaverExample", ["ngFileSaver"])
    .controller("ExampleCtrl",  ExampleCtrl);
