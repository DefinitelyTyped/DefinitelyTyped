let b: boolean = Engine.backward();
b = Engine.forward();
b = Engine.go(123);
b = Engine.goTo(123);
b = Engine.isIdle();
b = Engine.isPlaying();
b = Engine.isRendering();
const n: number = Engine.lastPlay;
let e: HTMLElement = Engine.play("passage");
e = Engine.play("passage", true);
Engine.restart(); // $ExpectedType void
e = Engine.show();
const st: "idle" | "playing" | "rendering" = Engine.state;

export {};
