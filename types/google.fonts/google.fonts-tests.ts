function test(list: google.fonts.WebfontList) {
    const f = list.items[0];

    const info = [
        f.category,
        f.family,
        f.kind,
        f.subsets.length,
        f.version
    ];

    const urls = f.variants.map(
        v => f.files[v]
    );
}
