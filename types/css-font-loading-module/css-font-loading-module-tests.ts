const font = new FontFace("Example", "url(...)", {
    style: "normal",
    weight: "400"
});
font.load();
font.loaded.then((fontFace: FontFace) => {
    fontFace.status;
    fontFace.family;
    fontFace.variationSettings;
    fontFace.display;
}, (fontFace: FontFace) => {});

const workerContext: WorkerGlobalScope = undefined;

const contexts = [document, workerContext];
contexts.forEach(context => {
    const a: boolean = context.fonts.check("12px Example");
    const b: boolean = context.fonts.check("12px Example", "ß");
    const c: Promise<FontFace[]> = context.fonts.load("12px MyFont", "ß").then();
    const d: Promise<typeof context.fonts> = context.fonts.ready.then();
    const e: FontFaceSetLoadEvent = new FontFaceSetLoadEvent('loading', {fontfaces: []});
    context.fonts.addEventListener('loading', (evt) => {
        evt.fontfaces;
    });
    context.fonts.onloadingdone = (evt) => {
        (evt as FontFaceSetLoadEvent).fontfaces;
    };
    context.fonts.dispatchEvent(e);
});

const ffs: FontFaceSet = document.fonts;
ffs.addEventListener('loading', (e) => e.fontfaces);
