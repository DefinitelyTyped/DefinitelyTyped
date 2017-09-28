const font = new FontFace("Example", "url(...)", {
    style: "normal",
    weight: "400"
});
font.load();
font.loaded.then((fontFace: FontFace) => {
    fontFace.status;
    fontFace.family;
}, (fontFace: FontFace) => {});

const a: boolean = document.fonts.check("12px Example");
const b: boolean = document.fonts.check("12px Example", "ß");
const c: Promise<FontFace[]> = document.fonts.load("12px MyFont", "ß").then();
const d: Promise<typeof document.fonts> = document.fonts.ready.then();
