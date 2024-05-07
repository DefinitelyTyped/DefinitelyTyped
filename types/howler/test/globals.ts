new globalThis.Howl({ src: "sound.mp3" });
new this.Howl({ src: "sound.mp3" });
new window.Howl({ src: "sound.mp3" });
new Howl({ src: "sound.mp3" });

globalThis.Howler.volume(0.8);
this.Howler.volume(0.8);
window.Howler.volume(0.8);
Howler.volume(0.8);

let a: Howl = new globalThis.Howl({ src: "sound.mp3" });
let b: HowlerGlobal = globalThis.Howler;
