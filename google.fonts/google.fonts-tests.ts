function test(list: google.fonts.WebfontList) {

    var f = list.items[0];

    var info = [
        f.category,
        f.family,
        f.kind,
        f.subsets.length,
        f.version
    ];

    var urls = f.variants.map(
        v => f.files[v]
    );
}
