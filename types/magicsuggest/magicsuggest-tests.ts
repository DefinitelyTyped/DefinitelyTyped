function basicTest() {
    $('#magicSuggest').magicSuggest();
}

function testWithConfigurationOptions() {
    $('#magicSuggest').magicSuggest({
        data: [
            { id: 1, name: "Buenos Aires" },
            { id: 2, name: "New York" },
            { id: 3, name: "Madrid" },
        ],
        maxDropHeight: 500,
        maxSelection: 2,
        expandOnFocus: true,
    });
}

function testSomeMethods() {
    var ms = $('#magicSuggest').magicSuggest();
    ms.addToSelection([{ id: 1, name: "Mexico" }]);
    console.info(ms.getSelection());
    ms.disable()
}